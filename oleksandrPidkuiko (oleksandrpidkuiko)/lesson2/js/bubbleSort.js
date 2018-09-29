function bubbleSort(arr){
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length-1-i; j++){
            if (arr[j+1] < arr[j]){
                var buf = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = buf;
            }
        }
    }
    return arr;
}