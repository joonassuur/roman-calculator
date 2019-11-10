(this["webpackJsonproman-calculator"]=this["webpackJsonproman-calculator"]||[]).push([[0],{169:function(e,t,r){e.exports=r(302)},278:function(e,t,r){},301:function(e,t,r){},302:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),u=r(33),l=r.n(u),c=r(105),s=r(55),o=r.n(s),i=r(99),p=r(41),h=r(42),v=r(43),f=r(45),m=r(47),d=r(303),b=function(e){return n.a.createElement(d.a,{onClick:e.calculate},"Calculate")},E=function(e){return n.a.createElement(d.a,{basic:!0,onClick:e.reset},"Reset")},C=r(34),y=r(310),k=r(54),S=r(311),g=(r(278),r(150)),I=r(151),X="^[IVXLCDMivxlcdm]*$",A="^(M{0,3})(D?C{0,3}|CM|CD)(L?X{0,3}|XC|XL)(V?I{0,3}|IX|IV)$",O={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},x={value1:"",value1Arr:[],value2:"",value2Arr:[],operator:"+",result:null,hold:!1,val1Empty:!1,val2Empty:!1,err:!1},V=function(e){function t(){var e,r;Object(p.a)(this,t);for(var a=arguments.length,n=new Array(a),u=0;u<a;u++)n[u]=arguments[u];return(r=Object(v.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state=x,r.handleValue=function(e,t){e.target.value.match(X)&&("Input 1"===t.placeholder&&r.setState({value1:t.value.toUpperCase()},(function(){return r.convertToArr(1)})),"Input 2"===t.placeholder&&r.setState({value2:t.value.toUpperCase()},(function(){return r.convertToArr(2)})))},r.convertToArr=function(e){r.setState({value1Arr:Array.from(r.state.value1),hold:!1,err:!1}),r.setState({value2Arr:Array.from(r.state.value2),hold:!1,err:!1}),1===e&&r.setState({val1Empty:!1}),2===e&&r.setState({val2Empty:!1})},r.convertToArabic=function(e){e.preventDefault();var t=r.state,a=t.value1,n=t.value2,u=t.value1Arr,l=t.value2Arr;if(t.hold)r.calculate();else{for(var c=[],s=[],o=[],i=[],p=0;p<u.length;p++)"I"===u[p]&&"V"===u[p+1]&&(u[p]=u[p]+u[p+1],o.push(p+1)),"I"===u[p]&&"X"===u[p+1]&&(u[p]=u[p]+u[p+1],o.push(p+1)),"X"===u[p]&&"L"===u[p+1]&&(u[p]=u[p]+u[p+1],o.push(p+1)),"X"===u[p]&&"C"===u[p+1]&&(u[p]=u[p]+u[p+1],o.push(p+1)),"C"===u[p]&&"D"===u[p+1]&&(u[p]=u[p]+u[p+1],o.push(p+1)),"C"===u[p]&&"M"===u[p+1]&&(u[p]=u[p]+u[p+1],o.push(p+1));for(var h=0;h<l.length;h++)"I"===l[h]&&"V"===l[h+1]&&(l[h]=l[h]+l[h+1],i.push(h+1)),"I"===l[h]&&"X"===l[h+1]&&(l[h]=l[h]+l[h+1],i.push(h+1)),"X"===l[h]&&"L"===l[h+1]&&(l[h]=l[h]+l[h+1],i.push(h+1)),"X"===l[h]&&"C"===l[h+1]&&(l[h]=l[h]+l[h+1],i.push(h+1)),"C"===l[h]&&"D"===l[h+1]&&(l[h]=l[h]+l[h+1],i.push(h+1)),"C"===l[h]&&"M"===l[h+1]&&(l[h]=l[h]+l[h+1],i.push(h+1));for(var v=u.length-1;v>=0;--v)for(var f=0;f<o.length;f++)v===o[f]&&u.splice(v,1);for(var m=l.length-1;m>=0;--m)for(var d=0;d<i.length;d++)m===i[d]&&l.splice(m,1);u.forEach((function(e){return c.push(O[e])})),l.forEach((function(e){return s.push(O[e])})),r.setState({result:null,value1Arr:c,value2Arr:s},(function(){if(""===a||""===n)return""===a&&r.setState({val1Empty:!0}),void(""===n&&r.setState({val2Empty:!0}));r.calculate()}))}},r.calculate=Object(i.a)(o.a.mark((function e(){var t,a,n,u,l,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.state,a=t.value1,n=t.value2,u=t.value1Arr,l=t.value2Arr,c=t.operator,s=function(e,t){return e+t},r.doCalc=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u.length<1||l.length<1)){e.next=2;break}return e.abrupt("return");case 2:if(!a.match(A)||!n.match(A)){e.next=18;break}e.t0=c,e.next="+"===e.t0?6:"-"===e.t0?8:"*"===e.t0?10:"/"===e.t0?12:14;break;case 6:return r.setState({result:u.reduce(s)+l.reduce(s)}),e.abrupt("break",15);case 8:return r.setState({result:u.reduce(s)-l.reduce(s)}),e.abrupt("break",15);case 10:return r.setState({result:u.reduce(s)*l.reduce(s)}),e.abrupt("break",15);case 12:return r.setState({result:u.reduce(s)/l.reduce(s)}),e.abrupt("break",15);case 14:return e.abrupt("return");case 15:r.setState({hold:!0}),e.next=20;break;case 18:return r.setState({result:null,err:!0},(function(){return r.displayError()})),e.abrupt("return");case 20:case"end":return e.stop()}}),e)}))),e.next=5,r.doCalc();case 5:if(!(r.state.result>3999||r.state.err)){e.next=8;break}return r.setState({err:"OOR"},(function(){return r.displayError()})),e.abrupt("return");case 8:r.convertToRoman();case 9:case"end":return e.stop()}}),e)}))),r.convertToRoman=function(){var e=parseInt(r.state.result),t=e.toString(),a=Array.from(t),n=[],u=[];if(e<1)r.setState({err:"OOR"},(function(){return r.displayError()}));else{if(a.reverse().forEach((function(e){n.push(Number(e))})),n[0]<4)for(var l=0;l<n[0];l++)u.push("I");if(4===n[0]&&u.push("IV"),n[0]>=5&&n[0]<9){for(var c=0;c<n[0]-5;c++)u.push("I");u.push("V")}if(9===n[0]&&u.push("IX"),n[1]<4)for(var s=0;s<n[1];s++)u.push("X");if(4===n[1]&&u.push("XL"),n[1]>=5&&n[1]<9){for(var o=0;o<n[1]-5;o++)u.push("X");u.push("L")}if(9===n[1]&&u.push("XC"),n[2]<4)for(var i=0;i<n[2];i++)u.push("C");if(4===n[2]&&u.push("CD"),n[2]>=5&&n[2]<9){for(var p=0;p<n[2]-5;p++)u.push("C");u.push("D")}if(9===n[2]&&u.push("CM"),n[3]<4)for(var h=0;h<n[3];h++)u.push("M");var v;u.length>0&&(v=u.reverse().reduce((function(e,t){return e+t}))),r.props.showErr(r.state.err),r.state.err||r.props.printResult(v)}},r.displayError=function(){r.state.err&&r.props.showErr(r.state.err)},r.operatorChange=function(e,t){r.setState({operator:t.value,err:!1})},r.handleReset=function(){r.setState(x)},r}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.value1,r=e.value2,a=e.operator,u=[{key:1,text:n.a.createElement(C.a,{link:!0,name:"plus"}),value:"+"},{key:2,text:n.a.createElement(C.a,{link:!0,name:"minus"}),value:"-"},{key:3,text:n.a.createElement(C.a,{link:!0,name:"times"}),value:"*"},{key:4,text:n.a.createElement(g.a,{icon:I.a}),value:"/"}];return n.a.createElement("form",{onSubmit:this.calculate},n.a.createElement("div",{className:"inputs-container"},n.a.createElement("div",{className:"input-container"},n.a.createElement(y.a,{onChange:this.handleValue,value:t,placeholder:"Input 1"}),n.a.createElement(k.a,{basic:!0,color:"red",pointing:!0,style:{display:this.state.val1Empty?"block":"none"}},"Please enter a value")),n.a.createElement(S.a,{value:a,selection:!0,compact:!0,onChange:this.operatorChange,options:u}),n.a.createElement("div",{className:"input-container"},n.a.createElement(y.a,{onChange:this.handleValue,value:r,placeholder:"Input 2"}),n.a.createElement(k.a,{basic:!0,color:"red",pointing:!0,style:{display:this.state.val2Empty?"block":"none"}},"Please enter a value"))),n.a.createElement("div",{className:"btn-container"},n.a.createElement(E,{reset:this.handleReset}),n.a.createElement(b,{calculate:this.convertToArabic})))}}]),t}(n.a.Component),j=(r(301),function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),r=t[0],u=t[1],l=Object(a.useState)(!1),s=Object(c.a)(l,2),o=s[0],i=s[1];return n.a.createElement("div",{className:"main-container"},n.a.createElement(V,{printResult:function(e){u((function(){return e}))},showErr:function(e){i((function(){return e}))}}),n.a.createElement("div",{className:"result-container"},"OOR"===o?"Out of Range":o?"Please enter a valid sequence of characters":r))});l.a.render(n.a.createElement(j,null),document.querySelector("#root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.f3734d4c.chunk.js.map