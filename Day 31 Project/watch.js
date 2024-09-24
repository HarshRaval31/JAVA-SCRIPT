

let stop

    document.querySelector("#start").addEventListener("click", ()=>{

        stop = setInterval(()=>{
            let now = new Date ();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            
            document.querySelector("#screen").innerText = `${hours} : ${minutes} : ${seconds}`
        },1000)

    })

        document.querySelector("#stop").addEventListener("click", ()=>{
            clearInterval(stop);
        })
    