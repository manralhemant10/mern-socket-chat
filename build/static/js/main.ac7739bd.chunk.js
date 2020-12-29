(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{114:function(e,t){},119:function(e,t,a){},120:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n,c=a(0),s=a.n(c),r=a(59),o=a.n(r),l=a(18),m=a(1),i=a(8),u=(a(72),function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),m=o[0],u=o[1];return s.a.createElement("div",{className:"joinOuterContainer"},s.a.createElement("div",{className:"joinInnerContainer"},s.a.createElement("h1",{className:"heading"},"Join"),s.a.createElement("div",null,s.a.createElement("input",{placeholder:"",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),s.a.createElement("div",null,s.a.createElement("input",{placeholder:"",className:"joinInput mt-20",type:"text",onChange:function(e){return u(e.target.value)}})),s.a.createElement(l.b,{onClick:function(e){return a&&m?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(m)},s.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign In"))))}),A=a(66),E=a(61),f=a.n(E),g=a(62),p=a.n(g),d=a(63),h=a.n(d),N=a(64),b=a.n(N),j=(a(119),function(e){var t=e.room;return s.a.createElement("div",{className:"infoBar"},s.a.createElement("div",{className:"leftInnerContainer"},s.a.createElement("img",{className:"onlineIcon",src:h.a,alt:"online icon"}),s.a.createElement("h3",null,t)),s.a.createElement("div",{className:"rightInnerContainer"},s.a.createElement("a",{href:"/"},s.a.createElement("img",{src:b.a,alt:"close icon"}))))}),v=(a(120),function(e){var t=e.message,a=e.setMessage,n=e.sendMessage;return s.a.createElement("form",{className:"fomr"},s.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message..",value:t,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),s.a.createElement("button",{className:"sendButton",onClick:function(e){return n(e)}},"send"))}),C=a(65),O=a.n(C),I=(a(141),a(36)),S=a.n(I),x=function(e){var t=e.message,a=t.user,n=t.text,c=!1,r=e.name.trim().toLowerCase();return a===r&&(c=!0),c?s.a.createElement("div",{className:"messageContainer justifyEnd"},s.a.createElement("p",{className:"sendText pr-10"},r),s.a.createElement("div",{className:"messageBox backgroundBlue"},s.a.createElement("p",{className:"messageText colorWhite"},S.a.emojify(n)))):s.a.createElement("div",{className:"messageContainer justifyStart"},s.a.createElement("div",{className:"messageBox backgroundLight"},s.a.createElement("p",{className:"messageText colorDark"},S.a.emojify(n))),s.a.createElement("p",{className:"sendText pl-10"},a))},y=(a(142),function(e){var t=e.messages,a=e.name;return s.a.createElement(O.a,{className:"messages"},t.map((function(e,t){return s.a.createElement("div",{key:t},s.a.createElement(x,{message:e,name:a}))})))}),B=(a(143),function(e){var t=e.location,a=Object(c.useState)(""),r=Object(i.a)(a,2),o=r[0],l=r[1],m=Object(c.useState)(""),u=Object(i.a)(m,2),E=u[0],g=u[1],d=Object(c.useState)(""),h=Object(i.a)(d,2),N=h[0],b=h[1],C=Object(c.useState)([]),O=Object(i.a)(C,2),I=O[0],S=O[1];Object(c.useEffect)((function(){var e=f.a.parse(t.search),a=e.name,c=e.room;return n=p()("http://localhost:5000"),l(a),g(c),n.emit("join",{name:a,room:c},(function(){})),function(){n.emit("disconnect"),n.off()}}),["http://localhost:5000",t.search]),Object(c.useEffect)((function(){n.on("message",(function(e){S([].concat(Object(A.a)(I),[e]))}))}),[I]);return s.a.createElement("div",{className:"outerContainer"},s.a.createElement("div",{className:"container"},s.a.createElement(j,{room:E}),s.a.createElement(y,{messages:I,name:o}),s.a.createElement(v,{message:N,setMessage:b,sendMessage:function(e){e.preventDefault(),N&&n.emit("sendMessage",N,(function(){return b("")}))}})))}),M=function(){return s.a.createElement(l.a,null,s.a.createElement(m.a,{path:"/",exact:!0,component:u}),s.a.createElement(m.a,{path:"/chat",component:B}))};o.a.render(s.a.createElement(M,null),document.getElementById("root"))},63:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},64:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},67:function(e,t,a){e.exports=a(145)},72:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.ac7739bd.chunk.js.map