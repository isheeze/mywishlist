import { Layout, Box, Card, Icon, InlineStack, Text, Button, BlockStack } from "@shopify/polaris";
import {
    ChatReferralIcon,
    SocialPostIcon,
    TeamIcon
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
                                    Online store dashboard
                                </Text>
                                <Text as="p">
                                    We're here to assist you...
                                </Text>
                                <Button>Get Support</Button>
                            </BlockStack>
                        </Box>
                    </InlineStack>
                </Box>
                </Layout.Section>
                <Layout.Section variant="oneThird">
                <Box background="bg-surface-hover" padding="400" borderRadius="200">
                    <InlineStack gap="100" blockAlign="start" align="start">
                        <Box width="40px" borderRadius="750" borderColor="black" borderWidth="0165" padding="150"><Icon source={ChatReferralIcon} /></Box>
                        <Box padding="100">
                            <BlockStack gap="100" inlineAlign="start">
                                <Text as="p" fontWeight="bold">
                                    Online store dashboard
                                </Text>
                                <Text as="p">
                                    We're here to assist you...
                                </Text>
                                <Button>Get Support</Button>
                            </BlockStack>
                        </Box>
                    </InlineStack>
                </Box>
                </Layout.Section>
                <Layout.Section variant="oneThird">
                <Box background="bg-surface-hover" padding="400" borderRadius="200">
                    <InlineStack gap="100" blockAlign="start" align="start">
                        <Box width="40px" borderRadius="750" borderColor="black" borderWidth="0165" padding="150"><Icon source={ChatReferralIcon} /></Box>
                        <Box padding="100">
                            <BlockStack gap="100" inlineAlign="start">
                                <Text as="p" fontWeight="bold">
                                    Online store dashboard
                                </Text>
                                <Text as="p">
                                    We're here to assist you...
                                </Text>
                                <Button>Get Support</Button>
                            </BlockStack>
                        </Box>
                    </InlineStack>
                </Box>
            </Layout.Section>
            </Layout>
        </Card>
    )
}