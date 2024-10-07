

    function fecthdata (){

        fetch(`https://mockapi-kgvo.onrender.com/product`)
        .then((res)=>{
            return res.json()
        }).then((Res)=>{
           document.querySelector("#bb").innerHTML = view(Res)
        }).catch((err)=>{
            console.log(error)
        })

    }

    fecthdata()

    function view(arr){
        return arr.map((el)=>{
            return `<a href="single.html?id=${el.id}" id="card1">
            <div id="card">
                  <div>
                   <img src="${el.image}" width="100%" height="350px"/>
                  </div>
                  <div id="title">
                    <b><p >${el.title}</p></b>
                    <b><p id="pp">$.${el.price}</p></b>
                    <b><p>Rating - ${el.rating}</p></b>
                  </div>
                </div> </a>`
        }).join("")
    }