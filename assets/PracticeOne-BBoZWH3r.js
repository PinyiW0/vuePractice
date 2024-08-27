import{d as x,g as h,r as C,o as l,c as r,b as s,w as c,h as o,e as k,a as p,t as _,i as u,u as y,j as B,F as U,k as j,l as D}from"./index-DRh26w46.js";const O={class:"w-full px-10"},$=o("div",{class:"p-5"},[o("h1",null,"Drinks"),o("p",{class:"text-sm"},[o("strong",null,"規則: "),k(),o("strong",null,"1."),k("可編輯所有欄位 "),o("strong",null,"2."),k(" 價格最低10元最高120元，調整間距為 5 元 "),o("strong",null,"3."),k("庫存最少最少為 0 最多為 100")])],-1),F={key:0},I={key:0},M={key:0,class:"text-base"},Q={key:0,class:"text-base"},L=x({__name:"PracticeOne",setup(S){const i=h({id:"",drinkName:"",price:0,inventory:0,content:""}),g=C([{id:"1",drinkName:"珍珠奶茶",price:50,inventory:99,content:"香濃奶茶搭配QQ珍珠",isEdit:!1},{id:"2",drinkName:"冬瓜檸檬",price:45,inventory:18,content:"清新冬瓜配上新鮮檸檬",isEdit:!1},{id:"3",drinkName:"翡翠檸檬",price:55,inventory:20,content:"綠茶與檸檬的完美結合",isEdit:!1},{id:"4",drinkName:"四季春茶",price:45,inventory:10,content:"香醇四季春茶，回甘無比",isEdit:!1},{id:"5",drinkName:"阿薩姆奶茶",price:50,inventory:25,content:"阿薩姆紅茶搭配香醇鮮奶",isEdit:!1},{id:"6",drinkName:"檸檬冰茶",price:45,inventory:20,content:"檸檬與冰茶的清新組合",isEdit:!1},{id:"7",drinkName:"芒果綠茶",price:55,inventory:1,content:"芒果與綠茶的獨特風味",isEdit:!1},{id:"8",drinkName:"抹茶拿鐵",price:60,inventory:20,content:"抹茶與鮮奶的絕配",isEdit:!1}]),v=(a,n,m,d)=>{i[n]=Math.min(Math.max(a,m),d)},E=a=>{Object.assign(i,a),a.isEdit=!0},V=a=>{Object.assign(a,i),a.isEdit=!1};return(a,n)=>{const m=p("el-input"),d=p("el-table-column"),b=p("el-input-number"),f=p("el-button"),N=p("el-table");return l(),r("div",O,[$,s(N,{data:g.value,"max-height":"250",border:""},{default:c(()=>[s(d,{label:"品項",width:"160",align:"center",fixed:""},{default:c(({row:e})=>[e.isEdit?(l(),u(m,{key:1,modelValue:i.drinkName,"onUpdate:modelValue":n[0]||(n[0]=t=>i.drinkName=t)},null,8,["modelValue"])):(l(),r("span",F,_(e.drinkName),1))]),_:1}),s(d,{prop:"content",label:"描述","min-width":"200",align:"left"},{default:c(({row:e})=>[e.isEdit?(l(),u(m,{key:1,modelValue:i.content,"onUpdate:modelValue":n[1]||(n[1]=t=>i.content=t)},null,8,["modelValue"])):(l(),r("span",I,_(e.content),1))]),_:1}),s(d,{prop:"price",label:"價格",width:"180",align:"center"},{default:c(({row:e})=>[e.isEdit?(l(),u(b,{key:1,onInput:n[2]||(n[2]=t=>v(t,"price",10,100)),modelValue:i.price,"onUpdate:modelValue":n[3]||(n[3]=t=>i.price=t),min:10,max:120,step:5},null,8,["modelValue"])):(l(),r("span",M,[o("strong",null,_(e.price),1)]))]),_:1}),s(d,{prop:"inventory",label:"庫存",width:"200",align:"center"},{default:c(({row:e})=>[e.isEdit?(l(),u(b,{key:1,onInput:n[4]||(n[4]=t=>v(t,"inventory",0,50)),modelValue:i.inventory,"onUpdate:modelValue":n[5]||(n[5]=t=>i.inventory=t),min:0,max:100,step:1},null,8,["modelValue"])):(l(),r("span",Q,[o("strong",null,_(e.inventory),1)]))]),_:1}),s(d,{fixed:"right",label:"操作",width:"180",align:"center"},{default:c(({row:e})=>[e.isEdit?(l(),r(U,{key:1},[s(f,{onClick:t=>e.isEdit=!1,icon:y(j),type:"info",plain:"",class:"p-3 md:p-2"},null,8,["onClick","icon"]),s(f,{onClick:t=>V(e),icon:y(D),type:"success",plain:"",class:"p-3 md:p-2"},null,8,["onClick","icon"])],64)):(l(),u(f,{key:0,icon:y(B),onClick:t=>E(e)},null,8,["icon","onClick"]))]),_:1})]),_:1},8,["data"])])}}});export{L as default};
