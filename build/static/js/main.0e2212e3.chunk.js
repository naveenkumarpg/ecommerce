(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(32),i=n.n(c),s=n(23),l=n(12),o=n.n(l),m=n(21),u=n(14),p=n(15),d=n(16),h=n(18),b=n(17),j=n(5),f=(n(40),n(41),n(1)),O=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).state={sections:[{title:"hats",linkUrl:"hats"},{title:"jackets",linkUrl:"jackets"},{title:"sneakers",linkUrl:"sneakers"},{title:"womens",linkUrl:"womens"},{title:"mens",linkUrl:"mens"},{title:"kids",linkUrl:"kids"}]},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("section",{className:"container home-page",children:Object(f.jsx)("div",{className:"row",children:this.state.sections.map((function(e,t){var n=e.title,a=e.linkUrl;return Object(f.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-4",children:Object(f.jsxs)("a",{className:"menu-item ",href:"".concat(a),children:[Object(f.jsx)("img",{className:"background-image",src:"https://dummyimage.com/400x400/333333/333.jpg"}),Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("h1",{className:"title",children:n.toUpperCase()}),Object(f.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})},t)}))})})}}]),n}(r.a.Component),g=(n(43),function(e){var t=e.data;console.log(t);var n=t.title,a=t.items;return Object(f.jsxs)("div",{className:"container collection-preview",children:[Object(f.jsx)("h1",{className:"title",children:n}),Object(f.jsx)("div",{className:"row preview",children:a.map((function(e){var t=e.id,n=e.name,a=e.price;return Object(f.jsxs)("div",{className:"collection-item col-sm-12 col-md-6 col-lg-3 ",children:[Object(f.jsx)("img",{className:"image",src:"https://dummyimage.com/450x600/f3f3f3/333.jpg",alt:"shoppable item"}),Object(f.jsxs)("div",{className:"collection-footer",children:[Object(f.jsx)("span",{className:"name",children:n}),Object(f.jsx)("span",{className:"price",children:a})]})]},t)}))})]})}),v={id:1,title:"Hats",routeName:"hats",items:[{name:"Brown Brim",price:25},{name:"Blue Beanie",price:18},{name:"Brown Cowboy",price:35},{name:"Grey Brim",price:25},{name:"Green Beanie",price:18},{name:"Palm Tree Cap",price:14},{name:"Red Beanie",price:18},{name:"Wolf Cap",price:14},{name:"Blue Snapback",price:16}]};var x=function(){return Object(f.jsx)("div",{className:"container shop-page",children:Object(f.jsx)(g,{data:v})})},w={id:3,title:"Jackets",routeName:"jackets",items:[{name:"Black Jean Shearling",price:125},{name:"Blue Jean Jacket",price:90},{name:"Grey Jean Jacket",price:90},{name:"Brown Shearling",price:165},{name:"Tan Trench",price:185}]};var k=function(){return Object(f.jsx)("div",{className:"container shop-page",children:Object(f.jsx)(g,{data:w})})},y={id:1,title:"Kids",routeName:"hats",items:[{name:"Brown Brim",price:25},{name:"Blue Beanie",price:18},{name:"Brown Cowboy",price:35},{name:"Grey Brim",price:25},{name:"Green Beanie",price:18},{name:"Palm Tree Cap",price:14},{name:"Red Beanie",price:18},{name:"Wolf Cap",price:14},{name:"Blue Snapback",price:16}]};var N=function(){return Object(f.jsx)("div",{className:"container shop-page",children:Object(f.jsx)(g,{data:y})})},S={id:5,title:"Mens",routeName:"mens",items:[{name:"Camo Down Vest",price:325},{name:"Floral T-shirt",price:20},{name:"Black & White Longsleeve",price:25},{name:"Pink T-shirt",price:25},{name:"Jean Long Sleeve",price:40},{name:"Burgundy T-shirt",price:25}]};var C=function(){return Object(f.jsx)("div",{className:"container shop-page",children:Object(f.jsx)(g,{data:S})})},B={id:2,title:"Sneakers",routeName:"sneakers",items:[{name:"Adidas NMD",price:220},{name:"Adidas Yeezy",imageUrl:"/images/yeezy.png",price:280},{name:"Black Converse",price:110},{name:"Nike White AirForce",price:160},{name:"Nike Red High Tops",price:160},{name:"Nike Brown High Tops",price:160},{name:"Air Jordan Limited",price:190},{name:"Timberlands",price:200}]};var P=function(){return Object(f.jsx)("div",{className:"container shop-page",children:Object(f.jsx)(g,{data:B})})},E={id:4,title:"Womens",routeName:"womens",items:[{name:"Blue Tanktop",price:25},{name:"Floral Blouse",price:20},{name:"Floral Dress",price:80},{name:"Red Dots Dress",price:80},{name:"Striped Sweater",price:45},{name:"Yellow Track Suit",price:135},{name:"White Blouse",price:20}]};var A=function(){return Object(f.jsx)("div",{className:"container shop-page",children:Object(f.jsx)(g,{data:E})})},I=n(22),T=n(34),W=(n(44),function(e){var t=e.handleChange,n=e.label,a=Object(T.a)(e,["handleChange","label"]);return Object(f.jsxs)("div",{className:"group",children:[Object(f.jsx)("input",Object(m.a)({className:"form-input",onChange:t},a)),n?Object(f.jsx)("label",{className:"".concat(a.value.length?"shrink":""," form-input-label"),children:n}):null]})}),J=n(24);n(56),n(46);J.a.initializeApp({apiKey:"AIzaSyCcPv5JQYJsp1nK0sms-R2H60by_IqLs2Q",authDomain:"ecommerce-bf7ce.firebaseapp.com",projectId:"ecommerce-bf7ce",storageBucket:"ecommerce-bf7ce.appspot.com",messagingSenderId:"164205050246",appId:"1:164205050246:web:9de343685c8cfa05add407"});var D=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,r,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=G.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(m.a)({displayName:r,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),U=J.a.auth(),G=J.a.firestore(),R=new J.a.auth.GoogleAuthProvider;R.setCustomParameters({prompt:"select_account"});var F=function(){return U.signInWithPopup(R)},q=(J.a,n(48),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,c=n.password,e.prev=2,e.next=5,U.signInWithEmailAndPassword(r,c);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(I.a)({},r,n))},a.state={email:"",password:""},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"container sign-in",children:[Object(f.jsx)("h2",{children:"I already have an account"}),Object(f.jsx)("span",{children:"Sign in with your email and password"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)(W,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"Email",required:!0}),Object(f.jsx)(W,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"Password",required:!0}),Object(f.jsx)("button",{className:"btn btn-warning btn-lg btn-block",type:"submit",children:"Sign in"}),Object(f.jsx)("a",{className:"btn btn-outline-primary btn-lg btn-block",href:"/register",children:"Register"}),Object(f.jsx)("button",{className:"btn btn-primary btn-lg btn-block",onClick:F,children:"Sign in using Google"})]})]})}}]),n}(r.a.Component)),H=function(){return Object(f.jsx)("div",{className:"sign-in-and-sign-up",children:Object(f.jsx)(q,{})})},L=(n(49),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(u.a)(o.a.mark((function t(n){var a,r,c,i,s,l,m;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,c=a.email,i=a.password,s=a.confirmPassword,i===s){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,U.createUserWithEmailAndPassword(c,i);case 8:return l=t.sent,m=l.user,t.next=12,D(m,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(I.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,r=e.confirmPassword;return Object(f.jsxs)("div",{className:"container sign-up",children:[Object(f.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(f.jsx)("span",{children:"Sign up with your Email & Password"}),Object(f.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(f.jsx)(W,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(f.jsx)(W,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(f.jsx)(W,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),Object(f.jsx)(W,{type:"password",name:"confirmPassword",value:r,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(f.jsx)("button",{className:"btn btn-warning btn-lg btn-block",type:"submit",children:"Sign up"})]})]})}}]),n}(r.a.Component)),z=function(){return Object(f.jsx)("div",{className:"sign-in-and-sign-up",children:Object(f.jsx)(L,{})})};function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Y=a.createElement("desc",null,"Created with Sketch."),Q=a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function _(e,t){var n=e.title,r=e.titleId,c=K(e,["title","titleId"]);return a.createElement("svg",M({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},c),void 0===n?a.createElement("title",{id:r},"Group"):n?a.createElement("title",{id:r},n):null,Y,Q)}var V=a.forwardRef(_),X=(n.p,n(50),function(e){var t=e.userStatus;return Object(f.jsxs)("section",{className:"container header",children:[Object(f.jsx)(s.b,{className:"logo-container",to:"/",children:Object(f.jsx)(V,{className:"logo"})}),Object(f.jsx)("div",{className:"options",children:t?Object(f.jsx)("a",{href:"#",onClick:function(){return U.signOut()},children:"Logout"}):Object(f.jsx)(s.b,{className:"option",to:"/signin",children:"login / signup"})})]})}),Z=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).unSubscribeFromAuth=null,e.state={currentuser:null},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.unSubscribeFromAuth=U.onAuthStateChanged(function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,D(n);case 3:t.sent.onSnapshot((function(t){e.setState({currentuser:Object(m.a)({id:t.id},t.data())})}));case 5:e.setState({currentuser:n});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillMount",value:function(){this.unSubscribeFromAuth=null}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(X,{userStatus:this.state.currentuser}),Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{exact:!0,path:"/",component:O}),Object(f.jsx)(j.a,{path:"/hats",component:x}),Object(f.jsx)(j.a,{path:"/jackets",component:k}),Object(f.jsx)(j.a,{path:"/kids",component:N}),Object(f.jsx)(j.a,{path:"/mens",component:C}),Object(f.jsx)(j.a,{path:"/sneakers",component:P}),Object(f.jsx)(j.a,{path:"/womens",component:A}),Object(f.jsx)(j.a,{path:"/signin",component:H}),Object(f.jsx)(j.a,{path:"/register",component:z})]})]})}}]),n}(r.a.Component);i.a.render(Object(f.jsx)(s.a,{children:Object(f.jsx)(Z,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.0e2212e3.chunk.js.map