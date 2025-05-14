export function addToCalendar(event) {
  window.gapi.load('client:auth2', () => {
    window.gapi.client.init({
      apiKey: "AIzaSyDyoAQkGMmRQD2-PYagr3Q4Wq9lEV7Wt-I",
      clientId: "924240908915-b1tobmtfd7kbkc8fvmq3ubnj0jp1lk6c.apps.googleusercontent.com",
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
      scope: "https://www.googleapis.com/auth/calendar.events",
    }).then(() => {
      return window.gapi.auth2.getAuthInstance().signIn();
    }).then(() => {
      return window.gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });
    }).then(res => {
      console.log('Event created:', res);
    }).catch(console.error);
  });
}

