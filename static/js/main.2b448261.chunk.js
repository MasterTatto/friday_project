(this["webpackJsonpfriday-poject"]=this["webpackJsonpfriday-poject"]||[]).push([[0],{18:function(e,t,n){e.exports={container:"ForgetPassword_container__11jDH",inputBox:"ForgetPassword_inputBox__nUT6D",buttonBox:"ForgetPassword_buttonBox__NCtrf",intro:"ForgetPassword_intro__TsmAe",message:"ForgetPassword_message__RIOB7",buttonContainer:"ForgetPassword_buttonContainer__XKQk-",remember:"ForgetPassword_remember__5ws9i",tryLoggingIn:"ForgetPassword_tryLoggingIn__1zXCY"}},20:function(e,t,n){e.exports={container:"NewPassword_container__2XO2z",inputBox:"NewPassword_inputBox__1MWaK",buttonBox:"NewPassword_buttonBox__1y9lh",buttonContainer:"NewPassword_buttonContainer__2KzsA",intro:"NewPassword_intro__2vzHB",message:"NewPassword_message__26A1X"}},22:function(e,t,n){e.exports={loading:"styles_loading__3okud",dot:"styles_dot__1_VPQ",wave:"styles_wave__2R06r"}},25:function(e,t,n){e.exports={container:"CheckEmail_container__2Cded",intro:"CheckEmail_intro__3AAr3",iconBox:"CheckEmail_iconBox__26956",icon:"CheckEmail_icon__3V1Sn",message:"CheckEmail_message__2IH-u"}},26:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__1-fpG",errorInput:"SuperInputText_errorInput__3ai-G",error:"SuperInputText_error__2UzY3",input:"SuperInputText_input__ES8v_"}},27:function(e,t,n){e.exports={profile:"styles_profile__1H8TF",intro:"styles_intro__2fZng",inputs:"styles_inputs__2347j",forgot:"styles_forgot__NDe99",next:"styles_next__3T_kz",notAccount:"styles_notAccount__1KgKF",singUp:"styles_singUp__1Daae",error:"styles_error__2won-",errorValidate:"styles_errorValidate__3yuky",remember:"styles_remember__XiPaQ",profileInfo:"styles_profileInfo__3XTBm",avatar:"styles_avatar__3f-Uj"}},34:function(e,t,n){e.exports={default:"SuperButton_default__1fRzO",red:"SuperButton_red__3LP3-",disabled:"SuperButton_disabled__2yi7U"}},38:function(e,t,n){e.exports={headerContainer:"Header_headerContainer__32pzC",navigate:"Header_navigate__29L0K"}},39:function(e,t,n){e.exports={changeName:"style_changeName__397Ag",glitch:"style_glitch__1R7a6","glitch-loop-1":"style_glitch-loop-1__2_Xp1","glitch-loop-2":"style_glitch-loop-2__Yr6vk"}},40:function(e,t,n){},5:function(e,t,n){e.exports={registration:"style_regist_registration__3Dx7w",intro:"style_regist_intro__30wy9",inputs:"style_regist_inputs__1mxmg",inputsBox:"style_regist_inputsBox__1ASFm",forgot:"style_regist_forgot__3lXEu",next:"style_regist_next__2yWPp",btn:"style_regist_btn__1UoPG",notAccount:"style_regist_notAccount__3ulht",singUp:"style_regist_singUp__1lVCi",error:"style_regist_error__3tvbR",errorValidate:"style_regist_errorValidate__2hzSB",remember:"style_regist_remember__23BwI"}},52:function(e,t,n){e.exports={loginMain:"styles_loginMain__2rwiG"}},53:function(e,t,n){e.exports={main:"styles_profile_main__WrI1k"}},54:function(e,t,n){e.exports={main:"styles_main__1B_oo"}},55:function(e,t,n){e.exports={findTable:"styles_findTable__ahMp7"}},56:function(e,t,n){e.exports={pagination:"styles_pagination__32dyt"}},57:function(e,t,n){e.exports={main:"styles_main__3jdEa"}},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},7:function(e,t,n){e.exports={table:"styles_table__25BnY",thead:"styles_thead__1k8__",column:"styles_column__25d0O",tableHeader:"styles_tableHeader__34vDu",activeCards:"styles_activeCards__RFD7E",activeUpdate:"styles_activeUpdate__rYK7K",rows:"styles_rows__xtTuO",rowe:"styles_rowe__3BNq8",rowItem:"styles_rowItem__p4LpA",row:"styles_row__3_Pc5",btnBox:"styles_btnBox__3ex_y",btn:"styles_btn__mUui5"}},8:function(e,t,n){e.exports={login:"styles_login__19WXa",intro:"styles_intro__1dCkJ",inputs:"styles_inputs__mJ95w",inputsBox:"styles_inputsBox__3Ly94",forgot:"styles_forgot__2-Zzr",next:"styles_next__2cfxQ",btn:"styles_btn__1uALq",notAccount:"styles_notAccount__PTYpm",singUp:"styles_singUp__3_E0G",error:"styles_error__3q-Cb",remember:"styles_remember__3xDAy"}},93:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(30),c=n.n(r),i=(n(63),n(64),n(65),n(12)),o=n(3),l=n(38),d=n.n(l),u=n(15),j=n.n(u),b=n(21),p=n(2),h=n(13),m=n.n(h),O="localhost"===window.location.hostname?"http://localhost:7542/2.0/":"localhost"!==window.location.hostname&&"https://neko-back.herokuapp.com/2.0/",x=m.a.create({baseURL:O,withCredentials:!0}),_=function(e){return x.post("auth/login",e)},f=function(){return x.delete("auth/me")},g=m.a.create({baseURL:O,withCredentials:!0}),v=function(){return g.post("auth/me",{})},w={baseURL:O,withCredentials:!0},y=m.a.create(w),N={changeUserName:function(e){return y.put("auth/me",e)},getCards:function(e){return y.get("cards/pack",{params:e})}},C={name:"user name",avatar:"https://cdn-icons-png.flaticon.com/512/4530/4530930.png",cards:null,sortName:"updated",sortByCards:0},A=function(e){return{type:"PROFILE/CHANGE_USER_NAME",userName:e}},R=function(e,t){return{type:"PROFILE/CHANGE_SORT_CARDS",sort:e,sortName:t}},S={isLoading:"loading",inAuth:!1},P=function(e){return{type:"APP/IS_LOADING",isLoading:e}},I=function(e){return{type:"APP/IN_AUTH",inAuth:e}},E={error:"",profileData:{}},T=function(e){return{type:"SET_ERROR",error:e}},B=function(e){return{type:"SET_PROFILE_DATA",data:e}},k=n(0),F=function(){var e=Object(o.c)((function(e){return e.app.inAuth})),t=Object(o.b)();return Object(k.jsx)("div",{className:d.a.headerContainer,children:Object(k.jsxs)("nav",{className:d.a.navigate,children:[Object(k.jsx)(i.b,{to:"/login",onClick:function(){return e&&t(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(P("loading")),e.prev=1,e.next=4,f();case 4:t(P("idle")),t(I(!1)),t(B(E.profileData)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(P("error"));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())},children:e?"log Out":"Login"}),Object(k.jsx)(i.b,{to:"/profile",children:"Profile"}),Object(k.jsx)(i.b,{to:"/test",children:"Test component"})]})})},L=n(4),U=function(){return Object(k.jsx)("div",{children:Object(k.jsx)("h1",{children:"NOT FOUND 404"})})},D=n(19),H=n(23),Y=n(26),G=n.n(Y),q=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],K=function(e){var t=e.type,n=e.onChange,a=e.onChangeText,s=e.onKeyPress,r=e.onEnter,c=e.error,i=e.className,o=e.spanClassName,l=Object(H.a)(e,q),d="".concat(G.a.error," ").concat(o||""),u="".concat(G.a.input," ").concat(c?G.a.errorInput:G.a.superInput," ").concat(i);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("input",Object(p.a)({type:t,onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){s&&s(e),r&&"Enter"===e.key&&r()},className:u},l)),c&&Object(k.jsx)("span",{className:d,children:c})]})},J=n(34),X=n.n(J),M=["red","className","disabled"],Q=function(e){var t=e.red,n=e.className,a=e.disabled,s=Object(H.a)(e,M),r="".concat(t?X.a.red:X.a.default," ").concat(n),c=a?X.a.disabled:r;return Object(k.jsx)("button",Object(p.a)({className:c},s))},V=m.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),z=function(e,t){return V.post("/auth/set-new-password",{password:e,resetPasswordToken:t})},Z={error:"",success:!1},W=n(52),$=n.n(W),ee=function(e){return Object(k.jsx)("div",{className:"".concat(e.className," ").concat($.a.loginMain),children:e.children})},te=n(20),ne=n.n(te),ae=function(){var e=Object(o.b)(),t=Object(L.h)().token,n=Object(o.c)((function(e){return e.newPass.error})),a=Object(o.c)((function(e){return e.newPass.success})),s=Object(D.a)({initialValues:{password:"",password2:""},validate:function(e){var t={};return e.password?e.password.length<8&&(t.password="Invalid email address"):t.password="Required",e.password2?e.password.length<8&&(t.password2="Invalid email address"):t.password2="Required",t},onSubmit:function(n){t&&e(function(e,t,n){return function(a){t!==n?a({type:"SET-ERROR",message:"Passwords don't match!"}):(a(P("loading")),z(t,e).then((function(e){a(P("idle")),a({type:"SET-SUCCESS",value:!0})})).catch((function(e){a(P("error")),console.log(e.response.data.error)})))}}(t,n.password,n.password2)),s.resetForm()}});return a?Object(k.jsx)(L.a,{to:"/login"}):Object(k.jsx)(ee,{children:Object(k.jsxs)("div",{className:ne.a.container,children:[Object(k.jsxs)("div",{className:ne.a.intro,children:[Object(k.jsx)("h1",{children:"It-incubator"}),Object(k.jsx)("h3",{children:"Create new password?"})]}),Object(k.jsxs)("form",{onSubmit:s.handleSubmit,children:[Object(k.jsxs)("div",{className:ne.a.inputBox,children:[Object(k.jsx)("label",{children:"New Password"}),Object(k.jsx)(K,Object(p.a)({type:"password"},s.getFieldProps("password"))),s.touched.password&&s.errors.password&&Object(k.jsx)("div",{style:{color:"red"},children:s.errors.password})]}),Object(k.jsxs)("div",{className:ne.a.inputBox,children:[Object(k.jsx)("label",{children:"Repeat Password"}),Object(k.jsx)(K,Object(p.a)({type:"password"},s.getFieldProps("password2"))),s.touched.password2&&s.errors.password2&&Object(k.jsx)("div",{style:{color:"red"},children:s.errors.password2})]}),Object(k.jsx)("div",{style:{color:"red"},children:n}),Object(k.jsx)("div",{className:ne.a.message,children:"Create new password and will send you further instructions to email"}),Object(k.jsx)("div",{className:ne.a.buttonContainer,children:Object(k.jsx)(Q,{className:ne.a.buttonBox,type:"submit",children:"Create new password"})})]})]})})},se=n(53),re=n.n(se),ce=n(27),ie=n.n(ce),oe=n(14),le=n(39),de=n.n(le),ue=s.a.memo((function(e){var t=Object(a.useState)(!1),n=Object(oe.a)(t,2),s=n[0],r=n[1],c=Object(a.useState)(e.value),i=Object(oe.a)(c,2),o=i[0],l=i[1];return s?Object(k.jsx)("input",{className:de.a.changeName,value:o,onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.onChange(o)}}):Object(k.jsx)("h1",{className:de.a.glitch,"data-text":e.value,onDoubleClick:function(){r(!0),l(e.value)},children:e.value})})),je=function(){var e=Object(o.c)((function(e){return e.profile.name})),t=Object(o.c)((function(e){return e.profile.avatar})),n=Object(o.b)();return Object(k.jsxs)("div",{className:ie.a.profile,children:[Object(k.jsx)("div",{className:ie.a.intro,children:Object(k.jsx)("h1",{children:"Profile"})}),Object(k.jsxs)("div",{className:ie.a.profileInfo,children:[Object(k.jsx)("div",{children:Object(k.jsx)("img",{className:ie.a.avatar,src:t,alt:""})}),Object(k.jsx)("div",{children:Object(k.jsx)(ue,{value:e,onChange:function(e){var t;n((t={name:e},function(e){e(P("loading")),N.changeUserName(t).then((function(t){e(A(t.data.updatedUser.name)),e(P("idle"))})).catch((function(t){e(P("error"))}))}))}})})]})]})},be=function(){return Object(k.jsx)("div",{children:"sort table"})},pe=n(54),he=n.n(pe),me=function(){return Object(k.jsxs)("div",{className:he.a.main,children:[Object(k.jsx)(je,{}),Object(k.jsx)(be,{})]})},Oe=n(55),xe=n.n(Oe),_e=function(){return Object(k.jsx)("div",{className:xe.a.findTable,children:"FindTable"})},fe=n(7),ge=n.n(fe),ve=["Name","Cards","Last Update","Created by","Actions"],we=function(){var e=Object(o.c)((function(e){return e.profile.cards})),t=Object(o.c)((function(e){return e.profile.sortByCards})),n=Object(o.c)((function(e){return e.login.profileData._id})),s=Object(a.useState)(""),r=Object(oe.a)(s,2),c=r[0],i=r[1];Object(a.useEffect)((function(){var e=document.querySelectorAll("#table");return e.forEach((function(e){e.addEventListener("wheel",(function(t){t.preventDefault(),e.scrollLeft+=t.deltaY}))})),function(){e.forEach((function(e){e.removeEventListener("wheel",(function(t){t.preventDefault(),e.scrollLeft+=t.deltaY}))}))}}));var l=Object(o.b)(),d="Cards"===c&&0!==t&&ge.a.activeCards||"Last Update"===c&&0!==t&&ge.a.activeUpdate;return Object(k.jsxs)("table",{className:ge.a.table,children:[Object(k.jsx)("thead",{className:ge.a.thead,children:ve.map((function(e){return Object(k.jsx)("tr",{className:"".concat(ge.a.tableHeader," ").concat(d),onClick:function(){return function(e){var n="Cards"===e?"cardsCount":"updated";"Cards"!==e&&"Last Update"!==e||l(R(0===t?1:0,n)),i(e)}(e)},children:Object(k.jsx)("th",{className:ge.a.column,children:e})},e)}))}),Object(k.jsx)("tbody",{className:ge.a.rows,children:null===e||void 0===e?void 0:e.cardPacks.map((function(e){return Object(k.jsx)("tr",{className:ge.a.rowe,children:Object(k.jsxs)("td",{className:ge.a.row,style:{height:"30px"},children:[Object(k.jsx)("span",{className:ge.a.rowItem,id:"table",children:e.name}),Object(k.jsx)("span",{className:ge.a.rowItem,id:"table",children:e.cardsCount}),Object(k.jsx)("span",{className:ge.a.rowItem,id:"table",children:e.updated.slice(0,10)}),Object(k.jsxs)("span",{className:ge.a.rowItem,id:"table",children:[" ",e.user_name]}),Object(k.jsxs)("div",{className:"".concat(ge.a.rowItem," ").concat(ge.a.btnBox),children:[n===e.user_id&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("span",{className:ge.a.btn,"data-color":!0,children:"Delete"}),Object(k.jsx)("span",{className:ge.a.btn,children:"Edit"})]}),Object(k.jsx)("span",{className:ge.a.btn,children:"Learn"})]})]})},e._id)}))})]})},ye=n(56),Ne=n.n(ye),Ce=function(){return Object(k.jsx)("div",{className:Ne.a.pagination,children:"Paginate"})},Ae=n(57),Re=n.n(Ae),Se=function(){return Object(k.jsxs)("div",{className:Re.a.main,children:[Object(k.jsx)(_e,{}),Object(k.jsx)(we,{}),Object(k.jsx)(Ce,{})]})},Pe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.profile.sortByCards})),n=Object(o.c)((function(e){return e.profile.sortName}));return Object(a.useEffect)((function(){e(function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(a){var s;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(P("loading")),n.prev=1,a(P("idle")),n.next=5,N.getCards({pageCount:8,sortPacks:e+t});case 5:s=n.sent,a({type:"PROFILE/SET_CARDS",cards:s.data}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),a(P("error"));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))}),[e,t,n]),Object(o.c)((function(e){return e.app.inAuth}))?Object(k.jsx)(ee,{children:Object(k.jsxs)("div",{className:re.a.main,children:[Object(k.jsx)(me,{}),Object(k.jsx)(Se,{})]})}):Object(k.jsx)(L.a,{to:"/login"})},Ie=n(40),Ee=n.n(Ie),Te=["type","onChange","onChangeChecked","className","spanClassName","children"],Be=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,s=(e.spanClassName,e.children),r=Object(H.a)(e,Te),c="".concat(Ee.a.checkbox," ").concat(a||"");return Object(k.jsxs)("label",{children:[Object(k.jsx)("input",Object(p.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:c},r)),s&&Object(k.jsx)("span",{className:Ee.a.spanClassName,children:s})]})},ke=function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(Q,{children:"Button"}),Object(k.jsx)(K,{}),Object(k.jsx)(Be,{})]})},Fe=n(8),Le=n.n(Fe),Ue=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.login.error})),n=Object(o.c)((function(e){return e.app.inAuth})),a=Object(L.g)(),s=Object(D.a)({initialValues:{email:"",password:"",rememberMe:!0},onSubmit:function(t){var n;e((n={email:t.email,password:t.password,rememberMe:t.rememberMe},function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(P("loading")),e.prev=1,e.next=4,_(n);case 4:a=e.sent,t(P("idle")),t(T("")),t(I(!0)),t(A(a.data.name)),t(B(a.data)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),t(P("error")),t(T(e.t0.response.data.error));case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}())),console.log(t)}});return n?Object(k.jsx)(L.a,{to:"/profile"}):Object(k.jsx)(ee,{children:Object(k.jsxs)("div",{className:Le.a.login,children:[Object(k.jsxs)("div",{className:Le.a.intro,children:[Object(k.jsx)("h1",{children:"It-incubator"}),Object(k.jsx)("h3",{children:" Sign In"})]}),Object(k.jsxs)("form",{autoComplete:"off",onSubmit:s.handleSubmit,children:[Object(k.jsxs)("div",{className:Le.a.inputs,children:[Object(k.jsxs)("div",{className:Le.a.inputsBox,children:[Object(k.jsx)("label",{className:Le.a.label,children:"Email"}),Object(k.jsx)(K,{name:"email",className:Le.a.input,onChange:s.handleChange,value:s.values.email})]}),Object(k.jsxs)("div",{className:Le.a.inputsBox,children:[Object(k.jsx)("label",{className:Le.a.label,children:"Password"}),Object(k.jsx)(K,{name:"password",type:"password",className:Le.a.input,onChange:s.handleChange,value:s.values.password})]}),Object(k.jsxs)("div",{className:Le.a.remember,children:[Object(k.jsx)("span",{children:"Remember me"}),Object(k.jsx)(Be,{onChange:s.handleChange,checked:s.values.rememberMe,name:"rememberMe"})]}),Object(k.jsx)("span",{className:Le.a.error,children:t}),Object(k.jsx)("div",{className:Le.a.forgot,children:Object(k.jsx)("p",{onClick:function(){return a("/recovery")},children:"Forgot Password"})})]}),Object(k.jsxs)("div",{className:Le.a.next,children:[Object(k.jsx)(Q,{type:"submit",className:Le.a.btn,children:"Login"}),Object(k.jsx)("span",{className:Le.a.notAccount,children:"Don\u2019t have an account?"}),Object(k.jsx)("p",{className:Le.a.singUp,onClick:function(){return a("/register")},children:"Sing Up"})]})]})]})})},De=n(5),He=n.n(De),Ye={baseURL:O},Ge=m.a.create(Ye),qe={registration:function(e){return Ge.post("auth/register",e)}},Ke={isRegistrate:!1,errorRegist:""},Je=function(e){return{type:"REGISTRATION",isRegistrate:e}},Xe=function(e){return{type:"REGISTRATION/SET_ERROR",errorRegist:e}},Me=function(){var e=Object(o.c)((function(e){return e.register.isRegistrate})),t=Object(o.c)((function(e){return e.register.errorRegist})),n=Object(o.b)(),a=Object(D.a)({initialValues:{email:"",password:"",repeatPassword:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<=2&&(t.password="Invalid password"):t.password="Required",e.repeatPassword?e.repeatPassword!==e.password&&(t.repeatPassword="Invalid repeat password"):t.repeatPassword="Required",t},onSubmit:function(e){var t={email:e.email,password:e.password};a.resetForm(),n(function(e){return function(t){t(P("loading")),qe.registration(e).then((function(e){t(Je(!0)),t(P("idle")),t(Xe(""))})).catch((function(e){t(Je(!1)),t(P("error")),t(Xe(e.response.data.error)),setTimeout((function(){t(Xe(""))}),6e3)}))}}(t))}});return e?Object(k.jsx)(L.a,{to:"/login"}):Object(k.jsx)(ee,{children:Object(k.jsxs)("div",{className:He.a.registration,children:[Object(k.jsxs)("div",{className:He.a.intro,children:[Object(k.jsx)("h1",{children:"It-incubator"}),Object(k.jsx)("h3",{children:"Registration"})]}),Object(k.jsx)("form",{onSubmit:a.handleSubmit,children:Object(k.jsxs)("div",{className:He.a.inputs,children:[Object(k.jsxs)("div",{className:He.a.inputsBox,children:[Object(k.jsx)("label",{className:He.a.label,children:"Email"}),Object(k.jsx)(K,{className:He.a.input,name:"email",type:"email",onChange:a.handleChange,value:a.values.email})]}),a.touched.email&&a.errors.email?Object(k.jsx)("span",{className:He.a.error,children:a.errors.email}):Object(k.jsx)("span",{className:He.a.error}),Object(k.jsxs)("div",{className:He.a.inputsBox,children:[Object(k.jsx)("label",{className:He.a.label,children:"Password"}),Object(k.jsx)(K,{className:He.a.input,name:"password",type:"password",onChange:a.handleChange,value:a.values.password})]}),a.touched.email&&a.errors.password?Object(k.jsx)("span",{className:He.a.error,children:a.errors.password}):Object(k.jsx)("span",{className:He.a.error}),Object(k.jsxs)("div",{className:He.a.inputsBox,children:[Object(k.jsx)("label",{className:He.a.label,children:"Repeat password"}),Object(k.jsx)(K,{className:He.a.input,name:"repeatPassword",type:"password",onChange:a.handleChange,value:a.values.repeatPassword})]}),a.touched.email&&a.errors.repeatPassword?Object(k.jsx)("span",{className:He.a.error,children:a.errors.repeatPassword}):Object(k.jsx)("span",{className:He.a.error}),Object(k.jsx)("div",{className:He.a.next,children:Object(k.jsx)(Q,{className:He.a.btn,type:"submit",children:"Registration"})}),Object(k.jsx)("span",{className:He.a.error,children:t})]})})]})})},Qe=m.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),Ve=function(e){return Qe.post("auth/forgot",e)},ze={isSuccess:!1,email:"",error:""},Ze=n(18),We=n.n(Ze),$e=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.recovery.isSuccess})),n=Object(o.c)((function(e){return e.recovery.error})),a=Object(L.g)(),s=Object(D.a)({initialValues:{email:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(t){var n;e((n=t.email,function(e){var t={email:n,from:"test-front-admin <ev.drozd.2020@gmail.com>",message:"<div style=\"background-color: #8865c0; padding: 15px\">password recovery link: <a href='http://localhost:3000/#/new-pass/$token$'>link</a></div>"};e(P("loading")),Ve(t).then((function(t){e(P("idle")),e(function(e,t){return{type:"FORGOT-PASSWORD",value:!0,email:t}}(0,n))})).catch((function(t){e(P("error")),e(function(e){return{type:"SET-ERROR",err:e}}(t.response.data.error))}))})),s.resetForm()}});return t?Object(k.jsx)(L.a,{to:"/check-email"}):Object(k.jsx)(ee,{children:Object(k.jsxs)("div",{className:We.a.container,children:[Object(k.jsxs)("div",{className:We.a.intro,children:[Object(k.jsx)("h1",{children:"It-incubator"}),Object(k.jsx)("h3",{children:"Forgot your password?"})]}),Object(k.jsxs)("form",{onSubmit:s.handleSubmit,children:[Object(k.jsxs)("div",{className:We.a.inputBox,children:[Object(k.jsx)("label",{children:"Email"}),Object(k.jsx)(K,Object(p.a)({type:"email"},s.getFieldProps("email"))),s.touched.email&&s.errors.email&&Object(k.jsx)("div",{style:{color:"red"},children:s.errors.email}),Object(k.jsx)("div",{style:{color:"red"},children:n})]}),Object(k.jsx)("div",{className:We.a.message,children:"Enter your email address and will send you further instructions"}),Object(k.jsxs)("div",{className:We.a.buttonContainer,children:[Object(k.jsx)(Q,{className:We.a.buttonBox,type:"submit",children:"Send Instructions"}),Object(k.jsx)("span",{className:We.a.remember,children:"Did you remember your password?"}),Object(k.jsx)("span",{className:We.a.tryLoggingIn,onClick:function(){return a("/login")},children:"Try logging in"})]})]})]})})},et=n(25),tt=n.n(et),nt=function(){var e=Object(o.c)((function(e){return e.recovery.email}));return Object(k.jsx)(ee,{children:Object(k.jsx)("div",{className:tt.a.container,children:Object(k.jsxs)("div",{className:tt.a.intro,children:[Object(k.jsx)("h1",{children:"It-incubator"}),Object(k.jsx)("div",{className:tt.a.iconBox,children:Object(k.jsx)("img",{className:tt.a.icon,src:"data:image/png;base64,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"})}),Object(k.jsx)("h3",{children:"Check Email"}),Object(k.jsx)("div",{className:tt.a.message,children:"We sent an Email with instructions to ".concat(e,", you can close this tab")})]})})})},at=function(){return Object(k.jsx)("div",{children:Object(k.jsxs)(L.d,{children:[Object(k.jsx)(L.b,{path:"/",element:Object(k.jsx)(Pe,{})}),Object(k.jsx)(L.b,{path:"login",element:Object(k.jsx)(Ue,{})}),Object(k.jsx)(L.b,{path:"register",element:Object(k.jsx)(Me,{})}),Object(k.jsx)(L.b,{path:"recovery",element:Object(k.jsx)($e,{})}),Object(k.jsx)(L.b,{path:"check-email",element:Object(k.jsx)(nt,{})}),Object(k.jsx)(L.b,{path:"new-pass/:token",element:Object(k.jsx)(ae,{})}),Object(k.jsx)(L.b,{path:"profile",element:Object(k.jsx)(Pe,{})}),Object(k.jsx)(L.b,{path:"*",element:Object(k.jsx)(U,{})}),Object(k.jsx)(L.b,{path:"test",element:Object(k.jsx)(ke,{})})]})})},st=n(22),rt=n.n(st),ct=function(){return Object(k.jsx)(ee,{children:Object(k.jsxs)("div",{className:rt.a.loading,children:[Object(k.jsx)("div",{className:rt.a.dot}),Object(k.jsx)("div",{className:rt.a.dot}),Object(k.jsx)("div",{className:rt.a.dot}),Object(k.jsx)("div",{className:rt.a.dot}),Object(k.jsx)("div",{className:rt.a.dot})]})})},it=function(){var e=Object(o.c)((function(e){return e.app.isLoading})),t=Object(o.b)();return Object(a.useEffect)((function(){t(function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(P("loading")),e.prev=1,e.next=4,v();case 4:n=e.sent,t(I(!0)),t(A(n.data.name)),t(B(n.data)),t(P("idle")),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),t(I(!1)),t(P("error"));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(F,{}),"loading"===e&&Object(k.jsx)(ct,{}),"loading"!==e&&Object(k.jsx)(at,{})]})},ot=n(35),lt=n(58),dt=Object(ot.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.error});case"SET_PROFILE_DATA":return Object(p.a)(Object(p.a)({},e),{},{profileData:Object(p.a)({},t.data)});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTRATION":return Object(p.a)(Object(p.a)({},e),{},{isRegistrate:t.isRegistrate});case"REGISTRATION/SET_ERROR":return Object(p.a)(Object(p.a)({},e),{},{errorRegist:t.errorRegist});default:return e}},recovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORGOT-PASSWORD":return Object(p.a)(Object(p.a)({},e),{},{isSuccess:t.value,email:t.email});case"SET-ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.err});default:return e}},newPass:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.message});case"SET-SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{success:t.value});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE/CHANGE_USER_NAME":return Object(p.a)(Object(p.a)({},e),{},{name:t.userName});case"PROFILE/SET_CARDS":return Object(p.a)(Object(p.a)({},e),{},{cards:t.cards});case"PROFILE/CHANGE_SORT_CARDS":return Object(p.a)(Object(p.a)({},e),{},{sortByCards:t.sort,sortName:t.sortName});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/IS_LOADING":return Object(p.a)(Object(p.a)({},e),{},{isLoading:t.isLoading});case"APP/IN_AUTH":return Object(p.a)(Object(p.a)({},e),{},{inAuth:t.inAuth});default:return e}}}),ut=Object(ot.c)(dt,Object(ot.a)(lt.a)),jt=function(){return console.log("use ".concat(O)),Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(i.a,{children:Object(k.jsx)(o.a,{store:ut,children:Object(k.jsx)(it,{})})})})},bt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(jt,{})}),document.getElementById("root")),bt()}},[[93,1,2]]]);
//# sourceMappingURL=main.2b448261.chunk.js.map