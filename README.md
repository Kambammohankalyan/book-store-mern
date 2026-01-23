# Full Stack Book Store MERN App

A complete full-stack e-commerce application for a book store, built using the MERN stack (MongoDB, Express, React, Node.js). This application features user authentication, product management, shopping cart functionality, order processing, and an admin dashboard.

## Features

- **User Authentication**: Secure login and registration using Firebase Auth and JWT.
- **Product Management**: Browse, search, and view details of books.
- **Shopping Cart**: Add books to cart, update quantities, and remove items.
- **Checkout System**: Secure checkout process for placing orders.
- **Admin Dashboard**:
  - Manage books (Add, Edit, Delete).
  - View and manage orders.
  - Dashboard statistics (Revenue, Total Orders, Total Books, etc.).
- **Responsive Design**: Built with Tailwind CSS for a seamless experience across devices.
- **State Management**: Utilizes Redux Toolkit for efficient state management.

## Tech Stack

### Frontend

- **React**: UI library.
- **Vite**: Build tool for fast development.
- **Tailwind CSS**: Utility-first CSS framework.
- **Redux Toolkit**: State management.
- **Firebase**: Authentication.
- **React Router DOM**: Navigation.
- **SweetAlert2**: Beautiful popup alerts.
- **Chart.js**: Data visualization for the admin dashboard.

### Backend

- **Node.js**: Runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.
- **JWT (JSON Web Tokens)**: Secure authentication.
- **Bcrypt**: Password hashing.
- **Cors**: Cross-Origin Resource Sharing.

## Project Structure

```
root/
├── backend/          # Node.js/Express Backend
│   ├── src/
│   │   ├── books/    
│   │   ├── orders/   
│   │   ├── users/    
│   │   └── stats/    
│   └── index.js      
├── frontend/         # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── routers/
│   └── ...
└── ...
```

## Installation & Setup

### Prerequisites

- Node.js installed on your machine.
- MongoDB installed locally or a MongoDB Atlas account.

### 1. Backend Setup

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `backend` directory and add the following environment variables:
    ```env
    PORT=5000
    DB_URL=your_mongodb_connection_string
    JWT_SECRET_KEY=your_jwt_secret_key
    ```
4.  Start the server:
    ```bash
    npm start
    npm run start:dev
    ```

### 2. Frontend Setup

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure Firebase:
    - Create a project in [Firebase Console](https://console.firebase.google.com/).
    - Copy your Firebase configuration.
    - Update `src/firebase/firebase.config.js` with your credentials.
4.  Start the development server:
    ```bash
    npm run dev
    ```

## Usage

1.  Ensure the backend server is running on port 5000.
2.  Open the frontend application in your browser.
3.  **User**: Register/Login to browse books and place orders.
4.  **Admin**: Access the admin dashboard to manage the store.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.
