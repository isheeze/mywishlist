import {
    IndexTable,
    Card,
    useIndexResourceState,
    Text,
    Badge,
    useBreakpoints,
    InlineStack,
    Button,
    BlockStack,
  } from '@shopify/polaris';
import {DeleteIcon} from '@shopify/polaris-icons';

import {Modal, TitleBar, useAppBridge} from '@shopify/app-bridge-react';
import DomainsModal from './domainsModal';
  
export default function DomainTable() {
  const shopify = useAppBridge()

  const orders = [
    {
      domain: 'isheeze.work',
      status: <Badge progress="complete">Active</Badge>
    }
  ];
  const resourceName = {
    singular: 'domain',
    plural: 'domains',
  };

  const {selectedResources, allResourcesSelected, handleSelectionChange} = useIndexResourceState(orders);
  
  const rowMarkup = orders.map(
    (
      {domain, status},
      index,
    ) => (
      <IndexTable.Row
        id={index}
        key={index}
        selected={selectedResources.includes(index)}
        position={index}
      >
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {domain}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{status}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );
  
  const promotedBulkActions = [
    {
      content: 'Create shipping labels',
      onAction: () => console.log('Todo: implement bulk edit'),
    },
  ];
  const bulkActions = [
    {
      content: 'Add tags',
      onAction: () => console.log('Todo: implement bulk add tags'),
    },
    {
      content: 'Remove tags',
      onAction: () => console.log('Todo: implement bulk remove tags'),
    },
    {
      icon: DeleteIcon,
      destructive: true,
      content: 'Delete orders',
      onAction: () => console.log('Todo: implement bulk delete'),
    },
  ];

  return (
    <Card>
      <BlockStack gap={200}>
        <InlineStack align="space-between">
          <Text variant="headingLg" as="h5">
            Domains
          </Text>
          <Button onClick={() => shopify.modal.show('domain-modal')}>Add domain</Button>
        </InlineStack>
        <IndexTable
          condensed={useBreakpoints().smDown}
          resourceName={resourceName}
          itemCount={orders.length}
          selectedItemsCount={
            allResourcesSelected ? 'All' : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[
            {title: 'Domain'},
            {title: 'Status'}
          ]}
          bulkActions={bulkActions}
          promotedBulkActions={promotedBulkActions}
        >
          {rowMarkup}
        </IndexTable>
      </BlockStack>
      <Modal id="domain-modal" variant="max">
        <DomainsModal />
        <TitleBar title="Add Domain">
        </TitleBar>
      </Modal>
    </Card>
  );
}