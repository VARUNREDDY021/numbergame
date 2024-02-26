var enteredvalue="";


var enteredvalues=[];

function runtimer(){
time=60;
setInterval(function(){
    if(time>0){
    time--
    document.querySelector(".tbox").innerHTML=time;
    }
    else if(time===0){
    document.querySelector(".main").innerHTML=`TIMEUP`;
    }
    
},1000)}


var targetvalue = document.querySelector(".targetval").innerHTML= Math.floor(Math.random()*100);
console.log(targetvalue);

document.querySelector("button").addEventListener("click",function(){
     enteredvalue = parseInt(document.querySelector(".entry").value);
    console.log(enteredvalue);
    if(enteredvalue>targetvalue){
        document.querySelector(".output").innerHTML=`entered value is high`;
        enteredvalues.push(enteredvalue);
    }
    else if(enteredvalue<targetvalue) {
        document.querySelector(".output").innerHTML=`entered value is low`;
        enteredvalues.push(enteredvalue);
    }
    else if(enteredvalue===targetvalue){
        document.querySelector(".output").innerHTML=`YOU WON<br>TIME LEFT:${time}`;
        enteredvalues.push(enteredvalue);
         
        setInterval(function(){
            location.reload();
        },3000)
    }
    else{
        document.querySelector("enter only number between 10 to 100")
    }
    document.querySelector(".array").innerHTML="ENTERED VALUES:"+enteredvalues.join(",");
})
   // document.querySelector(".array").innerHTML="ENTERED VALUES:"+enteredvalues.join(",");
runtimer();