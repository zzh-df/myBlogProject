<template>
    <div class="snow">
        <canvas class="canvas" id="canvas2"></canvas>
        <img src="../../assets/image/snow.png" alt="" id="img">
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'snow',
  data () {
    return {
        snowNum:150,
        snowArr:[],
        wid:'',
        height:'',

        // 存储所有的雪花
        snows: [],
        // 下落的加速度
        G: 0.01,

        fps: 60,

        // 速度上限，避免速度过快
        SPEED_LIMIT_X: 1,
        SPEED_LIMIT_Y: 1,

        W: window.innerWidth,
        H: window.innerHeight,

        tickCount: 150,
        ticker: 0,
        lastTime: Date.now(),
        deltaTime: 0,

        canvas: null,
        ctx: null,

        snowImage: null
    }
  },
   methods: {
    DrawSnow() {
        this.ctx.clearRect(0, 0, this.wid, this.height);
        const now = Date.now();
        this.deltaTime = now - this.lastTime;
        this.lastTime = now;
        this.ticker += this.deltaTime;

        if (this.ticker > this.snowNum) {
            this.snowArr.push({
                x : Math.random() * this.wid,
                y : 0,
                sx : 0,
                sy : 0,
                deg : 0,
                radius : Math.random() * 5 + 5,
                ax : Math.random() < 0.5 ? 0.005 : -0.005
            })
            this.ticker %= this.snowNum;
        }
        this.SnowFall();
        this.draw();
    },
    SnowFall() {
        for (var i = 0; i < this.snowArr.length; i++) {
            var p = this.snowArr[i];
            const deltaDeg = Math.random() * 0.6 + 0.2;

            p.sx += p.ax;
            if (p.sx >= this.SPEED_LIMIT_X || p.sx <= -this.SPEED_LIMIT_X) {
            p.ax *= -1;
            }

            if (p.sy < this.SPEED_LIMIT_Y) {
            p.sy += this.G;
            }

            p.deg += deltaDeg;
            p.x += p.sx;
            p.y += p.sy;
            if (p.y >= this.H) {
                this.snowArr.splice(i, 1);
            }
            // this.draw(p);
        }
    },
    draw(p) {
        let that = this;
        var img = document.getElementById('img')
        for (var i = 0; i < this.snowArr.length; i++) {
            var p = this.snowArr[i];
            const radius = p.radius;
            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(p.deg * Math.PI / 180);
            that.ctx.drawImage(img, -radius, -radius, radius * 2, radius * 2);
            this.ctx.restore();
        }
        
    }
  },
  mounted(){
    let that = this;
    // 获取画布
    this.canvas = document.getElementById('canvas2');
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    // this.canvas.style.cssText = 'position: fixed; top: 0; left: 0; pointer-events: none;';
    // this.canvas.scale(2,2);
    // 给画布宽高.
    this.wid = this.canvas.clientWidth;
    this.height = this.canvas.clientHeight;
    // 小屏幕时延长添加雪花时间，避免屏幕上出现太多的雪花
    if (this.wid < 768) {
        this.snowNum = 350;
    }

    // this.snowImage = new Image();
    // this.snowImage.src = '../assets/snow.png';
    let newTimer = setInterval(that.DrawSnow, 30);
    this.$store.dispatch('changeSnowTimer',{newTimer})
  }
}
</script>

<style lang="scss" scoped>
  .snow{
    width:100%;
    height:100%;
    // background-image: url('../../assets/image/snowBg.jpg');
    // background-position:center;
    // background-repeat: no-repeat;
    // background-size:100%;
    background: #000;
    zoom:0.4;
    overflow: hidden;
    .canvas{
      width:100%;
      height:100%;
    }
  }
</style>




