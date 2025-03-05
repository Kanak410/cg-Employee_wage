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
const Max_Hrs_In_Month=160;
const Number_of_working_days=20
let totalEmpHrs=0
let totalWorkingDays=0
let empDailyWageArr=new Array();
let empDailyWageMap=new Map();

// UC10store day and hours
let empDailyHrsWageArr=new Array();
let empDailyHrsWageMap=new Map();
while(totalEmpHrs <= Max_Hrs_In_Month && totalWorkingDays<Number_of_working_days){
    totalWorkingDays++;
    let empcheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empcheck)
    totalEmpHrs+=empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs))
    empDailyHrsWageMap.set(totalWorkingDays,empHrs)
    empDailyHrsWageArr.push(
        {
           dayNum:totalWorkingDays,
           dailyHours:empHrs,
           dailyWage:calcDailyWage(empHrs),
           toString(){
            return '\n'+this.dayNum+"=> working hours is "+this.dailyHours+"and wages earned: "+this.dailyWage;
           }

        }
    )
}
console.log("UC 10 showing daily hrs using object array : "+empDailyHrsWageArr)
{
// console.log(empDailyWageMap)
// function totalWages(totalWage,dailyWage){
//   return totalWage + dailyWage
// }
// console.log("UC 8 - Emp Wage Map totalHrs:  "+
//   Array.from(empDailyWageMap.values()).reduce(totalWages,0))
// // console.log("total days: "+totalWorkingDays+" total hrs: "+totalEmpHrs+" emp wage: "+empWage)

//uc7-Arrayoperations
// UC 7A
// let totalEmployeeWage=0;
// function sum(dailywage){
//     totalEmployeeWage+=dailywage;
// }
// empDailyWageArr.forEach(sum);
// //console.log("uc7A- total days : "+totalWorkingDays+"Total hrs: "+totalEmpHrs+"Emp wage: "+totalEmployeeWage);

// //UC 7B
// let dailyCntr=0;
// function mapDayWithWage(dailyWage){
//     dailyCntr++;
//     return dailyCntr+"="+dailyWage;
    
// }
// let mapDayWithWageArr=empDailyWageArr.map(mapDayWithWage);
// console.log("UC7B - Daily Wage map");
// console.log(mapDayWithWageArr)

// //uc7C
// function fulltimewage(dailyWage){
//     return dailyWage.includes("160")
// }
// let fullDayWageArr=mapDayWithWageArr.filter(fulltimewage)
// console.log("UC7C- Daily wage filter when full time wage Earned ")
// console.log(fullDayWageArr)
// // UC7D
// function isAllFulltimeWage(dailyWage){
//     return dailyWage.includes("160")
// }
// console.log("UC7D-First time Fulltime wage was earned on day:"+mapDayWithWageArr.find(fulltimewage))

// //uc7e
// function isAllFulltimeWage(dailyWage){
//     return dailyWage.includes("160")
// }
// console.log("UC7E -check  all element have full time wage: "+fullDayWageArr.every(isAllFulltimeWage))
// //UC 7F
// function isAnyPartTimeWage(dailyWage){
//     return dailyWage.includes("80")
// }
// console.log("Uc 7F - check If any part time wage"+mapDayWithWageArr.some(isAnyPartTimeWage));

// //UC 7G
// function totalDayWorked(numOfDays,dailyWage){
//     if(dailyWage>0) return numOfDays+1;
//     return numOfDays
// }
// console.log("UC 7G-Number of Days Emp Worked: "+empDailyWageArr.reduce(totalDayWorked,0))
// UC -9 arrow function
// const findTotal = (totalVal, dailyVal) => totalVal + dailyVal;

// // Total Wage and Total Hours Calculation
// let totalWage = Array.from(empDailyWageMap.values()).reduce(findTotal, 0);
// let totalHours = Array.from(empDailyWageMap.keys()).reduce(
//     (total, day) => total + getWorkingHours(day), 0
// );

// console.log(`UC9A - Emp Wage with Arrow: Total Hours: ${totalHours}, Total Wage: ${totalWage}`);

// // Categorizing Working Days
// let fullWorkingDays = [], partWorkingDays = [], nonWorkingDays = [];

// empDailyWageMap.forEach((wage, day) => {
//     let hours = getWorkingHours(day);
//     if (hours === 8) fullWorkingDays.push(day);
//     else if (hours === 4) partWorkingDays.push(day);
//     else nonWorkingDays.push(day);
// });

// console.log(`Full Working Days: ${fullWorkingDays}`);
// console.log(`Part Working Days: ${partWorkingDays}`);
// console.log(`Non-Working Days: ${nonWorkingDays}`);
}

//UC 11A calculate the total wages and total hours using the object arrays
let totalWages=empDailyHrsWageArr.filter(dailyWageHrs=> dailyWageHrs.dailyWage>0)
.reduce((totalWages,dailyWageHrs)=>totalWages+dailyWageHrs.dailyWage,0);
let totalHrs=empDailyHrsWageArr
.filter(dailyWageHrs=>dailyWageHrs.dailyHours>0)
.reduce((dailyHours,dailyWageHrs)=>dailyHours+dailyWageHrs.dailyHours,0);
console.log("UC 11A total hours: "+totalHrs+"Total wages: "+totalWages)
process.stdout.write("UC 11B logging full work days")
empDailyHrsWageArr.filter(dailyWageHrs=> dailyWageHrs.dailyHours==8).forEach(dailyWageHrs => process.stdout.write(dailyWageHrs.toString()))

let partWorkingDaysStrAr=empDailyHrsWageArr.filter(dailyWageHrs=> dailyWageHrs.dailyHours==0).map(dailyWageHrs=>dailyWageHrs.dayNum)
console.log("\n UC 11C partworkingDayString: "+partWorkingDaysStrAr)

let nonWorkingDays=empDailyHrsWageArr.filter(dailyWageHrs =>dailyWageHrs.dailyHours==0).map(dailyWageHrs =>dailyWageHrs.dayNum)
console.log("UC 11D NonWorkingDayNums: "+nonWorkingDays)

class EmployeePayrollData{
    id;
    salary;
    gender;
    startDate;
    constructor(...params){
        this.id=params[0];
        this.salary=params[2];
        this._name=params[1];
        this.gender=params[3];
        this.startDate=params[4];
    }
    get name(){
        return this._name;
    }
    set name(name){
       let nameRegex=RegExp("^[A-Z]{1}[a-z]{3,}$");
       if(nameRegex.test(name)){
        this._name=name;
       }else{
         throw new Error("Name is incorrect!!");
       }
    }
    toString(){
        const options={year: 'numeric',month:'long',day:'numeric'};
        const empDate=this.startDate===undefined ?"undefined":
        this.startDate.toLocaleDateString("en-us",options);
        return "id="+this.id+", name"+this.name+",salary="+this.salary+","+"gender="+this.gender+", startDate="+empDate;
    }
}
let employeePayrollData=new EmployeePayrollData(1,"Kanak",2000)
console.log(employeePayrollData.toString())
try{
employeePayrollData.name="Kanak"
console.log(employeePayrollData.toString()); 
}catch(e){
    console.error(e)
}
let newEmployeePayrollData=new EmployeePayrollData(2,"payal",40000,"female",new Date(2002,4,10))
console.log(newEmployeePayrollData.toString())
