
function init() {

    fetch("http://worldtimeapi.org/api/timezone/Europe/Warsaw")
        .then(r => r.json())
        .then(data => {
            var date = new Date(data.datetime.replace(/[+-]\d\d:\d\d$/, ''));
            var options = {day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric'};
            var formatted = date.toLocaleString('pl-PL', options);

            const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

            let day = weekday[date.getDay()];
            const hours = date.getHours()
        
            document.getElementById("testtest").innerHTML+= `<div class="result">${day} ${hours}</div>`;
            
        });


}


