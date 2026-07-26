# Express + MongoDB Backend (generated)

Files created under `server/src/`:
- config/db.js
- models/User.js
- models/Product.js
- middleware/auth.js
- routes/auth.js
- routes/users.js
- routes/products.js

Updated:
- server.js
- package.json

## Quick start

1. From `my-app/server` run:
   ```bash
   npm install
   cp .env.example .env
   # edit .env to set MONGODB_URI and JWT_SECRET
   npm run dev
   ```

2. Environment variables (`.env`):
   ```
   MONGODB_URI=mongodb://localhost:27017/myapp
   JWT_SECRET=your_jwt_secret_here
   NODE_ENV=development
   PORT=5000
   ```

3. API endpoints:
- POST /api/auth/register  {name,email,password}
- POST /api/auth/login     {email,password}
- GET  /api/users/me       (requires Authorization: Bearer <token>)
- GET  /api/products
- POST /api/products       (requires auth)
- GET  /api/products/:id
- PUT  /api/products/:id   (owner only)
- DELETE /api/products/:id (owner only)

Feel free to tell me if you want additional models (orders, categories) or file-upload support.
