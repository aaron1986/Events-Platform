import React, { useEffect, useState } from 'react';
import { auth, db } from '../Services/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default function Dashboard() {
  const [signedUpEvents, setSignedUpEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserEmail(user.email);
        const q = query(collection(db, 'signups'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const events = querySnapshot.docs.map(doc => doc.data().event); 
        setSignedUpEvents(events);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading your dashboard...</p>;

  return (
    <div>
      <h1 className='title'>Welcome to Your Dashboard</h1>
      {userEmail && <p>Signed in as: {userEmail}</p>}

      <h3>Your Registered Events</h3>
      {signedUpEvents.length === 0 ? (
        <p>You haven't signed up for any events yet.</p>
      ) : (
        <ul>
          {signedUpEvents.map((event, index) => (
            <li key={index}>
              <strong>{event.title}</strong><br />
              Date: {event.date}<br />
              Location: {event.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
