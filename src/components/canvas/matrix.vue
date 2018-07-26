<template>
    <div class="matrix">
        <canvas class="canvas" id="canvas_matrix"></canvas>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'matrix',
    data () {
        return {
            // 定时器
            tid:'',
            // 延迟时间
            delay:200,
            // canvas容器
            canvas:'',
            // canvas2D环境
            ctx:'',
            // 字体大小
            fontsize:12,
            // 数字矩阵所有行的列表
            drop:[],
            // 数字矩阵的显示的字符
            string1:"010101010101010101010101"
        }
    },
    methods: {
        winResize(){
            let that = this;
            clearTimeout(that.tid);
            that.tid = setTimeout(function(){
                that.getSize();
            },that.delay)
        },
        // 让canvas铺满整个屏幕
        getSize(){
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        },
        // 绘制数字矩阵
        drap(){
            this.ctx.fillStyle="rgba(0,0,0,0.07)";
            this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
            this.ctx.fillStyle="#0F0";
            this.ctx.font=this.fontsize+"px arial";
            for(var i=0;i<this.drop.length;i++){
                var text1=this.string1[Math.floor(Math.random()*this.string1.length)];
                this.ctx.fillText(text1,i*this.fontsize,this.drop[i]*this.fontsize);
                this.drop[i]++;
                if(this.drop[i]*this.fontsize>this.canvas.height&&Math.random()>0.95){//90%的几率掉落
                    this.drop[i]=0;
                }
            }
        }
    },
    mounted(){
        let that = this;
        this.canvas=document.getElementById("canvas_matrix");
        // 屏幕改变大小自适应
        window.addEventListener("resize",function(){
            that.winResize()
        },false);

        this.ctx=this.canvas.getContext("2d");
        this.canvas.width=window.innerWidth;
        this.canvas.height=window.innerHeight;
        // 格式化字符串
        this.string1.split("");
        // 有多少行
        var columns=this.canvas.width/this.fontsize;
        // 初始化每行
        for(var x=0;x<columns;x++){
            this.drop[x]=0;
        }
        setInterval(that.drap,20);
    }
}
</script>

<style lang="scss" scoped>
  .matrix{
    width:100%;
    height:100%;
    zoom:0.5;
    overflow: hidden;
    .canvas{
      width:100%;
      height:100%;
    }
  }
</style>




