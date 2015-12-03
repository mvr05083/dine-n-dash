Template.registerHelper('convertDowToDay', function(day) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[day];
});

Template.registerHelper('dayToday', function(day) {
  var day = new Date().getDay();
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[day];
});

Template.registerHelper('calcTime', function(time) {
  var afternoon = time.hour >= 12 ? 'pm' : 'am',
    hour = (time.hour % 12 === 0) ? '12' : time.hour % 12,
    minute = (time.time < 10) ? '0' + time.time : time.time;
  return hour + ':' + minute + afternoon;
});
