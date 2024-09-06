let ages = [18,20,25,66,77]

let maxage = 0

    for(let a= 0; a<ages.length; a++)
    {
        if(ages[a] > maxage)
        {
            maxage = ages[a];
        }

    }

    console.log(maxage)