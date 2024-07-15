export const createMetaObjectDefinationWishlistQuery = () => (`#graphql
mutation {
    metaobjectDefinitionCreate(definition: {
        type: "$app:wishlist",
        access: {
            admin: MERCHANT_READ,
            storefront: PUBLIC_READ
        },
        fieldDefinitions: [
            { key: "customer_id", name: "Customer", type: "single_line_text_field" },
            { key: "product_id", name: "Product", type: "single_line_text_field" }
        ]
    }) {
        metaobjectDefinition {
            id
            type
            fieldDefinitions {
                key
                name
                type {
                    name
                }
            }
        }
    }
}`)

export const addWishlistQuery = (customer_id, product_id) => (`#graphql
mutation {
  metaobjectCreate(metaobject: {
    type: "$app:wishlist",
    handle: "${createHandle(customer_id, product_id)}"
    fields: [
      {
        key: "customer_id",
        value: "${customer_id}"
      },
      {
        key: "product_id",
        value: "${product_id}"
      }
    ]
  }) {
    metaobject {
      id
      type
      customer_id: field(key: "customer_id") { value }
      product_id: field(key: "product_id") { value }
    }
  }
}`)

export const getUniqueWishlistItemQuery = (customer_id, product_id) => (`#graphql
query {
  metaobjects(type: "$app:wishlist", first: 10, query:"display_name:'${createDisplayName(customer_id, product_id)}'") {
    nodes {
      id
      customer_id: field(key: "customer_id") { value }
      product_id: field(key: "product_id") { value }
    }
  }
}`)

export const getWishlistItemsForClientQuery = (customer_id) => (`#graphql
query {
  metaobjects(type: "$app:wishlist", first: 10, query:"display_name:'8 8${customer_id}8 '") {
    nodes {
      id
      customer_id: field(key: "customer_id") { value }
      product_id: field(key: "product_id") { value }
    }
  }
}`)

export const deleteWishlistItemQuery = () => (`#graphql
mutation metaobjectDelete($id: ID!) {
  metaobjectDelete(id: $id) {
    deletedId
    userErrors {
      field
      message
    }
  }
}`)

export const productsByHandlesQuery = (handle_array) => {
  let res = `#graphql
  query getProductIdFromHandle(`
  for(let i = 0; i < handle_array.length; i++){
    res += '$handle'+i+': String!'
    if(i == handle_array.length - 1){
      res += ', '
    }
  }
  res += ') { '
  for(let i = 0; i < handle_array.length; i++){
    res += 'handle'+i+': productByHandle(handle: $handle'+i+') { '
      res += 'title '
      res += 'featuredImage{ '
        res += 'url '
      res += '} '
      res += 'variants(first: 1){ '
          res += 'nodes{ '
            res += 'price '
            res += 'id '
          res += '} '
        res += '} '
        res += 'onlineStoreUrl '
        res += 'handle '
      res += '}'
  }
  res += '}'

  let queryvariable = {}
  for(let i = 0; i < handle_array.length; i++){
    queryvariable["handle"+i] = handle_array[i]
  }
  return {queryString:res, queryvariable}
}

export const createHandle = (customer_id, product_id) => (`8-8${customer_id}8-8${product_id.replaceAll('-','')}8-8`)
const createDisplayName = (customer_id, product_id) => createHandle(customer_id, product_id).replaceAll('-',' ')

/************************ New Implementation **********************/
const getAppInstallationId = async (admin) => {
  
  let res = await admin.graphql(
    `query {
      currentAppInstallation {
        id
      }
    }`)
  res = (await res.json()).data.currentAppInstallation.id
  return res
}

const getWishlist = async (admin) => {
  let res = await admin.graphql(
    `query {
      currentAppInstallation {
        metafield(namespace:"myWishlistApp", key: "wishlist"){
          value
        }
      }
    }`)
  res = (await res.json()).data.currentAppInstallation.metafield
  return res ? res.value : null
}

