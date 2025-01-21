# Chitchat-Application

## 🚀 Overview
Chitchat is a real-time chatting application designed to enable seamless communication between users. Key highlights include:
- Real-time messaging powered by asynchronous WebSocket connections.
- Backend powered by Django, frontend developed with React, and database management using MySQL.

## 🔧 Features
- **Real-time Chat**: Users can send and receive messages instantly.
- **User Authentication**: Secure login and registration with JWT authentication.
- **Responsive Design**: Accessible and user-friendly on both desktop and mobile devices.

## 🔋 Technologies Used
- **Frontend**: React, Tailwind CSS
- **Backend**: Django Rest Framework (DRF), WebSocket
- **Database**: MySQL

## 📂 Folder Structure
```
chitchat-application/
├── README.md
├── chatMain/
│   ├── manage.py
│   ├── chatMain/
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   ├── __pycache__/
│   │   └── api/
│   │       ├── urls.py
│   │       └── __pycache__/
│   └── usersApp/
│       ├── __init__.py
│       ├── admin.py
│       ├── apps.py
│       ├── models.py
│       ├── tests.py
│       ├── views.py
│       ├── __pycache__/
│       ├── api/
│       │   ├── Serializer.py
│       │   ├── urls.py
│       │   ├── views.py
│       │   └── __pycache__/
│       └── migrations/
│           ├── 0001_initial.py
│           ├── 0002_note.py
│           ├── __init__.py
│           └── __pycache__/
└── reactFrontEnd/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vite.config.js
    ├── .env
    ├── .gitignore
    ├── public/
    └── src/
        ├── App.css
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── Pages/
        │   ├── About.jsx
        │   ├── Contact.css
        │   ├── Contact.jsx
        │   ├── Login.css
        │   ├── Login.jsx
        │   ├── Profile.css
        │   ├── Profile.jsx
        │   ├── Register.css
        │   └── Register.jsx
        ├── Userdata/
        │   └── Userdata.js
        └── components/
            ├── Chat.css
            ├── Chat.jsx
            ├── Footer.jsx
            ├── Header.css
            ├── Header.jsx
            └── Userlist.jsx
```

## 📅 Daily Updates
#### **Day 1 (21/1/2025)**
##### Owner: **Kapil**
**Role**: Backend Developer

**⚖️ Work Commit:**
1. Implemented JWT authentication.

**🔧 Still Working On:**
1. Enhancing authentication and authorization mechanisms.

---

## ✨ pending Tasks 
- [ ] Improve View Profile UI
- [ ] Improve Chat interface UI
- [ ] Improve User list UI
- [ ] Improve Reset password UI
- [ ] Improve Sign up/register UI
- [ ] Improve Login UI
- [ ] Improve Theme
- [ ] Implement group chat functionality.
- [ ] Add typing indicators for real-time feedback.
- [ ] Optimize WebSocket handling for scalability.

## 🔍 How to Contribute
1. Fork the repository and create a new branch:
   ```bash
   git checkout -b feature-name
   ```
2. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
3. Push your branch and create a pull request.

---

## 🖖 Acknowledgments
Special thanks to all contributors for their hard work and dedication to this project.


