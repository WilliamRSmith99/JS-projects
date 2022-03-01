function Selector(name){

    if (name.style.backgroundColor == 'red'){
        name.style.backgroundColor = 'rgb(229, 229, 229)';
        name.style.color = 'rgb(229, 229, 229)';

    }else{
        name.style.backgroundColor = 'red';
        name.style.color = 'red';   
    }
    
   }
   


//--------- everything below this line is part of the scheduling script----------------------------------------------------------
let employees = []
let hours = {}

//this is the base schedule format
let mainSchedule = {
    'Monday': ['','','','','','','','','','','','','','','','','','',''],
    'Tuesday': ['','','','','','','','','','','','','','','','','','',''],
    'Wednesday': ['','','','','','','','','','','','','','','','','','',''],
    'Thursday': ['','','','','','','','','','','','','','','','','','',''],
    'Friday': ['','','','','','','','','','','','','','','','','','',''],
    'Saturday': ['','','','','','','','','','','','','','','','','','',''],
    'Sunday': ['','','','','','','','','','','','','','','','','','','']
}

//template for adding new employees || creates their entry in Employees table and Hours
function newEmployee (name, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
    newE = {
        Name: name,
        Monday: monday,
        Tuesday:tuesday,
        Wednesday: wednesday,
        Thursday: thursday,
        Friday: friday,
        Saturday: saturday,
        Sunday: sunday,
        
    }
    employees.push(newE)
    hours[name] = 0;
    for (let person in employees){
        console.log(document.getElementById('NamesHere'))
    }
      ;
}

// main function, this cycles through the schedule slots to fill them
function main(){
    for (const day in mainSchedule){
        for (let i = 0; i < mainSchedule[day].length; i++){
            mainSchedule[day][i] = checkr(day, i)
        }
    }
    console.log(mainSchedule)
    for (const day in mainSchedule){
        let slots = document.getElementById(day).querySelectorAll(".slot");
        for (let i = 0; i< slots.length;i++){
           slots[i].innerHTML =  mainSchedule[day][i];
           slots[i].style.color = 'black';

        }
    }

} 

// this is the function that actually checks to see which people are available in 'x' slot, then publishes to main schedule
 function checkr(day, i){
    let people = []
    for (let person in employees){
        if (employees[person][day][i] == 'X' || employees[person][day][i] == 'x' ){
            people.push(employees[person]['Name'])
            hours[(employees[person]['Name'])]++
        } 
    } 
    if (people.length > 2){
        people = distributer(people)
    }
    else if (people.length == 0){
        people.push('No Cover')
    }
    return people
 }

// this function acts as an arbitor to decide who gets contested shift | based on hours already given
function distributer(array){
    const ordered = Object.fromEntries(
        Object.entries(hours).sort(([,a],[,b]) => a-b)
    );
    let counter = 0
    let newArr = []
    for (let person in ordered){
        if (counter < 2){
            newArr.push(person)
        }else{
            hours[person] --
        }
        counter++
    }
    return newArr
}

function NewEntry () {
    newE = {
        Name: name,
        Monday: [],
        Tuesday:[],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: [],
        
    }
    
    
    for (let day in mainSchedule){
        let available = [];
        let name = document.getElementById("Name").value;
        let results = document.getElementById(day).querySelectorAll(".slot");

        console.log(day)
        newE['Name'] = name;
        for (let i = 0; i < results.length; i++){
            if (results[i].style.color == 'red'){
                available.push('X');
                results[i].style.color = 'rgb(229, 229, 229)'
                results[i].style.backgroundColor = 'rgb(229, 229, 229)'

            }else{
                available.push('');
            }
        }
        newE[day] = available;
        hours[name] = 0;
    }
    employees.push(newE)
    document.getElementById('NamesHere').innerText += '\n'+ document.getElementById("Name").value;


}





newEmployee(
    'Will',['X','X','X','X','X','','','','','X','X','X','X','X','','','','',''],
    ['X','X','X','','','','','','','X','X','X','X','X','','','','',''],
     ['X','X','','','','','','','','X','X','X','X','X','','','','',''],
     ['X','','','','','','','','','X','X','X','X','X','','','','',''],
     ['','','','','','','','','','','','','','','','','','',''],
     ['','','','','','','','','','','','','','','','','','',''],
    ['','','','','X','X','X','X','X','X','X','X','X','X','','','','','']
)

newEmployee(
    'Jack',['X','X','X','X','X','','','','','X','X','X','X','X','','','','',''],
    ['X','X','X','','','','','','','X','X','X','X','X','','','','',''],
     ['X','X','','','','','','','','X','X','X','X','X','','','','',''],
     ['X','','','','','','','','','X','X','X','X','X','','','','',''],
     ['','','','','','','','','','','','','','','','','','',''],
     ['','','','','','','','','','','','','','','','','','',''],
    ['','','','','X','X','X','X','X','X','X','X','X','X','','','','','']
)
newEmployee(
    'kat',['X','X','X','X','X','','','','','X','X','X','X','X','','','','',''],
    ['X','X','X','','','','','','','X','X','X','X','X','','','','',''],
     ['X','X','','','','','','','','X','X','X','X','X','','','','',''],
     ['X','','','','','','','','','X','X','X','X','X','','','','',''],
     ['','','','','','','','','','','','','','','','','','',''],
     ['','','','','','','','','','','','','','','','','','',''],
    ['','','','','X','X','X','X','X','X','X','X','X','X','','','','','']
)

newEmployee(
    'jess',['X','X','X','X','X','','','','','X','X','X','X','X','','','','',''],
    ['X','X','X','','','','','','','X','X','X','X','X','','','','',''],
     ['X','X','','','','','','','','X','X','X','X','X','','','','',''],
     ['X','','','','','','','','','X','X','X','X','X','','','','',''],
     ['','','','','','','','','','','','','','','','','','',''],
     ['','','','','','','','','','','','','','','','','','',''],
    ['','','','','X','X','X','X','X','X','X','X','X','X','','','','','']
)
newEmployee(
    'james',['X','X','X','X','X','','','','','X','X','X','X','X','','','','',''],
    ['X','X','X','','x','x','','','','X','X','X','X','X','','','','',''],
     ['X','X','','','x','x','','','','X','X','X','X','X','','','','',''],
     ['X','','','x','x','x','','','','X','X','X','X','X','','','','',''],
     ['','','','','','x','x','','','','','','','','','','','',''],
     ['','','','','','x','x','','','','','','','','','','','',''],
    ['','','','','X','X','X','X','X','X','X','X','X','X','','','','','']
)

newEmployee(
    'orlando',['X','X','X','X','X','','','','','X','X','X','X','X','','','','',''],
    ['X','X','X','','','','','','','X','X','X','X','X','','','','',''],
     ['X','X','x','x','x','','','','','X','X','X','X','X','','','','',''],
     ['X','x','x','x','x','','','','','X','X','X','X','X','','','','',''],
     ['x','x','x','x','x','','','','','','','','','','','','','',''],
     ['x','x','x','x','x','','','','','','','','','','','','','',''],
    ['x','x','x','x','X','X','X','X','X','X','X','X','X','X','','','','','']
)


//base()


