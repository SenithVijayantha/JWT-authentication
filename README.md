# JWT Authentication Project

A full-stack authentication system built with React and Node.js, featuring JWT (JSON Web Token) for secure user authentication.

## Project Structure

```
├── frontend/           # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   └── pages/
│   └── ...
└── backend/           # Node.js backend
    ├── middleware/
    ├── models/
    ├── routes/
    └── ...
```

## Features

- User registration and login
- JWT-based authentication
- Protected routes
- User profile management
- Responsive navigation
- Secure password handling

## Technology Stack

### Frontend
- React
- Vite
- React Router
- Modern ES6+ JavaScript

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running
- Git

### Environment Variables Setup

1. In the backend directory, create a `.env` file:
```bash
# Backend .env file
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

Replace the values with your actual:
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: A secure secret key for JWT token generation
- `PORT`: The port number for the backend server (default: 3000)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SenithVijayantha/JWT-authentication.git
cd JWT-authentication
```

2. Install Backend Dependencies:
```bash
cd backend
npm install
```

3. Install Frontend Dependencies:
```bash
cd ../frontend
npm install
```

### Running the Application

1. Start the Backend Server:
```bash
cd backend
npm start
```

2. Start the Frontend Development Server:
```bash
cd frontend
npm run dev
```

The frontend application will be available at `http://localhost:5173` and the backend API at `http://localhost:3000`.

## API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected route)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

Senith Vijayantha