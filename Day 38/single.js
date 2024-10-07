
let url = new URLSearchParams (window.location.search)
let single = url.get("id")

function fecthdata (){

    fetch(`http://localhost:3000/product?id=${single}`)
    .then((res)=>{
        return res.json()
    }).then((Res)=>{
       document.querySelector("#box").innerHTML = view(Res)
    }).catch((err)=>{
        console.log(err)
    })

}

fecthdata()

function view(arr){
    return arr.map((el)=>{
        return `<div id="card">
              <div>
               <img src="${el.image}"/>
              </div>
              <div>
                <p>${el.title}</p>
                <p>$.${el.price}</p>
                <p>Rating - ${el.rating}</p>
              </div>

            </div>`
    }).join("")
}