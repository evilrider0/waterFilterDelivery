myEvents = [
  {
    id: "required-id-1",
    name: "New Year",
    date: "Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
    type: "holiday",
    everyYear: true
  },
  {
    id: "required-id-2",
    name: "Valentine's Day",
    date: "Fri Feb 14 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
    type: "holiday",
    everyYear: true,
    color: "#222"
  },
  {
    id: "required-id-3",
    name: "Custom Date",
    badge: "08/03 - 08/05",
    date: ["August/03/2020", "August/05/2020"],
    description: "Description here",
    type: "event",
  },
  // more events here
],




$('#evoCalendar').evoCalendar({
  calendarEvents: myEvents
});


$('#evoCalendar').evoCalendar({
  format: 'mm/dd/yyyy',
  titleFormat: 'MM yyyy',
  eventHeaderFormat: 'MM d, yyyy'
});

$('#evoCalendar').evoCalendar({
  language: 'en',
});


// dates: {
//   en: {
//       days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//       daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//       daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
//       months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
//       monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//       noEventForToday: "No event for today.. so take a rest! :)",
//       noEventForThisDay: "No event for this day.. so take a rest! :)"
//   },
// }


$('#evoCalendar').evoCalendar({
  todayHighlight: false
});

$('#evoCalendar').evoCalendar({
  sidebarToggler: true,
  sidebarDisplayDefault: true,
  eventListToggler: true,
  eventDisplayDefault: true,
});


$('#evoCalendar').evoCalendar({
  firstDayOfWeek: 1 // Monday
});

$('#evoCalendar').evoCalendar({
  disabledDate: ["02/17/2020", "02/21/2020"]
});



$('#evoCalendar').evoCalendar({
  onSelectDate: function() {
    // console.log('onSelectDate!')
  }
});


$("#evoCalendar").evoCalendar('addCalendarEvent', [
  {
   name: "NEW EVENT",
   date: "February/16/2020",
   type: "birthday",
   everyYear: true
  }
]);


$('#evoCalendar').evoCalendar({
  theme: 'Orange Coral'
});


// set theme
$("#evoCalendar").evoCalendar('setTheme', themeName);

// toggle sidebar
$("#evoCalendar").evoCalendar('toggleSidebar', true/false);

// toggle event list
$("#evoCalendar").evoCalendar('toggleEventList', true/false);

// get the selected date
$("#evoCalendar").evoCalendar('getActiveDate');

// get active events
$("#evoCalendar").evoCalendar('getActiveEvents');

// select a year
$("#evoCalendar").evoCalendar('selectYear', yearNumber);

// select a month
$("#evoCalendar").evoCalendar('selectMonth', monthNumber);

// select a date
$("#evoCalendar").evoCalendar('selectDate', dateNumber);

// add events
$("#evoCalendar").evoCalendar('addCalendarEvent', [{
  id: 'Event ID',
  name: "Event Name",
  date: "Date Here",
  type: "Event Type",
  everyYear: true
}]);

// remove events by ID
$("#evoCalendar").evoCalendar('removeCalendarEvent', eventID);

// destroy the calendar
$("#evoCalendar").evoCalendar('destroy');
