var send = document.getElementById("send");
var partent = document.getElementById('content_items')
// send.addEventListener('click',function(){
//     var li = document.createElement('li')
//     li.setAttribute('class','content_item')
//     var divPic =document.createElement('div')
//     divPic.setAttribute('class','left-pic')
//     li.appendChild(divPic);

//     var img = document.createElement('img')
//     img.setAttribute('src','./images/zhuge.jpg')
//     divPic.appendChild(img);

//     var massage = document.createElement('div')
//     massage.setAttribute('class','massage')
//     li.appendChild(massage)

//     var p1 = document.createElement('p')
//     p1.setAttribute('class','name')
//     var p1_content = document.createTextNode('朱哥')
//     p1.appendChild(p1_content)
//     massage.appendChild(p1)

//     var p2 = document.createElement('p')
//     p1.setAttribute('class','detail')
//     var p2_content = document.createTextNode('吃了吗')
//     p1.appendChild(p2_content)
//     massage.appendChild(p2)

//     partent.appendChild(li)
// })
send.addEventListener('click',function(){
var html=$('<div class="content">'+
'<ul class="content_items" id="content_items">'+
    '<li class="content_item">'+
        '<div class="left-pic">'+
            '<img src="./images/zhuge.jpg" alt="">'+
        '</div>'+
        '<div class="massage">'+
           '<p class="name">朱哥</p>'+
            '<p class="detail">吃了吗</p>'+
        '</div>'+
        '<div class="time">'+
            '<span>下午4:50</span>'+
        '</div>'+
    '</li>'+
'</ul>'+
'</div>')
html.appendTo(partent)
})