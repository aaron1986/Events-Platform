<h1>Event Platform.</h1>

![Wireframe Image](./src/assets/wireframes.png)

(1) npm create vite@latest events-platform -- --template react </br></br>

(2) npm init playwright </br></br>

(3) npm install firebase </br></br>

(4) npm install -g firebase-tools </br></br>

(5) npm firebase deploy </br></br>

(6) npm install firebase react-router-dom </br></br>

(7) I created the Project Structure as followed: </br></br> 

src/
├── Components/</br> 
│   ├── EventCard.jsx</br> 
│   ├── EventForm.jsx</br> 
│   └── ProtectedRoute.jsx</br> 
├── pages/</br>
│   ├── Home.jsx</br>
│   ├── Login.jsx</br
│   ├── Dashboard.jsx</br> 
│   └── CreateEvent.jsx</br> 
├── services/</br>
│   ├── firebase.js</br>
│   └── calendar.js</br>
├── App.jsx</br>
└── main.jsx</br>

(8) On the Google Calendar website >> Create project > Enable Google Calendar API >> OAuth consent screen > Add scope >> https://www.googleapis.com/auth/calendar.events >> Create OAuth Client ID → Web App >> http://localhost:5173 </br></br>

(9) I added the script tag to the following path public/index.html <script async defer src="https://apis.google.com/js/api.js"></script></br></br>

(10) Added the Google Calendar API information to services/calendar.js</br></br>

()  