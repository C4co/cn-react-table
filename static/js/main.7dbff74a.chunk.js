(this["webpackJsonpcn-react-table-example"]=this["webpackJsonpcn-react-table-example"]||[]).push([[0],{1863:function(e,n,t){},1864:function(e,n,t){"use strict";t.r(n);t(49);var a,r,c,o,l,i,b,m,d,s,p,u,F,h,f,j,O,x,g,y,E,k,w,v,A,S,C,I,T,z,N,B,H,P,J,D,R,q,G=t(0),K=t.n(G),L=t(36),M=t.n(L),Q=t(1),U=t(7),V=t(13),W=t(3),X=t(4),Y=W.b.div(y||(y=a||(a=Object(Q.a)(["\n  width: 100%;\n  background-color: ",";\n"]))),"#FFFFFF"),Z=W.b.div(E||(E=r||(r=Object(Q.a)(["\n  width: 100%;\n  overflow-x: auto;\n  border: solid "," 1px;\n  font-size: 1em;\n  height: 100%;\n  position: relative;\n\n  ","\n"]))),Object(X.a)(.15,"#FFFFFF"),(function(e){return e.maxHeight&&Object(W.a)(k||(k=c||(c=Object(Q.a)(["\n    max-height: ","px;\n  "]))),String(e.maxHeight))})),$=W.b.table(w||(w=o||(o=Object(Q.a)(["\n  font-family: inherit;\n  width: 100%;\n  background-color: ",";\n  border-spacing: 0px;\n  margin: 0 auto;\n  border-collapse: separate;\n  font-size: 0.9em;\n  position: relative;\n"]))),"#FFFFFF"),_=W.b.thead(v||(v=l||(l=Object(Q.a)(["\n  width: 100%;\n  top: 0;\n"])))),ee=W.b.tfoot(A||(A=i||(i=Object(Q.a)(["\n  width: 100%;\n  top: 0;\n"])))),ne=W.b.th(S||(S=b||(b=Object(Q.a)(["\n  padding: 10px;\n  border-bottom: solid "," 1px;\n  position: sticky;\n  top: 0;\n  text-align: left;\n  background: ",";\n  z-index: 1000;\n  color: ",";\n\n  ","\n"]))),Object(X.a)(.15,"#FFFFFF"),"#FFFFFF",Object(X.a)(1,"#FFFFFF"),(function(e){return e.footer&&Object(W.a)(C||(C=m||(m=Object(Q.a)(["\n    bottom: 0px;\n    border-bottom: none;\n    border-top: solid "," 1px;\n  "]))),Object(X.a)(.15,"#FFFFFF"))})),te=W.b.tbody(I||(I=d||(d=Object(Q.a)(["\n  width: 100%;\n"])))),ae=W.b.tr(T||(T=s||(s=Object(Q.a)(["\n  color: ",";\n  width: 100%;\n\n  &:nth-child(even) {\n    background-color: ",";\n  }\n\n  ","\n"]))),Object(X.a)(.7,"#FFFFFF"),Object(X.a)(.04,"#FFFFFF"),(function(e){return e.selected&&Object(W.a)(z||(z=p||(p=Object(Q.a)(["\n    background-color: "," !important;\n    color: ",";\n  "]))),Object(X.b)("#0e60dc",.15),Object(X.a)(1,"#FFFFFF"))})),re=W.b.td(N||(N=u||(u=Object(Q.a)(["\n  padding: 8px 10px;\n  border-right: solid "," 1px;\n\n  &:last-child{\n    border-right: none;\n  }\n\n  ","\n"]))),Object(X.a)(.15,"#FFFFFF"),(function(e){return e.selected&&Object(W.a)(B||(B=F||(F=Object(Q.a)(["\n    border-right: solid "," 1px;\n  "]))),Object(X.b)("#0e60dc",.4))})),ce=W.b.div(H||(H=h||(h=Object(Q.a)(["\n  width: 20px;\n  height: 20px;\n  border: solid "," 2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 30px;\n\n  ","\n\n  ","\n"]))),Object(X.a)(.4,"#FFFFFF"),(function(e){return e.selectAll&&Object(W.a)(P||(P=f||(f=Object(Q.a)(["\n    background: ",";\n    border: solid ",' 2px;\n\n    &:before {\n      content: " ";\n      width: 8px;\n      height: 3px;\n      background: ',";\n    }\n  "]))),"#0e60dc","#0e60dc","#FFFFFF")}),(function(e){return e.selected&&Object(W.a)(J||(J=j||(j=Object(Q.a)(["\n    background: ",";\n    border: solid "," 2px;\n  "]))),"#0e60dc","#0e60dc")})),oe=W.b.footer(D||(D=O||(O=Object(Q.a)(["\n  padding: 5px;\n  position: relative;\n  top: -1px;\n  display: flex;\n  gap: 20px;\n  border: solid "," 1px;\n  justify-content: center;\n  align-items: center;\n"]))),Object(X.a)(.15,"#FFFFFF")),le=W.b.span(R||(R=x||(x=Object(Q.a)(["\n  font-weight: bold;\n  color: black;\n"])))),ie=W.b.button(q||(q=g||(g=Object(Q.a)(["\n  height: 36px;\n  width: 36px;\n  padding-bottom: 3px;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 20px;\n  border-radius: 30px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  background: white;\n  border: solid "," 1px;\n"]))),Object(X.a)(.3,"#FFFFFF"));function be(e){var n=Object.keys(e.data[0]),t=Object(G.useState)(new Set),a=Object(V.a)(t,2),r=a[0],c=a[1],o=Object(G.useState)(0),l=Object(V.a)(o,2),i=l[0],b=l[1],m=Object(G.useState)(function(e,n){if(n<=0)throw"Invalid chunk size";for(var t=[],a=0,r=e.length;a<r;a+=n)t.push(e.slice(a,a+n));return t}(e.data,e.limitOfItems)),d=Object(V.a)(m,1)[0];function s(){r.size?c(new Set):c(new Set(Object(U.a)(Array.from(e.data))))}return Object(G.useEffect)((function(){e.onSelectItems&&e.onSelectItems(Array.from(r))})),K.a.createElement(Y,null,K.a.createElement(Z,{maxHeight:e.maxHeigth||0},K.a.createElement($,null,K.a.createElement(_,null,K.a.createElement("tr",null,e.dynamicTable&&K.a.createElement(ne,null,K.a.createElement(ce,{selectAll:Boolean(r.size),onClick:e.dynamicTable?s:void 0})),n.map((function(e,n){return K.a.createElement(ne,{key:n}," ",e," ")})))),K.a.createElement(te,null,d[i].map((function(n,t){return K.a.createElement(ae,{selected:r.has(n),onClick:e.dynamicTable?function(){!function(e){var n=r;r.has(e)?(n.delete(e),c(new Set(Object(U.a)(Array.from(n))))):c(new Set(Object(U.a)(Array.from(n))).add(e))}(n)}:void 0,key:t},e.dynamicTable&&K.a.createElement(re,{selected:r.has(n)},K.a.createElement(ce,{selected:r.has(n)})),Object.entries(n).map((function(e,t){return K.a.createElement(re,{selected:r.has(n),"data-label":e[0]+":",key:t},e[1])})))}))),K.a.createElement(ee,null,K.a.createElement("tr",null,e.dynamicTable&&K.a.createElement(ne,{footer:!0},K.a.createElement(ce,{selectAll:Boolean(r.size),onClick:s})),n.map((function(e,n){return K.a.createElement(ne,{footer:!0,key:n}," ",e," ")})))))),K.a.createElement(oe,null,K.a.createElement(ie,{onClick:function(){i>0&&b(i-1)}}," ","\xab"," "),K.a.createElement(le,null," ",i+1," / ",d.length," "),K.a.createElement(ie,{onClick:function(){i<d.length-1&&b(i+1)}}," ","\xbb"," ")))}be.defaultProps={limitOfItems:25};var me,de,se=t(6),pe=t.n(se),ue=t(2),Fe=t(47),he=[],fe=Object(U.a)(Array.from(Array(1e3).keys())),je=ue.c.img(me||(me=Object(Q.a)(["\n  border-radius: 200px;\n  width: 40px;\n  height: 40px;\n"]))),Oe=ue.c.div(de||(de=Object(Q.a)(["\n  padding: 50px 10px;\n  max-width: 1200px;\n  margin: 0 auto;\n"])));fe.forEach((function(){he.push({Avatar:K.a.createElement(je,{src:pe.a.image.avatar()}),Name:K.a.createElement("b",null," ",pe.a.name.findName()," "),Email:pe.a.internet.email(),Phone:pe.a.phone.phoneNumber(),City:pe.a.address.city(),Company:pe.a.company.companyName(),Commerce:pe.a.commerce.department()})}));var xe=function(){return K.a.createElement(Oe,null,K.a.createElement("h2",null," Basic table "),K.a.createElement("br",null),K.a.createElement(be,{data:he}),K.a.createElement("br",null),K.a.createElement(Fe.a,{lang:"javascript",theme:"dark",code:'\nimport React from \'react\'\nimport { Table } from \'cn-react-table\'\nimport Faker from \'faker\'\nimport styled from \'styled-components\'\n\nconst data: Object[] = []\nconst items: number[] = [...Array.from(Array(1000).keys())]\n\nconst Image = styled.img`\n  border-radius: 200px;\n  width: 40px;\n  height: 40px;\n`\n\nitems.forEach(() => {\n  data.push({\n    "Avatar": <Image src={Faker.image.avatar()}/>,\n    "Name": <b> {Faker.name.findName()} </b>,\n    "Email": Faker.internet.email(),\n    "Phone": Faker.phone.phoneNumber(),\n    "City": Faker.address.city(),\n    "Company": Faker.company.companyName(),\n    "Commerce": Faker.commerce.department()\n  })\n})\n\nfunction App(){\n  return (\n    // cn-react-table\n    <Table data={data} />\n  )\n}\n'}),K.a.createElement("br",null),K.a.createElement("br",null),K.a.createElement("br",null),K.a.createElement("br",null),K.a.createElement("br",null),K.a.createElement("h2",null," Dynamic Table "),K.a.createElement("br",null),K.a.createElement(be,{data:he,dynamicTable:!0,onSelectItems:function(e){console.log(e)}}))};t(1863);M.a.render(K.a.createElement(xe,null),document.getElementById("root"))},48:function(e,n,t){e.exports=t(1864)}},[[48,1,2]]]);
//# sourceMappingURL=main.7dbff74a.chunk.js.map