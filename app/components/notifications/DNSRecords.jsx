import {
    Card,
    BlockStack,
    Text,
    Box,
    Collapsible,
    Icon,
    InlineStack,
    InlineGrid,
    ButtonGroup,
    Button
} from "@shopify/polaris";
import {
    CaretUpIcon,
    CaretDownIcon,
    StatusActiveIcon
} from '@shopify/polaris-icons';

import {useState, useCallback} from 'react';
  
export default function DNSRecords(){
    const [openSetupCollapsible1, setOpenSetupCollapsible1] = useState(true);
    const [openSetupCollapsible2, setOpenSetupCollapsible2] = useState(false);
  
    const handleSetupCollapsible1Toggle = useCallback(() => setOpenSetupCollapsible1((open) => !open), []);
    const handleSetupCollapsible2Toggle = useCallback(() => setOpenSetupCollapsible2((open) => !open), []);

    return(
        <Card padding="0">
          <BlockStack>
            <Box padding="400">
            <InlineGrid columns="1fr auto">
                <Text as="h2" variant="headingSm">
                    Staff accounts
                </Text>
                <ButtonGroup>
                    <Button
                    onClick={() => {}}
                    variant="primary"
                    accessibilityLabel="Recheck DNS Records"
                    >
                    Recheck DNS Records
                    </Button>
                </ButtonGroup>
                </InlineGrid>
              <Text variant="bodyMd" as="p">
                Shopify POS is the easiest way to sell your products in person.
                Available for iPad, iPhone, and Android.
              </Text>
            </Box>
            <Box>
                <BlockStack>
                  <div 
                    onClick={handleSetupCollapsible1Toggle}
                    aria-expanded={openSetupCollapsible1}
                    aria-controls="basic-collapsible"
                    style={{
                      background: "rgb(0 0 0 / 5%)",
                      cursor: "pointer",
                      border: "1px solid rgb(0 0 0 / 6%)"
                    }}
                    >
                      <Box padding="400">
                        <InlineStack align="space-between">
                          <InlineStack align="space-between" blockAlign="start" wrap={false} gap={200}>
                            <div>
                              <Icon
                                source={StatusActiveIcon}
                                tone="info"
                              />
                            </div>
                            <Text variant="bodyMd" as="p" fontWeight="semibold">View shipping settings</Text>
                          </InlineStack>
                          <div><Icon
                            source={openSetupCollapsible1 ? CaretUpIcon : CaretDownIcon}
                          />
                          </div>
                        </InlineStack>
                      </Box>
                  </div>
                  <Collapsible
                    open={openSetupCollapsible1}
                    id="basic-collapsible"
                    transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
                    expandOnPrint
                  >
                    <Box padding="400">
                      <Text variant="bodyMd" as="p">
                        Your mailing list lets you contact customers or visitors who
                        have shown an interest in your store. Reach out to them with
                        exclusive offers or updates about your products.
                      </Text>
                    </Box>
                  </Collapsible>
                </BlockStack>
            </Box>
            <Box>
                <BlockStack>
                  <div 
                    onClick={handleSetupCollapsible2Toggle}
                    aria-expanded={openSetupCollapsible2}
                    aria-controls="basic-collapsible"
                    style={{
                      background: "rgb(0 0 0 / 5%)",
                      cursor: "pointer",
                      border: "1px solid rgb(0 0 0 / 6%)"
                    }}
                    >
                      <Box padding="400">
                        <InlineStack align="space-between">
                          <InlineStack align="space-between" blockAlign="start" wrap={false} gap={200}>
                            <div>
                              <Icon
                                source={StatusActiveIcon}
                                tone="base"
                              />
                            </div>
                            <Text variant="bodyMd" as="p" fontWeight="semibold">View shipping settings</Text>
                          </InlineStack>
                          <div><Icon
                            source={openSetupCollapsible2 ? CaretUpIcon : CaretDownIcon}
                          />
                          </div>
                        </InlineStack>
                      </Box>
                  </div>
                  <Collapsible
                    open={openSetupCollapsible2}
                    id="basic-collapsible"
                    transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
                    expandOnPrint
                  >
                    <Box padding="400">
                      <Text variant="bodyMd" as="p">
                        Your mailing list lets you contact customers or visitors who
                        have shown an interest in your store. Reach out to them with
                        exclusive offers or updates about your products.
                      </Text>
                    </Box>
                  </Collapsible>
                </BlockStack>
            </Box>
          </BlockStack>
        </Card>
    )
}