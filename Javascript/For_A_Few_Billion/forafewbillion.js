//how much money after 30 days?...

var reward = .01;

for (var days = 2; days <= 30; days++){
    reward = reward * 2
    console.log("number of days", days)
    console.log("reward", reward)
}


//how many days to make $10,0000?...

var days = 1;

for (var reward = .02; reward <= 10000; reward = reward * 2){
    days = days + 1
    console.log("number of days", days)
    console.log("reward", reward)
}

//how many days to make 1 billion?...

var days = 1;

for (var reward = .02; reward <= 1000000000000; reward = reward * 2){
    days = days + 1
    console.log("number of days", days)
    console.log("reward", reward)
}

//how many days to have infinite money?...

// var days = 1;

// for (var reward = .02; reward <= infinity; reward = reward * 2){
//     days = days + 1
//     if (reward == infinity){
//         console.log("number of days till infinite money", days)
//     }
// }
