import {
  Layout,
    Page
  } from "@shopify/polaris";
import EmailSupport from "../components/support/emailSupport";
import LiveChat from "../components/support/liveChat";
  export default function SupportPage() {
    return (
      <Page>
        <Layout>
          <Layout.Section>
            <EmailSupport />
          </Layout.Section>
          <Layout.Section>
            <LiveChat />
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
  