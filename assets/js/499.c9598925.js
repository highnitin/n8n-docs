(window.webpackJsonp=window.webpackJsonp||[]).push([[499],{1574:function(t,e,a){"use strict";a.r(e);var s=a(26),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"making-http-requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#making-http-requests"}},[t._v("#")]),t._v(" Making HTTP Requests")]),t._v(" "),a("p",[t._v("While creating nodes it is very commonn to call external APIs or make HTTP requests to other services.")]),t._v(" "),a("p",[t._v("This plays a major role during node development, maintenance, and improvements.")]),t._v(" "),a("p",[t._v("We provide a very flexible helper for making HTTP requests that abstracts away most of the complexity with a simple to use interface.")]),t._v(" "),a("h2",{attrs:{id:"how-to-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[t._v("#")]),t._v(" How to use")]),t._v(" "),a("p",[t._v("In the node code, inside the "),a("code",[t._v("execute")]),t._v(" function you can easily call:")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("helpers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("httpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Where "),a("code",[t._v("options")]),t._v(" is an object in this format:")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\turl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\theaders"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmethod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PUT'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DELETE'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HEAD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tbody"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" FormData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" object "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Buffer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" URLSearchParams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tqs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tarrayFormat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'indices'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'brackets'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'repeat'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'comma'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tauth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tusername"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tpassword"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tdisableFollowRedirect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tencoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'arraybuffer'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blob'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'document'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stream'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tskipSslCertificateValidation"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\treturnFullResponse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tproxy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\thost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tport"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tauth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tusername"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tpassword"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tprotocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ttimeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tjson"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n")])])]),a("p",[t._v("Where "),a("code",[t._v("url")]),t._v(" is the only mandatory field. The default method is "),a("code",[t._v("GET")]),t._v(".")]),t._v(" "),a("p",[t._v("Some notes about the possible fields:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("body")]),t._v(": You can use a regular Javascript Object for JSON payload, a Buffer for file uploads, an instance of FormData for "),a("code",[t._v("multipart/form-data")]),t._v(" and "),a("code",[t._v("URLSearchParams")]),t._v(" for "),a("code",[t._v("application/x-www-form-urlencoded")]),t._v(".")]),t._v(" "),a("li",[a("strong",[t._v("headers")]),t._v(": A simple key-value pair.\n"),a("ul",[a("li",[t._v("If "),a("code",[t._v("body")]),t._v(" is an instance of "),a("code",[t._v("FormData")]),t._v(" then "),a("code",[t._v("content-type: multipart/form-data")]),t._v(" is injected automatically.")]),t._v(" "),a("li",[t._v("If "),a("code",[t._v("body")]),t._v(" is an instance of "),a("code",[t._v("URLSearchParams")]),t._v(", then "),a("code",[t._v("content-type: application/x-www-form-urlencoded")]),t._v(" is added.")]),t._v(" "),a("li",[t._v("To override this behavior, you can set any "),a("code",[t._v("content-type")]),t._v(" header you wish and it won't be overridden.")])])]),t._v(" "),a("li",[a("strong",[t._v("arrayFormat")]),t._v(": If your query string contains an array of data, let's say "),a("code",[t._v("const qs = {IDs: [15,17]}")]),t._v(", the values set to "),a("code",[t._v("arrayFormat")]),t._v(" define how it will be sent.\n"),a("ul",[a("li",[a("code",[t._v("indices")]),t._v(" (default): "),a("code",[t._v("{ a: ['b', 'c'] }")]),t._v(" will be formatted as "),a("code",[t._v("a[0]=b&a[1]=c")])]),t._v(" "),a("li",[a("code",[t._v("brackets")]),t._v(": "),a("code",[t._v("{ a: ['b', 'c'] }")]),t._v(" will be formatted as "),a("code",[t._v("a[]=b&a[]=c")])]),t._v(" "),a("li",[a("code",[t._v("repeat")]),t._v(": "),a("code",[t._v("{ a: ['b', 'c'] }")]),t._v(" will be formatted as "),a("code",[t._v("a=b&a=c")])]),t._v(" "),a("li",[a("code",[t._v("comma")]),t._v(": "),a("code",[t._v("{ a: ['b', 'c'] }")]),t._v(" will be formatted as "),a("code",[t._v("a=b,c")])])])]),t._v(" "),a("li",[a("strong",[t._v("auth")]),t._v(": Used for Basic auth. Provide "),a("code",[t._v("username")]),t._v(" and "),a("code",[t._v("password")]),t._v(".")]),t._v(" "),a("li",[a("strong",[t._v("disableFollowRedirect")]),t._v(": By default, we'll follow redirects. You can set this to false to prevent this from happening")]),t._v(" "),a("li",[a("strong",[t._v("skipSslCertificateValidation")]),t._v(": Used for calling HTTPS services without proper certificate")]),t._v(" "),a("li",[a("strong",[t._v("returnFullResponse")]),t._v(": Instead of returning only the body, returns an object with more data in the following format: "),a("code",[t._v("{body: body, headers: object, statusCode: 200, statusMessage: 'OK'}")])]),t._v(" "),a("li",[a("strong",[t._v("encoding")]),t._v(": We usually detect the content type correctly but you can specify "),a("code",[t._v("arrayBuffer")]),t._v(" to receive a Buffer you can read from and interact with.")])]),t._v(" "),a("h2",{attrs:{id:"deprecation-of-the-previous-helper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deprecation-of-the-previous-helper"}},[t._v("#")]),t._v(" Deprecation of the previous helper")]),t._v(" "),a("p",[t._v("The previous helper implementation using "),a("code",[t._v("this.helpers.request(options)")]),t._v(" used and exposed the "),a("code",[t._v("request-promise")]),t._v(" library which was deprecated.")]),t._v(" "),a("p",[t._v("In an effort to keep maximum compatibility, we made a transparent conversion to another library called "),a("code",[t._v("axios")]),t._v(".")]),t._v(" "),a("p",[t._v("If you are having issues, please report them in our "),a("a",{attrs:{href:"https://community.n8n.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Community Forums"),a("OutboundLink")],1),t._v(" or on "),a("a",{attrs:{href:"https://github.com/n8n-io/n8n/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Also, you can temporarily enable n8n to use the deprecated library by setting the environment variable "),a("code",[t._v("N8N_USE_DEPRECATED_REQUEST_LIB=true")]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("Please note:")]),t._v(" This behavior is permanent and we will be removing the "),a("code",[t._v("request-promise")]),t._v(" library entirely in the future so please report any errors you have so we can fix them.")]),t._v(" "),a("h2",{attrs:{id:"migration-guide-to-the-new-helper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration-guide-to-the-new-helper"}},[t._v("#")]),t._v(" Migration guide to the new helper")]),t._v(" "),a("p",[t._v("As mentioned above, the previous helper is deprecated and will be replaced in the future. The new helper is much more robust, library agnostic, and easier to use.")]),t._v(" "),a("p",[t._v("New nodes should all use the new helper, and if you have built custom nodes we strongly suggest you migrate to the new helper. Here are the main considerations when migrating:")]),t._v(" "),a("ul",[a("li",[t._v("Only "),a("code",[t._v("url")]),t._v(" is accepted. Previously "),a("code",[t._v("uri")]),t._v(" was also accepted")]),t._v(" "),a("li",[a("code",[t._v("encoding: null")]),t._v(" now must be "),a("code",[t._v("encoding: arrayBuffer")])]),t._v(" "),a("li",[a("code",[t._v("rejectUnauthorized: false")]),t._v(" is now "),a("code",[t._v("skipSslCertificateValidation: true")])]),t._v(" "),a("li",[t._v("Use "),a("code",[t._v("body")]),t._v(" according to "),a("code",[t._v("content-type")]),t._v(" headers to clarify what is being sent")]),t._v(" "),a("li",[a("code",[t._v("resolveWithFullResponse")]),t._v(" is now "),a("code",[t._v("returnFullResponse")]),t._v(" and has similar behavior")])]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("For an example, please check the "),a("a",{attrs:{href:"https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Mattermost/v1/MattermostV1.node.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mattermost node"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=r.exports}}]);