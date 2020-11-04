// First attempt at solving . Answer still in the works. 
function maxDuffelBagValue(cakeTypes, weightCapacity) {

    const cakeTypesWeight = [];
    const finalArr = new Array(weightCapacity + 1).fill(0);
    const valueArr = new Array(weightCapacity + 1).fill(0);
    finalArr[0] = 1;
    cakeTypes.forEach((cake) => {
        cakeTypesWeight.push(cake.weight);
    })

    cakeTypesWeight.sort((a, b) => a - b);

    cakeTypesWeight.forEach((weight) => {

        for (let i = 1; i < finalArr.length; i++) {
            if (i - weight >= 0) {
                finalArr[i] += finalArr[i - weight];
                // valuArr[i] +=
                let found = cakeTypes.find(cake => cake.weight === i);
                if (found && found.value + valueArr[i] <= weightCapacity) {
                    console.log(found.value)
                    valueArr[i] += found.value;
                    console.log(valueArr)
                }
            }

        }
    })
    // console.log(valueArr);
}