import { json } from '@remix-run/node'
import { authenticate } from '../shopify.server'
import {
    addItemInWishlist,
    getWishlistByCustomerId,
    removeItemFromWishlist,
    increaseItemCount
} from "../metaObjectQueries";

export const action = async({request}) => {
    const { admin } = await authenticate.public.appProxy(request)

    let body = await request.formData()

    let customer_id = body.get("customer_id") || null
    let product_id = body.get("product_id") || null
    let action = body.get("action") || null
    
    switch(action){
        case 'add':
            if(customer_id == null && product_id == null){ return json({"message": "Required rguments are missing..."}) }
            else if(customer_id == null){ return await increaseItemCount(admin, product_id) }
            else {
                await addItemInWishlist(admin, customer_id, product_id)
                return await getWishlistByCustomerId(admin, customer_id)
            }

        case 'delete':
            if(customer_id == null || product_id == null){ return json({"message": "Required rguments are missing..."}) }
            await removeItemFromWishlist(admin, customer_id, product_id)
            return await getWishlistByCustomerId(admin, customer_id)

        case 'fetchFromCustomer':
            if(customer_id == null){ return json({"message": "Required rguments are missing..."}) }
            return await getWishlistByCustomerId(admin, customer_id)

        default:
            return json({"message":"unhandled endpoint..."})
    }
}