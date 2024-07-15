import {
    BlockStack,
    Box,
    Button,
    Card,
    Divider,
    InlineStack,
    Text
} from '@shopify/polaris';

export default function NotificationAutomation() {
  return (
    <Card>
        <BlockStack gap={200}>
            <Text variant="headingMd" as="h6">Title</Text>
            <Text as="p">Description</Text>

            <Box borderColor="border" borderWidth="025" borderRadius="200">
                <Box padding={300}>
                    <InlineStack align='space-between'>
                        <InlineStack gap={200} blockAlign='center'>
                            <img src="https://cdn-icons-png.freepik.com/256/7023/7023132.png?ga=GA1.1.1532642562.1713339803&semt=ais_hybrid" width="50"/>
                            <BlockStack>
                                <Text variant="headingMd" as="h6">Restocked</Text>
                                <Text as="p">Description</Text>
                            </BlockStack>
                        </InlineStack>
                        <BlockStack align='center'>                            
                            <Button variant="primary">Save theme</Button>
                        </BlockStack>
                    </InlineStack>
                </Box>
                <Divider />
                <Box padding={300}>
                    <InlineStack align='space-between'>
                        <InlineStack gap={200} blockAlign='center'>
                            <img src="https://cdn-icons-png.freepik.com/256/7495/7495246.png?ga=GA1.1.1532642562.1713339803" width="50"/>
                            <BlockStack>
                                <Text variant="headingMd" as="h6">Low Stock</Text>
                                <Text as="p">Description</Text>
                            </BlockStack>
                        </InlineStack>
                        <BlockStack align='center'>                            
                            <Button variant="primary">Save theme</Button>
                        </BlockStack>
                    </InlineStack>
                </Box>
                <Divider />
                <Box padding={300}>
                    <InlineStack align='space-between'>
                        <InlineStack gap={200} blockAlign='center'>
                            <img src="https://cdn-icons-png.freepik.com/256/7495/7495233.png?ga=GA1.1.1532642562.1713339803" width="50"/>
                            <BlockStack>
                                <Text variant="headingMd" as="h6">Price drop</Text>
                                <Text as="p">Description</Text>
                            </BlockStack>
                        </InlineStack>
                        <BlockStack align='center'>                            
                            <Button variant="primary">Save theme</Button>
                        </BlockStack>
                    </InlineStack>
                </Box>
            </Box>
        </BlockStack>
    </Card>
  );
}