"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{8266:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(9434),r=a(9439),c=a(2791),s=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",a=crypto.getRandomValues(new Uint8Array(e));e--;){var n=63&a[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t},o=a(5772),l=function(e){return e.contacts.items},u=function(e){return e.filter},i=a(184);var m=function(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),a=t[0],u=t[1],m=(0,c.useState)(""),d=(0,r.Z)(m,2),h=d[0],f=d[1],p=(0,n.v9)(l),b=(0,n.I0)(),v=function(e){switch(e.currentTarget.name){case"name":u(e.currentTarget.value);break;case"number":f(e.currentTarget.value)}};return(0,i.jsxs)("form",{className:"contact-form",autoComplete:"off",onSubmit:function(e){if(e.preventDefault(),p.some((function(e){return e.name.toLocaleLowerCase()===a.toLocaleLowerCase()})))alert("".concat(a," is already in contacts"));else{var t={id:s(9),name:a,number:h};b((0,o.uK)(t)),u(""),f("")}},children:[(0,i.jsx)("label",{className:"contact-form_label",htmlFor:"name",children:"Name"}),(0,i.jsx)("input",{className:"contact-form_input",type:"text",name:"name",placeholder:"Full name",value:a,onChange:v,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,i.jsx)("label",{className:"contact-form_label",htmlFor:"number",children:"Tel.Number"}),(0,i.jsx)("input",{className:"contact-form_input",type:"tel",name:"number",placeholder:"Tel. number",value:h,onChange:v,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,i.jsx)("button",{className:"contact-form_button-submit",type:"submit",children:"Add contact"})]})},d=a(5263),h=function(){var e=(0,n.v9)(u),t=(0,n.I0)();return(0,i.jsxs)("label",{className:"filter-header",children:["Find contacts by name"," ",(0,i.jsx)("input",{className:"filter-input",type:"text",value:e,onChange:function(e){t((0,d.WB)(e.currentTarget.value))}})]})},f=function(){var e=(0,n.v9)(l),t=(0,n.v9)(u),a=(0,n.I0)(),r=null===t||void 0===t?void 0:t.toLocaleLowerCase(),c=e.filter((function(e){return e.name.toLocaleLowerCase().includes(r)}));return(0,i.jsx)("div",{children:0===c.length||(0,i.jsx)("ul",{className:"contact-list-block",children:c.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,i.jsxs)("li",{className:"contact-unit",children:[(0,i.jsxs)("p",{className:"contact-list-text",children:[n,": ",r]}),(0,i.jsx)("button",{type:"button",onClick:function(){return e=t,void a((0,o.GK)(e));var e},className:"delete-contact-button",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]},t)}))})})},p=function(){var e=(0,n.I0)();return(0,c.useEffect)((function(){e((0,o.yF)())}),[e]),(0,i.jsxs)("section",{className:"contact-container",children:[(0,i.jsx)("h1",{className:"contact-header",children:"Phonebook"}),(0,i.jsx)(m,{}),(0,i.jsx)("h2",{className:"contact-header",children:"Contacts"}),(0,i.jsx)(h,{}),(0,i.jsx)(f,{})]})}}}]);
//# sourceMappingURL=266.f6c51080.chunk.js.map