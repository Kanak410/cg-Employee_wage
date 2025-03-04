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
}
//     let empHrs=0;
//     empcheck=Math.floor(Math.random()*10)%3;
//     empHrs=getWorkingHours(empcheck);
//     let empWage=empHrs*Wage_per_hours;
//     console.log("Emp wage: "+empWage);
    

//}
// uc4-wageforMonth
// const Number_of_workingdays=20
// empHrs=0
// for(let day=0 ;day<Number_of_workingdays;day++){
//     let empcheck=Math.floor(Math.random()*10)%3;
//     empHrs+=getWorkingHours(empcheck);
// }
// empWage=empHrs*Wage_per_hours;
// console.log("Total hrs: "+empHrs+"Emp wages:"+empWage);

// uc5-conditionalWage

// const Max_Hrs_In_Month=100;
// const Number_of_working_days=10
// let totalEmpHrs=0
// let totalWorkingDays=0
// while(totalEmpHrs<Max_Hrs_In_Month && totalWorkingDays<Number_of_working_days){
//     totalWorkingDays++;
//     let empcheck=Math.floor(Math.random()*10)%3;
//     totalEmpHrs=getWorkingHours(empcheck);
// }
// let empWage=totalEmpHrs*Wage_per_hours;
// console.log("Total Days: "+totalWorkingDays+"Total Hrs:"+totalEmpHrs+"Emp wage: "+empWage)

// uc6-storeDailyWage
function calcDailyWage(empHrs){
    return empHrs*Wage_per_hours;
}
const Max_Hrs_In_Month=100;
const Number_of_working_days=20
let totalEmpHrs=0
let totalWorkingDays=0
let empDailyWageArr=new Array();
while(totalEmpHrs < Max_Hrs_In_Month && totalWorkingDays<Number_of_working_days){
    totalWorkingDays++;
    let empcheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empcheck)
    totalEmpHrs+=empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage=calcDailyWage(totalEmpHrs)
// console.log("total days: "+totalWorkingDays+" total hrs: "+totalEmpHrs+" emp wage: "+empWage)

//uc7-Arrayoperations
// UC 7A
let totalEmployeeWage=0;
function sum(dailywage){
    totalEmployeeWage+=dailywage;
}
empDailyWageArr.forEach(sum);
//console.log("uc7A- total days : "+totalWorkingDays+"Total hrs: "+totalEmpHrs+"Emp wage: "+totalEmployeeWage);

//UC 7B
let dailyCntr=0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr+"="+dailyWage;
    
}
let mapDayWithWageArr=empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage map");
console.log(mapDayWithWageArr)

//uc7C
function fulltimewage(dailyWage){
    return dailyWage.includes("160")
}
let fullDayWageArr=mapDayWithWageArr.filter(fulltimewage)
console.log("UC7C- Daily wage filter when full time wage Earned ")
console.log(fullDayWageArr)
// UC7D
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160")
}
console.log("UC7D-First time Fulltime wage was earned on day:"+mapDayWithWageArr.find(fulltimewage))

//uc7e
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160")
}
console.log("UC7E -check  all element have full time wage: "+fullDayWageArr.every(isAllFulltimeWage))
//UC 7F
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80")
}
console.log("Uc 7F - check If any part time wage"+mapDayWithWageArr.some(isAnyPartTimeWage));



