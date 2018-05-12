<template>
    <div class="main">
        <div class="left">
            <leftMenu></leftMenu>
        </div>
        <div class="right">

        </div>
    </div>
</template>
<script>
    import leftMenu from '@/components/common/leftMenu'
    export default {
        name:'mainPage',
        data(){
            return {

            }
        },
        computed:{

        },
        components:{
            leftMenu
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
            width:240px;
            padding:20px 10px 0 0;
            overflow-y:auto;
            @include scrollbar;
        }
        .right{
            flex:1;
            // background:#999;
        }
    }
</style>
