# 📘 Full Stack Blog System (React + Express + MongoDB)

A fully functional blog platform with authentication, blog CRUD, comments, image upload, admin panel, and modern API architecture.

## 🚀 Features
### 🔐 Authentication
- User Register  
- User Login  
- JWT-based authentication  
- Protected admin routes  

### 📝 Blog Management
- Create, edit, delete blogs  
- Image upload  
- Categories  
- Pagination  

### 💬 Comments System
- Add comments  
- Delete your comments  
- View comments on blog page  

### 🧑‍💻 Admin Panel
- Add Blog  
- List Blogs  
- Manage Comments  

### 🌐 Frontend
- React + Vite  
- React Router  
- API integrated  
- Blog list + detail pages  

---

# ⚙ Installation & Setup

## 1. Backend Setup

```
cd server
npm install
```

Create `.env`:

```
MONGODB_URI=mongodb://localhost:27017/myblogdb
JWT_SECRET=your_secret_key
PORT=5000
```

Run backend:

```
npm run dev
```

(Optional) Seed the DB:

```
node seed.js
```

---

## 2. Frontend Setup

```
cd my-app
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

# 🔗 REST API Endpoints

## Auth
POST /api/auth/register  
POST /api/auth/login  

## Users
GET /api/users/me  

## Blogs
GET /api/blogs  
GET /api/blogs/:id  
POST /api/blogs  
PUT /api/blogs/:id  
DELETE /api/blogs/:id  

## Comments
GET /api/comments/:blogId  
POST /api/comments/:blogId  
DELETE /api/comments/:id  

---

# 📦 Image Upload

Uploaded to:

```
server/uploads/
```

---

# 🧪 Testing Checklist

- Register/Login ✔  
- Add Blog ✔  
- List Blogs ✔  
- Blog Detail ✔  
- Add Comment ✔  
- Delete Comment ✔  
- Image Upload ✔  

---

# 🚀 Build For Production

Frontend:
```
npm run build
```

Backend:
```
npm start
```

---

# 🏁 Conclusion

Your full stack blog system is ready.  
If you need deployment help, UI upgrades, or admin dashboard enhancements—just ask!
