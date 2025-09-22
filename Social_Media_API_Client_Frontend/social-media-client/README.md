Social Media API Client Application
Project Overview

This project is a Social Media API Client built using React. It allows users to register and login using social media accounts (Google & GitHub), and once logged in, users can perform CRUD operations on a REST API. The app also includes basic authentication, authorization, and error handling.

Project Features

Social Media Login: Users can login using their Google or GitHub accounts.

CRUD Operations: Perform Create, Read, Update, and Delete operations on posts.

Authentication & Authorization: Only authenticated users can access the dashboard and CRUD pages.

Responsive Design: The app is responsive, ensuring a great user experience across all screen sizes.

Error Handling & Feedback: Proper error messages are shown when something goes wrong.

Tech Stack

Frontend: React, React Router DOM, Axios

Authentication: Google OAuth, GitHub OAuth

API: JSONPlaceholder (https://jsonplaceholder.typicode.com
) for demo CRUD operations

Styling: Inline CSS with basic color and layout adjustments

Installation
1. Clone the repository

First, clone the repository to your local machine.

git clone https://github.com/yourusername/social-media-api-client.git
cd social-media-api-client

2. Install dependencies

Make sure you have Node.js installed. Then, run:

npm install


This will install all the necessary dependencies.

Setup Social Media OAuth

Before starting the app, you’ll need to set up OAuth credentials for Google and GitHub.

Google OAuth

Go to Google Developer Console
.

Create a project and generate OAuth 2.0 credentials.

Add the Client ID and Client Secret to your .env file (see below).

GitHub OAuth

Go to GitHub Developer Settings
.

Register a new OAuth App and get the Client ID and Client Secret.

Add them to your .env file.

Create a .env file in the root of your project with the following:

REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_GITHUB_CLIENT_ID=your_github_client_id
REACT_APP_GITHUB_CLIENT_SECRET=your_github_client_secret

Running the App

To run the app locally, use:

npm start


The app will be available at http://localhost:3000
.

App Workflow
1. Login Page

The user is greeted with login options for Google and GitHub.

Upon successful login, the user is redirected to the Dashboard.

2. Dashboard Page

Once logged in, the user can view and manage posts.

Users can Create, Read, Update, and Delete posts (CRUD operations).

3. CRUD Operations

Create: Allows users to add new posts by providing a title.

Read: Displays the first 10 posts from the API.

Update: Users can change the title of a post.

Delete: Users can remove a post from the list.

4. Route Protection

Users must be logged in to access the Dashboard and CRUD pages.

If a user is not logged in and tries to access these pages directly, they are redirected to the Login page.

5. Logout

Clicking the Logout button will remove the authentication token from localStorage and redirect the user to the Login page.

Testing the Application
Manual Testing

You can manually test the app by:

Login with Google or GitHub: Verify you can login successfully.

CRUD Operations: Create, Read, Update, and Delete posts.

Route Protection: Try to access /dashboard and /api-crud when logged out.

Responsive Design: Test the app in different screen sizes using the browser’s Developer Tools.

Error Handling

Network Errors: Disconnect the internet and try performing CRUD operations. You should see appropriate error messages.

Route Protection Errors: Try to access the Dashboard without logging in. The user should be redirected to the Login page.

Features Implemented
Part 1: UI Design and Implementation

React framework used for the front-end.

Designed and implemented UI components for Social Media Login and API CRUD operations.

Implemented UI Routing using React Router DOM for navigating between components.

Ensured the UI is responsive for mobile and desktop screens.

Part 2: Integration with Social Media Login and API Functionality

Integrated Google OAuth and GitHub OAuth for user authentication.

Integrated the app with JSONPlaceholder API to perform CRUD operations (Create, Read, Update, Delete).

Implemented authentication and authorization to restrict access to the API and certain pages.

Part 3: Additional Requirements

Error Handling and Feedback: Added proper error messages for network failures.

Security: Ensured that the app is secure by handling localStorage tokens properly and protecting routes.

Testing: Manually tested the application for all functionalities (login, CRUD, responsive design).

Future Enhancements

Implement real API endpoints for CRUD operations instead of JSONPlaceholder.

Add additional social login options like Facebook or Twitter.

Add unit and integration tests using Jest or Cypress for automated testing.

Improve UI with a custom design or use a UI library like Material-UI.

Conclusion

