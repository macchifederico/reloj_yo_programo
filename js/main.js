$(function(){
    let actualizarHora = function(){
        let date    = new Date(),
            day     = date.getDate(),
            month   = date.getMonth(),
            year    = date.getFullYear(),
            weekDay = date.getDay(),
            hour    = date.getHours(),
            minute  = date.getMinutes(),
            seconds = date.getSeconds(),
            ampm;

        let $day     = $("#day"),
            $month   = $("#months"),
            $year    = $("#year"),
            $weekDay = $('#weekDay'),
            $hours   = $('#hours'),
            $minutes = $('#minutes'),
            $seconds = $('#seconds'),
            $ampm    = $('#ampm');

        let week = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Sabado'];

        let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 
                        'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        
        $weekDay.text(week[weekDay]);
        $day.text(day);
        $month.text(months[month]);
        $year.text(year);

        if (hour>=12) {
            ampm = "PM";
        }else{
            ampm = "AM";
        }
        if (hour == 0){
            hour = 24;
        }
        if (hour < 10){
            $hours.text("0" + hour);
        }else{
            $hours.text(hour);
        }
        if (minute<10){
            $minutes.text("0" + minute);
        }else{
            $minutes.text(minute);
        }
        if (seconds<10){
            $seconds.text("0" + seconds);
        }else{
            $seconds.text(seconds);
        }
        $ampm.text(ampm);
    };

    actualizarHora();

    let refresh = setInterval(actualizarHora, 1000);
});


