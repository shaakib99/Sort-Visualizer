const bubbleSort = (arr) =>{
    let limitIndex= arr.length - 1;
    while(limitIndex > 0){
        for(i=0;i<limitIndex;i++){
            if(arr[i] > arr[i + 1]){
                const temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;

                sortedArr.push(arr.slice())
            }
        }
        limitIndex--;
    }
}