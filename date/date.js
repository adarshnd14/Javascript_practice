console.log('Date Object');
//Returns System date
var SystemDate= new Date()
console.log(SystemDate);
console.log(SystemDate.getFullYear());
console.log(SystemDate.getHours());
console.log(SystemDate.getDate());
console.log(SystemDate.getMonth());
console.log(SystemDate.getDay());

//Return date by adding milliseconds to January 1 1970
var dateUsingmillisecondsCount = new Date(86400000)
console.log(dateUsingmillisecondsCount);

console.log('------------------------String constructor----------------------------');
var dateStringConst =new Date('Dec 13 2021')
console.log(dateStringConst);
console.log(dateStringConst.getDate());
console.log(dateStringConst.getDay());
console.log(dateStringConst.getFullYear());

var dayVal = dateStringConst.getDay()
var dateVal = dateStringConst.getDate()
var monthVal = dateStringConst.getMonth()
var yearVal = dateStringConst.getFullYear()

var fullDate = `${dateVal}/${monthVal}/${yearVal}`
console.log(fullDate);

console.log('--------------------------------------------------------------------------');
// new Date(year, month day, hour,minutes, seconds, milliseconds) constructor

var dateObj =new Date(2021, 11)
console.log(dateObj);
var dateObj1 = new Date(2021,10,21)
console.log(dateObj1);
var dateObj2 = new Date(2021,10,21,12,56,56,838)
console.log(dateObj2);
console.log(dateObj2.getMilliseconds());


console.log('=--------------------------------------------------------');

var systemDate1 = new Date('Jan 13 2021')
// console.log(dateAdi);
// console.log(fullDate);

var monValue = systemDate1.getMonth()
var dayValue = systemDate1.getDay()
 var yearValue = systemDate1.getFullYear()
var dateValue = systemDate1.getDate()

var months = ['January', 'February','March', 'April','May','June','July','August','September','October','November','December']
var monData = months[monValue]
var weekdays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var dayData =weekdays[dayValue]

var formattedDate = `${dayData}, ${monData} ${dateValue}, ${yearValue}`
console.log(formattedDate);

console.log('-----------------------------toLocaleDateString----------------------------------');
//using toLocaleDateString(locales, options)
var dateObjVal=new Date()
console.log(dateObjVal);
var formattedDate1= dateObjVal.toLocaleDateString(
    'en-US',{
        weekday:'long',month:'short',year:'numeric',day:'numeric'
    }
)
console.log(formattedDate1);