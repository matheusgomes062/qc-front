(function(t){function e(e){for(var n,i,s=e[0],c=e[1],u=e[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1c4c":function(t,e,a){"use strict";a("6c06")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"app"}},[t._m(0),a("div",{staticClass:"content"},[a("FormWizard")],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("div",[a("span",{attrs:{id:"logo"}},[t._v("Qualicorp")])])])}],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mainContent"},[a("keep-alive",[a(t.currentStep,{ref:"currentStep",tag:"component",attrs:{"wizard-data":t.form}})],1),a("div",{staticClass:"progress-bar"},[a("div",{style:"width: "+t.progress+"%;"})]),a("div",{staticClass:"buttons"},[t.currentStepNumber>1?a("button",{staticClass:"btn",on:{click:t.goBack}},[t._v(" Voltar ")]):t._e(),a("button",{staticClass:"btn",on:{click:t.nextButtonAction}},[t._v(" "+t._s(t.isLastStep?":)":"Buscar Planos")+" ")])])],1)])},s=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"title"},[t._v("Informe seus dados")]),a("h2",{staticClass:"subtitle"},[t._v(" Assim você poderá ver os planos disponíveis para você! ")]),a("form",{staticClass:"form"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"formSection"},[a("label",{staticClass:"form-label",attrs:{for:"state"}},[t._v("Estado")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.estado,expression:"form.estado"}],staticClass:"form-control",attrs:{id:"state"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"estado",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"defaultState"}},[t._v("Selecione uma opção")]),t._l(t.stateObject,(function(e){return a("option",{key:e.nome,domProps:{value:e}},[t._v(t._s(e.nome)+" ")])}))],2)]),"defaultState"!=t.form.estado?a("div",{staticClass:"formSection"},[a("label",{staticClass:"form-label",attrs:{for:"city"}},[t._v("Município")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.municipio,expression:"form.municipio"}],staticClass:"form-control",attrs:{id:"city"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"municipio",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"defaultCity"}},[t._v("Selecione uma opção")]),t._l(t.cityObject,(function(e){return a("option",{key:e.nome,domProps:{value:e}},[t._v(t._s(e.nome)+" ")])}))],2)]):t._e(),"defaultCity"!=t.form.municipio?a("div",{staticClass:"formSection"},[a("label",{staticClass:"form-label",attrs:{for:"occupation"}},[t._v("Profissão")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.profissao,expression:"form.profissao"}],staticClass:"form-control",attrs:{id:"occupation"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"profissao",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"defaultOccupation"}},[t._v("Selecione uma opção")]),t._l(t.occupationObject,(function(e){return a("option",{key:e.profissao,domProps:{value:e}},[t._v(t._s(e.profissao)+" ")])}))],2)]):t._e(),"defaultOccupation"!=t.form.profissao?a("div",{staticClass:"formSection"},[a("label",{staticClass:"form-label",attrs:{for:"entity"}},[t._v("Entidade")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.entidade,expression:"form.entidade"}],staticClass:"form-control",attrs:{id:"occupation"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"entidade",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"defaultEntity"}},[t._v("Selecione uma opção")]),t._l(t.entityObject,(function(e){return a("option",{key:e.NomeFantasia,domProps:{value:e}},[t._v(t._s(e.NomeFantasia)+" ")])}))],2)]):t._e(),"defaultEntity"!=t.form.entidade?a("div",{staticClass:"formSection"},[a("label",{staticClass:"form-label"},[t._v("Data de Nascimento")]),a("Datepicker",{attrs:{placeholder:"Selecione uma data",name:"datePicker",format:"yyyy-MM-dd"},model:{value:t.form.datanascimento,callback:function(e){t.$set(t.form,"datanascimento",e)},expression:"form.datanascimento"}})],1):t._e()])])])},u=[],l=a("5530"),f=(a("d3b7"),a("99af"),a("fa33")),d=a("b5ae"),p=a("2f62"),m=a("bc3a"),v=a.n(m),b={components:{Datepicker:f["a"]},props:{wizardData:{type:Object,required:!0}},data:function(){return{form:{municipio:"defaultCity",estado:"defaultState",profissao:"defaultOccupation",entidade:"defaultEntity",datanascimento:""},stateObject:{},cityObject:{},occupationObject:{},plansObject:{},entityObject:{}}},computed:{},validations:{form:{entity:{required:d["required"]},uf:{required:d["required"]},cidade:{required:d["required"]},profissao:{required:d["required"]},datanascimento:{required:d["required"]}}},methods:Object(l["a"])(Object(l["a"])({},Object(p["b"])(["setPlans"])),{},{getState:function(){var t=this,e=v.a.create({baseURL:"https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"});return new Promise((function(a,n){e.get().then((function(e){var a=e.data,n=e.status;200===n&&(t.stateObject=a)})).catch((function(t){n(t)}))}))},submit:function(){var t=this,e=this.form.datanascimento,a=new Intl.DateTimeFormat("en",{year:"numeric"}).format(e),n=new Intl.DateTimeFormat("en",{month:"2-digit"}).format(e),o=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(e),r=["".concat(a,"-").concat(n,"-").concat(o)],i={entidade:this.form.entidade.NomeFantasia,uf:this.form.estado.sigla,cidade:this.form.municipio.nome,datanascimento:r},s=v.a.create({baseURL:"http://lb-aws-1105894158.sa-east-1.elb.amazonaws.com/"});return new Promise((function(e,a){s.post("plano?api-key=261fd4d0-fd9f-468a-afa9-f5a89ed3701c",i).then((function(a){var n=a.data,o=a.status;200===o&&e(t.setPlans({data:n}))})).catch((function(t){a(t)}))}))}}),watch:{"form.estado":function(){var t=this,e=v.a.create({baseURL:"https://servicodados.ibge.gov.br/api/v1/localidades/estados/".concat(this.form.estado.id,"/municipios")});return new Promise((function(a,n){e.get().then((function(e){var a=e.data,n=e.status;200===n&&(t.cityObject=a)})).catch((function(t){n(t)}))}))},"form.municipio":function(){var t=this,e=v.a.create({baseURL:"http://lb-aws-1105894158.sa-east-1.elb.amazonaws.com/"+"profissao/".concat(this.form.estado.sigla,"/").concat(this.form.municipio.nome,"?api-key=")+"ddd70c32-fc98-4618-b494-a9698f824353"});return new Promise((function(a,n){e.get().then((function(e){var a=e.data,n=e.status;200===n&&(t.occupationObject=a)})).catch((function(t){n(t)}))}))},"form.profissao":function(){var t=this,e=v.a.create({baseURL:"http://lb-aws-1105894158.sa-east-1.elb.amazonaws.com/"+"entidade/".concat(this.form.profissao.profissao,"/").concat(this.form.estado.sigla,"/").concat(this.form.municipio.nome,"?api-key=")+"4b94dba2-5524-4632-939b-92df1c50a645"});return new Promise((function(a,n){e.get().then((function(e){var a=e.data,n=e.status;200===n&&(t.entityObject=a)})).catch((function(t){n(t)}))}))}},created:function(){this.getState()}},h=b,_=(a("f014"),a("2877")),g=Object(_["a"])(h,c,u,!1,null,"a9425cc0",null),y=g.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"title"},[t._v("Planos disponíveis:")]),t._l(t.plans.data.planos,(function(e){return a("div",{key:e.idplano_sinf,staticClass:"card"},[a("div",[a("p",[t._v("Operadora:")]),a("span",[t._v(t._s(e.operadora))]),a("p",[t._v("Nome do Plano:")]),a("span",[t._v(t._s(e.nome_plano_ans))]),a("p",[t._v("Plano:")]),a("span",[t._v(t._s(e.plano))])]),a("img",{attrs:{src:e.operadoraLogo}})])}))],2)},S=[],w={name:"plansShowcase",props:{wizardData:{type:Object,required:!0}},data:function(){return{}},computed:Object(l["a"])({},Object(p["c"])({plans:function(t){return t.plans.plans}})),validations:{},methods:{submit:function(){return Promise.resolve()}}},C=w,j=(a("1c4c"),Object(_["a"])(C,O,S,!1,null,"2cc307a0",null)),P=j.exports,k={name:"FormWizard",components:{FormUserDetails:y,PlansShowcase:P},data:function(){return{currentStepNumber:1,steps:["FormUserDetails","PlansShowcase"],form:{}}},computed:{isLastStep:function(){return this.currentStepNumber===this.length},wizardInProgress:function(){return this.currentStepNumber<=this.length},length:function(){return this.steps.length},currentStep:function(){return this.steps[this.currentStepNumber-1]},progress:function(){return this.currentStepNumber/this.length*100}},methods:{submitOrder:function(){},nextButtonAction:function(){var t=this;this.$refs.currentStep.submit().then((function(e){Object.assign(t.form,e),t.isLastStep?t.submitOrder():t.goNext()})).catch((function(t){return console.log(t)}))},goBack:function(){this.currentStepNumber--},goNext:function(){this.currentStepNumber++}}},N=k,x=(a("f8fd"),Object(_["a"])(N,i,s,!1,null,"2d2a5423",null)),E=x.exports,L={name:"app",components:{FormWizard:E}},q=L,T=(a("5c0b"),Object(_["a"])(q,o,r,!1,null,null,null)),$=T.exports,A=a("1dce"),F=a.n(A),z={state:{plans:{}},getters:{token:function(t){return t.token},plans:function(t){return t.plans}},mutations:{SET_STATE_PLANS:function(t,e){t.plans=e}},actions:{setPlans:function(t,e){t.commit("SET_STATE_PLANS",e)}}};n["a"].use(p["a"]);var D=new p["a"].Store({modules:{plans:z}});n["a"].use(F.a),n["a"].config.productionTip=!1,n["a"].directive("clickOutside",{bind:function(t,e){t.__ClickOutsideHandler__=function(a){t===a.target||t.contains(a.target)||e.value(a)},document.body.addEventListener("click",t.__ClickOutsideHandler__)},unbind:function(t){document.body.removeEventListener("click",t.__ClickOutsideHandler__)}}),new n["a"]({store:D,render:function(t){return t($)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"6c06":function(t,e,a){},7030:function(t,e,a){},"79d0":function(t,e,a){},"9c0c":function(t,e,a){},f014:function(t,e,a){"use strict";a("7030")},f8fd:function(t,e,a){"use strict";a("79d0")}});
//# sourceMappingURL=app.a66ba310.js.map