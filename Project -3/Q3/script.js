function fun(){

    let a = document.getElementById("data1").value
    let b = document.getElementById("data2").value
    let c = document.getElementById("data3").value

    if (a > b || a > c){
        document.getElementById("ans").innerText = `A is Largest Number`
    }
    else if ( b > c || b < a){
        document.getElementById("ans").innerText = `B is Largest Number`
    }
    else if ( c > a || c < b){
        document.getElementById("ans").innerText = `C is Largest Number`
    }

}