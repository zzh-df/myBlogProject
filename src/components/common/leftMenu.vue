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
                            <span v-if="item.children.length>0" class="commonName">{{item.mainLabel}}</span>
                            <router-link :to="item.link" tag="span" class="commonName" v-else>{{item.mainLabel}}</router-link>
                            <i :class="['iconfont','icon-right',{trans:item.show}]" v-if="item.children.length>0"></i>
                        </div>
                        <!-- <ul :class="['secondkey',{hidekey:!item.show}]"> -->
                        <ul :class="['secondkey']" v-if="item.show">
                            <!-- <li v-for="(child,index2) in item.children" @click="cursecond=index2" :class="{active2:curtab==index&&cursecond==index2}"> -->
                                <!-- <i class="iconfont icon-weibiaoti1"></i> -->
                                <router-link 
                                :to="child.link" 
                                tag='li' 
                                v-for="(child,index2) in item.children" 
                                :key="index2"
                                @click.native="switchSecond(item,index,index2)" 
                                :class="{active2:curtab==index&&cursecond==index2}"
                                >{{child.secendLabel}}</router-link>
                            <!-- </li> -->
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
                        mainLabel:'首页',
                        show:true,
                        link:'/',
                        children:[]
                    },
                    {
                        mainLabel:'canvas特效',
                        show:false,
                        children:[
                            {
                                secendLabel:'雪花特效',
                                link:'/snow'
                            },
                            {
                                secendLabel:'数字矩阵',
                                link:'/matrix'
                            },
                            {
                                secendLabel:'粒子连线',
                                link:'/particalLine'
                            }
                        ]
                    },
                    {
                        mainLabel:'主目录',
                        show:false,
                        children:[
                            {
                                secendLabel:'子目录',
                                link:''
                            },
                            {
                                secendLabel:'子目录',
                                link:''
                            }
                        ]
                    },
                    {
                        mainLabel:'主目录',
                        show:false,
                        children:[
                            {
                                secendLabel:'子目录',
                                link:''
                            },
                            {
                                secendLabel:'子目录',
                                link:''
                            }
                        ]
                    },
                    {
                        mainLabel:'主目录',
                        show:false,
                        children:[
                            {
                                secendLabel:'子目录',
                                link:''
                            },
                            {
                                secendLabel:'子目录',
                                link:''
                            }
                        ]
                    },
                ],
                curtab:0,         //当前选中的主菜单
                cursecond:-1,      //当前选中的二级菜单
                
            }
        },
        computed:{

        },
        components:{

        },
        methods:{
            switchShow(item,index){
                if(item.children.length<=0){
                    this.curtab=index;
                    item.show=true;
                    return
                }
                if(this.curtab==index){
                    item.show=!item.show;
                }else{
                    this.curtab=index;
                    item.show=!item.show;
                }
            },
            switchSecond(item,index,index2){
                this.curtab=index;
                this.cursecond=index2;
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
        background:#121920;
        .wrapper{
            height:100%;
            overflow-y: auto;
            @include scrollbar;
            padding:0.6rem 0.1rem 0;
        }
        .userInfo{
            width:100%;
            margin-bottom:0.3rem;
            .userimg{
                position: relative;
                width:1rem;
                height:1rem;
                border-radius:50%;
                margin:0 auto;
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
                margin: 0.2rem 0;
                text-align: center;
                font-size:0.16rem;
                color:#fff;
            }
        }
        .nav{
            width:100%;
            .mainkey{
                li{
                    width:100%;
                    cursor: pointer;
                    user-select:none;
                    color:#fff;
                    i{
                        color:#fff;
                        &.icon-right{
                            float:right;
                        }
                    }
                    .name{
                        padding:0.1rem 0.1rem 0.1rem 0.4rem;
                        border-radius:5px;
                        display:flex;
                        i{width:0.16rem;}
                        .commonName{
                            display:inline-block;
                            flex:1;
                            padding:0 0.05rem;
                        }
                        &.active{
                            color:#2BC1BF;
                            background:rgb(37, 71, 106);
                            i{color:#2BC1BF;}
                            &:hover{
                                background: rgba(37, 71, 106,1);
                            }
                        }
                        &:hover{
                            background: rgba(37, 71, 106,0.7);
                            color:#2BC1BF;
                            i{color:#2BC1BF;}
                        }
                    }
                    .trans{
                        display:inline-block;
                        transform:rotate(90deg);
                    }
                    .secondkey{
                        width:100%;
                        overflow: hidden;
                        max-height:10rem;
                        transition:max-height ease-in 1s;
                        -moz-transition:max-height ease-in 1s; /* Firefox 4 */
                        -webkit-transition:max-height ease-in 1s; /* Safari and Chrome */
                        -o-transition:max-height ease-in 1s; /* Opera */
                        &.hidekey{
                            max-height:0;
                        }
                        li{
                            width:100%;
                            padding:0.1rem 0.2rem 0.1rem 0.7rem;
                            cursor: pointer;
                            border-radius:5px;
                            &.active2{
                                color:#2BC1BF;
                                font-weight:900;
                            }
                            &:hover{
                                color:#2BC1BF;
                                font-weight: 900;
                            }
                            &:first-child{
                                padding-top:0.1rem;
                            }
                            &:last-child{
                                padding-bottom:0.2rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
