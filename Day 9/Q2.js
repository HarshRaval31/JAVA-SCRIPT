function hiren() {

    var h = +document.getElementById("number").value;
    var fact = 1;

    for (var a = 1; a <= h; a++)
    {
        fact = fact * a;
  
    }

    document.getElementById("ans").innerText = `factoriyal =${fact}`

}