const birth=document.querySelector("#birth");
const show=document.querySelector("#show");

function reverseStr(str)
{
     var listofChar = str.split('');
     console.log(listofChar);
     var reverselistofChar =listofChar.reverse();
    var reversedStr=reverselistofChar.join(''); 
    return reversedStr;
}
function IsPallindrome(str)
{
   var reverse=reverseStr(str);
   if(reverse==str)
{
      console.log("true");
}
else
{
    console.log("false");
}
} 
//show.addEventListener("click",IsPallindrome(birth.value));
function convertDateToString(date)
{
  var dateStr={day:' ',  month:' ', year:' '};
  
   if(date.month<10)
   {
        dateStr.month='0'+date.month;
   }
   else
   {
     dateStr.month=dateStr.month.toString();
   }

    if(date.day<10)
   {
        dateStr.day='0'+date.day;
   }
  else
 {
     dateStr.day=dateStr.day.toString();
  }

    dateStr.year=dateStr.year.toString();
    return dateStr;
}
function getAllDateFormat(date)
{
   //convertDateToString(date)
   var ddmmyyyy=dateStr.day+dateStr.month+dateStr.year;
  var mmddyyyy=dateStr.month+dateStr.day+dateStr.year;
  var yyyyddmm=dateStr.year.+dateStr.day+dateStr.month;
 var ddmmyy=dateStr.day+dateStr.month+dateStr.year.slice(-2);
  var mmyydd=dateStr.month+dateStr.year+dateStr.day;
  var yyddmm=dateStr.year.slice(-2)+dateStr.day+dateStr.month;
}
var date=
{
    day: 2,
    month: 11,
    Year: 2020
};
console.log(convertDateToString(date));
























