import {Text, Card, DataTable, Thumbnail, InlineStack} from '@shopify/polaris';
import React from 'react';

export default function TopProducts() {
  const rows = [
    [<InlineStack wrap={false} blockAlign="start" gap="150"><Thumbnail source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg" alt="product" size="extraSmall"/>Emerald Silk Gown</InlineStack>, '$875.00'],
    [<InlineStack wrap={false} blockAlign="start" gap="150"><Thumbnail source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg" alt="product" size="extraSmall"/>Mauve Cashmere Scarf</InlineStack>, '$230.00'],
    [<InlineStack wrap={false} blockAlign="start" gap="150"><Thumbnail source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg" alt="product" size="extraSmall"/>Navy Merino Wool Blazer with khaki chinos and yellow belt</InlineStack>,'$445.00'],
  ];

  return (
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'numeric',
          ]}
          headings={[
            <Text as="p" fontWeight="bold">Top Products</Text>,
            'Price',
          ]}
          rows={rows}
        />
      </Card>
  );
}