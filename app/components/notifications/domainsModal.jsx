import {
    Text,
    Tabs,
    Layout,
    Box
  } from '@shopify/polaris';
  
import {useState, useCallback} from 'react';

export default function DomainsModal(){
    const [selected, setSelected] = useState(0);

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );

    const tabs = [
        {
        id: 'domain',
        content: 'Domain',
        panelID: 'domain-content',
        },
        {
        id: 'verify',
        content: 'Verification',
        panelID: 'verify-content',
        },
    ];

    return(
        <Layout>
            <Layout.Section>
                <Box paddingBlockStart="400">
                <Text variant="headingLg" as="h5" alignment="center">
                    Configure new Domain
                </Text>
                <Text variant="bodyMd" as="p" alignment="center">
                    Follow steps to verify your domain
                </Text>
                </Box>
            </Layout.Section>
            <Layout.Section>
                <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
                    {tabs[selected].panelID == 'domain-content' && <div>
                    domain
                    </div>}
                    {tabs[selected].panelID == 'verify-content' && <div>
                    verify
                    </div>}
                </Tabs>
            </Layout.Section>
        </Layout>
    )
}