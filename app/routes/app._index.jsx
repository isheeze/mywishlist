import { useLoaderData } from "@remix-run/react";
import {
  Page,
  Layout
} from "@shopify/polaris";
import SetupGuide from "../components/dashboard/setupGuide";
import Stats from "../components/dashboard/stats";
import TopProducts from "../components/dashboard/topProducts";
import TopUsers from "../components/dashboard/topUsers";
import Support from "../components/dashboard/support";

import { getMyShopifyDomain } from "../metaObjectQueries";
import { authenticate } from "../shopify.server";
import { json } from "@remix-run/node";

export async function loader({request}) {
  const { admin } = await authenticate.admin(request)

  const domain = await getMyShopifyDomain(admin)
  return json({myShopifyDomain: domain});
}

export default function HomePage() {
  const data = useLoaderData()

  return (
    <Page
    title="Welcome to My Wishlist!"
    subtitle="Track your app's performance here."
    primaryAction={{content: 'Manage Plan', onAction: () => alert('click on Manage Plan')}}
    >
      <Layout>
        <Layout.Section>
          <SetupGuide myShopifyDomain={data.myShopifyDomain}/>
        </Layout.Section>
        <Layout.Section>
          <Stats />
        </Layout.Section>
        <Layout.Section variant="oneHalf">
          <TopProducts />
        </Layout.Section>
        <Layout.Section variant="oneHalf">
          <TopUsers />
        </Layout.Section>
        <Layout.Section>
          <Support />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
