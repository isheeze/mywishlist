import {
    Text,
    ButtonGroup,
    Button,
    Layout,
    Box,
    TextField,
    Page
  } from '@shopify/polaris';
  
import {useState, useCallback} from 'react';
import DNSRecords from '../notifications/DNSRecords';

export default function DomainsModal(){
    const [selected, setSelected] = useState(0);

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );

    return(
        <Page>
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
                    <TextField
                    label="New Domain"
                    autoComplete="off"
                    connectedRight={<Button>Add Domain</Button>}
                    />
                </Layout.Section>
                <Layout.Section>
                    <DNSRecords />
                </Layout.Section>
            </Layout>
        </Page>
    )
}