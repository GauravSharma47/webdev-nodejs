function Countdown(){
    const newYear="1 Jan 2022";
    const newYearDate=new Date(newYear);
    const currentDate= new Date();

    var diff=Math.abs(newYearDate-currentDate);
    var seconds=Math.floor((diff/1000)%60);
    var mins=Math.floor((diff/(1000*60))%60);
    var hours=Math.floor((diff/(1000*60*60))%24);
    var days=Math.floor((diff/(1000*60*60*24))%365);
    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("mins").innerHTML=mins;
    document.getElementById("secs").innerHTML=seconds;
    console.log(newYear);
}

setInterval(Countdown , 1000);
