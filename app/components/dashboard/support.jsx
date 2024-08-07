import { Layout, Box, Card, Icon, InlineStack, Text, Button, BlockStack, Link } from "@shopify/polaris";
import {
    ChatReferralIcon,
    EmailIcon,
    BookIcon
} from '@shopify/polaris-icons';

export default function Support(){
    return (
        <Card>
            <Layout>
                <Layout.Section variant="oneThird">
                <Box background="bg-surface-hover" padding="400" borderRadius="200">
                    <InlineStack gap="100" blockAlign="start" align="start">
                        <Box width="40px" borderRadius="750" borderColor="black" borderWidth="0165" padding="150"><Icon source={ChatReferralIcon} /></Box>
                        <Box padding="100">
                            <BlockStack gap="100" inlineAlign="start">
                                <Text as="p" fontWeight="bold">
                                    Live Chat
                                </Text>
                                <Text as="p">
                                    We're here to assist
                                </Text>
                                <a href="javascript:void(Tawk_API.toggle())"><Button>Get Support</Button></a>
                            </BlockStack>
                        </Box>
                    </InlineStack>
                </Box>
                </Layout.Section>
                <Layout.Section variant="oneThird">
                <Box background="bg-surface-hover" padding="400" borderRadius="200">
                    <InlineStack gap="100" blockAlign="start" align="start">
                        <Box width="40px" borderRadius="750" borderColor="black" borderWidth="0165" padding="150"><Icon source={EmailIcon} /></Box>
                        <Box padding="100">
                            <BlockStack gap="100" inlineAlign="start">
                                <Text as="p" fontWeight="bold">
                                    Email Support
                                </Text>
                                <Text as="p">
                                    isheeze@gmail.com
                                </Text>
                                <a href="mailto:isheeze@gmail.com" target="_blank">
                                    <Button>Get Support</Button>
                                </a>
                            </BlockStack>
                        </Box>
                    </InlineStack>
                </Box>
                </Layout.Section>
                <Layout.Section variant="oneThird">
                <Box background="bg-surface-hover" padding="400" borderRadius="200">
                    <InlineStack gap="100" blockAlign="start" align="start">
                        <Box width="40px" borderRadius="750" borderColor="black" borderWidth="0165" padding="150"><Icon source={BookIcon} /></Box>
                        <Box padding="100">
                            <BlockStack gap="100" inlineAlign="start">
                                <Text as="p" fontWeight="bold">
                                    Documentation Center
                                </Text>
                                <Text as="p">
                                    Extensive knowledge base
                                </Text>
                                <a href="#" target="_blank">
                                    <Button>Get Support</Button>    
                                </a>
                            </BlockStack>
                        </Box>
                    </InlineStack>
                </Box>
            </Layout.Section>
            </Layout>
        </Card>
    )
}