const quickSort = (arr,startIndex,endIndex) =>{
    startIndex = startIndex === undefined ? 0 : startIndex;
    endIndex = endIndex === undefined ? arr.length -1: endIndex;

    if(startIndex<endIndex){
        const pivotIndex = partition(arr, startIndex,endIndex)
        sortedArr.push(arr.slice())
        quickSort(arr,startIndex,pivotIndex - 1)
        quickSort(arr,pivotIndex + 1, endIndex)
    }
}

const partition = (arr,startIndex,endIndex) =>{
   const pivot = arr[endIndex]
   var i = startIndex - 1
   for(var j=startIndex;j<=endIndex-1;j++){
       if(arr[j] <= pivot){
           i++;
           const temp = arr[i];
           arr[i] = arr[j];
           arr[j] = temp;
       }
   }
   const temp = arr[i+1];
   arr[i+1] = arr[endIndex];
   arr[endIndex] = temp;

   return i+1;
}