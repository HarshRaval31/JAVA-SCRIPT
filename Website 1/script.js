
let a = 0

let arr = 
[
    "https://st-images.honasa.in/Desktop_CTA_0257c4dd17.jpg",
    "https://st-images.honasa.in/web_wt_97dfbe0115.jpg",
    "https://st-images.honasa.in/rice_water_banner_desktop_W_o_eac1788e04.gif?width=&qualilty=",
    "https://st-images.honasa.in/Desktop_43ce0393f1.jpg?format=auto&width=&qualilty=",
    "https://st-images.honasa.in/Desktop_9aa2c65b97.gif?width=&qualilty=",
    "https://st-images.honasa.in/Desktop_67d090c535.gif?width=&qualilty="
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
    

        