//below is an array of objects...

var students = [
    {first_name: 'Michael', last_name: 'Jordan'},
    {first_name: 'John', last_name: 'Rosales'},
    {first_name: 'Mark', last_name: 'Guillen'},
    {first_name: 'KB', last_name: 'Tonel'}
]

//write a program that outputs each students first and last name...

for (var i = 0; i < students.length; i++){
    console.log(students[i].first_name, students[i].last_name);
}

//below is a dictionary...

var users = {
    'Students': [ 
        {first_name:  'Michael', last_name: 'Jordan'},
        {first_name: 'John', last_name: 'Rosales'},
        {first_name: 'Mark', last_name: 'Guillen'},
        {first_name: 'KB', last_name: 'Tonel'}
    ],
    'Instructors': [
        {first_name: 'Michael', last_name: 'Choi'},
        {first_name: 'Martin', last_name: 'Puryear'}
    ]
}

//create a program that prints in the following format (# signifies number of characters in name)...
//ex. Students
//    1 - MICHAEL JORDAN - 13
//    2 - JOHN ROSALES - 11
//    ...etc (include instructors)

function studentsInstructors(users){
    for (var key in users){
        console.log(key);
        for (var i = 0; i < users[key].length; i++){ 
            var fullname = users[key][i].first_name + users[key][i].last_name
            console.log(`${i+1} - ${users[key][i].first_name} ${users[key][i].last_name} - ${fullname.length}`);
        }
    }
}

studentsInstructors(users);