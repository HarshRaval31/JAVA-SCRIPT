
    fetch(`https://mockapi-kgvo.onrender.com/cart`)
    .then((res)=>{
        return res.json()
    }).then((Res)=>{
        document.querySelector("#box").innerHTML = view(Res)
    }).catch((err)=>{
        console.log(err)
    })


    function view(arr){
        return arr.map((el)=>{
            return `<div id="big">
                <img src="${el.image}" id="imgc">
                <div id="bi">
                <p>${el.title}</p>
                </div>
                <button onclick="dlt(${el.id})" id="dlt">Deleat</button>
            </div>`
        }).join("")
    }

    function dlt (id){
        fetch(`https://mockapi-kgvo.onrender.com/cart/${id}`,{
            method: 'DELETE',
        })
        .then((res)=>{
            return res.json();
        }).then((Res)=>{
            document.querySelector("#box").innerHTML = ""
        }).catch((err)=>{
            console.log(err)
        })
    }