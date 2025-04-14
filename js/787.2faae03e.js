"use strict";(self["webpackChunklogin01"]=self["webpackChunklogin01"]||[]).push([[787],{5787:function(e,t,i){i.r(t),i.d(t,{default:function(){return c}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"muscle-page"},[t("h1",[e._v("💪 Forearm ")]),t("p",{staticClass:"intro"},[e._v(" The forearm is a crucial muscle group located between the elbow and the wrist. It contains both flexor and extensor muscles responsible for various movements such as wrist curls, finger flexion, grip strength, and rotational control of the forearm. Strong forearms not only enhance performance in weightlifting and sports but also help prevent injuries and improve daily functionality like lifting, typing, and carrying. ")]),t("div",{staticClass:"selectors"},[t("div",{staticClass:"selector-block"},[t("label",[e._v("Select Gender:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedGender,expression:"selectedGender"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedGender=t.target.multiple?i:i[0]}}},[t("option",{attrs:{disabled:"",value:""}},[e._v("Please select")]),t("option",[e._v("Male")]),t("option",[e._v("Female")])])]),t("div",{staticClass:"selector-block"},[t("label",[e._v("Select Equipment:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedEquipment,expression:"selectedEquipment"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedEquipment=t.target.multiple?i:i[0]}}},[t("option",{attrs:{disabled:"",value:""}},[e._v("Please select")]),t("option",[e._v("Dumbbell")]),t("option",[e._v("Barbell")]),t("option",[e._v("Bodyweight")]),t("option",[e._v("Resistance Band")]),t("option",[e._v("Other")])])]),t("button",{attrs:{disabled:!e.canRecommend},on:{click:e.loadRecommendations}},[e._v("Show Recommended Exercises")])]),e.recommendations.length?t("div",{staticClass:"recommendations"},[t("h3",[e._v("🎯 Recommended Exercises:")]),t("ul",e._l(e.recommendations,(function(i,r){return t("li",{key:r},[t("h4",[e._v(e._s(i.name))]),t("p",[e._v(e._s(i.description))]),t("img",{attrs:{src:i.gif,alt:"exercise demo"}})])})),0)]):e._e()])},s=[],n={data(){return{selectedGender:"",selectedEquipment:"",recommendations:[]}},computed:{canRecommend(){return this.selectedGender&&this.selectedEquipment}},methods:{loadRecommendations(){const e={Dumbbell:{Male:[{name:"Dumbbell Wrist Curl",description:"Seated, palms up, slowly curl the dumbbell to target wrist flexors.",gif:"https://media1.tenor.com/m/J3eICLvit4kAAAAC/wrist-curl-bar.gif"},{name:"Reverse Dumbbell Wrist Curl",description:"Palms down grip, lift dumbbell to strengthen wrist extensors.",gif:"https://assets.myworkouts.io/exercises-media/kbKcRTtJdtZXws6iA/one_arm_reverse_dumbbell_wrist_curl_over_bench_male_v4_gif100px_capon.gif"}],Female:[{name:"Dumbbell Wrist Curl",description:"Seated, palms up, slowly curl the dumbbell to target wrist flexors.",gif:"https://media1.tenor.com/m/J3eICLvit4kAAAAC/wrist-curl-bar.gif"},{name:"Reverse Dumbbell Wrist Curl",description:"Palms down grip, lift dumbbell to strengthen wrist extensors.",gif:"https://assets.myworkouts.io/exercises-media/kbKcRTtJdtZXws6iA/one_arm_reverse_dumbbell_wrist_curl_over_bench_male_v4_gif100px_capon.gif"}]},Barbell:{Male:[{name:"Barbell Wrist Curl",description:"Rest forearms on thighs, palms up, lift barbell with wrist flexion.",gif:"https://gymvisual.com/img/p/4/8/1/6/4816.gif"},{name:"Reverse Barbell Wrist Curl",description:"Hold barbell with overhand grip, lift slowly using wrist extensors.",gif:"https://fitnessprogramer.com/wp-content/uploads/2022/06/Barbell-Reverse-Wrist-Curl-Over-a-Bench.gif"}],Female:[{name:"Barbell Wrist Curl",description:"Rest forearms on thighs, palms up, lift barbell with wrist flexion.",gif:"https://gymvisual.com/img/p/4/8/1/6/4816.gif"},{name:"Reverse Barbell Wrist Curl",description:"Hold barbell with overhand grip, lift slowly using wrist extensors.",gif:"https://fitnessprogramer.com/wp-content/uploads/2022/06/Barbell-Reverse-Wrist-Curl-Over-a-Bench.gif"}]},Bodyweight:{Male:[{name:"Static Push-Up Hold",description:"Hold top push-up position to engage forearms and core.",gif:"https://i.pinimg.com/originals/fd/bb/09/fdbb092b58863e5c86fdb8bb1411fcea.gif"},{name:"Wall Handstand Hold",description:"Handstand against wall to train wrist endurance and control.",gif:"https://bodyweighttrainingarena.com/wp-content/uploads/2023/09/Wall-handstand-chest-facing.gif"}],Female:[{name:"Knee Push-Ups",description:"Beginner-friendly push-up to build wrist strength and stability.",gif:"https://media.post.rvohealth.io/wp-content/uploads/sites/2/2020/08/GRT-1.17.RegularChestPushupOnKnees.gif"}]},"Resistance Band":{Male:[{name:"Resistance Band Wrist Curl",description:"Anchor band and curl wrist to target flexors.",gif:"https://i.makeagif.com/media/1-16-2019/C5OTVv.gif"},{name:"Reverse Band Curl",description:"Overhand grip pulling band for forearm extensors.",gif:"https://gymvisual.com/img/p/5/7/0/7/5707.gif"}],Female:[{name:"Seated Resistance Band Stretch",description:"Gentle stretch with band to increase mobility.",gif:"https://i.pinimg.com/originals/79/ab/b0/79abb0d27d8341e31572d5ecf3ce372e.gif"},{name:"Inner Pull Band Curl",description:"Light resistance inward curls for forearm shaping.",gif:"https://i.pinimg.com/originals/79/f4/73/79f473c8a0cc4c6f7438159d07daf903.gif"}]},Other:{Male:[{name:"Wrist Roller",description:"Use rolling bar device to improve strength and endurance.",gif:"https://cdn-0.weighttraining.guide/wp-content/uploads/2022/11/Wrist-roller.png?ezimgfmt=ng%3Awebp%2Fngcb4"},{name:"Power Gripper Squeeze",description:"Explosive repetitions with hand gripper for grip strength.",gif:"https://www.nerdfitness.com/wp-content/uploads/2019/06/improve-grip-strength-with-grip-crushers.gif"}],Female:[{name:"Grip Ball Squeeze",description:"Squeeze a soft grip ball repeatedly to boost wrist control.",gif:"https://irp.cdn-website.com/c8c90ce7/dms3rep/multi/Ball+Squeeze.gif"},{name:"Wrist Rotation Ring",description:"Use small wrist ring to improve mobility and prevent stiffness.",gif:"https://i.pinimg.com/originals/df/fe/69/dffe6942482eec2e35535efc602f589f.gif"}]}};this.recommendations=e[this.selectedEquipment]?.[this.selectedGender]||[]}}},l=n,a=i(1656),o=(0,a.A)(l,r,s,!1,null,"4dd95b9d",null),c=o.exports}}]);
//# sourceMappingURL=787.2faae03e.js.map