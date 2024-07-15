import {
    Page,
    Layout,
    Card,
    FormLayout,
    TextField,
    Text,
    ButtonGroup,
    Button,
    InlineStack
  } from '@shopify/polaris';
  import React from 'react';
  
export default function EmailSupport() {
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
            <Card>
              <FormLayout>
                <TextField
                    type="email"
                    label="Account email"
                    onChange={() => {}}
                    autoComplete="email"
                />
                <TextField
                    label="Subject"
                    onChange={() => {}}
                    autoComplete="off"
                />
                <TextField
                    label="Message"
                    onChange={() => {}}
                    multiline={6}
                    autoComplete="off"
                />
                <InlineStack align="end">
                    <ButtonGroup>
                        <Button
                            variant="primary"
                            onClick={() => {}}
                            accessibilityLabel="Create shipping label"
                        >
                        Create shipping label
                        </Button>
                    </ButtonGroup>
                </InlineStack>
              </FormLayout>
            </Card>
          </Layout.Section>
        </Layout>
    );
  }