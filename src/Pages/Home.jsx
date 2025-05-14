import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
        <div><h1>Test Home</h1></div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/staff">Dashboard</Link></li>
                <li><Link to="/create">Create Event</Link></li>
            </ul>
        </nav>
        </>
    )
}