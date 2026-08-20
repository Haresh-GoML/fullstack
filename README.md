# My Blog

A modern and responsive blog website built with **Next.js**, **TypeScript**, and the **App Router**.

This project demonstrates how to build a simple production-ready blog using a local JSON data source, dynamic routes, reusable components, shared layouts, and Vercel deployment.

---

## Live Demo

**Live Website:**
`https://your-project.vercel.app`

---

##  About the Project

My Blog is a simple blog application built to understand the fundamentals of modern Next.js development.

The application uses a local `posts.json` file as the data source. Blog posts are displayed on the home page, and each post can be accessed through a dynamic URL based on its unique slug.

### Example

```text
/posts/getting-started-with-nextjs
/posts/understanding-static-generation
/posts/dynamic-routes-in-nextjs
```

---

##  Features

*  Blog post listing
*  Individual blog post pages
*  Dynamic routes using `[slug]`
*  Local JSON data source
*  Reusable navigation component
*  Shared layout using `layout.tsx`
*  Responsive design
*  Next.js App Router
*  TypeScript
*  Custom CSS
*  Production deployment with Vercel
*  HTTPS through Vercel

---

##  Technologies Used

| Technology | Purpose                       |
| ---------- | ----------------------------- |
| Next.js    | React framework               |
| React      | UI development                |
| TypeScript | Type-safe development         |
| CSS        | Styling and responsive design |
| JSON       | Local blog data               |
| Git        | Version control               |
| GitHub     | Source code hosting           |
| Vercel     | Deployment and hosting        |

---

##  Project Structure

```text
my-blog/
│
├── app/
│   ├── posts/
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   └── Nav.tsx
│
├── data/
│   └── posts.json
│
├── public/
│
├── .gitignore
├── next.config.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

---

##  How the Application Works

The application has three main parts:

```text
posts.json
    ↓
app/page.tsx
    ↓
Blog Post List
    ↓
User clicks "Read Article"
    ↓
/posts/[slug]
    ↓
Individual Blog Post
```

---

#  Blog Data

Blog posts are stored inside:

```text
data/posts.json
```

Example:

```json
[
  {
    "slug": "getting-started-with-nextjs",
    "title": "Getting Started with Next.js",
    "excerpt": "Learn the basics of building modern web applications with Next.js.",
    "content": "Next.js is a React framework for building fast and scalable web applications.",
    "author": "Haresh",
    "date": "2026-08-20"
  }
]
```

Each post contains:

* `slug` — unique URL identifier
* `title` — blog title
* `excerpt` — short description
* `content` — complete article content
* `author` — post author
* `date` — publication date

---

#  Home Page

The home page is located at:

```text
app/page.tsx
```

It imports the blog data:

```tsx
import posts from "@/data/posts.json";
```

The `posts.map()` function loops through all posts and creates a card for each one.

```text
posts.json
    ↓
posts.map()
    ↓
Post Card
    ↓
Post Card
    ↓
Post Card
```

Each card contains:

* Title
* Excerpt
* Author
* Date
* Read Article link

---

#  Dynamic Routes

Individual blog posts use Next.js dynamic routing.

The route is:

```text
app/posts/[slug]/page.tsx
```

The `[slug]` folder represents a dynamic URL segment.

For example:

```text
/posts/getting-started-with-nextjs
```

Next.js interprets:

```text
[slug] = getting-started-with-nextjs
```

The page then searches `posts.json` for a matching slug.

```text
URL
 ↓
slug
 ↓
posts.find()
 ↓
Matching post
 ↓
Render article
```

This allows one page component to handle multiple blog posts.

Instead of creating:

```text
app/posts/post1/page.tsx
app/posts/post2/page.tsx
app/posts/post3/page.tsx
```

we use:

```text
app/posts/[slug]/page.tsx
```

for all posts.

---

#  Shared Layout

The shared layout is:

```text
app/layout.tsx
```

The layout contains the common structure of the application.

The navigation component is included inside the layout:

```text
layout.tsx
    │
    ├── Nav.tsx
    │
    └── {children}
