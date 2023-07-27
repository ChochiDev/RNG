document.getElementById("btn").onclick=function(){
   a=document.getElementById("maxnum").value;
   a=Number(a);
   let x= Math.floor(Math.random()*a)+1;
   document.getElementById("number").innerText=x;
}