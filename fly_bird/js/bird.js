var bird = {
    flyTimer:null,//小鸟飞翔定时器
    wingTimer:null,//小鸟翅膀摆动定事情

    div:document.createElement('div'),
    showBird:function(parentObj){
        this.div.style.width = '40px'
        this.div.style.height = '28px'
        this.div.style.backgroundImage = 'url(img/bird0.png)'
        this.div.style.backgroundRepeat = 'no-repeat'
        this.div.style.position = 'absolute'
        this.div.style.left = '50px'
        this.div.style.top = '200px'
        this.div.style.zIndex = '1'

        parentObj.appendChild(this.div)//把小鸟div插入到游戏页面

    },
    fallSpeed:0,//下落的速度
    flyBird:function(){//控制下落的函数
        bird.flyTimer = setInterval(fly,60)
        function fly(){
            bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ + 'px'
            if(bird.div.offsetTop < 0){
                bird.fallSpeed = 2
            }
            if(bird.div.offsetTop >= 395){
                bird.fallSpeed = 0
                clearInterval(bird.flyTimer)// 清除定时器
                clearInterval(bird.wingTimer)
            }
            if(bird.fallSpeed > 5){
                bird.fallSpeed = 5
            }
        }
    },
    wingWave:function(){//小鸟翅膀动画函数
        var up = ['url(img/up_bird0.png)','url(img/up_bird1.png)']
        var down = ['url(img/down_bird0.png)','url(img/down_bird1.png)']
        var i = 0,j = 0
        bird.wingTimer = setInterval(wing,120)
        function wing(){
            if(bird.fallSpeed > 0){
                bird.div.style.backgroundImage = down[i++]
                if(i == 2){i = 0}
            }
            if(bird.fallSpeed < 0){
                bird.div.style.backgroundImage = up[j++]
                if(j == 2){j = 0}
            }
        }
    }
}