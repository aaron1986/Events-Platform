import React, { useState } from "react";
import { useSession, useSupabaseClient, useSessionContext } from "@supabase/auth-helpers-react";
import DateTimePicker from "react-datetime-picker";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

export default function CreateEvent() {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [message, setMessage] = useState("");

  const session = useSession();
  const supabase = useSupabaseClient();
  const { isLoading } = useSessionContext();

  if (isLoading) return <></>;

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
      },
    });

    if (error) {
      alert("Error logging into Google.");
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  async function createCalendarEvent() {
    if (!session?.provider_token) {
      setMessage("You must be signed in with Google.");
      return;
    }

    const event = {
      summary: eventName,
      description: eventDescription,
      start: {
        dateTime: start.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: end.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    };

    try {
      const res = await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + session.provider_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Event successfully created!");
      } else {
        console.error("Google Calendar API error:", data);
        setMessage("Failed to create event.");
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("Error creating calendar event.");
    }
  }

  return (
    <div>
      <h1 className='title'>Create an Event</h1>

      {session ? (
        <>
          <p>Welcome, {session.user.email}</p>

          <p>Start Time</p>
          <DateTimePicker onChange={setStart} value={start} id="dateStart"/>

          <p>End Time</p>
          <DateTimePicker onChange={setEnd} value={end} id="dateEnd"/>

          <p>Event Name</p>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />

          <p>Event Description</p>
          <input
            type="text"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          />

          <br />
          <button onClick={createCalendarEvent}>Create Calendar Event</button>
          <br />
          <button onClick={signOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={googleSignIn}>Sign In with Google</button>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}
