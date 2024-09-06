function hiren() {

    var h = +document.getElementById("number").value;
    var sum = 0;

    for (var a = 1; a <= h; a++)
    {
        if (a % 2 == 0)
        {
            sum = sum + a;
        }
    }

    document.getElementById("ans").innerText = `total sum =${sum}`

}