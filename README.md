# 🏠 HomeFixo – Client

**HomeFixo** is a modern home service booking platform where users can easily find and book services like plumbing, electrical work, cleaning, and more.  
It also allows service providers to manage and offer their services through a clean and responsive interface.

This repository contains the **frontend (client-side)** code of the HomeFixo application.

---

## 🌐 Live Website

🔗 https://home-fixo.netlify.app/

---

## 🚀 Features

- User authentication (Email & Password)
- Google login with Firebase
- Browse available home services
- View service details
- Book services (users cannot book their own services)
- Service provider dashboard
- Protected routes for authenticated users
- Loading spinner while fetching data
- Responsive design for all devices
- SweetAlert2 for alerts and confirmations

---

## 🧰 Tech Stack

- **React**
- **React Router DOM**
- **Tailwind CSS**
- **Firebase Authentication**
- **Context API**
- **SweetAlert2**

---

## 📁 Project Structure

src/
├── components/
├── pages/
├── context/
├── routes/
├── hooks/
├── firebase/
├── App.jsx
└── main.jsx


---

## 🔐 Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

VITE_API_BASE_URL=https://home-fixo-server.vercel.app
⚠️ Do not commit the .env file to GitHub.

▶️ Run the Client Locally
1️⃣ Clone the repository
git clone https://github.com/AmirDihan/HomeFixo-Client.git
cd HomeFixo-Client
2️⃣ Install dependencies
npm install
3️⃣ Start the development server
npm run dev
The client will run on:

http://localhost:5137
🔄 Backend Dependency
This client consumes data from the HomeFixo backend API:

🔗 https://home-fixo-server.vercel.app/

Make sure the server is running and accessible.

🛡️ Authentication & Route Protection
Authentication is handled using Firebase

User state is managed via Context API

Private routes prevent unauthorized access

Service providers cannot book their own services

🌱 Future Improvements
Service reviews & ratings

Pagination

Payment integration

Advanced filtering and search

Dark mode support

👨‍💻 Author
Amir Hossan Dihan
GitHub: https://github.com/AmirDihan

📄 License
This project is licensed under the MIT License.