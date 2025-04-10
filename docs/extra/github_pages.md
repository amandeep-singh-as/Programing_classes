---
sidebar_position: 1
---

# Introduction to GitHub Pages
> April 10<sup>th</sup> 2025

## What is GitHub Pages?
> GitHub Pages is a free hosting service by GitHub that lets you publish **static websites** directly from a repository.

It’s ideal for:
- Portfolios
- Project documentation
- Personal blogs
- Demos of web apps

:::note[Static vs Dynamic Websites]
### 🧱 Static Website

A static website is made up of fixed content — usually written in HTML, CSS, and JavaScript — that doesn’t change unless you manually edit the code.

🔹 Key Traits:
- Every user sees the same content.
- Faster to load.
- Easier to host (like on GitHub Pages).
- Examples: Portfolios, resumes, documentation, landing pages.

### ⚙️ Dynamic Website

A dynamic website generates content on the fly, often using a server-side language (like PHP, Python, Node.js) and a database.

🔹 Key Traits:
- Content can change based on user interaction or data.
- Used for blogs, social media, e-commerce, etc.
- Often needs a backend server and database.
- Examples: Facebook, Amazon, WordPress sites.
:::

### Why Use GitHub Pages?
- Free hosting for public projects.
- Easy to update through Git pushes.
- Works with HTML, CSS, JS, and static site generators (like Jekyll).
- Built-in integration with your GitHub workflow.


:::info[Fun Fact]
This webiste is hosted on GitHub Pages.
:::


### How It Works (High-Level Overview)
1. You write your website using HTML/CSS (or frameworks).
2. You push the files to a specific GitHub repository.
3. GitHub Pages takes those files and serves them as a website.

### Behind the Scenes
- Uses Jekyll (a static site generator) by default, but you can use plain HTML/CSS too.
- Deploys whenever you push changes to the configured branch.



## 🛠️ How-to Guide: Deploy a Site with GitHub Pages

### Option 1: Personal or Organization Website (username.github.io)

Step-by-Step:
1. Create a new repository
    - Name it your-username.github.io
	- Keep it public
	- Initialize with a README.md (optional)
2. Add your website files
    - Create an index.html in the root of the repo
3. Push your code
    - Either upload manually or use Git:
    ```bash
    git clone https://github.com/your-username/your-username.github.io
    cd your-username.github.io 
    # Add your HTML/CSS files
    git add .
    git commit -m "Add my website"
    git push origin main
    ```
4.	Visit your site
    - Go to https://your-username.github.io


### Option 2: Project Website (hosted from a branch or folder)

Step-by-Step:
1.	Create or use an existing project repo
2.	Add a folder with your site files (e.g., in a /docs folder)
3.	Go to repo Settings > Pages
    - Select source: main branch and /docs folder (or use a gh-pages branch)
	- Save
4.	GitHub builds your site
	- After a few seconds, your site will be live at:  https://your-username.github.io/repo-name/



## ✅ Recap
- GitHub Pages is perfect for static websites.
- Personal sites go in username.github.io, project sites can be hosted from any repo.
- Just push your HTML/CSS and let GitHub do the rest.
- It’s fast, free, and super Git-friendly.


## 🎯 Practice Time

Here are a few simple tasks for learners:
1. Initialize a Git repo.
2. Make a few changes HTML pages.
3. Publish using github pages.

## 🔗 Useful links
- [GitHub Pages Documentation](https://pages.github.com/)