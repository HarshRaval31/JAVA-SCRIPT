let scores  = [50,50,50,50]
let sum = 0
let count = 0
let avg 



    for(a = 0; a<=scores.length -1; a++)

        {
            sum = sum + scores[a]
            count++
        }

    avg = sum / count

    console.log(avg)