import {
    Banner
} from "@shopify/polaris";
export default function Notification(){
    return (
        <Banner title="Order archived" onDismiss={() => {}}>
          <p>This order was archived on March 7, 2017 at 3:12pm EDT.</p>
        </Banner>
    )
}