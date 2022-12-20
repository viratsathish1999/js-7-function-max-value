

   var minimum,value;
value=[10,20,30,40,50,60]
minimum=0
 
value.forEach(function(maxi){
    if(minimum<maxi){
        minimum=maxi
    }
})
document.write(minimum)