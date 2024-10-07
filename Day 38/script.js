

    function fecthdata (){

        fetch(`http://localhost:3000/product`)
        .then((res)=>{
            return res.json()
        }).then((Res)=>{
           document.querySelector("#box").innerHTML = view(Res)
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
                   <img src="${el.image}"/>
                  </div>
                  <div>
                    <p>${el.title}</p>
                    <p>$.${el.price}</p>
                    <p>Rating - ${el.rating}</p>
                  </div>

                </div></a>`
        }).join("")
    }