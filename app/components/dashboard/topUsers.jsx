import {InlineStack, Card, DataTable, Avatar, Text} from '@shopify/polaris';
import React from 'react';

export default function TopUsers() {
  const rows = [
    [<InlineStack wrap={false} blockAlign="start" gap="150"><Avatar customer size="xs" name="Chet Baker" />Emerald Silk Gown</InlineStack>],
    [<InlineStack wrap={false} blockAlign="start" gap="150"><Avatar customer size="xs" name="Chet Baker" />Mauve Cashmere Scarf</InlineStack>],
    [
        <InlineStack wrap={false} blockAlign="start" gap="150">
            <Avatar customer size="xs" name="Chet Baker" />Navy Merino Wool Blazer with khaki chinos and yellow belt
        </InlineStack>
    ],
  ];

  return (
      <Card>
        <DataTable
          columnContentTypes={[
            'text'
          ]}
          headings={[
            <Text as="p" fontWeight="bold">Top Users</Text>
          ]}
          rows={rows}
        />
      </Card>
  );
}