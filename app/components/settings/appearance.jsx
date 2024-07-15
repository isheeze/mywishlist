import {
    CalloutCard,
    Text
} from '@shopify/polaris';
import {Modal, TitleBar, useAppBridge} from '@shopify/app-bridge-react';
export default function Appearance(){
    const shopify = useAppBridge();

    return(
        <>
            <CalloutCard
                title="Customize the Appreance of Wishlist"
                illustration="https://cdn-icons-png.freepik.com/256/13636/13636694.png?ga=GA1.1.1532642562.1713339803"
                primaryAction={{
                    content: 'Configure',
                    onAction: () => shopify.modal.show('appearance-modal')
                }}
            >

                <p>Buttons, Popups, Notificaions and more</p>
            </CalloutCard>
            <Modal id="appearance-modal" variant="max">
                <div style={{background: "linear-gradient(45deg, rgb(255 0 112 / 10%) 0%, rgb(0 120 255 / 10%) 100%)"}}>
                    <Text variant="headingXl" as="h4">
                        Style wishlist elements
                    </Text>
                    <Text variant="bodyMd" as="p">
                        Configure the look and feel
                    </Text>
                </div>
                <TitleBar>
                <button variant="primary">Primary action</button>
                <button>Secondary action</button>
                </TitleBar>
            </Modal>
        </>
        
    )
}