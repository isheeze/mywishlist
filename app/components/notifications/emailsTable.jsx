import {
    IndexTable,
    Card,
    useIndexResourceState,
    Text,
    Badge,
    useBreakpoints,
  } from '@shopify/polaris';
  import {DeleteIcon} from '@shopify/polaris-icons';
  import React from 'react';
  
export default function EmailTable() {
    const orders = [
      {
        email: 'mshehzad@isheeze.work',
        status: <Badge progress="complete">Active</Badge>
      }
    ];
    const resourceName = {
      singular: 'email',
      plural: 'emails',
    };
  
    const {selectedResources, allResourcesSelected, handleSelectionChange} =
      useIndexResourceState(orders);
  
    const rowMarkup = orders.map(
      (
        {email, status},
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
              {email}
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
        {/*<IndexTable
          condensed={useBreakpoints().smDown}
          resourceName={resourceName}
          itemCount={orders.length}
          selectedItemsCount={
            allResourcesSelected ? 'All' : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[
            {title: 'Email'},
            {title: 'Status'}
          ]}
          bulkActions={bulkActions}
          promotedBulkActions={promotedBulkActions}
        >
          {rowMarkup}
        </IndexTable>*/}
      </Card>
    );
  }