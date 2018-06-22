<template>
    <div class="main">
        <div class="left">
            <leftMenu></leftMenu>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import leftMenu from '@/components/common/leftMenu'
    import home from '@/components/home/home'
    export default {
        name:'mainPage',
        data(){
            return {

            }
        },
        computed:{

        },
        components:{
            leftMenu,
            home
        },
        methods:{

        },
        mounted(){

        }
    }
</script>
<style lang="scss" scoped>
    @import '../assets/style/base.scss';
    .main{
        width:100%;
        min-height:100%;    
        display:flex;
        background:$bg-color;
        .left{
            width:2.4rem;
            overflow-y:auto;
            @include scrollbar;
        }
        .right{
            flex:1;
            min-height:100%;
            // overflow-y:auto;
            // @include scrollbar;
            // background:#999;
        }
    }
</style>
