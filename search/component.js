Vue.component("my-header",{
    props:["search","show"],
    template:`
        <div class="header">
            <input type="text" placeholder="请输入关键字" @focus="focus" v-model="search">
        </div>
    `,
    methods:{
        focus(){
            this.$emit("container");
        }
    }
});
Vue.component("list",{
    props:["list-data","show"],
    template:`
        <ul class="list" v-show="show==true">
            <li v-for="item in listData" @click="select(item.title)">{{item.title}}</li>
        </ul>
    `,
    methods:{
        select(val){
            this.$emit("container",val);
        }
    }

});