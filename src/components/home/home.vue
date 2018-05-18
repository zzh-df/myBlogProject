<template>
    <div class="home">
        <div class="instruction"></div>
        <div class="bottom">
            <div class="left">
                <div class="head">
                    <ul>
                        <li class="active">选项1</li>
                        <li>选项2</li>
                    </ul>
                </div>
                <div class="content">
                    <ul>
                        <li v-for="item in 20">
                            <div class="title">标题</div>
                            <div class="content">
                                <div class="content_l">
                                    
                                </div>
                                <div class="content_r">
                                    文章内容。。。。。
                                </div>
                            </div>
                            <div class="footer">
                                <div class="date">日期：2018-05-15</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <div class="r_top">

                </div>
                <div class="r_bottom">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'home',
        data(){
            return {

            }
        },
        computed:{

        },
        components:{

        },
        props:[],
        methods:{

        },
        mounted(){

        }
    }
</script>
<style lang="scss" scoped>
    .home{
        position: relative;
        width:100%;
        height:100%;
        padding-top:2rem;
        .instruction{
            position: absolute;
            top:0;
            left:0;
            width:100%;
            height:2rem;
            background-image:url(../../assets/image/timg.jpg);
            background-position: center;
            background-size:100%;
        }
        .bottom{
            width:100%;
            min-height:100%;
            display:flex;
            .left{
                position: relative;
                min-height:100%;
                flex:1;
                background:#eee;
                padding-top:0.4rem;
                .head{
                    position: absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:0.4rem;
                    padding-left:0.2rem;
                    border-bottom:1px solid #ccc;
                    ul{
                        height:100%;
                        display: flex;
                        li{
                            padding:0.1rem 0.4rem;
                            cursor: pointer;
                            &:hover{
                                border-bottom:3px solid #0095f9;
                            }
                            &.active{
                                border-bottom:3px solid #0095f9;
                            }
                        }
                    }
                }
                .content{
                    width:100%;
                    height:100%;
                    ul{
                        width:100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content:space-between;
                        padding:0.4rem 0.3rem;
                        li{
                            position: relative;
                            width:30%;
                            height:2rem;
                            border:1px solid #ccc;
                            padding:0.5rem 0.2rem 0.5rem;
                            margin-bottom:0.4rem;
                            .title{
                                position: absolute;
                                left:0;
                                top:0;
                                width:100%;
                                height:0.3rem;
                                overflow:hidden;
                                text-overflow: ellipsis;
                            }
                            .content{
                                width:100%;
                                height:100%;
                                display:flex;
                                .content_l{

                                }
                                .content_r{

                                }
                            }
                            .footer{
                                position: absolute;
                                left:0;
                                bottom:0;
                                width:100%;
                                height:0.3rem;
                                ul{
                                    width:100%;
                                    height:100%;
                                    display:flex;
                                    justify-content: space-between;
                                    li{
                                        flex:1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .right{
                width:2.6rem;
                background:#fff;
                padding:0.2rem 0.2rem;
                .r_top{
                    width:100%;
                    height:2rem;
                    border:1px solid #ccc;
                    margin-bottom:0.4rem;
                }
                .r_bottom{
                    width:100%;
                    height:3rem;
                    border:1px solid #ccc;
                }
            }
        }
    }
</style>
