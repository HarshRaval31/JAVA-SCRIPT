    function fun(){

        let year = document.getElementById("data").value

        if(year <=0 && year < 1 ){
            document.getElementById("ans").innerText = `Ancient Year`
        }
        else if (year >= 1 && year <= 1500){
            document.getElementById("ans").innerText = `Medieval Year`
        }
        else if (year >= 1501 && year <= 2024){
            document.getElementById("ans").innerText = `Modern Year`
        }
        else if(year > 2024)
        {
            document.getElementById("ans").innerText = `Future Year`
        }


    }