
// let a = 32
let value

function st(){

    let a = document.querySelector("input").value

     value = setInterval(()=>{
    --a
    document.querySelector("h1").innerText = a
    if(a <= 0 ){
        clearInterval (value)
    }
    
},100)

}
   
document.querySelector("#end").addEventListener("click", ()=>{
    clearInterval(value)
})