This project demonstrates a complete, functional React app that integrates with social media authentication and APIs to manage data, providing a seamless user experience.Social Media API Client Application
Project Overview

This project is a Social Media API Client built using React. It allows users to register and login using social media accounts (Google & GitHub), and once logged in, users can perform CRUD operations on a REST API. The app also includes basic authentication, authorization, and error handling.

Project Features

Social Media Login: Users can login using their Google or GitHub accounts.

CRUD Operations: Perform Create, Read, Update, and Delete operations on posts.

Authentication & Authorization: Only authenticated users can access the dashboard and CRUD pages.

Responsive Design: The app is responsive, ensuring a great user experience across all screen sizes.

Error Handling & Feedback: Proper error messages are shown when something goes wrong.

Tech Stack

Frontend: React, React Router DOM, Axios

Authentication: Google OAuth, GitHub OAuth

API: JSONPlaceholder (https://jsonplaceholder.typicode.com
) for demo CRUD operations

Styling: Inline CSS with basic color and layout adjustments

Installation
1. Clone the repository

First, clone the repository to your local machine.

git clone https://github.com/yourusername/social-media-api-client.git
cd social-media-api-client

2. Install dependencies

Make sure you have Node.js installed. Then, run:

npm install


This will install all the necessary dependencies.

Setup Social Media OAuth

Before starting the app, you’ll need to set up OAuth credentials for Google and GitHub.

Google OAuth

Go to Google Developer Console
.

Create a project and generate OAuth 2.0 credentials.

Add the Client ID and Client Secret to your .env file (see below).

GitHub OAuth

Go to GitHub Developer Settings
.

Register a new OAuth App and get the Client ID and Client Secret.

Add them to your .env file.

Create a .env file in the root of your project with the following:

REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_GITHUB_CLIENT_ID=your_github_client_id
REACT_APP_GITHUB_CLIENT_SECRET=your_github_client_secret

Running the App

To run the app locally, use:

npm start


The app will be available at http://localhost:3000
.

App Workflow
1. Login Page

The user is greeted with login options for Google and GitHub.

Upon successful login, the user is redirected to the Dashboard.

2. Dashboard Page

Once logged in, the user can view and manage posts.

Users can Create, Read, Update, and Delete posts (CRUD operations).

3. CRUD Operations

Create: Allows users to add new posts by providing a title.

Read: Displays the first 10 posts from the API.

Update: Users can change the title of a post.

Delete: Users can remove a post from the list.

4. Route Protection

Users must be logged in to access the Dashboard and CRUD pages.

If a user is not logged in and tries to access these pages directly, they are redirected to the Login page.

5. Logout

Clicking the Logout button will remove the authentication token from localStorage and redirect the user to the Login page.

Testing the Application
Manual Testing

You can manually test the app by:

Login with Google or GitHub: Verify you can login successfully.

CRUD Operations: Create, Read, Update, and Delete posts.

Route Protection: Try to access /dashboard and /api-crud when logged out.

Responsive Design: Test the app in different screen sizes using the browser’s Developer Tools.

Error Handling

Network Errors: Disconnect the internet and try performing CRUD operations. You should see appropriate error messages.

Route Protection Errors: Try to access the Dashboard without logging in. The user should be redirected to the Login page.

Features Implemented
Part 1: UI Design and Implementation

React framework used for the front-end.

Designed and implemented UI components for Social Media Login and API CRUD operations.

Implemented UI Routing using React Router DOM for navigating between components.

Ensured the UI is responsive for mobile and desktop screens.

Part 2: Integration with Social Media Login and API Functionality

Integrated Google OAuth and GitHub OAuth for user authentication.

Integrated the app with JSONPlaceholder API to perform CRUD operations (Create, Read, Update, Delete).

Implemented authentication and authorization to restrict access to the API and certain pages.

Part 3: Additional Requirements

Error Handling and Feedback: Added proper error messages for network failures.

Security: Ensured that the app is secure by handling localStorage tokens properly and protecting routes.

Testing: Manually tested the application for all functionalities (login, CRUD, responsive design).

Future Enhancements

Implement real API endpoints for CRUD operations instead of JSONPlaceholder.

Add additional social login options like Facebook or Twitter.

Add unit and integration tests using Jest or Cypress for automated testing.

Improve UI with a custom design or use a UI library like Material-UI.

Conclusion

This project demonstrates a complete, functional React app that integrates with social media authentication and APIs to manage data, providing a seamless user experience.