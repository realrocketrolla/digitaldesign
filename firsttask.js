let date = new Date("01.02.2022");

function getDayInfo(date) {
   let weekdays = ['', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье' ];
   let weekday = date.getDay();
      if (weekday == 0) {
         weekday = 7 ;
      } //Начало недели с понедельника
   let day = date.getDate();
   let weekNumber = Math.ceil((day - weekday) / 7) + 1;

   let months = ["Января", "Февраля", "Марта", "Апреля", 
                 "Мая", "Июня", "Июля", "Августа", 
                 "Сентября", "Октября", "Ноября", "Декабря"];
   let month = date.getMonth();

   return `${weekdays[weekday]}, ${weekNumber} неделя ${months[month]} ${date.getFullYear()} года`;
}

console.log(getDayInfo(date)) // Воскресенье, 1 неделя Января 2022 года