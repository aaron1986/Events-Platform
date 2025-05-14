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
├── Components/</br></br> 
│   ├── EventCard.jsx</br></br> 
│   ├── EventForm.jsx</br></br> 
│   └── ProtectedRoute.jsx</br></br> 
├── pages/</br></br> 
│   ├── Home.jsx</br></br> 
│   ├── Login.jsx</br></br> 
│   ├── Dashboard.jsx</br></br> 
│   └── CreateEvent.jsx</br></br> 
├── services/</br></br> 
│   ├── firebase.js</br></br> 
│   └── calendar.js</br></br> 
├── App.jsx</br></br> 
└── main.jsx</br></br> 

() On the Google Calendar website >> Create project > Enable Google Calendar API >> OAuth consent screen > Add scope >> https://www.googleapis.com/auth/calendar.events >> Create OAuth Client ID → Web App >> http://localhost:5173 </br></br>

() I added the script tag to the following path public/index.html <script async defer src="https://apis.google.com/js/api.js"></script></br></br>

() Added the Google Calendar API information to services/calendar.js</br></br>

()  