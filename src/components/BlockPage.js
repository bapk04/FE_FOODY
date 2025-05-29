import React, { useState } from 'react';

const BlockPage = () => {
  const [showIP, setShowIP] = useState(false);
  const fakeIP = '2405:4802:71d3:3230:1516:c1f0:5e36:26b0'; // hoặc lấy IP thật nếu backend trả về

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      color: '#333',
      textAlign: 'center',
      padding: '0 20px',
      boxSizing: 'border-box',
      userSelect: 'none'
    }}>
      <h1 style={{
        fontSize: '4.5rem',
        margin: '0 0 0.3em 0',
        color: '#f05030',
        fontWeight: 'bold',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>
        Sorry, you have been blocked
      </h1>
      <p style={{ fontSize: '1.5rem', margin: '0 0 1em 0' }}>
        You are unable to access <strong>hoxuanhung2802.id.vn</strong>
      </p>

      {/* Cloudflare Ray ID + IP */}
      <div style={{ fontSize: '0.95rem', color: '#666', marginBottom: '2em' }}>
        Cloudflare Ray ID: <code>9474b3851b7b25d4</code> <br />
        Your IP: <span
          style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => setShowIP(true)}
        >
          {showIP ? fakeIP : 'Click to reveal'}
        </span>
      </div>

      <p style={{
        fontSize: '1rem',
        maxWidth: 480,
        lineHeight: 1.6,
        margin: '0 0 2em 0',
        color: '#555'
      }}>
        <strong>Why have I been blocked?</strong><br />
        This website is using a security service to protect itself from online attacks.
        The action you just performed triggered the security solution. There are several
        actions that could trigger this block including submitting a certain word or phrase,
        a SQL command or malformed data.
      </p>
      <p style={{
        fontSize: '1rem',
        maxWidth: 480,
        lineHeight: 1.6,
        color: '#555',
        marginBottom: '4em'
      }}>
        <strong>What can I do to resolve this?</strong><br />
        You can email the site owner to let them know you were blocked. Please include what
        you were doing when this page came up.
      </p>

      <footer style={{
        position: 'absolute',
        bottom: 20,
        width: '100%',
        fontSize: '0.85rem',
        color: '#888',
        userSelect: 'none'
      }}>
        <a href="https://www.cloudflare.com/5xx-error-landing/" target="_blank" rel="noopener noreferrer"
          style={{ color: '#888', textDecoration: 'none' }}>
          Performance &amp; security by Cloudflare
        </a>
      </footer>
    </div>
  );
};

export default BlockPage;
