// var time = 0;

// var timer = setInterval(function(){
//     time += 2; 
//     console.log(time + "sec has passed");
    

//     if (time > 5) {
//         clearInterval(timer);
//     }
// }, 2000);

var time = 0;


var timer = setInterval(function(){
    time += 2;
    console.log(time + ' secs has passed');

    if (time > 6) {
        clearInterval(timer);
    }
    
}, 2000);