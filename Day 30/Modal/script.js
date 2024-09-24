

setTimeout(()=>{

    document.querySelector("#modalbox").style.opacity  = "100%";

},2000)


document.querySelector("#icon").addEventListener("click",(()=>{
    document.querySelector("#modalbox").style.opacity  = "0%";
}))