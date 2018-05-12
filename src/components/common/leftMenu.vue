<template>
    <div class="leftMenu">
        <div class="wrapper">
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
                        <div :class="['name',{active:curtab==index&&item.show}]" @click="switchShow(item,index)">
                            <i class="iconfont icon-weibiaoti1"></i>
                            {{item.mainLabel}}
                            <i :class="['iconfont','icon-right',{trans:item.show}]"></i>
                        </div>
                        <!-- <ul :class="['secondkey',{hidekey:!item.show}]"> -->
                        <ul :class="['secondkey']" v-if="item.show">
                            <li v-for="(child,index2) in item.children" @click="cursecoond=index2" :class="{active2:curtab==index&&cursecond==index2}">
                                <!-- <i class="iconfont icon-weibiaoti1"></i> -->
                                {{child.secendLabel}}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
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
                curtab:0,         //当前选中的主菜单
                cursecond:0,      //当前选中的二级菜单
                
            }
        },
        computed:{

        },
        components:{

        },
        methods:{
            switchShow(item,index){
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
    .leftMenu{
        width:100%;
        min-height:100%;    
        // padding:20px 10px 0 0;
        background:#fff;
        .wrapper{
            padding-top:60px;
            height:100%;
            overflow-y: auto;
            @include scrollbar;
            padding:60px 10px 0;
        }
        .userInfo{
            width:100%;
            margin-bottom:30px;
            .userimg{
                position: relative;
                width:100px;
                height:100px;
                border-radius:50%;
                margin:0 auto 0;
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
                    cursor: pointer;
                    user-select:none;
                    i{
                        margin-right:5px;
                        &.icon-right{
                            float:right;
                        }
                    }
                    .name{
                        padding:10px 20px 10px 40px;
                        border-radius:5px;
                        &.active{
                            color:#fff;
                            background:rgb(37, 71, 106);
                            i{color:#fff;}
                            &:hover{
                                background: rgba(37, 71, 106,1);
                            }
                        }
                        &:hover{
                            background: rgba(37, 71, 106,0.7);
                            color:#fff;
                            i{color:#fff;}
                        }
                    }
                    .trans{
                        display:inline-block;
                        transform:rotate(90deg);
                    }
                    .secondkey{
                        width:100%;
                        overflow: hidden;
                        max-height:1000px;
                        transition:max-height ease-in 1s;
                        -moz-transition:max-height ease-in 1s; /* Firefox 4 */
                        -webkit-transition:max-height ease-in 1s; /* Safari and Chrome */
                        -o-transition:max-height ease-in 1s; /* Opera */
                        &.hidekey{
                            max-height:0;
                        }
                        li{
                            width:100%;
                            padding:10px 20px 10px 70px;
                            cursor: pointer;
                            border-radius:5px;
                            &.active2{
                                color:rgba(37, 71, 106,1);
                                font-weight:900;
                            }
                            &:hover{
                                color:rgba(37, 71, 106,1);
                                font-weight: 900;
                            }
                            &:first-child{
                                padding-top:10px;
                            }
                            &:last-child{
                                padding-bottom:20px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
