import {
    Card,
    BlockStack,
    Text,
    Box,
    Collapsible,
    Icon,
    InlineStack,
    Link
} from "@shopify/polaris";
import {
    CaretUpIcon,
    CaretDownIcon,
    StatusActiveIcon
} from '@shopify/polaris-icons';

import {useState, useCallback} from 'react';
  
export default function SetupGuide({myShopifyDomain}){
    const [openSetupCollapsible1, setOpenSetupCollapsible1] = useState(true);
    const [openSetupCollapsible2, setOpenSetupCollapsible2] = useState(false);
  
    const handleSetupCollapsible1Toggle = useCallback(() => setOpenSetupCollapsible1((open) => !open), []);
    const handleSetupCollapsible2Toggle = useCallback(() => setOpenSetupCollapsible2((open) => !open), []);

    return(
        <Card padding="0">
          <BlockStack>
            <Box padding="400">
              <Text as="h1" variant="headingMd">
                Setup Guide
              </Text>
              <Text variant="bodyMd" as="p">
                Use this guide to set up my wishlist app on your store.
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
                            <Text variant="bodyMd" as="p" fontWeight="semibold">Publist Wishlist Widgets to your live theme</Text>
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
                        Click the link to open the theme editor, and it will automatically enable the widget on your live theme.<br />
                        <Link target="_blank" url={`https://${myShopifyDomain}/admin/themes/current/editor?context=apps&activateAppId=06ff0253-4f00-4c02-999e-3d048e0a81dd/wishlist_trigger`}>
                          Go to theme editor
                        </Link>
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
                            <Text variant="bodyMd" as="p" fontWeight="semibold">Customize the appearance of your wishlist.</Text>
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
                        Click the link to open the appearance settings of your wishlist.<br />
                        <Link url="/app/settings?open_appreance=1">
                          Go to Appreance Settings
                        </Link>
                      </Text>
                    </Box>
                  </Collapsible>
                </BlockStack>
            </Box>
          </BlockStack>
        </Card>
    )
}