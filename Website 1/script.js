
let a = 0

let arr = 
[
    "https://st-images.honasa.in/Desktop_CTA_0257c4dd17.jpg",
    "https://st-images.honasa.in/web_wt_97dfbe0115.jpg"
]

    

    function next(){

        setInterval(()=>{
               // console.log(--a)
        a--
        if(a<0){
        a=arr.length-1
        }
        document.getElementById("slider").innerHTML=`<img src="${arr[a]}" width="100%" height="100%">`
            
        },5000)

    }

    function pre(){

        setInterval(()=>{
            document.getElementById("slider").innerHTML=`<img src="${arr[a]} width="100%" height=""100%>`

            a++
    if(a==arr.length){
        a=0
    }
        },5000)
        // console.log(++a)
      
        

    }

    document.getElementById(next())