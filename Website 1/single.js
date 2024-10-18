function FetchingData() {
    let data = new URLSearchParams(window.location.search)
    let id = data.get("id")
    fetch(`https://mockapi-kgvo.onrender.com/product?id=${id}`)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            document.getElementById("bb").innerHTML = view(res)
            document.getElementById("add").addEventListener("click", () => {
                addToCart(res)
            })
        })
        .catch((err) => {
            console.log(err)
        })
  }
  
  
  function view(arr){
    return arr.map((el)=>{
        return `<center><div id="card">
              <div>
               <img src="${el.image}" id="imgg"/>
              </div>
              <div>
                <b><p id="Pp1">${el.title}</p></b>
               <b><p id="Pp2">$.${el.price}</p></b>
                <b><p id="Pp3">Rating - ${el.rating}</p></b>
                <button id="add">ADD TO CART</button>
              </div>
  
            </div></center>`
    }).join("")
  }
  
  function addToCart(res) {
    fetch(`https://mockapi-kgvo.onrender.com/cart?id=${res[0].id}`)
        .then((res) => {
            return res.json()
        })
        .then((Res) => {
            if (Res.length > 0) {
                Swal.fire("Product already in cart !!!");
            } else {
                fetch(`https://mockapi-kgvo.onrender.com/cart`, {
                    method: "POST",
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify(res[0])
                })
                    .then((Res) => {
                        return Res.json()
                    })
                    .then((Res) => {
                        console.log(Res)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                    Swal.fire("Product has been added to cart...");
            }
        })
        .catch((err) => {
            console.log(err)
        })
  
  }
  
  
  FetchingData()