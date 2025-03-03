const Is_Absent=0;
let empcheck=Math.floor(Math.random()*10)%2;
if(empcheck == Is_Absent){
    console.log("Employee is absent");
    return;
}
else{
    console.log("Employee is present");``
}
// uc2-daily wages 
const Is_Part_time=1;
const Is_Full_time=2;
const Part_hours=4;
const Full_hours=8;
const Wage_per_hours=20;
//let empHrs=0;
// empcheck=Math.floor(Math.random()*10)%3;
// switch(empcheck){
//     case Is_Part_time:
//     empHrs=Part_hours;
//     break;
//     case Is_Full_time:
//         empHrs=Full_hours;
//         break;
//     default:
//         empHrs=0;
// }
// let empWage=empHrs*Wage_per_hours;
// console.log("Emp Wage: "+empWage)


// uc3- working hours
function getWorkingHours(empcheck){
    switch(empcheck){
        case Is_Part_time:
            return Part_hours
        case Is_Full_time:
            return Full_hours
        default:
            return 0;
    }
    let empHrs=0;
    empcheck=Math.floor(Math.random()*10)%3;
    empHrs=getWorkingHours(empcheck);
    let empWage=empHrs*Wage_per_hours;
    console.log("Emp wage: "+empWage);
    
}

