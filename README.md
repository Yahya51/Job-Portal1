# 💼 Job Portal Website

A full-stack **Job Portal Web Application** built using the MERN Stack, where job seekers can search and apply for jobs, and recruiters can post and manage job openings — all in one platform.

---

## 📂 GitHub Repository

🔗 [GitHub Repo](https://github.com/Yahya51?tab=repositories) <!-- Replace # with your repo link -->

---


---

## 📝 About the Project

This Job Portal allows two types of users — **Job Seekers** and **Recruiters** — to interact with the platform based on their role.

**Job Seekers can:**
- Sign up and log in securely
- Search and browse job openings
- Apply for jobs online
- Upload their resume to their profile

**Recruiters can:**
- Post new job openings
- Manage and edit published job posts
- View all applications received on their job posts
- Accept or reject applications
- View applicant resumes directly

---

## ✨ Key Features

- 🔐 Secure user authentication using **Clerk** (supports multiple sign-up options)
- 📄 Resume upload functionality for job seekers
- 🧑‍💼 Dedicated recruiter dashboard for job and application management
- 🔍 Job search and filtering for job seekers
- 📊 MongoDB query monitoring and optimization via Sentry
- ⚡ Fast and responsive UI built with React.js

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS / CSS

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB

**Authentication:**
- Clerk

**Monitoring & Error Tracking:**
- Sentry

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/job-portal.git
cd job-portal
```

### 2. Install dependencies

**For backend:**
```bash
cd server
npm install
```

**For frontend:**
```bash
cd client
npm install
```

### 3. Set up environment variables

Create a `.env` file in the `server` folder and add:
```
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
SENTRY_DSN=your_sentry_dsn
PORT=3000
```

Create a `.env` file in the `client` folder and add:
```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_dml0YWwtc2hlZXBkb2ctNDcuY2xlcmsuYWNjb3VudHMuZGV2JA
VITE_BACKEND_URL=http://localhost:3000
```

### 4. Run the project

**Start backend server:**
```bash
cd server
npm run dev
```

**Start frontend:**
```bash
cd client
npm run dev
```

The app should now be running at `http://localhost:5173` (or your configured port).

---

## 📁 Folder Structure

```
job-portal/
├── client/          # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/          # Node/Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── package.json
└── README.md
```

---

## 🔮 Future Improvements

- Add email notifications for application status updates
- Add advanced filtering (location, salary range, experience level)
- Add company profile pages

---

## 🙋‍♂️ Author

**Yahya Naseem**
📧 yahyanaseem056@gmail.com
🔗[GitHub](https://github.com/Yahya51) | [Linkdin](www.linkedin.com/in/yahya-naseem-892205260)

---

## ⭐ Show Your Support

If you found this project helpful, give it a ⭐ on GitHub!
