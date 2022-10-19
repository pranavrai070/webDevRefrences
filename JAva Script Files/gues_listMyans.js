var guestlist=["Garima","Pooja","Vinayak","Nidhi","Jugnu","Richa"];
var check=prompt("What is your name?");
var passList=guestlist.includes(check);
if(passList){
    alert("You are Welcome!!");
} else{
    alert("Try next time !!!");
}
