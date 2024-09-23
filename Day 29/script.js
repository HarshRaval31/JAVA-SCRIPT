
let a = 0

let arr = 
[
    "https://images.hdqwalls.com/download/captain-america-worthy-6v-2048x1152.jpg",
    "https://c4.wallpaperflare.com/wallpaper/329/659/601/superman-man-of-steel-henry-cavill-wallpaper-preview.jpg",
    "https://images.hdqwalls.com/download/captain-america-4k-2020-3q-2048x1152.jpg",
    "https://images2.alphacoders.com/997/997237.jpg",
    "https://c4.wallpaperflare.com/wallpaper/852/47/796/movies-superman-man-of-steel-henry-cavill-wallpaper-preview.jpg",
    "https://wallpaperaccess.com/full/1996221.jpg",
    "https://www.stardestroyer.net/wiki/images/e/e7/Captain_america.jpeg",
    "https://wallpapercave.com/wp/wp9330129.jpg"
]

    

    function next(){

        setInterval(()=>{
               // console.log(--a)
        a--
        if(a<0){
        a=arr.length-1
        }
        document.getElementById("box").innerHTML=`<img src="${arr[a]}">`
            
        },2000)

    }

    function pre(){

        setInterval(()=>{
            document.getElementById("box").innerHTML=`<img src="${arr[a]}">`

            a++
    if(a==arr.length){
        a=0
    }
        },2000)
        // console.log(++a)
      
        

    }

    document.getElementById(next())