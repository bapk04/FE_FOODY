import React, { useState } from 'react';

const BlockPage = () => {
  const [showIP, setShowIP] = useState(false);
  const fakeIP = '2405:4802:71d3:3230:1516:c1f0:5e36:26b0';
  const rayId = '9474b3851b7b25d4';

  return (
    <div style={{
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      backgroundColor: '#fff',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: '40px',
      color: '#333',
    }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '0.2em' }}>
        Sorry, you have been blocked
      </h1>
      <p style={{ color: '#666', marginBottom: '40px' }}>
        You are unable to access <strong>dotramtrungtruc.id.vn</strong>
      </p>

      {/* Browser block image */}
      <div style={{
        width: '600px',
        height: '300px',
        backgroundColor: '#eee',
        borderRadius: '6px',
        position: 'relative',
        marginBottom: '40px',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: '#d9534f',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <span style={{
            color: '#fff',
            fontSize: '3rem',
            fontWeight: 'bold',
            lineHeight: 1
          }}>×</span>
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '900px',
        gap: '80px',
        marginBottom: '40px'
      }}>
        <div style={{ maxWidth: '300px' }}>
          <h3>Why have I been blocked?</h3>
          <p style={{ color: '#555', lineHeight: 1.5 }}>
            This website is using a security service to protect itself from online attacks.
            The action you just performed triggered the security solution. There are several
            actions that could trigger this block including submitting a certain word or phrase,
            a SQL command or malformed data.
          </p>
        </div>
        <div style={{ maxWidth: '300px' }}>
          <h3>What can I do to resolve this?</h3>
          <p style={{ color: '#555', lineHeight: 1.5 }}>
            You can email the site owner to let them know you were blocked. Please include what
            you were doing when this page came up and the Cloudflare Ray ID found at the bottom
            of this page.
          </p>
        </div>
      </div>

      <div style={{
        fontSize: '0.9rem',
        color: '#888',
        borderTop: '1px solid #ddd',
        paddingTop: '1em',
        width: '100%',
        textAlign: 'center'
      }}>
        Cloudflare Ray ID: <code>{rayId}</code> • Your IP: <span
          style={{ cursor: 'pointer', textDecoration: 'underline', color: '#007bff' }}
          onClick={() => setShowIP(true)}
        >
          {showIP ? fakeIP : 'Click to reveal'}
        </span> • Performance & security by{' '}
        <a
          href="https://www.cloudflare.com/5xx-error-landing/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007bff', textDecoration: 'none' }}
        >
          Cloudflare
        </a>
      </div>
    </div>
  );
};

export default BlockPage;
