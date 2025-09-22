import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleGoogleSuccess = (credentialResponse) => {
    try {
      console.log("Google Login Success:", credentialResponse);
      localStorage.setItem('token', credentialResponse.credential);
      setError("");
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setError("Failed to log in with Google.");
    }
  };

  const handleGoogleFailure = () => {
    console.log("Google Login Failed");
    setError("Google login failed. Please try again.");
  };

  const handleGitHubLogin = () => {
    const clientId = "Ov23lixBcXI4CJ4AXjlg";
    const redirectUri = "http://localhost:3000/dashboard";
    const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;
    window.location.href = githubUrl;
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)'
    }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Login</h2>

      {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

      <div style={{ margin: '20px' }}>
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
        />
      </div>

      <button
        onClick={handleGitHubLogin}
        style={{
          backgroundColor: '#24292e',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
        onMouseOver={e => e.target.style.backgroundColor = '#444'}
        onMouseOut={e => e.target.style.backgroundColor = '#24292e'}
      >
        Login with GitHub
      </button>
    </div>
  );
};

export default Login;
