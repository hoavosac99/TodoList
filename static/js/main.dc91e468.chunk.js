(this["webpackJsonpsetting-text-color"]=this["webpackJsonpsetting-text-color"]||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(7),o=a.n(r),l=(a(13),a(1)),c=a(2),i=a(4),m=a(3),u=(a(14),a(5)),d=function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).onChange=function(t){var e=t.target,a=e.name,s=e.value;"status"===a&&"true"===s?s=!0:"status"===a&&"false"===s&&(s=!1),n.setState(Object(u.a)({},a,s))},n.onSubmit=function(t){t.preventDefault(),n.props.onSubmit(n.state)},n.huybo=function(){n.setState({name:"",status:!0})},n.Closed=function(){n.props.Closed(!1)},n.state={id:"",name:"",status:!0},n}return Object(c.a)(a,[{key:"componentWillReceiveProps",value:function(t){t&&t.tasks?this.setState({id:t.tasks.id,name:t.tasks.name,status:t.tasks.status}):t.tasks||this.setState({id:"",name:"",status:!0})}},{key:"render",value:function(){var t=this.state.id;return s.a.createElement("div",null,s.a.createElement("h3",null,""!==t?"Sua cong viec":"Th\xeam c\xf4ng vi\u1ec7c",s.a.createElement("i",{className:"far fa-times-circle",onClick:this.Closed})),s.a.createElement("form",{action:"",onSubmit:this.onSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"T\xean"),s.a.createElement("input",{type:"text",name:"name",className:"form-control",value:this.state.name,onChange:this.onChange,placeholder:"","aria-describedby":"helpId"}),s.a.createElement("label",{htmlFor:""},"Tr\u1ea1ng th\xe1i"),s.a.createElement("select",{className:"form-control",name:"status",id:"",value:this.state.status,onChange:this.onChange},s.a.createElement("option",{value:!0},"Kich hoat"),s.a.createElement("option",{value:!1},"An")),s.a.createElement("button",{type:"submit",className:"btn btn-primary mr-sm-2"},s.a.createElement("i",{className:"far fa-save"}),"L\u01b0u l\u1ea1i"),s.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.huybo},s.a.createElement("i",{className:"fas fa-times"}),"X\xf3a b\u1ecf"))))}}]),a}(n.Component),p=function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).Sort=function(t,e){n.props.onSort(t,e)},n.state={sortBy:"",sortValue:1},n}return Object(c.a)(a,[{key:"render",value:function(){var t=this,e=this.state,a=e.sortBy,n=e.sortValue;function r(t,e){return a===t&&n===e?s.a.createElement("i",{className:"fas fa-check"}):""}return s.a.createElement("div",{className:"dropdown"},s.a.createElement("button",{type:"button",className:"btn btn-success dropdown-toggle btn--sort","data-toggle":"dropdown"},s.a.createElement("i",{className:"fas fa-sort-amount-down"}),"S\u1eafp x\u1ebfp"),s.a.createElement("div",{className:"dropdown-menu menu-sort"},s.a.createElement("ul",{className:"sort--list"},s.a.createElement("li",{className:"dropdown-item sort--item",onClick:function(){return t.Sort("name",1)}},"S\u1eafp x\u1ebfp t\xean",s.a.createElement("i",{className:"fas fa-sort-alpha-down"}),r("name",1)),s.a.createElement("li",{className:"dropdown-item sort--item",onClick:function(){return t.Sort("name",-1)}},"S\u1eafp x\u1ebfp t\xean",s.a.createElement("i",{className:"fas fa-sort-alpha-down-alt"}),r("name",-1)),s.a.createElement("li",{className:"dropdown-item sort--item",onClick:function(){return t.Sort("status",1)}},"Tr\u1ea1ng th\xe1i: K\xedch ho\u1ea1t",r("status",1)),s.a.createElement("li",{className:"dropdown-item sort--item",onClick:function(){return t.Sort("status",-1)}},"Tr\u1ea1ng th\xe1i: \u1ea8n",r("status",-1)))))}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(t.sortBy&&e.sortValue)return{sortBy:t.sortBy,sortValue:t.sortValue}}}]),a}(n.Component),h=function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).onChange=function(t){var e=t.target,a=e.name,s=e.value;n.setState(Object(u.a)({},a,s))},n.onClick=function(t){t.preventDefault(),n.props.onSearch(n.state.keyword)},n.state={keyword:""},n}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("form",{className:"form-inline",action:""},s.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search",name:"keyword",value:this.state.keyword,onChange:this.onChange}),s.a.createElement("button",{className:"btn btn-success",type:"submit",onClick:this.onClick},s.a.createElement("i",{className:"fas fa-search-plus"}),"T\xecm ki\u1ebfm")))}}]),a}(n.Component),f=function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-expand-sm"},s.a.createElement(h,{onSearch:this.props.onSearch}),s.a.createElement(p,{onSort:this.props.onSort,sortBy:this.props.sortBy,sortValue:this.props.sortValue}))))}}]),a}(n.Component),E=function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).onUpdate=function(){t.props.onUpdate(t.props.task.id)},t.onDelete=function(){t.props.onDelete(t.props.task.id)},t.onEdit=function(){t.props.onEdit(t.props.task.id)},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this.props,e=t.task,a=t.index;return s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},a),s.a.createElement("td",null,e.name),s.a.createElement("td",{onClick:this.onUpdate},e.status?s.a.createElement("span",{className:"badge badge-danger"},"Kich hoat"):s.a.createElement("span",{className:"badge badge-secondary"},"An")),s.a.createElement("td",null,s.a.createElement("button",{type:"button",className:"btn btn-danger mr-sm-2",onClick:this.onEdit},s.a.createElement("i",{className:"fas fa-pencil-alt"}),"S\u1eeda"),s.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.onDelete},s.a.createElement("i",{className:"fas fa-trash-alt"}),"X\xf3a")))}}]),a}(n.Component),v=function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).onChange=function(t){var e=t.target,a=e.name,s=e.value;n.props.onFilter("filterName"===a?s:n.state.filterName,"filterStatus"===a?s:n.state.filterStatus),n.setState(Object(u.a)({},a,s))},n.state={filterName:"",filterStatus:1},n}return Object(c.a)(a,[{key:"render",value:function(){var t=this,e=this.props.tasks,a=this.state,n=a.filterName,r=a.filterStatus,o=e.map((function(e,a){return s.a.createElement(E,{key:e.id,task:e,index:a,onUpdate:t.props.onUpdate,onDelete:t.props.onDelete,onEdit:t.props.onEdit})}));return s.a.createElement("div",{className:"TaskList"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"STT"),s.a.createElement("th",{scope:"col"},"T\xcaN"),s.a.createElement("th",{scope:"col"},"TR\u1ea0NG TH\xc1I"),s.a.createElement("th",{scope:"col"},"H\xc0NH \u0110\u1ed8NG"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Tim kiem"),s.a.createElement("td",null,s.a.createElement("input",{type:"text",className:"form-control",id:"",value:n,name:"filterName",onChange:this.onChange})),s.a.createElement("td",null,s.a.createElement("select",{className:"form-control",name:"filterStatus",id:"",onChange:this.onChange,value:r},s.a.createElement("option",{value:1},"T\u1ea5t c\u1ea3"),s.a.createElement("option",{value:2},"K\xedch ho\u1ea1t"),s.a.createElement("option",{value:3},"\u1ea8n")))),o)))}}]),a}(n.Component),b=function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).onGenerateData=function(){n.setState({tasksEditting:null,disFormAdd:!0})},n.onSubmit=function(t){var e=n.state.tasks;""===t.id?(t.id=n.generateData(),e.push(t)):e=e.map((function(e){return e.id===t.id&&(e=t),e})),n.setState({tasks:e,tasksEditting:null}),localStorage.setItem("tasks",JSON.stringify(e))},n.onUpdate=function(t){var e=n.state.tasks.map((function(e){return e.id===t&&(e.status=!e.status),e}));n.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e))},n.onDelete=function(t){var e=n.state.tasks;e.splice(t,1),n.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e))},n.onEdit=function(t){n.setState({disFormAdd:!1});var e=n.state.tasks.map((function(e){return e.id===t&&n.setState({disFormAdd:!0,tasksEditting:e}),e}));n.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e))},n.onClose=function(){n.setState({disFormAdd:!1})},n.onFilter=function(t,e){e=parseInt(e,10),n.setState({filter:{name:t.toLowerCase(),status:e}})},n.onSearch=function(t){n.setState({keyword:t})},n.onSort=function(t,e){n.setState({sortBy:t,sortValue:e})},n.state={tasks:[],tasksEditting:null,filter:{name:"",status:1},keyword:"",sort:null,sortBy:"name",sortValue:1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){if(localStorage&&localStorage.getItem("tasks")){var t=JSON.parse(localStorage.getItem("tasks"));this.setState({tasks:t,disFormAdd:!1})}}},{key:"s4",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},{key:"generateData",value:function(){return this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4+"-"+this.s4()+"-"+this.s4()}},{key:"render",value:function(){var t=this.state,e=t.tasks,a=t.disFormAdd,n=t.tasksEditting,r=t.filter,o=t.keyword,l=t.sortBy,c=t.sortValue;r&&(r.name&&(e=e.filter((function(t){return-1!==t.name.toLowerCase().indexOf(r.name)}))),e=e.filter((function(t){return 1===r.status?t:t.status===(2===r.status)}))),o&&(e=e.filter((function(t){return-1!==t.name.toLowerCase().indexOf(o)}))),"name"===l?1===c?e.sort((function(t,e){var a=t.name.toUpperCase(),n=e.name.toUpperCase();return a<n?-1:a>n?1:0})):e.sort((function(t,e){var a=t.name.toUpperCase(),n=e.name.toUpperCase();return a<n?1:a>n?-1:0})):"status"===l&&(1===c?e.sort((function(t,e){var a=t.status,n=e.status;return a<n?1:a>n?-1:0})):e.sort((function(t,e){var a=t.status,n=e.status;return a<n?-1:a>n?1:0})));var i=a?s.a.createElement(d,{onSubmit:this.onSubmit,tasks:n,Closed:this.onClose}):"";return s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"Qu\u1ea3n l\xfd c\xf4ng vi\u1ec7c"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:a?"col-xl-4":""},i),s.a.createElement("div",{className:a?"col-xl-8":"col-xl-12"},s.a.createElement("div",{className:"row"},s.a.createElement("button",{onClick:this.onGenerateData,type:"button",className:"btn btn-primary"},s.a.createElement("i",{className:"fas fa-plus"})," Th\xeam c\xf4ng vi\u1ec7c")),s.a.createElement("div",{className:"row"},s.a.createElement(f,{onSearch:this.onSearch,onSort:this.onSort,sortBy:this.state.sortBy,sortValue:this.state.sortValue})),s.a.createElement("div",{className:"row"},s.a.createElement(v,{tasks:e,onUpdate:this.onUpdate,onDelete:this.onDelete,onEdit:this.onEdit,onFilter:this.onFilter})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,a){t.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.dc91e468.chunk.js.map