function fun(){

        let year = document.getElementById("data").value

        if (year % 4 == 0){
            document.getElementById("ans").innerText = `Leap Year`
        }
        else
        {
            document.getElementById("ans").innerText = `Not a Leap Year`
        }


}