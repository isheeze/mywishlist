import {CalloutCard, Layout, Text} from '@shopify/polaris';

export default function LiveChat() {
  return (
    <Layout>
        <Layout.Section variant="oneThird">
            <div style={{marginTop: 'var(--p-space-500)'}}>
              <div>
                <Text id="storeDetails" variant="headingMd" as="h2">
                  Store details
                </Text>
                <Text tone="subdued" as="p">
                  Shopify and your customers will use this information to contact
                  you.
                </Text>
              </div>
            </div>
        </Layout.Section>
        <Layout.Section>
        <CalloutCard
            title="Customize the style of your checkout"
            illustration="https://cdn-icons-png.freepik.com/256/3559/3559555.png?ga=GA1.1.1532642562.1713339803&semt=ais_hybrid"
            primaryAction={{
                content: 'Customize checkout',
                url: 'https://tawk.to/chat/668fe285c3fb85929e3e1c25/1i2h0pnd9',
                target: '_blank'
            }}
            >
            <p>Upload your store’s logo, change colors and fonts, and more.</p>
        </CalloutCard>
        </Layout.Section>
    </Layout>
  );
}