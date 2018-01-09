var arr = ["hello", -2, 9, "sofia", .2]; //original array

//write a function that copies the array ONLY accepting the items that are numbers

function newArr(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (typeof (arr[i]) === 'number'){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
    return newArr;
}

newArr(arr); //this function returns the new array


//write a second function that removes numbers from the array (instead of copying to a new array)

function updateArr(arr){
    for (i in arr){
        if (typeof arr[i] === 'number'){
            arr.splice (i, 1);
        }
    }
    console.log(arr);
}

updateArr(arr); //this function edits current array (DOES NOT NEED TO RETURN)

//splice does not work! ask instructor!