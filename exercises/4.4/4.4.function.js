let biggerNumber = () => {
    let numbers = [];
    let bigger = 0;
    for (let i = 0; i < 10; i += 1) {
        numbers.push(Math.floor(Math.random() * 100))
    }
    console.log(numbers)
    for (let i = 0; i < numbers.length; i += 1){
        if (numbers[i] > bigger) {
            bigger = numbers[i]
        }
    }
    console.log(bigger)
}

biggerNumber()

