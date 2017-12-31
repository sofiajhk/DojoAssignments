var HOUR = 1;
var MINUTE = 5;
var PERIOD = "PM";


if (HOUR <=11 && MINUTE === 5 && PERIOD === "AM"){
    console.log("It's 5 after", HOUR, "in the morning");
}
if (HOUR <=11 && MINUTE === 15 && PERIOD === "AM"){
    console.log("It's quarter after", HOUR, "in the monring.");
}
if (HOUR <=11 && MINUTE === 30 && PERIOD === "AM"){
    console.log("It half past", HOUR, "in the morning.");
}
    else if (HOUR <=11 && MINUTE < 30 && PERIOD === "AM"){
        console.log("It's just after", HOUR, "in the morning.");
    }
    else if (HOUR <=11 && MINUTE > 30 && PERIOD == "AM"){
        console.log("It's almost", HOUR, "in the morning.");
    }



if (HOUR === 12 && MINUTE === 5 && PERIOD === "PM"){
    console.log("It's 5 after noon.");
}
if (HOUR === 12 && MINUTE === 15 && PERIOD === "PM"){
    console.log("It's quarter after noon.");
}
if (HOUR === 12 && MINUTE === 30 && PERIOD === "PM"){
    console.log("It half past noon.");
}
    else if (HOUR === 12 && MINUTE < 30 && PERIOD === "PM"){
        console.log("It's just after noon.");
    }
    else if (HOUR === 12 && MINUTE > 30 && PERIOD == "PM"){
        console.log("It's almost", 1, "in the afternoon.");
    }   



if (HOUR <= 11 && MINUTE === 5 && PERIOD === "PM"){
    console.log("It's 5 after", HOUR, "in the evening.");
}
if (HOUR <=11 && MINUTE === 15 && PERIOD === "PM"){
    console.log("It's quarter after", HOUR, "in the evening.");
}
if (HOUR <=11 && MINUTE === 30 && PERIOD === "PM"){
    console.log("It half past", HOUR, "in the evening.");
}
    else if (HOUR <= 11 && MINUTE < 30 && PERIOD === "PM"){
        console.log("It's just after", HOUR, "in the evening.");
    }
    else if (HOUR <=11 && MINUTE > 30 && PERIOD == "PM"){
        console.log("It's just after", HOUR, "in the evening.");
    }



if (HOUR === 12 && MINUTE === 5 && PERIOD === "AM"){
    console.log("It's 5 after midnight.");
}
if (HOUR === 12 && MINUTE === 15 && PERIOD === "AM"){
    console.log("It's quarter after midnight.");
}
if (HOUR === 12 && MINUTE === 30 && PERIOD === "AM"){
    console.log("It half past midnight.");
}
    else if (HOUR === 12 && MINUTE < 30 && PERIOD === "AM"){
        console.log("It's just after midnight.");
    }
    else if (HOUR === 12 && MINUTE > 30 && PERIOD == "AM"){
        console.log("It's almost", 1, "in the morning");
    }   