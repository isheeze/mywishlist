import {
    Card,
    Text,
    Box,
    InlineStack,
    Tag,
    Grid
  } from "@shopify/polaris";
  
export default function Stats(){
    return (
        
      
        <Grid columns={{md:12}}>
            <Grid.Cell columnSpan={{xs: 3, sm: 3, md: 3, lg: 3, xl: 3}}>
                <Card>
                    <Tag>Potential</Tag>
                    <Text variant="bodyMd" as="p">Value in Wishlists</Text>
                    <Text variant="heading2xl" as="h2" alignment="center">$23</Text>
                </Card>
            </Grid.Cell>
            <Grid.Cell columnSpan={{xs: 3, sm: 3, md: 3, lg: 3, xl: 3}}>
                <Card>
                    <Tag>Potential</Tag>
                    <Text variant="bodyMd" as="p">Value in Wishlists</Text>
                    <Text variant="heading2xl" as="h2" alignment="center">$23</Text>
                </Card>
            </Grid.Cell>
            <Grid.Cell columnSpan={{xs: 6, sm: 6, md: 6, lg: 6, xl: 6}}>
                <Card>
                    <InlineStack align="space-between">
                        <Box>
                            <Text tone="magic" as="p">Potential</Text>
                            <Text variant="bodyMd" as="p">Value in Wishlists</Text>
                            <Text variant="heading2xl" as="h2" alignment="center">$23</Text>
                        </Box>
                        <Box>
                            <Text tone="magic" as="p">Potential</Text>
                            <Text variant="bodyMd" as="p">Value in Wishlists</Text>
                            <Text variant="heading2xl" as="h2" alignment="center">$23</Text>
                        </Box>
                        <Box>
                            <Text tone="magic" as="p">Potential</Text>
                            <Text variant="bodyMd" as="p">Value in Wishlists</Text>
                            <Text variant="heading2xl" as="h2" alignment="center">$23</Text>
                        </Box>
                    </InlineStack>
                </Card>
            </Grid.Cell>
        </Grid>
    )
}