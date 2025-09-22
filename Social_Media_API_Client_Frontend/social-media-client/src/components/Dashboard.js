import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      navigate('/');
    } catch (err) {
      console.error("Logout failed", err);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Dashboard</h2>
      <p style={{ marginBottom: '30px' }}>Welcome! You are logged in.</p>

      <div>
        <button
          onClick={() => navigate('/api-crud')}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            marginRight: '10px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#45a049'}
          onMouseOut={e => e.target.style.backgroundColor = '#4CAF50'}
        >
          Go to API CRUD
        </button>

        <button
          onClick={handleLogout}
          style={{
            backgroundColor: '#f44336',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#da190b'}
          onMouseOut={e => e.target.style.backgroundColor = '#f44336'}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
