const mergeSort = (arr) =>{
    if(arr.length > 1){
        const mid = parseInt(arr.length / 2);
        const leftArr = arr.slice(0,mid)
        const rightArr = arr.slice(mid,arr.length);

        mergeSort(leftArr);
        mergeSort(rightArr);
        
        var rightArrEndIndex = global_RandomArr.findIndex((num)=> num === rightArr[rightArr.length -1]) + 1
        var leftArrStartIndex = global_RandomArr.findIndex((num) => num === leftArr[0])
        
        merge(arr,leftArr,rightArr);
        
        // We have to slice so that it doesn't make references
        var mergedArr = concatArr(arr,rightArrEndIndex,leftArrStartIndex,global_RandomArr).slice()
        sortedArr.push(mergedArr)
    }
}

const merge = (arr,leftArr,rightArr) =>{
    var i = 0;
    var j = 0;
    var k = 0;

    while(i < leftArr.length && j < rightArr.length){
        if(leftArr[i] < rightArr[j]){
            arr[k] = leftArr[i];
            i++;k++;
        }else{
            arr[k] = rightArr[j];
            j++;k++;
        }
    }

    while(i<leftArr.length){
        arr[k] = leftArr[i];
        i++;k++;
    }

    while(j<rightArr.length){
        arr[k] = rightArr[j];
        j++;k++;
    }
}

const concatArr = (mainArr = arr,endIndex = endIndex,startIndex = startIndex, globalArr = arr2) =>{
        i = 0
        while(startIndex<endIndex){
            globalArr[startIndex] = mainArr[i];
            startIndex++;i++
        }
        
        return globalArr
}