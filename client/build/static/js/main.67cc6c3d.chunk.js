(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=(a(65),a(66),a(149)),i=(a(67),a(2)),s=a(148),m=(a(117),a(151)),u=a(150),d=a(7),p=a(8);function h(){var e=Object(d.a)(["\n  font-size: 66px;\n  font-weight: bold;\n  color: white;\n"]);return h=function(){return e},e}var E=p.a.h1(h());function g(){var e=Object(d.a)(["\n  color: white;\n  font-size: 20px;\n  /* padding: 1em; */\n"]);return g=function(){return e},e}var f=p.a.p(g());function b(){var e=Object(d.a)(["\n  background-color: rgba(0, 0, 0, 0.4);\n  opacity: 0.6;\n  width: 50%;\n  margin: auto;\n  border-radius: 10px;\n  padding: 2em;\n  font-family: 'Open Sans', Sans-Serif;\n\n  hr {\n    border: 2px double white;\n    width: 60%;\n    margin: auto;\n  }\n"]);return b=function(){return e},e}var y=p.a.div(b());y.Title=E,y.Text=f;var v=y;function w(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 50%;\n  margin: auto;\n"]);return w=function(){return e},e}var S=p.a.a(w());function j(){var e=Object(d.a)(["\n  color: white;\n  font-size: 5em;\n  padding: 8px;\n  text-decoration: none;\n  transition: color 0.2s ease;\n  &:hover {\n    color: #b14aed;\n    ","\n  }\n"]);return j=function(){return e},e}var O=p.a.i(j(),"");function k(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 50%;\n  margin: auto;\n"]);return k=function(){return e},e}var C=p.a.div(k());C.Link=S,C.Icon=O;var x=C,N=function(){return r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(i.Grid,{className:"landing-grid"},r.a.createElement(i.Cell,{col:12},r.a.createElement("img",{src:"wjdev.png",alt:"avatar",className:"logo-img"}),r.a.createElement(v,null,r.a.createElement(v.Text,null,"IOS APPS | UNITY GAMES | REACT WEBSITES | MONGO DATABASES"),r.a.createElement("hr",null),r.a.createElement(x,null,r.a.createElement(x.Link,{href:"https://www.linkedin.com/in/willie-liwa-johnson/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(x.Icon,{className:"fa fa-linkedin-square","aria-hidden":"true"})),r.a.createElement(x.Link,{href:"https://github.com/willieLjohnson",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(x.Icon,{className:"fa fa-github-square","aria-hidden":"true"})),r.a.createElement(x.Link,{href:"https://twitter.com/Xillioneur?lang=en",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(x.Icon,{className:"fa fa-twitter-square","aria-hidden":"true"})),r.a.createElement(x.Link,{href:"https://www.youtube.com/user/MrWizzy606/featured?view_as=public",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(x.Icon,{className:"fa fa-youtube-square","aria-hidden":"true"})))))))},T=a(11),F=a(12),M=a(15),A=a(13),D=a(16),I=function(e){function t(){return Object(T.a)(this,t),Object(M.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Page"))}}]),t}(n.Component),L=a(55),_=a(56),P=a.n(_),R=a(33),W=a.n(R);W.a.setAppElement("div");var B={content:{top:"calc(50% + 27.5px)",left:"50%",right:"auto",bottom:"auto",width:"35%",minWidth:"250px",height:"25%",minHeight:"250px",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",borderRadius:"3px",border:"solid"}},G=function(e){function t(){var e,a;Object(T.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(M.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",nameError:"",email:"",emailError:"",subject:"",subjectError:"",message:"",messageError:"",resData:"",modalIsOpen:!1},a.change=function(e){a.setState(Object(L.a)({},e.target.name,e.target.value))},a.closeModal=function(){a.setState({modalIsOpen:!1})},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.email,l=t.subject,o=t.message;""===n?a.setState({nameError:"Please provide your name"}):a.setState({nameError:""}),""===r?a.setState({emailError:"Please provide an email address"}):r===/^((?!@).)*$/||-1===r.indexOf(".")?a.setState({emailError:"Please provide a valid email address"}):a.setState({emailError:""}),""===l?a.setState({subjectError:"Please provide a subject message"}):a.setState({subjectError:""}),""===o?a.setState({messageError:"Please leave a message"}):a.setState({messageError:""}),setTimeout(function(){var e=a.state,t=e.nameError,c=e.emailError,i=e.subjectError,s=e.messageError;""===t&&""===c&&""===i&&""===s?P.a.post("/send-email",{name:n,email:r,subject:l,message:o},{headers:{"content-type":"application/json"}}).then(function(e){a.setState({resData:e.data}),a.setState({modalIsOpen:!0}),a.setState({name:"",email:"",subject:"",message:""})}).catch(function(e){console.log(e.response)}):a.setState({resData:"Oops! Something went wrong!"})},10)},a}return Object(D.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,l=t.subject,o=t.message,c=this.state,s=c.nameError,m=c.emailError,u=c.subjectError,d=c.messageError,p=this.state,h=p.modalIsOpen,E=p.resData;return r.a.createElement("div",{className:"contact-body"},r.a.createElement(i.Grid,{className:"contact-grid"},r.a.createElement(i.Cell,{col:6},r.a.createElement("form",{className:"contact-form"},r.a.createElement("h2",null,"Let's get in contact"),r.a.createElement("hr",null),r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{name:"name",value:a,onChange:function(t){return e.change(t)},type:"text",id:"name",style:{margin:"".concat(s.length>0?"0":"")}}),r.a.createElement("p",{className:"form-error"},s),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{name:"email",value:n,onChange:function(t){return e.change(t)},type:"text",id:"email",style:{margin:"".concat(m.length>0?"0":"")}}),r.a.createElement("p",{className:"form-error"},m),r.a.createElement("label",{htmlFor:"subject"},"Subject"),r.a.createElement("input",{name:"subject",value:l,onChange:function(t){return e.change(t)},type:"text",id:"subject",style:{margin:"".concat(u.length>0?"0":"")}}),r.a.createElement("p",{className:"form-error"},u),r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement("textarea",{name:"message",onChange:function(t){return e.change(t)},value:o,id:"message",style:{margin:"".concat(d.length>0?"0":"")}}),r.a.createElement("p",{className:"form-error"},d),r.a.createElement("button",{className:"btn-primary",type:"submit",onClick:function(t){return e.onSubmit(t)}},"Send")))),r.a.createElement(W.a,{isOpen:h,onAfterOpen:this.afterOpenModal,onRequestClose:this.closeModal,contentLabel:"Email sent",style:B,closeTimeoutMS:150,overlayClassName:"formOverlay"},r.a.createElement("div",{className:"modalHeader-container"},r.a.createElement("span",{className:"modalHeader-container__text"},"Your message was sent!"),r.a.createElement("i",{className:"fa fa-times modalHeader-container__close-icon","aria-hidden":"true",onClick:this.closeModal})),r.a.createElement("div",{className:"modal-body"},r.a.createElement("p",{className:"modal-body__text"},E),r.a.createElement("p",null,"I'll be in touch with you soon."))))}}]),t}(r.a.Component),Y=function(e){function t(e){var a;return Object(T.a)(this,t),(a=Object(M.a)(this,Object(A.a)(t).call(this,e))).toggleCategories=function(){var e=a.state.activeTab;return 0===e?r.a.createElement("div",{className:"projects-grid"},r.a.createElement("p",null,"Dev account currently expeired so appstore links don't work :("),r.a.createElement(i.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},r.a.createElement(i.CardTitle,{style:{color:"#fff",height:"176px",background:"url(https://i.imgur.com/lFuuL5V.jpg) no-repeat center center",backgroundSize:"cover"}},"Vybes"),r.a.createElement(i.CardText,null,"A journal and meditation app designed to help you find calm in your daily life. Designed and developed by yours truly."),r.a.createElement(i.CardActions,{border:!0},r.a.createElement(i.Button,{colored:!0},"GitHub"),r.a.createElement(i.Button,{colored:!0,href:"https://itunes.apple.com/us/developer/willie-johnson/id1384634583?mt=8",rel:"noopener noreferrer",target:"_blank"},"AppStore")),r.a.createElement(i.CardMenu,{style:{color:"#fff"}},r.a.createElement(i.IconButton,{name:"share"})))):1===e?r.a.createElement("div",{className:"projects-grid"},r.a.createElement(i.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},r.a.createElement(i.CardTitle,{style:{color:"#fff",height:"176px",background:"url(https://i.imgur.com/LhwFdwI.gif) no-repeat center center",backgroundSize:"cover"}},"Surge"),r.a.createElement(i.CardText,null,"Super intense arcade game insipred by Pong. Music changes with difficult and there are a variaty of levels to get high-scores in."),r.a.createElement(i.CardActions,{border:!0},r.a.createElement(i.Button,{colored:!0,href:"https://github.com/willieLjohnson/Surge",rel:"noopener noreferrer",target:"_blank"},"GitHub"),r.a.createElement(i.Button,{href:"https://itunes.apple.com/US/app/id1392635397?mt=8",colored:!0,rel:"noopener noreferrer",target:"_blank"},"AppStore"),r.a.createElement(i.Button,{href:"https://play.google.com/store/apps/details?id=com.willynillygames.surge",colored:!0,rel:"noopener noreferrer",target:"_blank"},"PlayStore")),r.a.createElement(i.CardMenu,{style:{color:"#fff"}},r.a.createElement(i.IconButton,{name:"share"})))):2===e?r.a.createElement("div",{className:"projects-grid"},r.a.createElement("h1",null," This is react")):3===e?r.a.createElement("div",null,r.a.createElement("h1",null,"This is MongoDB")):r.a.createElement("div",null,r.a.createElement("h1",null,"404! How'd you get all the way here!?"))},a.state={activeTab:0},a}return Object(D.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this,t=this.state.activeTab;return r.a.createElement("div",null,r.a.createElement(i.Tabs,{activeTab:t,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},r.a.createElement(i.Tab,null,"iOS"),r.a.createElement(i.Tab,null,"Unity"),r.a.createElement(i.Tab,null,"React"),r.a.createElement(i.Tab,null,"MongoDB")),r.a.createElement(i.Grid,null,r.a.createElement(i.Cell,{col:12},r.a.createElement("div",{className:"content"},this.toggleCategories()))))}}]),t}(n.Component),z=function(e){var t=e.startYear,a=e.endYear,n=e.schoolName,l=e.schoolDescription;return r.a.createElement(i.Grid,null,r.a.createElement(i.Cell,{col:4},r.a.createElement("p",null,t," - ",a)),r.a.createElement(i.Cell,{col:8},r.a.createElement("h4",{style:{marginTop:"0px"}},n),r.a.createElement("p",null,l)))},H=function(e){var t=e.startYear,a=e.endYear,n=e.jobName,l=e.jobDescription;return r.a.createElement(i.Grid,null,r.a.createElement(i.Cell,{col:4},r.a.createElement("p",null,t," - ",a)),r.a.createElement(i.Cell,{col:8},r.a.createElement("h4",{style:{marginTop:"0px",fontFamily:"Open Sans"}},n),r.a.createElement("p",{style:{fontFamily:"Open Sans"}},l)))},J=function(e){var t=e.skill,a=e.progress;return r.a.createElement(i.Grid,null,r.a.createElement(i.Cell,{col:6},t),r.a.createElement(i.Cell,{col:6},r.a.createElement(i.ProgressBar,{style:{margin:"auto",width:"75",backgroundColor:"#061161",alignSelf:"flex-end"},progress:a})," "))},U=function(){return r.a.createElement("div",null,r.a.createElement(i.Grid,null,r.a.createElement(i.Cell,{col:4},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{className:"portrait-img",src:"portrait-1.jpg",alt:"Portrait of Willie Liwa Johnson"})),r.a.createElement("div",{style:{textAlign:"center",fontFamily:"Open Sans"}},r.a.createElement("h2",{style:{paddingTop:"0.6em",fontFamily:"Raleway"}},"Willie Liwa Johnson"),r.a.createElement("h4",{style:{color:"grey",fontFamily:"Open Sans"}},"Software Developer"),r.a.createElement("hr",{style:{borderTop:"3px solid #061161",width:"100%"}}),r.a.createElement("p",{style:{fontFamily:"Open Sans"}},"I'm a software engineer who specializes in iOS Development. With a variety of projects under my belt I have experience using many different technologies. I love to develop video games, productivity apps, augmented reality apps, and content driven websites."),r.a.createElement("hr",{style:{borderTop:"3px solid #061161",width:"100%"}}),r.a.createElement("h5",{style:{fontFamily:"Open Sans"}},"Address"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.google.com/maps/place/MONTGOMRY+VLG,+MD+20879/@39.1708499,-77.1858614,14.74z/data=!4m5!3m4!1s0x89b62b579a467b6d:0xe2ea76d8df38b7a8!8m2!3d39.1733025!4d-77.1772737",rel:"noopener noreferrer",target:"_blank"},"Gaithersburg, MD 20879")),r.a.createElement("h5",{style:{fontFamily:"Open Sans"}},"Phone"),r.a.createElement("p",{style:{fontFamily:"Open Sans"}},r.a.createElement("a",{href:"tel:240-550-5589",rel:"noopener noreferrer",target:"_blank"},"(240) 550-5589")),r.a.createElement("h5",{style:{fontFamily:"Open Sans"}},"Email"),r.a.createElement("p",{style:{fontFamily:"Open Sans"}},r.a.createElement("a",{href:"mailto:liwa.johnson@gmail.com?subject=Let's get in touch",rel:"noopener noreferrer",target:"_blank"},"liwa.johnson@gmail.com")),r.a.createElement("h5",{style:{fontFamily:"Open Sans"}},"Web"),r.a.createElement("p",null,r.a.createElement("a",{href:"http://unii.design",rel:"noopener noreferrer",target:"_blank"},"unii.design")),r.a.createElement("hr",{style:{borderTop:"3px solid #061161",width:"100%"}}))),r.a.createElement(i.Cell,{className:"resume-right-col",col:8},r.a.createElement("h2",{style:{fontFamily:"Raleway"}},"Skills"),r.a.createElement(J,{skill:"iOS/Swift",progress:100}),r.a.createElement(J,{skill:"Unity",progress:85}),r.a.createElement(J,{skill:"HTML/CSS",progress:70}),r.a.createElement(J,{skill:"JavaScript",progress:50}),r.a.createElement(J,{skill:"NodeJS",progress:40}),r.a.createElement(J,{skill:"React",progress:25}),r.a.createElement("hr",{style:{borderTop:"3px solid #780206"}}),r.a.createElement("h2",{style:{fontFamily:"Raleway"}},"Education"),r.a.createElement(z,{startYear:2017,endYear:2019,schoolName:"Make School Product College",schoolDescription:"Developed numerous iOS apps working with Swift, Python & Flask and Ruby & Rails to acquire knowledge of Full Stack iOS development and touching on multithreading and advanced UIKit.\nImplemented CS Data Structures using Python and analyzed their Big-O complexity. \nCollaborated with many developers on projects with teams of 4+ members and in the community."}),r.a.createElement("hr",{style:{borderTop:"3px solid #780206"}}),r.a.createElement("h2",{style:{fontFamily:"Raleway"}},"Experience"),r.a.createElement(H,{startYear:2018,endYear:2018,jobName:"Make School Summer Academy Curriculum Assistant",jobDescription:"Wrote iOS tutorials for Make School using markdown. Created a tutorial to help explain the process of networking and decoding JSON in swift 4."}))))},q=function(){return r.a.createElement(m.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:N}),r.a.createElement(u.a,{path:"/aboutme",component:I}),r.a.createElement(u.a,{path:"/contact",component:G}),r.a.createElement(u.a,{path:"/projects",component:Y}),r.a.createElement(u.a,{path:"/resume",component:U}))},V=function(){return r.a.createElement("div",null,r.a.createElement(i.Layout,null,r.a.createElement(i.Header,{className:"header-color",title:r.a.createElement("div",null,r.a.createElement(s.a,{style:{textDecoration:"blue",color:"white",fontFamily:"Raleway"},to:"/"},"WJ DEV")),scroll:!0},r.a.createElement(i.Navigation,null,r.a.createElement(s.a,{to:"/projects"},"PROJECTS"),r.a.createElement(s.a,{to:"/resume"},"RESUME"),r.a.createElement(s.a,{to:"/contact"},"CONTACT"))),r.a.createElement(i.Content,null,r.a.createElement("div",{className:"page-content"}),r.a.createElement(q,null))))},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(c.a,null,r.a.createElement(V,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");$?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):K(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):K(e)})}}()},60:function(e,t,a){e.exports=a(146)},67:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.67cc6c3d.chunk.js.map