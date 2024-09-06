
let a = 0

let arr = 
[
    "https://images.hdqwalls.com/download/captain-america-worthy-6v-2048x1152.jpg",
    "https://c4.wallpaperflare.com/wallpaper/329/659/601/superman-man-of-steel-henry-cavill-wallpaper-preview.jpg",
    "https://images.hdqwalls.com/download/captain-america-4k-2020-3q-2048x1152.jpg",
    "https://images2.alphacoders.com/997/997237.jpg",
    "https://www.xtrafondos.com/en/descargar.php?id=7532&resolucion=3840x2161",
    "https://wallpaperaccess.com/full/1996221.jpg",
    "https://www.xtrafondos.com/wallpapers/capitan-america-con-escudo-6324.jpg",
    "https://www.xtrafondos.com/en/descargar.php?id=7337&resolucion=3840x2160"
]


    function next(){

        // console.log(--a)
        a--
        document.getElementById("box").innerHTML=`<img src="${arr[a]}">`

if(a<0){
a=arr.length-1
    

}

    }

    function pre(){

        // console.log(++a)
        a++
        document.getElementById("box").innerHTML=`<img src="${arr[a]}">`

if(a==arr.length){
    a=0
}

    }