<template>
    <div class="leftMenu">
        <div class="userInfo">
            <div class="userimg">
                <img src='../../assets/image/user.png' alt="头像">
            </div>
            <div class="user">
                <div class="username">东方忘尘</div>
            </div>
        </div>
        <div class="nav">
            <ul class="mainkey">
                <li v-for="(item,index) in tabList">
                    <div class="name" @click="test(item,index)">{{item.mainLabel}}</div>
                    <ul :class="['secondkey',{showkey:curtab==index&&item.show==true,hidekey:item.show==false}]">
                        <li v-for="child in item.children">{{child.secendLabel}}</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name:'leftMenu',
        data(){
            return {
                username:'',
                tabList:[
                    {
                        mainLabel:'主目录',
                        show:true,
                        children:[
                            {
                                secendLabel:'子目录'
                            },
                            {
                                secendLabel:'子目录'
                            },
                            {
                                secendLabel:'子目录'
                            }
                        ]
                    },
                    {
                        mainLabel:'主目录',
                        show:false,
                        children:[
                            {
                                secendLabel:'子目录'
                            },
                            {
                                secendLabel:'子目录'
                            },
                            {
                                secendLabel:'子目录'
                            }
                        ]
                    },
                    {
                        mainLabel:'主目录',
                        show:false,
                        children:[
                            {
                                secendLabel:'子目录'
                            },
                            {
                                secendLabel:'子目录'
                            },
                            {
                                secendLabel:'子目录'
                            }
                        ]
                    },
                    {
                        mainLabel:'主目录',
                        show:false,
                        children:[
                            {
                                secendLabel:'子目录'
                            },
                            {
                                secendLabel:'子目录'
                            },
                            {
                                secendLabel:'子目录'
                            }
                        ]
                    },
                    {
                        mainLabel:'主目录',
                        show:false,
                        children:[
                            {
                                secendLabel:'子目录'
                            },
                            {
                                secendLabel:'子目录'
                            },
                            {
                                secendLabel:'子目录'
                            }
                        ]
                    },
                ],
                curtab:0,
            }
        },
        computed:{

        },
        components:{

        },
        methods:{
            test(item,index){
                if(this.curtab==index){
                    item.show=!item.show;
                }else{
                    this.curtab=index;
                    item.show=!item.show;
                }
            }
        },
        mounted(){

        }
    }
</script>
<style lang="scss" scoped>
    @import '../../assets/style/base.scss';
    @keyframes show {
        100%{
            height:100px;
        }
    }
    @keyframes hide {
        100%{
            height:0;
        }
    }
    .leftMenu{
        width:100%;
        // height:100%;    
        .userInfo{
            width:100%;
            .userimg{
                position: relative;
                width:100px;
                height:100px;
                border-radius:50%;
                margin:60px auto 0;
                overflow: hidden;
                img{
                    position: absolute;
                    left:50%;
                    top:50%;
                    transform:translateX(-50%) translateY(-50%);
                    width:100%;
                    height:100%;
                }
            }
            .user{
                margin: 20px 0;
                text-align: center;
                font-size:16px;
            }
        }
        .nav{
            width:100%;
            .mainkey{
                li{
                    width:100%;
                    padding:10px 20px 10px 40px;
                    .secondkey{
                        overflow: hidden;
                        &.showkey{
                            animation: show 2s linear;
                        }
                        &.hidekey{
                            animation: hide 2s linear;
                        }
                        width:100%;
                        li{
                            width:100%;
                            padding:10px 20px 10px 50px;
                        }
                    }
                }
            }
        }
    }
</style>
