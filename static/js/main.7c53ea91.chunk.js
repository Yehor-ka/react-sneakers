(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{18:function(e,t,c){e.exports={overlay:"Drawer_overlay__182F9",overlayVisible:"Drawer_overlayVisible__1gFQo",drawer:"Drawer_drawer__F0sl9",items:"Drawer_items__S0ZHV"}},20:function(e,t,c){e.exports={card:"Card_card__1GGER",plus:"Card_plus__31-ay",favorite:"Card_favorite__1lQE_"}},41:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(34),s=c.n(n),i=c(14),o=(c(41),c(42),c(11)),l=c(13),d=c(5),j=c.n(d),u=c(12),b=c(4),f=c(2),x=a.a.createContext({}),m=c(1);var h=function(e){var t=e.onCartClick,c=a.a.useContext(x).cartItems.reduce((function(e,t){return e+t.price}),0);return Object(m.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(m.jsx)(i.b,{to:"/",children:Object(m.jsxs)("div",{className:"d-flex align-center",children:[Object(m.jsx)("img",{className:"mr-15",width:40,height:40,src:"img/logo.png",alt:"Logotype"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(m.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(m.jsxs)("ul",{className:"d-flex cu-p",children:[Object(m.jsxs)("li",{onClick:t,className:"mr-30",children:[Object(m.jsx)("img",{className:"mr-10",width:18,height:18,src:"img/Cart.svg",alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(m.jsxs)("span",{children:[c," \u0433\u0440\u043d."]})]}),Object(m.jsx)("li",{className:"mr-30",children:Object(m.jsx)(i.b,{to:"/favorites",children:Object(m.jsx)("img",{className:"mr-10",width:18,height:18,src:"img/heart.svg",alt:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/orders",children:Object(m.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z",fill:"#9B9B9B"})})})})]})]})};var p=function(e){var t=e.title,c=e.description,r=e.image,n=a.a.useContext(x).setCartOpen;return Object(m.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(m.jsx)("img",{src:r,alt:"Box",className:"mb-20"}),Object(m.jsx)("h2",{children:t}),Object(m.jsx)("p",{className:"opacity-6",children:c}),Object(m.jsxs)("button",{onClick:function(){return n(!1)},className:"greenButton greenBtn",children:[Object(m.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},O=c(6),v=c.n(O),g=c(18),C=c.n(g);var k=function(e){var t=e.onClose,c=e.sneakers,r=void 0===c?[]:c,n=e.onRemove,s=e.opened,i=a.a.useState(!1),o=Object(b.a)(i,2),l=o[0],d=o[1],f=a.a.useState(0),h=Object(b.a)(f,2),O=h[0],g=h[1],k=a.a.useState(!1),w=Object(b.a)(k,2),N=w[0],y=w[1],_=a.a.useContext(x),I=_.cartItems,S=_.setCartItems,A=I.reduce((function(e,t){return e+t.price}),0),B=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,v.a.post("https://60d9f2935f7bf1001754788f.mockapi.io/orders",{items:I});case 4:t=e.sent,c=t.data,g(c.id),d(!0),S([]),r=0;case 10:if(!(r<I.length)){e.next=19;break}return a=I[r],e.next=14,v.a.delete("https://60d9f2935f7bf1001754788f.mockapi.io/cart/"+a.id);case 14:return e.next=16,new Promise((function(e){return setTimeout(e,1e3)}));case 16:r++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u0430 :(");case 24:y(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"".concat(C.a.overlay," ").concat(s?C.a.overlayVisible:""),children:Object(m.jsxs)("div",{className:"".concat(C.a.drawer," d-flex flex-column"),children:[Object(m.jsxs)("h2",{className:"d-flex justify-between mb-30",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430"," ",Object(m.jsx)("img",{onClick:t,className:"removeBtn cu-p",src:"img/btnRemove.svg",alt:"Remove"})]}),r.length>0?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:C.a.items,children:r.map((function(e){return Object(m.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(m.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:"cartItemImg"}),Object(m.jsxs)("div",{className:"mr-20",children:[Object(m.jsx)("p",{className:"mb-5",children:e.title}),Object(m.jsxs)("b",{children:[e.price," \u0433\u0440\u043d."]})]}),Object(m.jsx)("img",{onClick:function(){return n(e.id)},className:"removeBtn",src:"img/btnRemove.svg",alt:"Remove"})]})}))}),Object(m.jsxs)("div",{className:"cartTotalBlock",children:[Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{className:"d-flex",children:[Object(m.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(m.jsx)("div",{}),Object(m.jsxs)("b",{children:[A," \u0433\u0440\u043d."]})]}),Object(m.jsxs)("li",{className:"d-flex",children:[Object(m.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(m.jsx)("div",{}),Object(m.jsxs)("b",{children:[.05*A," \u0433\u0440\u043d."]})]})]}),Object(m.jsxs)("button",{disabled:N,onClick:B,className:"greenBtn",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(m.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})," "]})]})]}):Object(m.jsx)(p,{title:l?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:l?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(O," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0432 \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u0443\u044e \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437",image:l?"img/complete-order.jpg":"img/empty-cart.jpg"})]})})},w=c(36),N=c(20),y=c.n(N);var _=function(e){var t=e.title,c=e.price,r=e.imageUrl,n=e.onPlus,s=e.id,i=e.onFavorite,o=e.favorited,l=void 0!==o&&o,d=e.loading,j=void 0!==d&&d,u=a.a.useContext(x).isItemAdded,f=a.a.useState(l),h=Object(b.a)(f,2),p=h[0],O=h[1],v={id:s,parentId:s,title:t,price:c,imageUrl:r};return Object(m.jsx)("div",{className:y.a.card,children:j?Object(m.jsxs)(w.a,{speed:1,width:150,height:225,viewBox:"0 0 150 205",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(m.jsx)("rect",{x:"0",y:"420",rx:"0",ry:"0",width:"85",height:"36"}),Object(m.jsx)("rect",{x:"126",y:"418",rx:"20",ry:"20",width:"144",height:"39"}),Object(m.jsx)("rect",{x:"147",y:"131",rx:"0",ry:"0",width:"1",height:"0"}),Object(m.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"150",height:"91"}),Object(m.jsx)("rect",{x:"0",y:"107",rx:"5",ry:"5",width:"150",height:"15"}),Object(m.jsx)("rect",{x:"0",y:"126",rx:"5",ry:"5",width:"93",height:"15"}),Object(m.jsx)("rect",{x:"0",y:"178",rx:"5",ry:"5",width:"80",height:"24"}),Object(m.jsx)("rect",{x:"118",y:"170",rx:"5",ry:"5",width:"32",height:"32"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:y.a.favorite,children:i&&Object(m.jsx)("img",{onClick:function(){i(v),O(!p)},src:p?"img/liked.svg":"img/unliked.svg",alt:"Unliked"})}),Object(m.jsx)("img",{width:133,height:112,src:r,alt:"Sneakers"}),Object(m.jsx)("h5",{children:t}),Object(m.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(m.jsxs)("div",{className:"d-flex flex-column",children:[Object(m.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(m.jsxs)("b",{children:[c," \u0433\u0440\u043d."]})]}),n&&Object(m.jsx)("img",{className:y.a.plus,onClick:function(){n(v)},src:u(s)?"img/checked.svg":"img/plus.svg",alt:"Plus"})]})]})})};var I=function(e){var t=e.items,c=e.searchValue,r=e.onChangeSearchInput,a=e.onAddToFavorite,n=e.onAddToCart,s=e.isLoading;return Object(m.jsxs)("div",{className:"content p-40",children:[Object(m.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(m.jsx)("h1",{children:c?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(c,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(m.jsxs)("div",{className:"search-block d-flex",children:[Object(m.jsx)("img",{src:"img/search.svg",alt:"Search"}),Object(m.jsx)("input",{onChange:r,value:c,placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(m.jsx)("div",{className:"d-flex flex-wrap",children:(s?Object(l.a)(Array(8)):t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))).map((function(e,t){return Object(m.jsx)(_,Object(o.a)(Object(o.a)({onPlus:function(e){return n(e)},onFavorite:function(e){return a(e)}},e),{},{loading:s}),t)}))})]})};var S=function(){var e=a.a.useContext(x),t=e.favorites,c=e.onAddToFavorite;return Object(m.jsxs)("div",{className:"content p-40",children:[Object(m.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(m.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(m.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e){return Object(m.jsx)(_,Object(o.a)({favorited:!0,onFavorite:function(e){return c(e)}},e),e.id)}))})]})};var A=function(){var e=a.a.useState([]),t=Object(b.a)(e,2),c=t[0],r=t[1],n=a.a.useContext(x),s=(n.onAddToCart,n.onAddToFavorite,a.a.useState(!0)),i=Object(b.a)(s,2),d=i[0],f=i[1];return a.a.useEffect((function(){Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://60d9f2935f7bf1001754788f.mockapi.io/orders");case 3:t=e.sent,c=t.data,r(c.reduce((function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t.items))}),[])),f(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u044b\u0432\u043e\u0434\u0430 \u0437\u0430\u043a\u0430\u0437\u043e\u0432");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(m.jsxs)("div",{className:"content p-40",children:[Object(m.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(m.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(m.jsx)("div",{className:"d-flex flex-wrap",children:(d?Object(l.a)(Array(8)):c).map((function(e,t){return Object(m.jsx)(_,Object(o.a)(Object(o.a)({},e),{},{loading:d}),t)}))})]})};var B=function(){var e=a.a.useState([]),t=Object(b.a)(e,2),c=t[0],r=t[1],n=a.a.useState([]),s=Object(b.a)(n,2),i=s[0],d=s[1],p=a.a.useState([]),O=Object(b.a)(p,2),g=O[0],C=O[1],w=a.a.useState(!1),N=Object(b.a)(w,2),y=N[0],_=N[1],B=a.a.useState(""),F=Object(b.a)(B,2),T=F[0],R=F[1],V=a.a.useState(!0),E=Object(b.a)(V,2),L=E[0],M=E[1];a.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,c,a,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([v.a.get("https://60d9f2935f7bf1001754788f.mockapi.io/cart"),v.a.get("https://60d9f2935f7bf1001754788f.mockapi.io/favorites"),v.a.get("https://60d9f2935f7bf1001754788f.mockapi.io/items")]);case 3:t=e.sent,c=Object(b.a)(t,3),a=c[0],n=c[1],s=c[2],M(!1),d(a.data),C(n.data),r(s.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 :(");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var P=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=i.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return d((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,v.a.delete("https://60d9f2935f7bf1001754788f.mockapi.io/cart/".concat(c.id));case 6:e.next=14;break;case 8:return d((function(e){return[].concat(Object(l.a)(e),[t])})),e.next=11,v.a.post("https://60d9f2935f7bf1001754788f.mockapi.io/cart",t);case 11:r=e.sent,a=r.data,d((function(e){return e.map((function(e){return e.parentId===a.parentId?Object(o.a)(Object(o.a)({},e),{},{id:a.id}):e}))}));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0442\u043e\u0432\u0430\u0440\u0430 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.delete("https://60d9f2935f7bf1001754788f.mockapi.io/cart/".concat(t));case 3:d((function(e){return e.filter((function(e){return Number(e.id)!==Number(t)}))})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u043e \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!g.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=7;break}return e.next=4,v.a.delete("https://60d9f2935f7bf1001754788f.mockapi.io/favorites/".concat(t.id));case 4:C((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=12;break;case 7:return e.next=9,v.a.post("https://60d9f2935f7bf1001754788f.mockapi.io/favorites",t);case 9:c=e.sent,r=c.data,C((function(e){return[].concat(Object(l.a)(e),[r])}));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0444\u0430\u0432\u043e\u0440\u0438\u0442\u044b");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return a.a.useEffect((function(){y?document.body.classList.add("lock"):document.body.classList.remove("lock")}),[y]),Object(m.jsx)(x.Provider,{value:{items:c,cartItems:i,favorites:g,isItemAdded:function(e){return i.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToFavorite:H,setCartOpen:_,setCartItems:d,onAddToCart:P},children:Object(m.jsxs)("div",{className:"wrapper clear",children:[Object(m.jsx)(k,{sneakers:i,onClose:function(){_(!1)},onRemove:Z,opened:y}),Object(m.jsx)(h,{onCartClick:function(){_(!0)}}),Object(m.jsx)(f.a,{path:"/react-sneakers/",exact:!0,children:Object(m.jsx)(I,{items:c,cartItems:i,searchValue:T,setSearchValue:R,onChangeSearchInput:function(e){R(e.target.value)},onAddToFavorite:H,onAddToCart:P,isLoading:L})}),Object(m.jsx)(f.a,{path:"/react-sneakers/favorites",exact:!0,children:Object(m.jsx)(S,{})}),Object(m.jsx)(f.a,{path:"/react-sneakers/orders",exact:!0,children:Object(m.jsx)(A,{})})]})})};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(B,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.7c53ea91.chunk.js.map