$.noConflict();
jQuery(document).ready(function ($) {

    var form =  $('form');
    var city = form.find('[name="city"]').val();
    console.log(city);
    var xhr = new XMLHttpRequest();

    console.log(city);
//    xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?APPID={Ваш APPID, зарегистрируйтесь и бесплатно получите}&q=Zaporizhya&units=metric&lang=ru');
    xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=500ee1f9c076887b0b450d62f2b5b886&units=metric&lang=ru');

    xhr.send();


    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4)
            return;
        if(xhr.status === 200) {
            try {
                var weather = JSON.parse(xhr.responseText);
                var info = weather.name;
                var temp = weather.main.temp,
                    tempD = weather.main.temp_max,
                    tempN = weather.main.temp_min,
                    weatherCity =  weather.weather[0].description;
                // info += " погода: " + weather.weather[0].description;
                // info += "<br><img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png' alt=''>";
//                document.write(info);

                console.log(weather);


            }
            catch (e) {
                console.log("Wrong JSON!");
            }
        }
        else {
            console.log(xhr.status + " " + xhr.statusText);
        }


        form.submit(function (event) {
            event.preventDefault();
            $('#addElement').text(info + ' '  + weatherCity + " сейчас: " +  temp +  "  "  + " днем: " +tempD + " ночью: " +  tempN + " " );
            console.log(info);
            console.log(form);



        });

    };




});








