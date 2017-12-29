new Vue({
    el:"#app",
    data:{
        list:[
            {
                id:1,title:'爱德华的小说'
            },
            {
                id:2,title:'落地呈伤'
            },
            {
                id:3,title:'雨后春笋'
            }
        ],
        search:'',
        show:false,
    },
    methods:{
        focus(){
            this.show = true;
        },
        select(val){
            this.search = val;
            this.show = false;
        }
    }
});