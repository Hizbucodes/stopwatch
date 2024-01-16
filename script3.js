let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let milli_seconds = document.querySelector('.milli_seconds');
let start = document.querySelector('.start');
let stops = document.querySelector('.stop');
let reset = document.querySelector('.reset');

let hrs=min=sec=ms=0;

start.addEventListener('click',()=>{

     func = setInterval(function(){
        ms++;
        if(ms==100)
        {
            sec++;
            ms=0;
        }
        else if(sec==60)
        {
            min++;
            sec=0;
        }
        else if(min==60)
        {
            hrs++;
            min=0;
        }

        thrs=hrs<10?'0'+hrs:hrs;
        tmins=min<10?'0'+min:min;
        tsec=sec<10?'0'+sec:sec;
        tms=ms<10?'0'+ms:ms;

        milli_seconds.innerHTML = tms;
        seconds.innerHTML = tsec;
        minutes.innerHTML = tmins;
        hours.innerHTML = thrs;

    },10)

 

});

stops.addEventListener('click',()=>{

clearInterval(func);

});

reset.addEventListener('click',()=>{

    hrs=min=sec=ms=0;
    clearInterval(func);

    
    milli_seconds.innerHTML = ms;
        seconds.innerHTML = sec;
        minutes.innerHTML = min;
        hours.innerHTML = hrs;

});

