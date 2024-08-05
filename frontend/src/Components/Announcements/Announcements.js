// src/components/Announcements.js

import React, { useEffect, useState } from 'react';
import { fetchAnnouncements } from '../../api/announcement';


function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getAnnouncements() {
      try {
        const data = await fetchAnnouncements();
        console.log(data)
        setAnnouncements(data);
      } catch (err) {
        setError('Failed to load announcements');
      }
    }
    getAnnouncements();
  }, []);

  return (
    <div className="messages-section">
      <button className="messages-close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-x-circle"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </button>
      <div className="projects-section-header">
        <p>Announcements</p>
      </div>
      <div className="messages">
        {error && <p>{error}</p>}
        {announcements.map((announcement) => (
          <div key={announcement.id} className="message-box">
            <img
              src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg"
              alt="s"
            />
            <div className="message-content">
              <div className="message-header">
                <div className="name">User</div>
              </div>
              <p className="message-line">{announcement.announcement}</p>
              <p className="message-line time">{new Date(announcement.created).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Announcements;
