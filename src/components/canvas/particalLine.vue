<template>
    <div class="particalLine">
        <canvas class="canvas" id="canvas_particalLine"></canvas>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "particalLine",
  data() {
    return {
      
    };
  },
  methods: {

  },
  mounted() {
        var canvas = document.getElementById("canvas_particalLine");
        var ctx = canvas.getContext("2d");
        var opt = {
            particleAmount: 100,                    //粒子个数
            defaultSpeed: 0.3,                      //粒子运动速度
            variantSpeed: 0.5,                      //粒子运动速度的变量
            particleColor: "rgb(255,255,255)",      //粒子的颜色
            lineColor:"rgb(255,255,255)",           //网格连线的颜色
            defaultRadius: 1.2,                     //粒子半径
            variantRadius: 2,                       //粒子半径的变量
            minDistance: 180                        //粒子之间连线的最小距离
        };
        var line = opt.lineColor.match(/\d+/g);
        var particle = [], w,h;
        var delay = 200,tid;              //屏幕改变尺寸时的延迟时间和定时器
        init();
        window.addEventListener("resize",function(){
            winResize()
        },false);
    
        function winResize(){
            clearTimeout(tid);
            tid = setTimeout(function(){
                getSize();
            },delay)
        }
    
        function init(){
            getSize();
            for(let i = 0;i<opt.particleAmount; i++){
                particle.push(new Partical());
            }
            loop();
        }
    
        function loop(){
            ctx.clearRect(0,0,w,h);
            for(let i = 0;i<particle.length; i++){
                if(particle[i].x==mouseX&&particle[i].y==mouseY)continue
                particle[i].update();
                particle[i].draw();
            }
            for(let i = 0;i<particle.length; i++){
                linePoint(particle[i],particle)
            }
            window.requestAnimationFrame(loop);
        }
        // 添加鼠标移动事件
        var mouseX;  
        var mouseY;  
        canvas.onmousemove = function(e) {  
            var ev = event || e;  
            mouseX = ev.offsetX;  
            mouseY = ev.offsetY;

            particle[0].color='transparent';
            particle[0].x=mouseX;
            particle[0].y=mouseY;
            particle[0].speed=0;
            particle[0].directionAngle=0;
            linePoint(particle[0],particle);
        }

        // 画线（两个小球之间距离小于一定值就画线条）
        function linePoint(point,hub){
            // 限制每个小球的连线条数
            let lineNum=0;
            // 循环连线
            for(let i = 0;i<hub.length;i++){
                if(lineNum>2)break;

                let distance = getDistance(point,hub[i]);
                let opacity = 1 -distance/opt.minDistance;
                if(opacity > 0){
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "rgba("+line[0]+","+line[1]+","+line[2]+","+opacity+")";
                    ctx.beginPath();
                    ctx.moveTo(point.x,point.y);
                    ctx.lineTo(hub[i].x,hub[i].y);
                    ctx.closePath();
                    ctx.stroke();
                    lineNum++;
                }
            }
        }
        // 计算两个粒子之间的距离
        function getDistance(point1,point2){
            return Math.sqrt(Math.pow(point1.x-point2.x,2) + Math.pow(point1.y - point2.y ,2));
        }
        // 让canvas铺满整个屏幕
        function getSize(){
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }
        // 粒子的类
        function Partical(){
            this.x = Math.random()*w;          
            //粒子的x轴坐标
            this.y = Math.random()*h;          
            //粒子的y轴坐标
            this.speed = opt.defaultSpeed + opt.variantSpeed*Math.random();    
            //粒子的运动速度
            this.directionAngle = Math.floor(Math.random()*360);               
            //粒子运动的方向
            this.color = opt.particleColor ;                                   
            //粒子的颜色
            this.radius = opt.defaultRadius+Math.random()*opt.variantRadius;   
            //粒子的半径大小
            this.vector = {
            
                x:this.speed * Math.cos(this.directionAngle),      
                //粒子在x轴的速度
                y:this.speed * Math.sin(this.directionAngle)       
                //粒子在y轴的速度
            }
            this.update = function(){                  
            //粒子的更新函数
                this.border();                          
                //判断粒子是否到了边界
                this.x += this.vector.x;               
                //粒子下一时刻在x轴的坐标
                this.y += this.vector.y;               
                //粒子下一时刻在y轴的坐标
            }
            this.border = function(){              
            //判断粒子是都到达边界
                if(this.x >= w || this.x<= 0){     
                //如果到达左右边界，就让x轴的速度变为原来的负数
                    this.vector.x *= -1;
                }
                if(this.y >= h || this.y <= 0){    
                //如果到达上下边界，就让y轴的速度变为原来的负数
                    this.vector.y *= -1;
                }
                if(this.x > w){                    
                //下面是改变浏览器窗口大小时的操作，改变窗口大小后有的粒子会被隐藏，让他显示出来即可
                    this.x = w;
                }
                if(this.y > h){
                    this.y = h;
                }
                if(this.x < 0){
                    this.x = 0;
                }
                if(this.y < 0){
                    this.y = 0;
                }
            }
            this.draw = function(){                 //绘制粒子的函数
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius ,0 ,Math.PI * 2);
                ctx.closePath();
                ctx.globalAlpha =0.4;
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }
  }
};
</script>

<style lang="scss" scoped>
.particalLine {
    width: 100%;
    height: 100%;
    background-image: url('../../assets/image/star.jpg');
    background-position:center;
    background-repeat: no-repeat;
    background-size:cover;
    overflow: hidden;
    .canvas {
        // width: 100%;
        // height: 100%;
    }
}
</style>




