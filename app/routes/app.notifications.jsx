import {
    Page,
    Layout
  } from "@shopify/polaris";
import DomainTable from "../components/notifications/domainsTable";
import EmailTable from "../components/notifications/emailsTable";
import NotificationAutomation from "../components/notifications/notificationAutomation";
  
  export default function NotificationsPage() {
    return (
      <Page>
        <Layout>
          <Layout.Section>
            <DomainTable />
          </Layout.Section>
          <Layout.Section>
            <EmailTable />
          </Layout.Section>
          <Layout.Section>
            <NotificationAutomation />
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
  