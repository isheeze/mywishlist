import {
  Page,
  Layout,
  CalloutCard,
  Text
} from '@shopify/polaris';
import Appearance from '../components/settings/appearance';
export default function AppearancePage() {
  return (
    <Page
      title="Settings"
      subtitle="Configure All features here"
    >
      <Page narrowWidth>
        <Layout>
          <Layout.Section>
            <Text variant="headingLg" as="h5">
              Appearance
            </Text>
          </Layout.Section>
          <Layout.Section>
            <Appearance />
          </Layout.Section>
          <Layout.Section>
            <CalloutCard
              title="Enable Wishlist on other pages"
              illustration="https://cdn-icons-png.freepik.com/256/2097/2097358.png?ga=GA1.1.1532642562.1713339803"
              primaryAction={{
                content: 'Customize',
                url: '#',
              }}
            >
            </CalloutCard>
          </Layout.Section>
          <Layout.Section>
            <CalloutCard
              title="Enable Wishlist popup on cart page"
              illustration="https://cdn-icons-png.freepik.com/256/2097/2097361.png?ga=GA1.1.1532642562.1713339803"
              primaryAction={{
                content: 'Customize',
                url: '#',
              }}
            >
              <p>Show popup when item is removed from a cart.</p>
            </CalloutCard>
          </Layout.Section>
          <Layout.Section>
            <Text variant="headingLg" as="h5">
              Other
            </Text>
          </Layout.Section>
          <Layout.Section>
            <CalloutCard
              title="Capture email for guest users"
              illustration="https://cdn-icons-png.freepik.com/256/873/873390.png?ga=GA1.1.1532642562.1713339803"
              primaryAction={{
                content: 'Enable',
                url: '#',
              }}
            >
              <p>Collect user emails for marketing compaigns.</p>
            </CalloutCard>
          </Layout.Section>
          <Layout.Section>
            <CalloutCard
              title="Show reminder notification on product page"
              illustration="https://cdn-icons-png.freepik.com/256/7470/7470316.png?ga=GA1.1.1532642562.1713339803"
              primaryAction={{
                content: 'Enable',
                url: '#',
              }}
            >
              <p>Display a notification on the product page after a delay, prompting users to add the item to their Wishlist.</p>
            </CalloutCard>
          </Layout.Section>
        </Layout>
      </Page>
    </Page>
  );
}