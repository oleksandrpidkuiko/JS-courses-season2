function sumArr(arr) {
    var sum = 0;
    arr.forEach(function(item,index,array) {
        if (typeof item === "number")
            sum += item;
        else if (typeof item === "string"){
            sum += parseInt(item);
        }
        else
            console.log("Елемент під індексом " + index +"\n" + "Значення якого " + item + "\n" + "Не був порахований" );
    });
    return sum;
}
