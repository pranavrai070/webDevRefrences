function isLeap(year) {
    
/**************Don't change the code above****************/    

if(year%4==0 && year%100!==0){
    alert("leap year");
}
if(year%4==0 && year%100==0 && year%400==0){
    alert("leap year");
}    
else{
    alert("Not Leaap year");
}
    
}       
 isLeap(2022);

    

/**************Don't change the code below****************/    

