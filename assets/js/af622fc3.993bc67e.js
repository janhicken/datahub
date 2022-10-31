"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),g=r,c=m["".concat(l,".").concat(g)]||m[g]||d[g]||i;return n?a.createElement(c,o(o({ref:t},p),{},{components:n})):a.createElement(c,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(87462),r=n(67294),i=n(86010),o=n(51048),s=n(33609),l=n(1943),u=n(72957);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n;const{lazy:o,block:m,defaultValue:g,values:c,groupId:h,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,s.l)(b,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===g?g:null!=(t=null!=g?g:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:_,setTabGroupChoices:v}=(0,l.U)(),[A,w]=(0,r.useState)(y),D=[],{blockElementScrollPositionUntilNextRender:z}=(0,u.o5)();if(null!=h){const e=_[h];null!=e&&e!==A&&b.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,n=D.indexOf(t),a=b[n].value;a!==A&&(z(t),w(a),null!=h&&v(h,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=D.indexOf(e.currentTarget)+1;n=null!=(a=D[t])?a:D[0];break}case"ArrowLeft":{var r;const t=D.indexOf(e.currentTarget)-1;n=null!=(r=D[t])?r:D[D.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},k)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:e=>D.push(e),onKeyDown:T,onFocus:x,onClick:x},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":A===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(f.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function g(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},44028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(34259),o=n(18679);const s={title:"Azure AD",slug:"/generated/ingestion/sources/azure-ad",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/azure-ad.md"},l="Azure AD",u={unversionedId:"docs/generated/ingestion/sources/azure-ad",id:"docs/generated/ingestion/sources/azure-ad",title:"Azure AD",description:"Extracting DataHub Users",source:"@site/genDocs/docs/generated/ingestion/sources/azure-ad.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/azure-ad",permalink:"/docs/generated/ingestion/sources/azure-ad",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/azure-ad.md",tags:[],version:"current",frontMatter:{title:"Azure AD",slug:"/generated/ingestion/sources/azure-ad",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/azure-ad.md"},sidebar:"overviewSidebar",previous:{title:"Athena",permalink:"/docs/generated/ingestion/sources/athena"},next:{title:"BigQuery",permalink:"/docs/generated/ingestion/sources/bigquery"}},p={},d=[{value:"Extracting DataHub Users",id:"extracting-datahub-users",level:3},{value:"Usernames",id:"usernames",level:4},{value:"Responses",id:"responses",level:4},{value:"Extracting DataHub Groups",id:"extracting-datahub-groups",level:3},{value:"Group Names",id:"group-names",level:4},{value:"Responses",id:"responses-1",level:4},{value:"Extracting Group Membership",id:"extracting-group-membership",level:3},{value:"Module <code>azure-ad</code>",id:"module-azure-ad",level:2},{value:"Extracting DataHub Users",id:"extracting-datahub-users-1",level:3},{value:"Usernames",id:"usernames-1",level:4},{value:"Responses",id:"responses-2",level:4},{value:"Extracting DataHub Groups",id:"extracting-datahub-groups-1",level:3},{value:"Group Names",id:"group-names-1",level:4},{value:"Responses",id:"responses-3",level:4},{value:"Extracting Group Membership",id:"extracting-group-membership-1",level:3},{value:"Prerequisite",id:"prerequisite",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3},{value:"Questions",id:"questions",level:2}],m={toc:d};function g(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"azure-ad"},"Azure AD"),(0,r.kt)("h3",{id:"extracting-datahub-users"},"Extracting DataHub Users"),(0,r.kt)("h4",{id:"usernames"},"Usernames"),(0,r.kt)("p",null,'Usernames serve as unique identifiers for users on DataHub. This connector extracts usernames using the\n"userPrincipalName" field of an ',(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/api/user-list?view=graph-rest-1.0&tabs=http#response-1"},"Azure AD User Response"),",\nwhich is the unique identifier for your Azure AD users."),(0,r.kt)("p",null,"If this is not how you wish to map to DataHub usernames, you can provide a custom mapping using the configurations options detailed below. Namely, ",(0,r.kt)("inlineCode",{parentName:"p"},"azure_ad_response_to_username_attr"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"azure_ad_response_to_username_regex"),". "),(0,r.kt)("h4",{id:"responses"},"Responses"),(0,r.kt)("p",null,"This connector also extracts basic user response information from Azure. The following fields of the Azure User Response are extracted\nand mapped to the DataHub ",(0,r.kt)("inlineCode",{parentName:"p"},"CorpUserInfo")," aspect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"display name "),(0,r.kt)("li",{parentName:"ul"},"first name"),(0,r.kt)("li",{parentName:"ul"},"last name"),(0,r.kt)("li",{parentName:"ul"},"email"),(0,r.kt)("li",{parentName:"ul"},"title"),(0,r.kt)("li",{parentName:"ul"},"country")),(0,r.kt)("h3",{id:"extracting-datahub-groups"},"Extracting DataHub Groups"),(0,r.kt)("h4",{id:"group-names"},"Group Names"),(0,r.kt)("p",null,'Group names serve as unique identifiers for groups on DataHub. This connector extracts group names using the "name" attribute of an Azure Group Response.\nBy default, a URL-encoded version of the full group name is used as the unique identifier (CorpGroupKey) and the raw "name" attribute is mapped\nas the display name that will appear in DataHub\'s UI. '),(0,r.kt)("p",null,"If this is not how you wish to map to DataHub group names, you can provide a custom mapping using the configurations options detailed below. Namely, ",(0,r.kt)("inlineCode",{parentName:"p"},"azure_ad_response_to_groupname_attr"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"azure_ad_response_to_groupname_regex"),"."),(0,r.kt)("h4",{id:"responses-1"},"Responses"),(0,r.kt)("p",null,"This connector also extracts basic group information from Azure. The following fields of the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/api/group-list?view=graph-rest-1.0&tabs=http#response-1"},"Azure AD Group Response")," are extracted and mapped to the\nDataHub ",(0,r.kt)("inlineCode",{parentName:"p"},"CorpGroupInfo")," aspect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name"),(0,r.kt)("li",{parentName:"ul"},"description")),(0,r.kt)("h3",{id:"extracting-group-membership"},"Extracting Group Membership"),(0,r.kt)("p",null,"This connector additional extracts the edges between Users and Groups that are stored in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/api/group-list-members?view=graph-rest-1.0&tabs=http#response-1"},"Azure AD"),". It maps them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"GroupMembership")," aspect\nassociated with DataHub users (CorpUsers). Today this has the unfortunate side effect of ",(0,r.kt)("strong",{parentName:"p"},"overwriting")," any Group Membership information that\nwas created outside of the connector. That means if you've used the DataHub REST API to assign users to groups, this information will be overridden\nwhen the Azure AD Source is executed. If you intend to ",(0,r.kt)("em",{parentName:"p"},"always")," pull users, groups, and their relationships from your Identity Provider, then\nthis should not matter. "),(0,r.kt)("p",null,"This is a known limitation in our data model that is being tracked by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/issues/3065"},"this ticket"),"."),(0,r.kt)("h2",{id:"module-azure-ad"},"Module ",(0,r.kt)("inlineCode",{parentName:"h2"},"azure-ad")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,r.kt)("p",null,"This plugin extracts the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users"),(0,r.kt)("li",{parentName:"ul"},"Groups"),(0,r.kt)("li",{parentName:"ul"},"Group Membership")),(0,r.kt)("p",null,"from your Azure AD instance."),(0,r.kt)("h3",{id:"extracting-datahub-users-1"},"Extracting DataHub Users"),(0,r.kt)("h4",{id:"usernames-1"},"Usernames"),(0,r.kt)("p",null,'Usernames serve as unique identifiers for users on DataHub. This connector extracts usernames using the\n"userPrincipalName" field of an ',(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/api/user-list?view=graph-rest-1.0&tabs=http#response-1"},"Azure AD User Response"),",\nwhich is the unique identifier for your Azure AD users."),(0,r.kt)("p",null,"If this is not how you wish to map to DataHub usernames, you can provide a custom mapping using the configurations options detailed below. Namely, ",(0,r.kt)("inlineCode",{parentName:"p"},"azure_ad_response_to_username_attr"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"azure_ad_response_to_username_regex"),"."),(0,r.kt)("h4",{id:"responses-2"},"Responses"),(0,r.kt)("p",null,"This connector also extracts basic user response information from Azure. The following fields of the Azure User Response are extracted\nand mapped to the DataHub ",(0,r.kt)("inlineCode",{parentName:"p"},"CorpUserInfo")," aspect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"display name"),(0,r.kt)("li",{parentName:"ul"},"first name"),(0,r.kt)("li",{parentName:"ul"},"last name"),(0,r.kt)("li",{parentName:"ul"},"email"),(0,r.kt)("li",{parentName:"ul"},"title"),(0,r.kt)("li",{parentName:"ul"},"country")),(0,r.kt)("h3",{id:"extracting-datahub-groups-1"},"Extracting DataHub Groups"),(0,r.kt)("h4",{id:"group-names-1"},"Group Names"),(0,r.kt)("p",null,'Group names serve as unique identifiers for groups on DataHub. This connector extracts group names using the "name" attribute of an Azure Group Response.\nBy default, a URL-encoded version of the full group name is used as the unique identifier (CorpGroupKey) and the raw "name" attribute is mapped\nas the display name that will appear in DataHub\'s UI.'),(0,r.kt)("p",null,"If this is not how you wish to map to DataHub group names, you can provide a custom mapping using the configurations options detailed below. Namely, ",(0,r.kt)("inlineCode",{parentName:"p"},"azure_ad_response_to_groupname_attr"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"azure_ad_response_to_groupname_regex"),"."),(0,r.kt)("h4",{id:"responses-3"},"Responses"),(0,r.kt)("p",null,"This connector also extracts basic group information from Azure. The following fields of the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/api/group-list?view=graph-rest-1.0&tabs=http#response-1"},"Azure AD Group Response")," are extracted and mapped to the\nDataHub ",(0,r.kt)("inlineCode",{parentName:"p"},"CorpGroupInfo")," aspect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name"),(0,r.kt)("li",{parentName:"ul"},"description")),(0,r.kt)("h3",{id:"extracting-group-membership-1"},"Extracting Group Membership"),(0,r.kt)("p",null,"This connector additional extracts the edges between Users and Groups that are stored in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/api/group-list-members?view=graph-rest-1.0&tabs=http#response-1"},"Azure AD"),". It maps them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"GroupMembership")," aspect\nassociated with DataHub users (CorpUsers). Today this has the unfortunate side effect of ",(0,r.kt)("strong",{parentName:"p"},"overwriting")," any Group Membership information that\nwas created outside of the connector. That means if you've used the DataHub REST API to assign users to groups, this information will be overridden\nwhen the Azure AD Source is executed. If you intend to ",(0,r.kt)("em",{parentName:"p"},"always")," pull users, groups, and their relationships from your Identity Provider, then\nthis should not matter."),(0,r.kt)("p",null,"This is a known limitation in our data model that is being tracked by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/issues/3065"},"this ticket"),"."),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/toolkit/get-started/add-aad-app-registration"},"Create a DataHub Application")," within the Azure AD Portal with the permissions\nto read your organization's Users and Groups. The following permissions are required, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," permission type:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Group.Read.All")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GroupMember.Read.All")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"User.Read.All"))),(0,r.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,r.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[azure-ad]'\n")),(0,r.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "azure-ad"\n  config:\n    client_id: "00000000-0000-0000-0000-000000000000"\n    tenant_id: "00000000-0000-0000-0000-000000000000"\n    client_secret: "xxxxx"\n    redirect: "https://login.microsoftonline.com/common/oauth2/nativeclient"\n    authority: "https://login.microsoftonline.com/00000000-0000-0000-0000-000000000000"\n    token_url: "https://login.microsoftonline.com/00000000-0000-0000-0000-000000000000/oauth2/token"\n    graph_url: "https://graph.microsoft.com/v1.0"\n    ingest_users: True\n    ingest_groups: True\n    groups_pattern:\n      allow:\n        - ".*"\n    users_pattern:\n      allow:\n        - ".*"\n\nsink:\n  # sink configs\n')),(0,r.kt)("h3",{id:"config-details"},"Config Details"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,"View All Configuration Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_id"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Application ID. Found in your app registration on Azure AD Portal"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tenant_id"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Directory ID. Found in your app registration on Azure AD Portal"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_secret"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Client secret. Found in your app registration on Azure AD Portal"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authority"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The authority (",(0,r.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-client-application-configuration"},"https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-client-application-configuration"),") is a URL that indicates a directory that MSAL can request tokens from."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token_url"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The token URL that acquires a token from Azure AD for authorizing requests.  This source will only work with v1.0 endpoint."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redirect"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Redirect URI.  Found in your app registration on Azure AD Portal."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://login.microsoftonline.com/common/oauth2/nativeclient"},"https://login.microsoftonline.com/common/oauth2/nativeclient"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"graph_url"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/graph/use-the-api"},"Microsoft Graph API endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://graph.microsoft.com/v1.0"},"https://graph.microsoft.com/v1.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"azure_ad_response_to_username_attr"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Which Azure AD User Response attribute to use as input to DataHub username mapping."),(0,r.kt)("td",{parentName:"tr",align:null},"userPrincipalName")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"azure_ad_response_to_username_regex"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A regex used to parse the DataHub username from the attribute specified in ",(0,r.kt)("inlineCode",{parentName:"td"},"azure_ad_response_to_username_attr"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"(.*)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"azure_ad_response_to_groupname_attr"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Which Azure AD Group Response attribute to use as input to DataHub group name mapping."),(0,r.kt)("td",{parentName:"tr",align:null},"displayName")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"azure_ad_response_to_groupname_regex"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A regex used to parse the DataHub group name from the attribute specified in ",(0,r.kt)("inlineCode",{parentName:"td"},"azure_ad_response_to_groupname_attr"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"(.*)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingest_users"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether users should be ingested into DataHub."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingest_groups"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether groups should be ingested into DataHub."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingest_group_membership"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether group membership should be ingested into DataHub. ingest_groups must be True if this is True."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingest_groups_users"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"This option is useful only when ",(0,r.kt)("inlineCode",{parentName:"td"},"ingest_users")," is set to False and ",(0,r.kt)("inlineCode",{parentName:"td"},"ingest_group_membership")," to True. As effect, only the users which belongs to the selected groups will be ingested."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filtered_tracking"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, report will contain names of filtered users and groups."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mask_group_id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether workunit ID's for groups should be masked to avoid leaking sensitive information."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mask_user_id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether workunit ID's for users should be masked to avoid leaking sensitive information."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"users_pattern"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null},"regex patterns for users to filter in ingestion."),(0,r.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"users_pattern.allow"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to include in ingestion"),(0,r.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"users_pattern.deny"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to exclude from ingestion."),(0,r.kt)("td",{parentName:"tr",align:null},"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"users_pattern.ignoreCase"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"groups_pattern"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null},"regex patterns for groups to include in ingestion."),(0,r.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"groups_pattern.allow"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to include in ingestion"),(0,r.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"groups_pattern.deny"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to exclude from ingestion."),(0,r.kt)("td",{parentName:"tr",align:null},"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"groups_pattern.ignoreCase"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,r.kt)("td",{parentName:"tr",align:null},"True")))))),(0,r.kt)(o.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "AzureADConfig",\n  "description": "Config to create a token and connect to Azure AD instance",\n  "type": "object",\n  "properties": {\n    "client_id": {\n      "title": "Client Id",\n      "description": "Application ID. Found in your app registration on Azure AD Portal",\n      "type": "string"\n    },\n    "tenant_id": {\n      "title": "Tenant Id",\n      "description": "Directory ID. Found in your app registration on Azure AD Portal",\n      "type": "string"\n    },\n    "client_secret": {\n      "title": "Client Secret",\n      "description": "Client secret. Found in your app registration on Azure AD Portal",\n      "type": "string"\n    },\n    "authority": {\n      "title": "Authority",\n      "description": "The authority (https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-client-application-configuration) is a URL that indicates a directory that MSAL can request tokens from.",\n      "type": "string"\n    },\n    "token_url": {\n      "title": "Token Url",\n      "description": "The token URL that acquires a token from Azure AD for authorizing requests.  This source will only work with v1.0 endpoint.",\n      "type": "string"\n    },\n    "redirect": {\n      "title": "Redirect",\n      "description": "Redirect URI.  Found in your app registration on Azure AD Portal.",\n      "default": "https://login.microsoftonline.com/common/oauth2/nativeclient",\n      "type": "string"\n    },\n    "graph_url": {\n      "title": "Graph Url",\n      "description": "[Microsoft Graph API endpoint](https://docs.microsoft.com/en-us/graph/use-the-api)",\n      "default": "https://graph.microsoft.com/v1.0",\n      "type": "string"\n    },\n    "azure_ad_response_to_username_attr": {\n      "title": "Azure Ad Response To Username Attr",\n      "description": "Which Azure AD User Response attribute to use as input to DataHub username mapping.",\n      "default": "userPrincipalName",\n      "type": "string"\n    },\n    "azure_ad_response_to_username_regex": {\n      "title": "Azure Ad Response To Username Regex",\n      "description": "A regex used to parse the DataHub username from the attribute specified in `azure_ad_response_to_username_attr`.",\n      "default": "(.*)",\n      "type": "string"\n    },\n    "azure_ad_response_to_groupname_attr": {\n      "title": "Azure Ad Response To Groupname Attr",\n      "description": "Which Azure AD Group Response attribute to use as input to DataHub group name mapping.",\n      "default": "displayName",\n      "type": "string"\n    },\n    "azure_ad_response_to_groupname_regex": {\n      "title": "Azure Ad Response To Groupname Regex",\n      "description": "A regex used to parse the DataHub group name from the attribute specified in `azure_ad_response_to_groupname_attr`.",\n      "default": "(.*)",\n      "type": "string"\n    },\n    "ingest_users": {\n      "title": "Ingest Users",\n      "description": "Whether users should be ingested into DataHub.",\n      "default": true,\n      "type": "boolean"\n    },\n    "ingest_groups": {\n      "title": "Ingest Groups",\n      "description": "Whether groups should be ingested into DataHub.",\n      "default": true,\n      "type": "boolean"\n    },\n    "ingest_group_membership": {\n      "title": "Ingest Group Membership",\n      "description": "Whether group membership should be ingested into DataHub. ingest_groups must be True if this is True.",\n      "default": true,\n      "type": "boolean"\n    },\n    "ingest_groups_users": {\n      "title": "Ingest Groups Users",\n      "description": "This option is useful only when `ingest_users` is set to False and `ingest_group_membership` to True. As effect, only the users which belongs to the selected groups will be ingested.",\n      "default": true,\n      "type": "boolean"\n    },\n    "users_pattern": {\n      "title": "Users Pattern",\n      "description": "regex patterns for users to filter in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "groups_pattern": {\n      "title": "Groups Pattern",\n      "description": "regex patterns for groups to include in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "filtered_tracking": {\n      "title": "Filtered Tracking",\n      "description": "If enabled, report will contain names of filtered users and groups.",\n      "default": true,\n      "type": "boolean"\n    },\n    "mask_group_id": {\n      "title": "Mask Group Id",\n      "description": "Whether workunit ID\'s for groups should be masked to avoid leaking sensitive information.",\n      "default": true,\n      "type": "boolean"\n    },\n    "mask_user_id": {\n      "title": "Mask User Id",\n      "description": "Whether workunit ID\'s for users should be masked to avoid leaking sensitive information.",\n      "default": true,\n      "type": "boolean"\n    }\n  },\n  "required": [\n    "client_id",\n    "tenant_id",\n    "client_secret",\n    "authority",\n    "token_url"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,r.kt)("p",null,"As a prerequisite, you should ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/toolkit/get-started/add-aad-app-registration"},"create a DataHub Application")," within the Azure AD Portal with the permissions\nto read your organization's Users and Groups. The following permissions are required, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," permission type:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Group.Read.All")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GroupMember.Read.All")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"User.Read.All"))),(0,r.kt)("p",null,"You can add a permission by navigating to the permissions tab in your DataHub application on the Azure AD portal. ",(0,r.kt)("img",{alt:"Azure AD API Permissions",src:n(84092).Z,width:"1291",height:"703"})),(0,r.kt)("p",null,"You can view the necessary endpoints to configure by clicking on the Endpoints button in the Overview tab. ",(0,r.kt)("img",{alt:"Azure AD Endpoints",src:n(80655).Z,width:"945",height:"258"})),(0,r.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.identity.azure_ad.AzureADSource")),(0,r.kt)("li",{parentName:"ul"},"Browse on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/identity/azure_ad.py"},"GitHub"))),(0,r.kt)("h2",{id:"questions"},"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring ingestion for Azure AD, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}g.isMDXComponent=!0},84092:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/azure_ad_api_permissions-67708693fa56b2ffbdaa90d4dbeb8d63.png"},80655:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/azure_ad_endpoints-a5d58f5ac2a14c903910390c9244b939.png"}}]);