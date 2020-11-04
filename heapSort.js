/* 
    followed heapify process to create maxHeap;
    youtube link:- https://www.youtube.com/watch?v=HqPJF2L5h9U
*/

const heapSort = (arr) =>{
    var i = arr.length - 1;
    while(i>0){
        arr = createMaxHeap(arr,i);
        arr = deleteFromHeap(arr,i);

        sortedArr.push(arr.slice())
        i--;
    }
}
const createMaxHeap = (arr,index) =>{
    const limitIndex = index;
    while(index > 0){
        let parentNodeIndex = Math.floor((index + 1) / 2) - 1;
        let parentNodeOfNextIndex = Math.floor(index / 2) - 1;

        let childNodeOfSameParent = parentNodeIndex === parentNodeOfNextIndex;

        let parentNode = arr[parentNodeIndex];
        let childNode = arr[index];
        let nextChildNode = arr[index - 1];
        let indexOfNextChildNode = index - 1

        if(childNodeOfSameParent){
            if(childNode < nextChildNode){
                arr = swap(arr,parentNodeIndex, indexOfNextChildNode);
                arr = checkChildNode(arr,indexOfNextChildNode,limitIndex);
                index--;
            }else{
                arr = swap(arr,parentNodeIndex, index);
                arr = checkChildNode(arr,index,limitIndex);
                index--;
            }
        }else{
            arr = swap(arr,parentNodeIndex,index)
            arr = checkChildNode(arr,index,limitIndex);
        }

        index--;
    }
    return arr;
}

const checkChildNode = (arr,index,limitIndex) =>{
    // Since it will be complete tree we don't have to make a call to the  2 * index + 1 at the first
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;

    const leftChildWithinMutableIndex = leftChild <= limitIndex;
    const rightChildWithinMutableIndex = rightChild <= limitIndex;
    const leftChildUndefined = arr[leftChild] === undefined;
    const rightChildUndefined = arr[rightChild] === undefined;

    if(leftChildWithinMutableIndex && !leftChildUndefined){
        if(rightChildWithinMutableIndex && !rightChildUndefined){
            if(arr[leftChild] < arr[rightChild]){
                arr = swap(arr,index,rightChild);
                checkChildNode(arr,rightChild,limitIndex);
            }else{
                arr = swap(arr,index,leftChild);
                checkChildNode(arr,leftChild,limitIndex);
            }
        }else{
            arr = swap(arr,index,leftChild);
            checkChildNode(arr,leftChild,limitIndex);
        }
    }
    return arr;
}

const swap = (arr,mainIndex, swapIndex)=>{
    if(arr[mainIndex] < arr[swapIndex]){
        const temp  = arr[swapIndex]
        arr[swapIndex] = arr[mainIndex];
        arr[mainIndex] = temp;
    }
    return arr;
}

const deleteFromHeap = (arr,i) =>{
    const temp = arr[i];
    arr[i] = arr[0];
    arr[0] = temp
    arr = checkChildNode(arr,0,i - 1);

    return arr;
}