import { defaultMailerSendEmail, personalDomain, personalName, personalBrandName, appName } from './constants'

function mailer (url, method, body, callback){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-Requested-With", "XMLHttpRequest");
    myHeaders.append("Authorization", "Bearer mlsn.e18ada3b5e83ac8de0324bfbebf5a144dcbee78252ac9b83fa302644a0d2b02a");

    const requestOptions = {
    method: method,
    headers: myHeaders,
    body: body,
    redirect: "follow"
    };

    fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => callback(result))
    .catch((error) => console.error(error));
}

export async function addDomain (domain){
    const raw = JSON.stringify({
        "name": domain
    });
    mailer("https://api.mailersend.com/v1/domains", "POST", raw, (res) => {
        console.log(res)
    })
}
export async function deleteDomain (domain_id){
    mailer(`https://api.mailersend.com/v1/domains/${domain_id}`, "DELETE", "", (res)=>{
        console.log(res)
    })
}
export async function getDNS (domain_id){
    mailer(`https://api.mailersend.com/v1/domains/${domain_id}/dns-records`, "GET", "", (res)=>{
        console.log(res)
    })
}
export async function getVerificationStatus (domain_id){
    mailer(`https://api.mailersend.com/v1/domains/${domain_id}/verify`, "GET", "", (res)=>{
        console.log(res)
    })
}
export async function sendEmail(to, from, subject, message) {
    const raw = JSON.stringify({
        "from": {
            "email": from
        },
        "to": to, // [{"email":to}]
        "subject": subject,
        "html": message
    });

    fetch("https://api.mailersend.com/v1/email", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error('Error sending email:',error));

    mailer("https://api.mailersend.com/v1/email", "POST", raw, (res) => {
        console.log(res)
    })
}
export async function sendTestEmail() {
    const testMailHtml = `<!DOCTYPE html>
        <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="x-apple-disable-message-reformatting">
        <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
        <meta name="color-scheme" content="light">
        <meta name="supported-color-schemes" content="light">
        <title></title>

        <!--[if mso]>
        <noscript>
            <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
            </xml>
        </noscript>
        <![endif]-->

        <!-- CSS Reset : BEGIN -->

        <!--[if (gte mso 9)|(IE)]>
        <style>
        * {
        font-family: Arial, sans-serif !important;
        }
        </style>
        <![endif]-->
        <style>
            :root {
            color-scheme: light;
            supported-color-schemes: light;
            }
            html,
            body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
            }
            /* center email on Android 4.4 - margin reset */
            div[style*="margin: 16px 0"] {
            margin: 0 !important;
            }
            table,
            td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
            }
            table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
            mso-table-lspace: 0;
            mso-table-rspace: 0;
            }
            /*La poste hack*/
            h2,
            h3 {
            padding: 0;
            margin: 0;
            border: 0;
            background: none;
            }
        </style>

        <!--[if (mso)>
        <style type="text/css">
        a {
            text-decoration: none;
            }
        </style>
        <![endif]-->
        <style>
            /* Fix for Outlook links color fix for links and visited links */
            span.MsoHyperlink {
            color: inherit !important;
            mso-style-priority: 99 !important;
            }
            span.MsoHyperlinkFollowed {
            color: inherit !important;
            mso-style-priority: 99 !important;
            }
            /*  Apple Mail / iOS Mail apps */
            #root [x-apple-data-detectors=true],
            a[x-apple-data-detectors=true],
            [x-apple-data-detectors-type="calendar-event"] {
            border-bottom: 0 !important;
            cursor: default !important;
            color: inherit !important;
            -webkit-text-decoration-color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            }
            /*Gmail*/
            u+.body a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-weight: inherit;
            line-height: inherit;
            }
            /*Samsung Mail*/
            #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
            }
        </style>
        <style>
            .btn-td,
            .btn-a {
            transition: all 100ms ease-in;
            }
            .btn-td-primary:hover,
            .btn-a-primary:hover {
            background: #999999 !important;
            border-color: #999999 !important;
            color:#fffff7 !important;
            }
            .btn-td-white:hover,
            .btn-a-white:hover {
            background: #F7F7F7 !important;
            color: #525ca3 !important;
            border-color: #F7F7F7 !important;
            }
            .m-content {
            display: none !important;
            max-height: none !important;
            mso-hide: all !important;
            height: 0 !important;
            }
        </style>
        <style>
            @media screen and (max-width: 680px) {
            .cc-column,
            .cc-column-center {
                display: block !important;
                width: 100% !important;
                max-width: 100% !important;
                direction: ltr !important;
            }
            .cc-column table {
                height: auto !important;
            }
            .cc-column img {
                max-width: 100% !important;
            }
            .cc-column-center {
                text-align: center !important;
            }
            .d-content {
                display: none !important;
                height: 0 !important;
            }
            .m-content {
                display: block !important;
                width: auto !important;
                max-height: none !important;
                overflow: visible !important;
                height: 100% !important;
            }
            .cc-on-narrow {
                text-align: center !important;
                display: block !important;
                margin-left: auto !important;
                margin-right: auto !important;
                float: none !important;
            }
            table.cc-on-narrow {
                display: inline-block !important;
            }
            /*SPECIFIC CSS: END*/
            }
        </style>
        <style>
            .cc-half {
            width: 100% !important;
            max-width: 330px !important;
            }
            .cc-third {
            width: 100% !important;
            max-width: 220px !important;
            }
            .cc-two-third {
            width: 100% !important;
            max-width: 440px !important;
            }
            .cc-fourth {
            width: 100% !important;
            max-width: 25% !important;
            }
            .p-70 {
            padding: 20px 70px !important;
            }
            @media screen and (max-width:680px) {
            .cc-half,
            .cc-third,
            .cc-two-third,
            .cc-fourth {
                width: 100% !important;
                max-width: 680px !important;
            }
            }
        </style>

        <!--[if mso]>
        <style type="text/css">
        li {margin-left:-23px !important}
        </style>
        <![endif]-->
        <style>
            ul {
            padding-left: 17px;
            }
            ol {
            padding-left: 20px;
            }
        </style>
        </head>
        <body style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly;background-color: #fffffe;">
        <center role="article" aria-roledescription="email" aria-label="One column template" lang="en" dir="ltr" style="width: 100%;background-color: #fffffe;">

            <!--[if (gte mso 9)|(IE)]>
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #fffffe;">
            <tr>
            <td>
            <![endif]-->

            <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: Arial,sans-serif;" aria-hidden="true">
            pre-header
            </div>
            <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;
            </div>
            <div style="max-width: 680px; margin: 0 auto;" class="email-container">

            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="680" role="presentation">
            <tr>
            <td align="center" align="center">
            <![endif]-->

            <!-- Email Body : BEGIN -->
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                <tr>
                <td align="center" style="padding:20px;font-family: Arial,sans-serif; font-size:14px; mso-line-height-rule: exactly;line-height: 150%;  color: #999999;">
                    <h2 style="margin: 0;font-family: Arial,sans-serif; font-size:40px; mso-line-height-rule: exactly;line-height:150%;color:#323537;">Test Email from ${appName} Shopify App</h2>
                </td>
                </tr>
                <tr>
                <td class="p-70" align="center" style="padding:20px;font-family: Arial,sans-serif; font-size:14px; mso-line-height-rule: exactly;line-height: 150%;  color: #999999;">
                    <p style="margin: 0 0 14px;">This is a test email sent from <strong>${appName} app</strong>. If you are receiving this email, it means that our email service is working correctly.
        <br><br>
        Thank you for your attention.
        <br><br></p>
                    <a href="${personalDomain}" style="margin: 0;text-transform:uppercase;font-weight: 600;letter-spacing: 0.25em; text-decoration:none; color:black;">${personalBrandName}</a>
                    <a href="${personalDomain}" style="margin: 0;text-transform:uppercase;font-weight: 600;letter-spacing: 0.25em; text-decoration:none; color:#999999; font-size:14px;">${personalName}</a>
                </td>
                </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
            </div>

            <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
            </table>
            <![endif]-->
        </center>
        </body>
        </html>`
    sendEmail(
        [
            {"email":"sheeze.pk@gmail.com"}
        ],
        defaultMailerSendEmail,
        `Test Email from ${appName} Shopify App`,
        testMailHtml
    )
}