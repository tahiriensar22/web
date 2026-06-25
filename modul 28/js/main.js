var button1 = document.getElementById("btn1");
var text1=document.getElementById('text1');

// button1.onclick=function(){
//     alert('hello');
// }


var button2 = document.getElementById("btn2");
// button2.onmouseover=function(){
//     alert('vendose mausin');
// }


button1.ondblclick=function(){
    text1.style.color="red";
    text1.style.backgroundColor="lightgrey";
    text1.style.textAlign="center";
    text1.style.margin="100px";
    text1.style.padding="100px";
}


var button3 = document.getElementById("btn3");
button3.onmouseleave=function(){
    alert('HIQE');
}


var button4 = document.getElementById('btn4');
button4.onclick=function(){
    text1.setAttribute("class","text1");
}

  