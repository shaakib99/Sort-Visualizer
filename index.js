const pixelTobeAdded = 100 //px
const maxRandomNumber = 100
const className = 'bars'
const waitingTime = 200; //ms
let global_RandomArr = [];
let selectedAlgorithmIndex = -1;
let programStatus = 'pause';
var sortedArr = [];


window.onload = ()=>{
    const sliderId = document.getElementById('number-of-item-slider-id');
    const targetId = document.getElementById('slider-value');
    const algorithmSelectionId = document.getElementById('select-sort');
    const showMenu = document.getElementById('select-sort-values');
    const startSortingButton = document.getElementById('visualizer');

    algorithmSelectionId.addEventListener('click',()=> {
        var showMenuValue = showMenu.style.display === 'flex' ? 'none' : 'flex'
        showMenu.style.display =  showMenuValue
    });

    setValueAndDraw(sliderId,targetId) // Initializing

    sliderId.addEventListener('change',()=> {
        setValueAndDraw(sliderId,targetId)
    });

    startSortingButton.addEventListener('click', ()=> {
        if(sortedArr.length === 0){
        if(selectedAlgorithmIndex !== -1){
                sortedArr = []
                if(selectedAlgorithmIndex === 0)
                    mergeSort(global_RandomArr);
                else if(selectedAlgorithmIndex === 1)
                    quickSort(global_RandomArr);
                else if(selectedAlgorithmIndex === 2)
                    heapSort(global_RandomArr);
                else if(selectedAlgorithmIndex === 3)
                    bubbleSort(global_RandomArr)
                
                updateBar(sortedArr)
            
        }else{
            // Flash field
            let time = 0;
            const fieldId = document.getElementById('select-sort-show-current-value');
            for(i=0;i<3;i++){
                setTimeout(() => {
                    fieldId.style.backgroundColor = 'white';
                    fieldId.style.color = 'rgb(111, 39, 160)';
                }, time);
                time = time + 100;
                setTimeout(() => {
                    fieldId.style.backgroundColor = 'rgb(111, 39, 160)';
                    fieldId.style.color = 'white';
                }, time);
                time += 100
            }
        }}
    }
    )
}

const setValueAndDraw = (sliderId,targetId) =>{
    sortedArr = []
    const value = sliderId.value;

    targetId.innerHTML = value;

    const randomNumberArray = generateRandomNumberArray(value);
    global_RandomArr = randomNumberArray;
    draw(randomNumberArray);
}

const generateRandomNumberArray = (numberOfItem) =>{
    var arr = [];
    var i = 0;
    
    while(i<numberOfItem){
        const randomNumber = parseInt(Math.random() * maxRandomNumber);
        const alreadyIncluded = arr.includes(randomNumber)
        if(!alreadyIncluded){
            arr.push(randomNumber);
            i++;    
        }   
    }

    return arr;
}

const draw = (items,changedIndex) =>{
    const barsId = document.getElementById('data-bars');
    var list = '';
    const listStartWith = '<li class="'+className+ '" ';
    const listEndsWith = '</li>';
    changedIndex = changedIndex === undefined ? [] : changedIndex;
    for(i=0;i<items.length;i++){
        const height = items[i] + pixelTobeAdded;
        const colorBar = changedIndex.includes(i) ? 'background-color:coral;color:rgb(111, 39, 160)' : '';
        const style = 'style=height:' + height + 'px;'+colorBar+'>';

        list += listStartWith + style + items[i] +  listEndsWith;
    }

    barsId.innerHTML = list
}

const updateBar = (sortedArr) =>{
    for(var i=0;i<sortedArr.length;i++){
        const tempSortedArr = sortedArr[i];
        const nextSortedArr = sortedArr[i+1];
        if(nextSortedArr !== undefined){
            const changedIndices = findChangedIndices(tempSortedArr,nextSortedArr)
            setTimeout(()=>draw(tempSortedArr,changedIndices), i * waitingTime)
        }else{
            setTimeout(()=>draw(tempSortedArr), i * waitingTime)
        }
    }
}

const showSlectedAlgroithm = (index) =>{
    const fieldId = document.getElementById('algo-name');
    if(index === 0)
        fieldId.innerHTML = 'Merge Sort';
    else if(index === 1)
        fieldId.innerHTML = 'Quick Sort';
    else if(index === 2)
        fieldId.innerHTML = 'Heap Sort';
    else if(index === 3)
        fieldId.innerHTML = 'Bubble Sort';
}

const selectIndex = (index) =>{
    selectedAlgorithmIndex = index;
    const sliderId = document.getElementById('number-of-item-slider-id');
    const targetId = document.getElementById('slider-value');

    setValueAndDraw(sliderId,targetId)
    showSlectedAlgroithm(index);
}

const findChangedIndices = (arr1,arr2) =>{
    var changedIndex = []
        for(var j=0;j<arr1.length;j++){
            if(arr1[j] !== arr2[j]){
                changedIndex.push(j)
            }
        }
    return changedIndex
}