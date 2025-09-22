# Social Media API Client

## Overview
The **Social Media API Client** is a React-based front-end application that allows users to log in using **Google or GitHub OAuth** and perform **CRUD operations** on an API. This project demonstrates:

- Social media authentication
- Token-based authorization
- API integration using Axios
- Responsive and user-friendly UI
- Error handling and route protection

## Features
- **Login & Registration**: Authenticate using Google or GitHub accounts.
- **Dashboard**: Displays a welcome message and navigation buttons.
- **CRUD Operations**: Create, Read, Update, and Delete items via API.
- **Logout**: Clear token and redirect to login.
- **Responsive Design**: Works on desktop and mobile devices.

## Tech Stack
- **Frontend**: React.js
- **Routing**: React Router DOM
- **HTTP Requests**: Axios
- **Authentication**: Google OAuth, GitHub OAuth
- **API**: JSONPlaceholder (demo API)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/JPretz/sweng861-2025-FALL-SocialMedialAPI_client_Frontend.git

Navigate to the project folder:

cd social-media-client


Install dependencies:

npm install


Start the development server:

npm start


Open your browser at http://localhost:3000

Screenshots

Place screenshots of the Login page, Dashboard, and CRUD operations here.

Project Structure
social-media-client/
│
├── public/
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Dashboard.js
│   │   └── ApiCrud.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md

Notes

Tokens are stored in localStorage for demonstration purposes.

For production, ensure HTTPS and proper backend token validation.
