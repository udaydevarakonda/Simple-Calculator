const t=document.getElementById("input");
let buttons=document.querySelectorAll('button');

let str="";
let arr=Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            str=eval(str);
            t.value=str;
            console.log("= is clicked");
        }
        else if(e.target.innerHTML=="AC"){
            str="";
            t.value=str;
            console.log("ac is clicked");
        }
        else if(e.target.innerHTML=="DEL"){
            str=str.substring(0,str.length-1);
            t.value=str;
            console.log("del is clicked");
        }
        else{
            str+=e.target.innerHTML;
            t.value=str;
            console.log(e.target.innerHTML + " is clicked");

        }
    })
})