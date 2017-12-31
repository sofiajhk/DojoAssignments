//write function with start, end, and skip amount (should go UP TO but NOT INCLUDING end point)

function RangePrint(start, end, skip){
    for (var num = start; num < end; num += skip){
        console.log(num)
    }
}
RangePrint(-10, 25, 5);

//write function with start, end and default of 1 skip amount...

function RangePrint2(start, end){
    for (var num = start; num < end; num++){
        console.log(num)
    }
}
RangePrint2(-2, 10);

//write function with start value of 0 and end point (UP TO, NOT INCLUDING end point)...

function RangePrint3(end){
    for (var num = 0; num < end; num++){
        console.log(num)
    }
}
RangePrint3(8);