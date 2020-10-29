(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{433:function(e,t,s){},434:function(e,t,s){},467:function(e,t,s){"use strict";var n=s(433);s.n(n).a},468:function(e,t,s){"use strict";var n=s(434);s.n(n).a},491:function(e,t,s){"use strict";s.r(t);var n=s(16),a=s.n(n),r=s(12),i={name:"RadioGender",props:["value","name"],data:function(){return{showOptions:!1}},computed:{},methods:{onCheck:function(){this.name?(this.$emit("open"),this.showOptions=!0):alert("請先輸入姓名")},onSelect:function(e){this.showOptions=!1,this.$emit("input",e)}},mounted:function(){},beforeDestroy:function(){},components:{}},o=(s(467),s(19)),c=Object(o.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"radio-gender-root"},[e.showOptions?s("div",{staticClass:"ratio-gender-options"},[s("a",{staticClass:"male",class:{ON:"M"===e.value},on:{click:function(t){return e.onSelect("M")}}},[e._v("男")]),s("a",{staticClass:"female",class:{ON:"W"===e.value},on:{click:function(t){return e.onSelect("W")}}},[e._v("女")])]):s("div",{staticClass:"radio-gender-btn"},[e.value?s("a",{staticClass:"check ON",on:{click:e.onCheck}},[e._v(e._s("M"===e.value?"男":"女"))]):s("a",{staticClass:"check",on:{click:e.onCheck}},[e._v("性別")])])])}),[],!1,null,null,null).exports,d={air:["機長","空服員","準備登機","captain","attendant","boarding"],gym:["教練","學員","預約上課","coach","student","bookclass"],villa:["富豪","登山客","準備入山","richman","girl","go"]},l=s(9),u={name:"Form",data:function(){return{name1:"",name2:"",gender1:"",gender2:"",alert:""}},computed:a()({},Object(r.e)(["user1name","user2name","user1gender","user2gender","cardState"]),{},Object(r.c)([]),{story:function(){return this.$route.matched[0].path.substr(1)},keywords:function(){var e=this.story;return d[e]}}),methods:a()({},Object(r.d)(["setUser1name","setUser2name","setUser1gender","setUser2gender","setCardState"]),{},Object(r.b)([]),{onSetCardState:function(e){this.sendGA("real"===e?"card":"nocard"),this.setCardState(e)},sendGA:function(e){void 0===e&&(e="");var t=this.$route.path;switch(!0){case/^\/air\/form$/i.test(t):Object(l.b)("skyname"+(e?"/":"")+e);break;case/^\/gym\/form$/i.test(t):Object(l.b)("gymname"+(e?"/":"")+e);break;case/^\/villa\/form$/i.test(t):Object(l.b)("mountainname"+(e?"/":"")+e)}},sendUser1GA:function(e){void 0===e&&(e="");var t=this.keywords[3];this.sendGA(""+t+e)},sendUser2GA:function(e){void 0===e&&(e="");var t=this.keywords[4];this.sendGA(""+t+e)},checkForm:function(){var e=this.keywords[5];this.sendGA(e),this.alert="";var t=this.story,s=this.keywords;this.name1?this.gender1?(this.setUser1name(this.name1),this.setUser1gender(this.gender1)):this.addAlert("請選擇"+s[0]+"的性別"):this.addAlert("請輸入"+s[0]+"的姓名"),this.name2?this.gender2?(this.setUser2name(this.name2),this.setUser2gender(this.gender2)):this.addAlert("請選擇"+s[1]+"的性別"):this.addAlert("請輸入"+s[1]+"的姓名"),this.cardState||this.addAlert("請選擇要玩有或沒有卡牌的版本"),""===this.alert?this.$router.push("/"+t+"/rule"):alert(this.alert)},addAlert:function(e){this.alert?this.alert+="\r"+e:this.alert=e},resetScroll:function(){window.scrollTo(0,0)}}),beforeRouteEnter:function(e,t,s){s()},beforeRouteLeave:function(e,t,s){s()},mounted:function(){this.sendGA(),this.name1=this.user1name,this.name2=this.user2name,this.gender1=this.user1gender,this.gender2=this.user2gender},beforeDestroy:function(){},components:{RadioGender:c}},m=(s(468),Object(o.a)(u,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form-root"},[s("div",{staticClass:"flex-wrap"},[s("div",{staticClass:"flex-content"},[s("p",{staticClass:"title"},[e._v("請輸入角色暱稱")]),s("div",{key:"role1",staticClass:"role-group"},[s("p",{staticClass:"text"},[e._v(e._s(e.keywords[0]))]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name1,expression:"name1"}],class:{ON:e.name1},attrs:{maxlength:"12",placeholder:"姓名"},domProps:{value:e.name1},on:{focus:function(t){return e.sendUser1GA()},blur:e.resetScroll,input:function(t){t.target.composing||(e.name1=t.target.value)}}}),s("RadioGender",{attrs:{name:e.name1},on:{open:function(t){return e.sendUser1GA("gender")}},model:{value:e.gender1,callback:function(t){e.gender1=t},expression:"gender1"}})],1)]),s("div",{key:"role2",staticClass:"role-group"},[s("p",{staticClass:"text"},[e._v(e._s(e.keywords[1]))]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name2,expression:"name2"}],class:{ON:e.name2},attrs:{maxlength:"12",placeholder:"姓名"},domProps:{value:e.name2},on:{focus:function(t){return e.sendUser2GA()},blur:e.resetScroll,input:function(t){t.target.composing||(e.name2=t.target.value)}}}),s("RadioGender",{attrs:{name:e.name2},on:{open:function(t){return e.sendUser2GA("gender")}},model:{value:e.gender2,callback:function(t){e.gender2=t},expression:"gender2"}})],1)]),s("div",{staticClass:"radio-card-state",class:{ON:e.cardState}},[s("a",{staticClass:"real",class:{ON:"real"===e.cardState},on:{click:function(t){return e.onSetCardState("real")}}},[e._v("有實體卡牌")]),s("a",{staticClass:"dynamic",class:{ON:"dynamic"===e.cardState},on:{click:function(t){return e.onSetCardState("dynamic")}}},[e._v("無實體卡牌")])])])]),s("a",{staticClass:"btn bottom",on:{click:e.checkForm}},[e._v(e._s(e.keywords[2]))])])}),[],!1,null,null,null).exports);s.d(t,"default",(function(){return m}))}}]);