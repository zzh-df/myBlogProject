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
        position: relative;
        width:100%;
        min-height:100%;    
        display:flex;
        background:$bg-color;
        padding-left:2.4rem;
        overflow: hidden;
        .left{
            position:absolute;
            top:0;
            left:0;
            width:2.4rem;
            min-height:100%; 
            background:#121920;
            overflow-y:auto;
            @include scrollbar;
        }
        .right{
            width:100%;
            min-height:100%;
        }
    }
</style>
