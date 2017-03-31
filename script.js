
var xhr = new XMLHttpRequest();
//    xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?APPID={Ваш APPID, зарегистрируйтесь и бесплатно получите}&q=Zaporizhya&units=metric&lang=ua');
xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Zaporizhya&APPID=500ee1f9c076887b0b450d62f2b5b886&units=metric&lang=ua');

xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4)
        return;
    if(xhr.status === 200) {
        try {
            var weather = JSON.parse(xhr.responseText);
            var info = weather.name;
//                info += " температура: " + weather.main.temp;
//                info += " погода: " + weather.weather[0].description;
//                info += "<br><img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png' alt=''>";
//                document.write(info);
        }
        catch (e) {
            console.log("Wrong JSON!");
        }
    }
    else {
        console.log(xhr.status + " " + xhr.statusText);
    }
}


var form =  $('form');
form.submit(function (event) {
    event.preventDefault();
    $('#addElement').text('text' + info);
//            console.log($('#addElement').);

})