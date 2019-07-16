let data=[
    {value:'好听',time:5,color:'red',speed:1,fontSize:22},
    {value: '想快快长大，才能保护她', time: 10, color: '#00a1f5', speed: 1, fontSize: 30},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 6},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 8},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 15},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 35},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 20},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 18},
    {value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 10}
]

//获取需要用到的所有dom结构
let doc=document
let canvas=document.getElementById('canvas');
let video=document.getElementById('video');
let $txt=document.getElementById('text');
let $btn=document.getElementById('btn');
let $color=document.getElementById('color');
let $range=document.getElementById('range');

//创建CanvasBarrage类
class CanvasBarrage{
    //用于创建初始化创建class创建对象的构造器
    constructor(canvas,video,opts={}){//opts={} 如果没有传值也不会报错
    //如果canvas和video都没传，那就直接return
    if(!canvas||!video){
        return;
    }
    //直接挂载到this上
    this.video=video;
    this.canvas=canvas;
    //设置canvas的宽高和video一致
    this.canvas.width=video.width;
    this.canvas.height=video.height;
    //获取画布，操作画布
    this.ctx=canvas.getContext('2d')
    //设置默认参数，如果没有传，就给带上
    let defOpts={
        color:'#e91e63',
        speed:1.5,
        opacity:0.5,
        fontSize:20,
        data:[]
    }
    //合并对象，并全都挂载到this实例上
    Object.assign(this,defOpts,opts)
    //添加一个属性来判断当前是播放状态还是暂停状态
    this.isPaused=true//默认true为暂停
    //得到所有的弹幕消息
    this.barrages=this.data.map(item=>new Barrage(item,this))
    //渲染
    this.render()
    }
    //渲染canvas绘制的弹幕
    render(){
        //渲染的第一步是清除画布
        this.clear()
        //渲染弹幕
        this.renderBarrage()
        //如果没有暂停就继续渲染
        if(this.isPaused===false){
            //通过raf渲染动画，递归进行渲染
            requestAnimationFrame(this.render.bind(this))
        }
    }
    clear(){
        //清除整个画布
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    }
    renderBarrage(){
        //首先拿到当前视频播放的时间，然后根据该时间来和弹幕要展示的时间作比较，来判断是否展示弹幕
        let time=this.video.currentTime

        //便利所有的弹幕
        this.barrages.forEach(barrages=>{
            //用一个flag来处理是否渲染，默认是false
            if(!barrage.flag&&time>=barrage.time){
                //判断当前弹幕是否初始化
                //如果isPaused还是false，那就对当前弹幕进行初始化

                if(!barrage.isInit){
                    barrage.Init();
                    barrage.isInit=true;
                }
                barrage.x-=barrage.speed;
                barrage.render()//渲染当前弹幕

                //如果当前弹幕X坐标比自身宽度还小，就表示结束渲染
                if(barrage.x<-barrage.width){
                    barrage.flag=true
                }
            }
        })
    }
    add(obj){
        //实际上就是往barrages数组里添加一项barrage实例而已
        this.barrages.push(new Barrage(obj,this))
    }
}

//创建Barrage类用来实例化每一个弹幕元素
class Barrage{
    constructor(obj,ctx){
        this.value=obj.value;//弹幕的内容
        this.time=obj.time;//弹幕的时间
        //把obj和ctx挂载到this上，方便获取
        this.obj=obj
        this.context=ctx
    }
        //初始化弹幕
        init(){
            this.color=this.obj.color||this.context.color
            this.speed=this.obj.speed||this.context.speed
            this.opacity=this.obj.opacity||this.context.opacity
            this.fontSize=this.obj.fontSize||this.context.fontSize

            let p=document.createElement('p')
            p.style.fontSize=this.fontSize + 'px'
            p.innerHTML=this.value
            document.body.appendChild(p)
            //设置弹幕宽度
            this.width=p.clientWidth
            //得到了弹幕的宽度后吧p从body中删除
            document.body.removeChild(p)
            //设置弹幕出现的位置
            this.x=this.context.canvas.width
            this.y=this.context.canvas.height*Math.random()
            //做一下超出范围的处理
            if(this.y<this.fontSize){
                this.y=this.fontSize
            }else if(this.y>this.context.canvas.height-this.fontSize){
                this.y=this.context.canvas.height-this.fontSize                
            }
        }
        //渲染每一个弹幕
        render(){
            //设置画布文字的字体和字号
            this.context.ctx.font=`${this.fontSize}px Arial`
            //设置画布的颜色
            this.context.ctx.fillStyle=this.color
            //绘制文字
            this.context.ctx.fillText(this.value,this.x,this.y)
        }
}
//创建CanvasBarrage实例
let canvasBarrage=new CanvasBarrage(canvas,video,{data})
//设置video的play事件来调用CanvasBarrage实例的render方法
video.addEventListener('play',()=>{
    canvasBarrage.isPaused=false
    canvasBarrage.render()//触发弹幕
})
//发送弹幕的方法
function send(){
    let value=$txt.value
    let time=video.currentTime
    let color=$color.value
    let fontSize=$range.value
    let obj={value,time,color,fontSize}
    //添加弹幕数据
    canvasBarrage.add(obj)
    $txt.value=''
}
$btn.addEventListener('click',send)