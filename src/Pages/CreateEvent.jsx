import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID = "924240908915-b1tobmtfd7kbkc8fvmq3ubnj0jp1lk6c.apps.googleusercontent.com";
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

export default function CreateEvent() {
  const [formData, setFormData] = useState({ title: "", date: "", location: "" });
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: SCOPES,
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const handleSignIn = async () => {
    await gapi.auth2.getAuthInstance().signIn();
    setIsSignedIn(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSignedIn) {
      setMessage("Please sign in with Google first.");
      return;
    }

    const event = {
      summary: formData.title,
      location: formData.location,
      start: {
        dateTime: new Date(formData.date).toISOString(),
        timeZone: "Europe/London",
      },
      end: {
        dateTime: new Date(new Date(formData.date).getTime() + 60 * 60 * 1000).toISOString(),
        timeZone: "Europe/London",
      },
    };

    try {
      const request = gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });
      await request.execute();
      setMessage("Event added to Google Calendar!");
    } catch (error) {
      console.error("Error adding to calendar:", error);
      setMessage("Failed to add event to Google Calendar.");
    }
  };

  return (
    <div>
      <h2>Create an Event</h2>

      {!isSignedIn && <button onClick={handleSignIn}>Sign in with Google</button>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder="Event Title"
          onChange={handleInputChange}
          required
        /><br />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        /><br />
        <input
          type="text"
          name="location"
          value={formData.location}
          placeholder="Location"
          onChange={handleInputChange}
          required
        /><br />
        <button type="submit">Create and Add to Calendar</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
