(this.webpackJsonpdl=this.webpackJsonpdl||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),m=(n(11),n(1)),i=n.n(m),l=n(4),u=n(5),s=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],o=t[1],c=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={esis:t},e.next=4,fetch("http://mutanabi.herokuapp.com/st",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return a=e.sent,e.next=7,a.json();case 7:"still"===(r=e.sent).grade?(document.getElementById("ename").innerHTML=r.ename,document.getElementById("edutype").innerHTML="\u0627\u0644\u0637\u0627\u0644\u0628 \u062f\u0648\u0631 \u062b\u0627\u0646",document.getElementById("home").innerHTML=""):"DL"===r.edutype?(document.getElementById("edutype").innerHTML="\u062a\u0639\u0644\u0645 \u0639\u0646 \u0628\u0639\u062f \u0645\u0646 \u0627\u0644\u0645\u0646\u0632\u0644",document.getElementById("ename").innerHTML=r.ename,document.getElementById("home").innerHTML=r.home):(document.getElementById("edutype").innerHTML="\u062a\u0639\u0644\u0645 \u0648\u0627\u0642\u0639\u064a - \u0645\u0646 \u0627\u0644\u0645\u062f\u0631\u0633\u0629",document.getElementById("ename").innerHTML=r.ename,document.getElementById("home").innerHTML=r.home),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),document.getElementById("ename").innerHTML="\u064a\u0631\u062c\u064a \u0627\u0644\u062a\u0623\u0643\u062f \u0645\u0646 \u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0644\u0628",document.getElementById("edutype").innerHTML="",document.getElementById("home").innerHTML="";case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5"},"\u0645\u062f\u0631\u0633\u0629 \u0627\u0644\u0645\u062a\u0646\u0628\u064a "),r.a.createElement("h3",{className:"text-center mt-5"},"\u0627\u062f\u062e\u0644 \u0631\u0642\u0645 \u0627\u0644\u0637\u0627\u0644\u0628 \u0644\u0645\u0639\u0631\u0641\u0629 \u0646\u0648\u0639 \u0627\u0644\u062a\u0639\u0644\u0645"),r.a.createElement("div",{className:"group-form d-inline-flex p-2",style:{marginLeft:"35%",marginTop:"10%"}},r.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return c(n)}},"\u0627\u0628\u062d\u062b")),r.a.createElement("blockquote",{className:"blockquote text-center mt-5"},r.a.createElement("h5",{id:"ename"}),r.a.createElement("h5",{id:"home"}),r.a.createElement("h5",{id:"edutype"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.74f03b72.chunk.js.map