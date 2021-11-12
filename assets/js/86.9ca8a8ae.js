(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1881:function(e,t,o){"use strict";o.r(t);var n=o(26),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"dropcontact"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dropcontact"}},[e._v("#")]),e._v(" Dropcontact")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.dropcpontact.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dropcontact"),n("OutboundLink")],1),e._v(" is an email finder platform that allows you to automatically find, verify and validate nominative emails and enrich your contacts with all efficient information to contact him.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Dropcontact/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Contact")]),e._v(" "),n("ul",[n("li",[e._v("Enrich")]),e._v(" "),n("li",[e._v("Fetch Request")])])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to find email and enrich your contact from a Google Sheet and add them to Lemlist. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/1304",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io.")]),e._v(" "),n("p",[e._v("This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/GoogleSheets/"}},[e._v("Google Sheets node")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Dropcontact node")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Lemlist/"}},[e._v("Lemlist node")])],1)]),e._v(" "),n("p",[n("img",{attrs:{src:o(893),alt:"A workflow with the GetResponse node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start Node")]),e._v(" "),n("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-google-sheet-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-google-sheet-node"}},[e._v("#")]),e._v(" 2. Google Sheet node")]),e._v(" "),n("p",[e._v("This node will list all the records from Google Sheet. Create a sheet like "),n("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1jCyGrz01b7wdoujEHHZvw-JD5zszTMFqn8cvvSnLPrE/edit#gid=0",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),n("OutboundLink")],1),e._v(" in your Google Drive.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Google Sheet node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("div",{pre:!0},[n("ol",{pre:!0,attrs:{start:"2"}},[n("li",[e._v("Select the 'Sheet' option from the "),n("em",[n("strong",[e._v("Ressource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select the 'Read' option from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter the Sheet ID in the "),n("em",[n("strong",[e._v("Sheet ID")])]),e._v(" field. Your Google Sheet ID is available in the URL "),n("code",[e._v("https://docs.google.com/spreadsheets/d/{spreadsheetId}/edit")])]),e._v(" "),n("li",[e._v("In the "),n("em",[n("strong",[e._v("Range")])]),e._v(" field, enter "),n("code",[e._v("A:K")]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns the information of the leads.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(894),alt:"Using the Google Sheet"}})]),e._v(" "),n("h3",{attrs:{id:"_3-dropontact-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-dropontact-node"}},[e._v("#")]),e._v(" 3. Dropontact node")]),e._v(" "),n("p",[e._v("This node will find the verified email address and enrich the contact.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Dropcontact node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Dropcontact/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("div",{pre:!0},[n("ol",{pre:!0,attrs:{start:"2"}},[n("li",[e._v("Select 'Contact' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Enrich' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" and select 'Company Name'.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Company Name")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Node > Input Data > JSON > fields > companyName . You can also add the following expression: "),n("code",[e._v('{{$json["fields"]["companyName"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" and select 'First Name'.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("First Name")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Node > Input Data > JSON > fields > firstName . You can also add the following expression: "),n("code",[e._v('{{$json["fields"]["firstName"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" and select 'Full Name'.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Full Name")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Node > Input Data > JSON > fields > fullName . You can also add the following expression: "),n("code",[e._v('{{$json["fields"]["fullName"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" and select 'Last Name'.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Last Name")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Node > Input Data > JSON > fields > lastName . You can also add the following expression: "),n("code",[e._v('{{$json["fields"]["lastName"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the Dropcontact node has enriched your data.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(895),alt:"Using the Dropcontact node"}})]),e._v(" "),n("h3",{attrs:{id:"_4-lemlist-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-lemlist-node"}},[e._v("#")]),e._v(" 4. Lemlist node")]),e._v(" "),n("p",[e._v("This node will create new leads for a campaign in Lemlist.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Lemlist node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Lemlist/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Lead' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select a campaign from the "),n("em",[n("strong",[e._v("Campaign ID")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Email")])]),e._v(" field and click on 'Add Expression'.")])]),e._v(" "),n("div",{pre:!0},[n("ol",{pre:!0,attrs:{start:"5"}},[n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Dropcontact > Input Data > JSON > fields > email > [Item: 0] > email. You can also add the following expression: "),n("code",[e._v('{{$json["email"][0]["email"]}}')])]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button and select 'First Name'.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("First Name")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Node > Input Data > JSON > fields > first_name . You can also add the following expression: "),n("code",[e._v('{{$json["fields"]["first_name"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button and select 'Last Name'.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Last Name")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Node > Input Data > JSON > fields > last_name . You can also add the following expression: "),n("code",[e._v('{{$json["fields"]["last_name"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button and select 'Company Name'.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Company Name")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Node > Input Data > JSON > fields > company_name . You can also add the following expression: "),n("code",[e._v('{{$json["fields"]["company_name"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button and select 'Deduplicate'.")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Deduplicate")])]),e._v(" to "),n("code",[e._v("true")]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node creates new enriched leads in Lemlist.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(896),alt:"Using the Lemlist node"}})])])}),[],!1,null,null,null);t.default=a.exports},893:function(e,t,o){e.exports=o.p+"assets/img/workflow.384c7abf.png"},894:function(e,t,o){e.exports=o.p+"assets/img/GoogleSheet_node.691a420d.png"},895:function(e,t,o){e.exports=o.p+"assets/img/Dropcontact_node.1fa260d6.png"},896:function(e,t,o){e.exports=o.p+"assets/img/Lemlist_node.78ae248b.png"}}]);