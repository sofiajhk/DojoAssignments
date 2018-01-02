//write a function that prints 0 -> James, 1 -> Jill, etc...

var arr1 = ["James", "Jill", "Jane", "Jack"];

function FancyPrint(arr){
    for (var i = 0; i < arr.length; i++){
        console.log(i + ' ' + '->' + ' ' + arr[i]);
    }
}
FancyPrint(arr1)

//bonus: write a function that lets you modify the symbol (ex. instead of ->, change to => or ;;, etc.)...

function FancyPrint2(arr, symbol){
    for (var i = 0; i < arr.length; i++){
        console.log(i + ' ' + symbol + ' ' + arr[i]);
    }
}
FancyPrint2(arr1, ";;")

//have another parameter "reversed" that will print the elements in reverse if user passes "true"...

function FancyPrint3(arr, symbol, reversed){
    if (reversed = true){
        for (var i = arr.length-1; i >=0; i--){
            console.log(i + ' ' + symbol + ' ' + arr[i]);
        }
    }
    else {
        for (var i = 0; i < arr.length; i++){
            console.log(i + ' ' + symbol + ' ' + arr[i]);
        }
    }
}
FancyPrint3(arr1, "-")