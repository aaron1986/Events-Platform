import React, { useEffect, useState } from 'react';
import { useSession, useSessionContext } from '@supabase/auth-helpers-react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


export default function Dashboard() {
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [userEmail, setUserEmail] = useState(null);

  const session = useSession();
  const { isLoading } = useSessionContext();

  const currentYear = new Date().getFullYear();
  const yearStart = new Date(`${currentYear}-01-01T00:00:00Z`).toISOString();
  const yearEnd = new Date(`${currentYear}-12-31T23:59:59Z`).toISOString();

  useEffect(() => {
    if (session?.user?.email) {
      setUserEmail(session.user.email);
    }
  }, [session]);

  useEffect(() => {
    async function fetchCalendarEvents() {
      if (!session?.provider_token) return;

      try {
        const res = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/primary/events?orderBy=startTime&singleEvents=true&timeMin=${yearStart}&timeMax=${yearEnd}`,
          {
            headers: {
              Authorization: `Bearer ${session.provider_token}`,
            },
          }
        );

        const data = await res.json();
        if (res.ok) {
          const formattedEvents = (data.items || []).map(event => ({
            id: event.id,
            title: event.summary || '(No Title)',
            start: event.start?.dateTime || event.start?.date,
            end: event.end?.dateTime || event.end?.date,
          }));
          setCalendarEvents(formattedEvents);
        } else {
          console.error('Google Calendar error:', data);
        }
      } catch (err) {
        console.error('Failed to fetch calendar events:', err);
      }
    }

    fetchCalendarEvents();
  }, [session, yearStart, yearEnd]);

  if (isLoading) return <p>Loading your dashboard...</p>;

  return (
    <div>
      <div className="title"><h1>Welcome to your Dashboard</h1></div>
      {userEmail && <p>Signed in as: {userEmail}</p>}

      <h3>Your Google Calendar Events ({currentYear})</h3>

      {calendarEvents.length === 0 ? (
        <p>No Google Calendar events found this year.</p>
      ) : (
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={calendarEvents}
          height="auto"
        />
      )}
    </div>
  );
}
