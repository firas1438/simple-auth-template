## Simple Auth Template

A simple and extensible authentication template built with **Next.js**, **NextAuth.js**, and **MongoDB**. Includes sign-in and sign-up functionality with a clean layout.

## Tech Stack

| Category        | Technology                                                                 |
|-----------------|----------------------------------------------------------------------------|
| Framework       | [Next.js](https://nextjs.org/)                                             |
| Authentication  | [NextAuth.js](https://next-auth.js.org/)                                   |
| Database        | [MongoDB](https://www.mongodb.com/)                                        |
| ODM             | [Mongoose](https://mongoosejs.com/)                                        |
| Hashing         | [bcryptjs](https://www.npmjs.com/package/bcryptjs)                         |
| Validation      | [Zod](https://zod.dev/)                                                    |

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/firas1438/simple-auth-template.git
cd simple-auth-template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables
Create a .env file in the root and add:
```bash
MONGODB_URI=your_mongodb_uri
AUTH_SECRET=your_auth_secret
```
You can generate a secure secret [here](https://generate-secret.vercel.app/32)

### 4. Run the development server
```bash
npm run dev
```

## Notes
- This project is intended as a starter template, you can customize and expand it as needed.
- Add **rate-limiting** or **captcha** to protect your auth endpoints.
- Be sure to keep your secrets secure by using environment variables (`.env`), and never commit sensitive credentials to Git.
- You can deploy this project to **[Vercel](https://vercel.com/)** with one click and it will run smoothly without any extra setup.