const updateWishlist = async (admin, data) => {
  const updateWishlistRes = await admin.graphql(
    `#graphql
    mutation CreateAppDataMetafield($metafieldsSetInput: [MetafieldsSetInput!]!) {
      metafieldsSet(metafields: $metafieldsSetInput) {
        metafields {
          id
          namespace
          key
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
        "metafieldsSetInput": [
          {
            "namespace": "myWishlistApp",
            "key": "wishlist",
            "type": "json",
            "value": JSON.stringify(data),
            "ownerId": await getAppInstallationId(admin)
          }
        ]
      }      
    }
  )
  const dataMetaObjectDefinationWishlist = await updateWishlistRes.json()
  return dataMetaObjectDefinationWishlist
}

const getProductsByIds = async (admin, ids) => {
  let res = await admin.graphql(
    `query {
      products(first: 200, query:"id:${ids.join(' OR id:')}") {
        edges {
          node {
            id
            title
            handle
            featuredImage{
              url
            }
            variants(first: 20){
              nodes{
                availableForSale
                id
                price
              }
            }
          }
        }
      }
    }`)

  res = (await res.json()).data.products.edges
  const wishlist = JSON.parse(await getWishlist(admin))

  for (let i of res){
    i.node.id = i.node.id.replace("gid://shopify/Product/", "")
  }

  let result = {}
  result.wishlist = res.reduce((acc, obj) => {
    const { id, ...rest } = obj.node;
    acc[id] = { id, ...rest };
    return acc;
  }, {})

  result.allProducts = wishlist.products
  return result
}

export const getWishlistByCustomerId = async (admin, customerId) => {
  const wishlist = JSON.parse(await getWishlist(admin))
  if(wishlist != null){
    return wishlist.wishlists[customerId] ? getProductsByIds(admin, wishlist.wishlists[customerId]) : null
  }
  return null
}

export const addItemInWishlist = async (admin, customerId, productId) => {
  let wishlist = JSON.parse(await getWishlist(admin))
  if(wishlist){
    if(wishlist.wishlists[customerId]){
      if(!wishlist.wishlists[customerId].some(str => str === productId)){
        wishlist.wishlists[customerId].push(productId)
        wishlist.products[productId] = wishlist.products[productId] ? (wishlist.products[productId]) + 1 : 1
      }else{
        console.log(`already added item (${productId})`)
      }
    }else{
      wishlist.wishlists[customerId] = [productId]
      wishlist.products[productId] = wishlist.products[productId] ? (wishlist.products[productId]) + 1 : 1
    }
  }else{
    wishlist = {
      "wishlists":{
        [customerId]:[
          productId
        ]
      },
      "products":{
        [productId]:1
      }
    }
  }
  await updateWishlist(admin, wishlist)
  return await getProductsByIds(admin, wishlist.wishlists[customerId])
}
export const increaseItemCount = async (admin, productId) => {
  let wishlist = JSON.parse(await getWishlist(admin))
  if(wishlist){
      wishlist.products[productId] = wishlist.products[productId] ? (wishlist.products[productId]) + 1 : 1
  }else{
    wishlist = {
      "wishlists":{},
      "products":{
        [productId]:1
      }
    }
  }
  await updateWishlist(admin, wishlist)
  return true
}
export const removeItemFromWishlist = async (admin, customerId, productId) => {
  let wishlist = JSON.parse(await getWishlist(admin))
  if(wishlist){
    if(wishlist.wishlists[customerId]){
      if(wishlist.wishlists[customerId].some(str => str === productId)){
        wishlist.wishlists[customerId] = wishlist.wishlists[customerId].filter(e => e !== productId)
      }else{
        console.log(`product is not it the list`)
      }
    }else{
      console.log("customer have 0 items in wishlist")
    }
  }else{
    console.log("There is no item in our wishlist")
  }
  await updateWishlist(admin, wishlist)
  return await getProductsByIds(admin, wishlist.wishlists[customerId])
}