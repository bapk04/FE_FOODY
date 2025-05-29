// src/components/BlockPage.js
import React from 'react';

const BlockPage = () => (
  <div style={{
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'center',
    padding: '100px 20px',
    backgroundColor: '#fff',
    color: '#333',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none'
  }}>
    <h1 style={{ fontSize: 48, color: '#f05030', marginBottom: 0 }}>Sorry, you have been blocked</h1>
    <p style={{ fontSize: 18, margin: '10px 0 20px' }}>
      You are unable to access <strong>hoxuanhung2802.id.vn</strong>
    </p>
    <p style={{ fontSize: 14, maxWidth: 400, lineHeight: 1.5, marginBottom: 40 }}>
      Why have I been blocked?<br/>
      This website is using a security service to protect itself from online attacks.
      The action you just performed triggered the security solution. There are several
      actions that could trigger this block including submitting a certain word or phrase,
      a SQL command or malformed data.
    </p>
    <p style={{ fontSize: 14, maxWidth: 400, lineHeight: 1.5 }}>
      What can I do to resolve this?<br/>
      You can email the site owner to let them know you were blocked. Please include what
      you were doing when this page came up.
    </p>
    <small style={{ marginTop: 60, color: '#888' }}>Performance &amp; security by Cloudflare</small>
  </div>
);

export default BlockPage;
