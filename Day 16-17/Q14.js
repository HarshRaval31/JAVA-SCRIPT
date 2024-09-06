function reverseString(string){

    let ans = ""

    for(let a =string.length-1; a>=0; a--)
    {
        ans = ans + string[a]
    }

    return ans
}

console.log(reverseString ("hello")) 