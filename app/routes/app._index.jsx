import {
  Page,
  Layout
} from "@shopify/polaris";
import Notification from "../components/dashboard/notification";
import SetupGuide from "../components/dashboard/setupGuide";
import Stats from "../components/dashboard/stats";
import TopProducts from "../components/dashboard/topProducts";
import TopUsers from "../components/dashboard/topUsers";
import Support from "../components/dashboard/support";

export default function HomePage() {
  return (
    <Page
    title="Welcome to My Wishlist!"
    subtitle="Track your app's performance here."
    primaryAction={{content: 'Manage Plan', onAction: () => alert('click on Manage Plan')}}
    >
      <Layout>
        <Layout.Section>
          <Notification />
        </Layout.Section>
        <Layout.Section>
          <SetupGuide />
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
