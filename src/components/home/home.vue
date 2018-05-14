<template>
    <div class="home">
        <div class="instruction"></div>
        <div class="bottom">
            <div class="left">
                <div class="head">

                </div>
                <div class="content">

                </div>
            </div>
            <div class="right">

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
                padding-top:0.6rem;
                .head{
                    position: absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:0.6rem;
                    border-bottom:1px solid #ccc;
                }
                .content{
                    width:100%;
                    height:100%;
                }
            }
            .right{
                width:2.6rem;
                background:#fff;
            }
        }
    }
</style>
