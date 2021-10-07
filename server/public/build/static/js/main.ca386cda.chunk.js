(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,t,n){},119:function(e,t,n){},134:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(23),r=n.n(c),o=(n(86),n(6)),i=(n(87),n(88),n(10)),l=n(145),u=n(142),h=n(147),j=n(144),d=n(9),b=n(28),p=n.n(b),m=function e(){var t=this;Object(d.a)(this,e),this.login=function(e,n){return t.app.post("/login",{email:e,password:n})},this.signup=function(e,n,a,s,c,r,o,i,l){return t.app.post("/signup",{email:e,password:n,photo:a,name:s,lastname:c,age:r,gender:o,height:i,weight:l})},this.logout=function(){return t.app.get("/logout")},this.isloggedin=function(){return t.app.post("/profile")},this.updateAuth=function(e,n,a,s,c,r,o,i){return t.app.put("/".concat(e),{photo:n,name:a,lastname:s,age:c,gender:r,height:o,weight:i})},this.app=p.a.create({baseURL:"http://localhost:5000/api/auth",withCredentials:!0})},x=n(1);function O(e){var t=new m;return Object(x.jsx)("div",{children:Object(x.jsx)(l.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(x.jsxs)(u.a,{children:[Object(x.jsxs)(l.a.Brand,{as:i.b,to:"/",children:[Object(x.jsx)("img",{alt:"",src:"/logo-iron.png",width:"30",height:"30",className:"d-inline-block align-top"})," ","Iron Muscles"]}),Object(x.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(x.jsxs)(l.a.Collapse,{id:"responsive-navbar-nav",children:[Object(x.jsxs)(h.a,{className:"me-auto",children:[Object(x.jsx)(h.a.Link,{as:i.b,to:"/workouts",children:"Workouts Plans"}),Object(x.jsx)(h.a.Link,{as:i.b,to:"/exercises",children:"Exercises Guide"})]}),Object(x.jsxs)(h.a,{children:[e.loggedUser?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("span",{className:"nav-link",onClick:function(){t.logout().then((function(t){e.storeUser(null)})).catch((function(e){return console.log(e)}))},children:"Logout"})}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(h.a.Link,{as:i.b,to:"/login",children:"Login"}),Object(x.jsx)(h.a.Link,{as:i.b,to:"/signup",children:"Signup"})]}),Object(x.jsxs)(j.a,{title:"My Iron Muscles",id:"collasible-nav-dropdown",children:[Object(x.jsx)(j.a.Item,{as:i.b,to:"/profile",children:"Profile"}),Object(x.jsx)(j.a.Item,{as:i.b,to:"/exercises",children:"Exercises"}),Object(x.jsx)(j.a.Divider,{}),Object(x.jsx)(j.a.Item,{as:i.b,to:"/exercises/create",children:"Add new exercise"})]})]})]})]})})})}var f=function(){return Object(x.jsx)("footer",{className:"page-footer font-small blue pt-4",children:Object(x.jsx)("div",{className:"footer-copyright text-center py-3",children:"PK \xa9 2021 Copyright"})})},v=n(2);n(118);function g(){return Object(x.jsxs)(u.a,{className:"bg",children:[Object(x.jsx)("h1",{children:" Iron Muscles"}),Object(x.jsx)("h3",{children:" Track your workouts"})]})}var y=n(8),w=n(14),I=n(15),S=n(26),C=n(146),k=n(78),N=function(e){Object(I.a)(n,e);var t=Object(S.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleInput=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(y.a)({},n,s))},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,s=t.password;a.authService.login(n,s).then((function(e){a.props.storeUser(e.data),a.props.history.push("/profile")})).catch((function(e){return console.log(e)}))},a.state={email:"",password:""},a.authService=new m,a}return Object(w.a)(n,[{key:"render",value:function(){return Object(x.jsx)(u.a,{children:Object(x.jsxs)(C.a,{onSubmit:this.handleFormSubmit,children:[Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(x.jsx)(C.a.Label,{children:"Email"}),Object(x.jsx)(C.a.Control,{name:"email",value:this.state.email,onChange:this.handleInput,type:"text",placeholder:"Enter Email"})]}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(x.jsx)(C.a.Label,{children:"Password"}),Object(x.jsx)(C.a.Control,{name:"password",value:this.state.password,onChange:this.handleInput,type:"password",placeholder:"Password"})]}),Object(x.jsx)(k.a,{variant:"primary",type:"submit",children:"Submit"})]})})}}]),n}(a.Component),L=function e(){var t=this;Object(d.a)(this,e),this.handleUpload=function(e){return t.app.post("/",e)},this.app=p.a.create({baseURL:"http://localhost:5000/api/upload",withCredentials:!0})},E=function(e){Object(I.a)(n,e);var t=Object(S.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleInput=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(y.a)({},n,s))},a.handleFileUpload=function(e){console.log("The file to be uploaded is: ",e.target.files[0]);var t=new FormData;t.append("photo",e.target.files[0]),a.cloudService.handleUpload(t).then((function(e){console.log("response is: ",e),a.setState({photo:e.data.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,s=t.password,c=t.photo,r=t.name,o=t.lastname;a.authService.signup(n,s,c,r,o).then((function(e){return a.props.history.push("/login")})).catch((function(e){return console.log(e)}))},a.state={email:"",password:"",role:"",photo:"",name:"",lastname:""},a.authService=new m,a.cloudService=new L,a}return Object(w.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsx)(u.a,{children:Object(x.jsxs)(C.a,{onSubmit:this.handleFormSubmit,children:[Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(x.jsx)(C.a.Label,{children:"Email"}),Object(x.jsx)(C.a.Control,{name:"email",value:this.state.email,onChange:this.handleInput,type:"email",placeholder:"Enter Email"})]}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(x.jsx)(C.a.Label,{children:"Password"}),Object(x.jsx)(C.a.Control,{name:"password",value:this.state.password,onChange:this.handleInput,type:"password",placeholder:"Password"})]}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formFile",children:[Object(x.jsx)(C.a.Label,{children:"Photo"}),Object(x.jsx)(C.a.Control,{onChange:function(t){return e.handleFileUpload(t)},type:"file",placeholder:"Photo"})]}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicName",children:[Object(x.jsx)(C.a.Label,{children:"Name"}),Object(x.jsx)(C.a.Control,{name:"name",value:this.state.name,onChange:this.handleInput,type:"text",placeholder:"Name"})]}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicLastname",children:[Object(x.jsx)(C.a.Label,{children:"Lastname"}),Object(x.jsx)(C.a.Control,{name:"lastname",value:this.state.lastname,onChange:this.handleInput,type:"text",placeholder:"Lastname"})]}),Object(x.jsx)(k.a,{variant:"primary",type:"submit",children:"Submit"})]})})}}]),n}(a.Component),B=function(e){Object(I.a)(n,e);var t=Object(S.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){console.log("object"),a.setState(Object(v.a)({},a.props.loggedUser),(function(){return console.log(a.state)}))},a.handleChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(y.a)({},n,s))},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t._id,s=t.photo,c=t.name,r=t.lastname,o=t.age,i=t.gender,l=t.height,u=t.weight;a.authService.updateAuth(n,s,c,r,o,i,l,u).then((function(e){a.props.storeUser(e.data.user),a.props.history.push("/")})).catch((function(e){return console.log(e)}))},a.state=Object(v.a)({},a.props.loggedUser),a.authService=new m,a}return Object(w.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[this.state.email?Object(x.jsx)(u.a,{children:Object(x.jsxs)(C.a,{onSubmit:this.handleFormSubmit,children:[Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formFile",children:[Object(x.jsx)(C.a.Label,{children:"Photo"}),Object(x.jsx)(C.a.Control,{name:"photo",value:this.state.photo,onChange:this.handleChange,type:"text",placeholder:"Photo"})]}),Object(x.jsx)("h1",{children:"Personal Information"}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicName",children:[Object(x.jsx)(C.a.Label,{children:"Name"}),Object(x.jsx)(C.a.Control,{name:"name",value:this.state.name,onChange:this.handleChange,type:"text",placeholder:"Name"})]}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicLastname",children:[Object(x.jsx)(C.a.Label,{children:"Lastname"}),Object(x.jsx)(C.a.Control,{name:"lastname",value:this.state.lastname,onChange:this.handleChange,type:"text",placeholder:"Lastname"})]}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicAge",children:[Object(x.jsx)(C.a.Label,{children:"Age"}),Object(x.jsx)(C.a.Control,{name:"age",value:this.state.age,onChange:this.handleChange,type:"number",placeholder:"Age"})]}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicGender",children:[Object(x.jsx)(C.a.Label,{children:"Gender"}),Object(x.jsx)(C.a.Control,{name:"gender",value:this.state.gender,onChange:this.handleChange,type:"text",placeholder:"Gender"})]}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicHeight",children:[Object(x.jsx)(C.a.Label,{children:"Height"}),Object(x.jsx)(C.a.Control,{name:"height",value:this.state.height,onChange:this.handleChange,type:"number",placeholder:"Height"})]}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicWeight",children:[Object(x.jsx)(C.a.Label,{children:"Weight"}),Object(x.jsx)(C.a.Control,{name:"weight",value:this.state.weight,onChange:this.handleChange,type:"number",placeholder:"Weight"})]}),Object(x.jsx)(k.a,{variant:"dark",type:"submit",children:"Submit"})]})}):Object(x.jsx)("p",{children:"Loading...."}),Object(x.jsx)("div",{children:Object(x.jsx)(i.b,{to:"/workoutForm",children:Object(x.jsx)(k.a,{variant:"dark",children:"New Workout"})})})]})}}]),n}(a.Component),F=function e(){var t=this;Object(d.a)(this,e),this.getAllExercises=function(){return t.app.get("/")},this.getOneExercise=function(e){return t.app.get("/".concat(e))},this.createExercise=function(e){return console.log(e),t.app.post("/",e)},this.deleteOneExercise=function(e){return t.app.delete("/".concat(e))},this.updateExercise=function(e){return t.app.put("/".concat(e))},this.app=p.a.create({baseURL:"http://localhost:5000/api/exercises",withCredentials:!0})},G=n(79),U=n(148),M=(n(119),new F);function D(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){var e=!0;return M.getAllExercises().then((function(t){e&&s(t.data),console.log("ENTROexlist: ",e)})),function(){return e=!1}}),[]),n.length>0?n.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(G.a,{md:4,className:"mb-3",children:Object(x.jsxs)(U.a,{children:[Object(x.jsx)(U.a.Img,{variant:"top",src:e.photo}),Object(x.jsxs)(U.a.Body,{children:[Object(x.jsx)(U.a.Title,{children:e.name}),Object(x.jsx)(i.b,{to:"/exercises/".concat(e._id),children:Object(x.jsx)(k.a,{variant:"dark",children:"Ver detalles"})})]})]})})})})):Object(x.jsx)("p",{children:"Sin resultados"})}var P=n(55),A=function(e){Object(I.a)(n,e);var t=Object(S.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).mainMuscleInvolvedOptions=[{value:"abs",label:"abs"},{value:"back",label:"back"},{value:"chest",label:"chest"},{value:"shoulders",label:"shoulders"},{value:"biceps",label:"biceps"},{value:"triceps",label:"triceps"},{value:"forearm",label:"forearm"},{value:"glutes",label:"glutes"},{value:"upper legs",label:"upper legs"},{value:"lower legs",label:"lower legs"},{value:"cardio",label:"cardio"}],a.handleSelectInput=function(e){a.setState({mainMuscleInvolved:e.value},(function(){return console.log(a.state.mainMuscleInvolved)}))},a.handleInput=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(y.a)({},n,s))},a.handleFileUpload=function(e){console.log("The file to be uploaded is: ",e.target.files[0]);var t=new FormData;t.append("photo",e.target.files[0]),a.cloudService.handleUpload(t).then((function(e){console.log("response is: ",e),a.setState({photo:e.data.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,s=t.photo,c=t.mainMuscleInvolved,r=t.equipment,o=t.instructions;a.exercisesService.createExercise({name:n,photo:s,mainMuscleInvolved:c,equipment:r,instructions:o}).then((function(e){return a.props.history.push("/exercises")})).catch((function(e){return console.log(e)}))},a.state={name:"",photo:[""],mainMuscleInvolved:"",equipment:"",instructions:""},a.exercisesService=new F,a.cloudService=new L,a}return Object(w.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsx)(u.a,{children:Object(x.jsxs)(C.a,{onSubmit:this.handleFormSubmit,children:[Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicName",children:[Object(x.jsx)(C.a.Label,{children:"Name"}),Object(x.jsx)(C.a.Control,{name:"name",value:this.state.name,onChange:this.handleInput,type:"text",placeholder:"Enter name"})]}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formFile",children:[Object(x.jsx)(C.a.Label,{children:"Photo"}),Object(x.jsx)(C.a.Control,{onChange:function(t){return e.handleFileUpload(t)},type:"file",placeholder:"Photo"})]}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicMainMuscleInvolved",children:[Object(x.jsx)(C.a.Label,{children:"Main Muscle Involved"}),Object(x.jsx)(P.a,{options:this.mainMuscleInvolvedOptions,value:this.state.mainMuscleInvolved.value,onChange:this.handleSelectInput,placeholder:"MainMuscleInvolved"})]}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicEquipment",children:[Object(x.jsx)(C.a.Label,{children:"Equipment"}),Object(x.jsx)(C.a.Control,{name:"equipment",value:this.state.equipment,onChange:this.handleInput,type:"text",placeholder:"equipment"})]}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicInstructions",children:[Object(x.jsx)(C.a.Label,{children:"Instructions"}),Object(x.jsx)(C.a.Control,{name:"instructions",value:this.state.instructions,onChange:this.handleInput,type:"text",placeholder:"instructions"})]}),Object(x.jsx)(k.a,{variant:"primary",type:"submit",children:"Submit"})]})})}}]),n}(a.Component),W=n(143),T=new F;function q(e){var t=Object(a.useState)(),n=Object(o.a)(t,2),s=n[0],c=n[1];console.log("props: ",e.match.params);var r=e.match.params.id;return Object(a.useEffect)((function(){var e=!0;return T.getOneExercise(r).then((function(t){e&&c(t.data),console.log("ENTROdetails: ",e),console.log("exercise data: ",t.data)})),function(){return e=!1}}),[]),Object(x.jsx)(u.a,{children:s?Object(x.jsxs)(W.a,{children:[Object(x.jsxs)(G.a,{md:6,children:[Object(x.jsxs)("h1",{children:["Exercise: ",s.exercise.name]}),Object(x.jsxs)("h3",{children:["Description: ",s.exercise.instructions]}),Object(x.jsx)("hr",{}),Object(x.jsxs)("p",{children:["Main muscl involved: ",s.exercise.mainMuscleInvolved]}),Object(x.jsxs)("p",{children:["Equipment: ",s.exercise.equipment]})]}),Object(x.jsx)(G.a,{md:4,children:Object(x.jsx)("img",{src:s.exercise.photo,alt:s.exercise.namename})})]}):Object(x.jsx)("h3",{children:"Loading..."})})}var _=new F;function R(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1];Object(a.useEffect)((function(){var e=!0;return _.getAllExercises().then((function(t){e&&s(t.data)})),function(){return e=!1}}),[]);var c=n.filter((function(e){return"back"===e.mainMuscleInvolved}));return console.log("back",c),c.length>0?c.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(G.a,{md:4,className:"mb-3",children:Object(x.jsxs)(U.a,{children:[Object(x.jsx)(U.a.Img,{variant:"top",src:e.photo}),Object(x.jsxs)(U.a.Body,{children:[Object(x.jsx)(U.a.Title,{children:e.name}),Object(x.jsx)(i.b,{to:"/exercises/".concat(e._id),children:Object(x.jsx)(k.a,{variant:"primary",children:"Ver detalles"})})]})]})})})})):Object(x.jsx)("p",{children:"Sin resultados"})}var V=new F;function H(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1];Object(a.useEffect)((function(){var e=!0;return V.getAllExercises().then((function(t){e&&s(t.data)})),function(){return e=!1}}),[]);var c=n.filter((function(e){return"abs"===e.mainMuscleInvolved}));return console.log("abs",c),c.length>0?c.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(G.a,{md:4,className:"mb-3",children:Object(x.jsxs)(U.a,{children:[Object(x.jsx)(U.a.Img,{variant:"top",src:e.photo}),Object(x.jsxs)(U.a.Body,{children:[Object(x.jsx)(U.a.Title,{children:e.name}),Object(x.jsx)(i.b,{to:"/exercises/".concat(e._id),children:Object(x.jsx)(k.a,{variant:"primary",children:"Ver detalles"})})]})]})})})})):Object(x.jsx)("p",{children:"Sin resultados"})}var J=function e(){var t=this;Object(d.a)(this,e),this.getAllWorkouts=function(){return t.instance.get("/")},this.getOneWorkout=function(e){return t.instance.get("/".concat(e))},this.createWorkouts=function(e){return t.instance.post("/",e)},this.deleteOneWorkout=function(e){return t.instance.delete("/".concat(e))},this.updateWorkout=function(e){return t.instance.put("/".concat(e))},this.instance=p.a.create({baseURL:"http://localhost:5000/api/workouts",withCredentials:!0}),console.log("servicio3 ---\x3e",this.instance.baseURL)},K=(n(134),new J);function z(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){var e=!0;return K.getAllWorkouts().then((function(t){e&&s(t.data)})),function(){return e=!1}}),[]),n.length>0?n.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(G.a,{md:4,className:"mb-3",children:Object(x.jsxs)(U.a,{children:[Object(x.jsx)(U.a.Img,{variant:"top",src:e.photo}),Object(x.jsxs)(U.a.Body,{children:[Object(x.jsx)(U.a.Title,{children:e.name}),Object(x.jsx)(i.b,{to:"/workouts/".concat(e._id),children:Object(x.jsx)(k.a,{variant:"dark",children:"Ver detalles"})})]})]})})})})):Object(x.jsx)("p",{children:"Sin resultados"})}var Q=new J;function X(e){var t=Object(a.useState)(),n=Object(o.a)(t,2),s=n[0],c=n[1],r=e.match.params.id;return Object(a.useEffect)((function(){var e=!0;return Q.getOneWorkout(r).then((function(t){e&&c(t.data)})),function(){return e=!1}}),[]),Object(x.jsx)(u.a,{children:s?Object(x.jsx)(W.a,{children:Object(x.jsxs)(G.a,{md:6,children:[Object(x.jsxs)("h1",{children:["Workout: ",s.workout.name]}),Object(x.jsx)("h3",{children:s.workout.day}),Object(x.jsx)("hr",{}),Object(x.jsxs)("p",{children:["Duration: ",s.workout.duration," min"]}),Object(x.jsx)("p",{children:"Exercises:"}),s.workout.exercises.length>0?s.workout.exercises.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(G.a,{md:4,className:"mb-3",children:Object(x.jsxs)(U.a,{children:[Object(x.jsx)(U.a.Img,{variant:"top",src:e.photo}),Object(x.jsxs)(U.a.Body,{children:[Object(x.jsx)(U.a.Title,{children:e.name}),Object(x.jsx)(i.b,{to:"/exercises/".concat(e._id),children:Object(x.jsx)(k.a,{variant:"dark",children:"Ver detalles"})})]})]})})})})):Object(x.jsx)("p",{children:"Sin resultados"})]})}):Object(x.jsx)("h3",{children:"Loading..."})})}var Y=n(80),Z=function(e){Object(I.a)(n,e);var t=Object(S.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).dayOptions=[{value:"monday",label:"monday"},{value:"tuesday",label:"tuesday"},{value:"wednesday",label:"wednesday"},{value:"thursday",label:"thursday"},{value:"friday",label:"friday"},{value:"saturday",label:"saturday"},{value:"sunday",label:"sunday"}],a.componentDidMount=function(){a.exerciseService.getAllExercises().then((function(e){return a.setState({exercises:e.data})})).catch((function(e){return console.log(e)}))},a.handleInput=function(e){if(console.log("Valor e: ",e),e.target){var t=e.target,n=t.name,s=t.value;a.setState(Object(y.a)({},n,s))}else a.setState({userSelection:e})},a.handleSelectInput=function(e){a.setState({day:e.value},(function(){return console.log(a.state.day)}))},a.handleFormSubmit=function(e){e.preventDefault();for(var t=a.state,n=t.name,s=t.day,c=t.date,r=t.duration,o=t.owner,i=t.userSelection,l=[],u=0;u<i.length;u++)l.push(i[u].value);a.workoutService.createWorkouts({name:n,day:s,date:c,exercises:l,duration:r,owner:o}).then((function(e){return a.props.history.push("/workouts")})).catch((function(e){return console.log(e.err)}))},a.state={name:"",day:"",date:"",exercises:[],duration:0,userSelection:[]},a.workoutService=new J,a.exerciseService=new F,a}return Object(w.a)(n,[{key:"render",value:function(){return console.log(this.state.exercises),Object(x.jsx)(u.a,{children:Object(x.jsxs)(C.a,{onSubmit:this.handleFormSubmit,children:[Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicName",children:[Object(x.jsx)(C.a.Label,{children:"Name"}),Object(x.jsx)(C.a.Control,{name:"name",value:this.state.name,onChange:this.handleInput,type:"name",placeholder:"name"})]}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicDay",children:[Object(x.jsx)(C.a.Label,{children:"Day"}),Object(x.jsx)(P.a,{options:this.dayOptions,value:this.state.day.value,onChange:this.handleSelectInput,placeholder:"Day"})]}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicExercises",children:[Object(x.jsx)(C.a.Label,{children:"Exercises"}),Object(x.jsx)(Y.a,{options:this.state.exercises.map((function(e){return{value:e._id,label:e.name}})),value:this.state.userSelection,onChange:this.handleInput,labelledBy:"Select exercises"})]}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicDate",children:[Object(x.jsx)(C.a.Label,{children:"Date"}),Object(x.jsx)(C.a.Control,{name:"date",value:this.state.date,onChange:this.handleInput,type:"date",placeholder:"date"})]}),Object(x.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicLastDuration",children:[Object(x.jsx)(C.a.Label,{children:"LastDuration"}),Object(x.jsx)(C.a.Control,{name:"duration",value:this.state.duration,onChange:this.handleInput,type:"number",min:"1",placeholder:"duration"})]}),Object(x.jsx)(k.a,{variant:"primary",type:"submit",children:"Submit"})]})})}}]),n}(a.Component),$=n(11),ee=function(e){var t=e.storeUser,n=e.loggedUser;return Object(x.jsxs)($.d,{children:[Object(x.jsx)($.b,{exact:!0,path:"/",render:function(){return Object(x.jsx)(g,{})}}),Object(x.jsx)($.b,{exact:!0,path:"/login",render:function(e){return Object(x.jsx)(N,Object(v.a)({storeUser:t},e))}}),Object(x.jsx)($.b,{exact:!0,path:"/signup",render:function(e){return Object(x.jsx)(E,Object(v.a)({},e))}}),Object(x.jsx)($.b,{exact:!0,path:"/profile",render:function(e){return n?Object(x.jsx)(B,Object(v.a)(Object(v.a)({},e),{},{loggedUser:n,storeUser:t})):Object(x.jsx)($.a,{to:"/login"})}}),Object(x.jsx)($.b,{exact:!0,path:"/workouts",render:function(){return Object(x.jsx)(z,{})}}),Object(x.jsx)($.b,{exact:!0,path:"/exercises",render:function(){return Object(x.jsx)(D,{})}}),Object(x.jsx)($.b,{exact:!0,path:"/exercises/create",render:function(e){return Object(x.jsx)(A,Object(v.a)({},e))}}),Object(x.jsx)($.b,{exact:!0,path:"/exercises/back",render:function(){return Object(x.jsx)(R,{})}}),Object(x.jsx)($.b,{exact:!0,path:"/exercises/abs",render:function(){return Object(x.jsx)(H,{})}}),Object(x.jsx)($.b,{path:"/exercises/:id",render:function(e){return Object(x.jsx)(q,Object(v.a)({},e))}}),Object(x.jsx)($.b,{exact:!0,path:"/workouts/:id",render:function(e){return Object(x.jsx)(X,Object(v.a)({},e))}}),Object(x.jsx)($.b,{path:"/workoutForm",render:function(e){return Object(x.jsx)(Z,Object(v.a)({},e))}})]})},te=new m,ne=function(){var e=Object(a.useState)(void 0),t=Object(o.a)(e,2),n=t[0],s=t[1],c=function(e){return s(e)};return Object(a.useEffect)((function(){te.isloggedin().then((function(e){return c(e.data)})).catch((function(e){return c(null)}))}),[]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(O,{storeUser:s,loggedUser:n}),Object(x.jsx)(ee,{storeUser:s,loggedUser:n}),Object(x.jsx)(f,{})]})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,149)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(x.jsx)(i.a,{children:Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(ne,{})})}),document.getElementById("root")),ae()},86:function(e,t,n){},88:function(e,t,n){}},[[136,1,2]]]);
//# sourceMappingURL=main.ca386cda.chunk.js.map