```

`{children}` represents the current page.

For example:

```text
/
```

renders:

```text
Nav
 +
Home Page
```

While:

```text
/posts/getting-started-with-nextjs
```

renders:

```text
Nav
 +
Blog Post Page
```

This prevents us from duplicating the navigation code on every page.

---

#  Navigation

The navigation component is located at:

```text
components/Nav.tsx
```

It uses Next.js `Link` for navigation.

Example:

```tsx
<Link href="/">Home</Link>
```

The navigation is shared across the entire application through `layout.tsx`.

---

#  Styling

Global styling is located at:

```text
app/globals.css
```

The stylesheet contains:

* Global styles
* Navigation styles
* Blog card styles
* Layout styles
* Responsive styles
* Mobile breakpoints

The blog layout uses CSS Grid for displaying posts.

Desktop:

```text
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│   Post 1    │ │   Post 2    │ │   Post 3    │
└─────────────┘ └─────────────┘ └─────────────┘
```

Mobile:

```text
┌─────────────┐
│   Post 1    │
└─────────────┘

┌─────────────┐
│   Post 2    │
└─────────────┘

┌─────────────┐
│   Post 3    │
└─────────────┘
```

---

# ⚙️ Getting Started

## 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

Move into the project:

```bash
cd my-blog
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Start Development Server

```bash
npm run dev
```

The development server will start at:

```text
http://localhost:3000
```

Open the URL in your browser.

---

#  Production Build

Before deployment, create a production build:

```bash
npm run build
```

If the build succeeds, start the production server:

```bash
npm start
```

The production application will run at:

```text
http://localhost:3000
```

---

#  Deployment

This project can be deployed using **Vercel**.

Deployment workflow:

```text
Local Development
       ↓
      Git
       ↓
    GitHub
       ↓
     Vercel
       ↓
Production Build
       ↓
Live HTTPS Website
```

## Deploying with Vercel

1. Push the project to GitHub.
2. Sign in to Vercel.
3. Import the GitHub repository.
4. Select the Next.js project.
5. Keep the default Next.js settings.
6. Click **Deploy**.
7. Vercel builds and deploys the application.

After deployment, Vercel provides a live HTTPS URL.

Example:

```text
https://my-blog-example.vercel.app
```

---

#  Updating the Website

After making changes locally:

```bash
git add .
```

Commit the changes:

```bash
git commit -m "Update blog"
```

Push to GitHub:

```bash
git push
```

If the GitHub repository is connected to Vercel, Vercel automatically creates a new deployment.

```text
Code Change
    ↓
git push
    ↓
GitHub
    ↓
Vercel
    ↓
Automatic Deployment
```

---

#  Next.js Concepts Demonstrated

This project demonstrates several important Next.js concepts:

### App Router

```text
app/
```

The project uses the modern Next.js App Router.

### Server Components

The pages are implemented as server components by default.

### Static Generation

The home page reads local data and can be statically generated during the build process.

### Dynamic Routing

```text
app/posts/[slug]/page.tsx
```

is used to create dynamic blog pages.

### Layouts

```text
app/layout.tsx
```

provides shared UI across pages.

### Navigation

```tsx
import Link from "next/link";
```

provides client-side navigation between pages.

---

#  Future Improvements

Possible improvements for future versions:

* Add a Markdown-based blog system
* Add categories and tags
* Add search functionality
* Add pagination
* Add a database
* Add a CMS
* Add SEO metadata for individual posts
* Add Open Graph images
* Add sitemap generation
* Add RSS feed
* Add dark mode
* Add comments
* Add authentication for an admin dashboard
* Add an API for blog posts

---

#  Author

**Haresh**

Built with Next.js and TypeScript as a hands-on full-stack web development project.

---

##  License

This project is for learning and personal development purposes.
