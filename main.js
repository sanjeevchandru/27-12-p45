document.write("1. to display the current day and time in the following format.  "+"<br>");
function test1(today){
    // var today=new Date();
    var day=today.getDay();
    var d=["sunday","monday","tuesday","wednesday","thusday","friday","saturday"];
    document.write("Today is :"+d[day]+"<br>");
    var hour=today.getHours();
    var min=today.getMinutes();
    var sec=today.getSeconds();
    var x;
    if(hour>=12){
        x="PM";
    }
    else{
        x="AM";
    }
    document.write("Current Time : "+hour+x+" : "+min+" : "+sec+"<br>");
}
document.write(test1(new Date())+"<br><br>");