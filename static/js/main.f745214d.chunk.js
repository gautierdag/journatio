(this.webpackJsonpjourno=this.webpackJsonpjourno||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),c=n.n(r),s=n(4),o=n.n(s),i=(n(15),n(16),n(8)),u=n(5),l=n(6),h=n(2),j=n(9),d=n(7);n(17);function p(t,e){return e?p(e,t%e):t}var v=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={value:100,results:["1 in 1"],error:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(t){var e,n=parseInt(t.target.value);if(e=t.target.value,!/^[1-9]\d{0,2}$/.test(e)||n>100||n<0)this.setState({value:t.target.value,results:[],error:"Invalid Value."});else{for(var a=[function(t){var e=p(t,100);return e>1?"".concat(t/e," in ").concat(100/e):"".concat(t," in ",100)}(n)],r=function(){for(var t={},e=0,n=[10,9,8,7,6,5,4,3,2];e<n.length;e++)for(var a=n[e],r=1;r<a;r++)t[r/a]="".concat(r," in ").concat(a);return t}(),c=Object.keys(r).sort(),s=!0,o=0;o<c.length;o++)c[o]===(n/100).toString()&&(o<c.length-1&&a.push("Less than ".concat(r[c[o+1]]," (").concat((100*parseFloat(c[o+1])).toFixed(1),"%)")),o>0&&a.push("More than ".concat(r[c[o-1]]," (").concat((100*parseFloat(c[o-1])).toFixed(1),"%)")),s=!1),parseFloat(c[o])>n/100&&s&&(a.push("Less than ".concat(r[c[o]]," (").concat((100*parseFloat(c[o])).toFixed(1),"%)")),o>0&&a.push("More than ".concat(r[c[o-1]]," (").concat((100*parseFloat(c[o-1])).toFixed(1),"%)")),s=!1);this.setState({value:t.target.value,results:a,error:""})}}},{key:"render",value:function(){var t,e=[],n=Object(i.a)(this.state.results);try{for(n.s();!(t=n.n()).done;){var r=t.value;e.push(Object(a.jsxs)("div",{children:[r,Object(a.jsx)("br",{})]}))}}catch(c){n.e(c)}finally{n.f()}return Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{value:this.state.value,onChange:this.handleChange,type:"text",autoFocus:!0,size:3,maxLength:3})," ","%"]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{style:{color:"red"},children:this.state.error}),e]})]})}}]),n}(c.a.Component);var b=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("p",{children:"This calculator spits out best estimated ratio for publishing."}),Object(a.jsx)("p",{children:"Enter percentage that you want to convert:"}),Object(a.jsx)(v,{})]})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),r(t),c(t),s(t)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),f()}},[[18,1,2]]]);
//# sourceMappingURL=main.f745214d.chunk.js.map