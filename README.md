<h1>Event Platform.</h1>

![Wireframe Image](./src/assets/wireframes.png)

() npm create vite@latest events-platform -- --template react </br></br>

() npm init playwright </br></br>

() npm install firebase </br></br>

() npm install -g firebase-tools </br></br>

() npm firebase deploy </br></br>

() npm install firebase react-router-dom </br></br>

() I created the Project Structure as followed: </br></br> 

src/
├── Components/
│   ├── EventCard.jsx
│   ├── EventForm.jsx
│   └── ProtectedRoute.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   └── CreateEvent.jsx
├── services/
│   ├── firebase.js
│   └── calendar.js
├── App.jsx
└── main.jsx

() On the Google Calendar website >> Create project > Enable Google Calendar API >> OAuth consent screen > Add scope >> https://www.googleapis.com/auth/calendar.events >> Create OAuth Client ID → Web App >> http://localhost:5173 </br></br>

() I added the script tag to the following path public/index.html <script async defer src="https://apis.google.com/js/api.js"></script></br></br>

() Added the Google Calendar API information to services/calendar.js</br></br>

()  