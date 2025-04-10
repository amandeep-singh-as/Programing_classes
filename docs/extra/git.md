---
sidebar_position: 1
---

# Introduction to Git
> April 10<sup>th</sup> 2025

## What is Git?

:::tip[Definition]
it is a distributed version control system used to track changes in code and collaborate with others. It helps developers work together without stepping on each other’s toes.
:::

In simple terms:
Imagine working on a group project where you can:
- See everyone’s changes
- Go back in time if something breaks
- Experiment without fear
That’s what Git lets you do — but for code.


## Why do we need Git?
Let’s talk about problems without Git:
- Accidentally overwriting someone else’s work.
- Losing previous versions of your project.
- Not knowing what changed, when, and why.

With Git, you get:
- 📜 A full history of your code.
- 👥 Tools for collaboration.
- 🧪 A way to experiment safely with new features or bug fixes.

:::info
Git is open source! ✅ 

> It was originally created by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds) (the creator of Linux) in 2005, and it’s released under the GNU General Public License version 2 (GPLv2).

GitHub, GitLab, Jira, AzureDevops, etc are some of the implementation built using git.
:::


## Core Concepts and Components of Git
Let’s break down Git into some **basic building blocks:**

| Concept | What it Means |
|-----------|----------------|
| **Repository** | A folder that Git is tracking. It contains your project and its history. |
| **Commit** | A snapshot of your code at a given point. Like a save point in a game. |
| **Staging Area** | A middle step where you prepare what changes will go into your next commit. |
| **Working Directory** | The current state of your project files on your computer. |
| **Remote Repo** | A version of your repo stored on a server (like GitHub). |
| **Clone** | A copy of a remote repo on your computer. |
| **Push** | Push sends your changes to a remote repo.|
| **Pull** | Pull fetches updates from it. |


🧠 **Analogy** - Imagine writing a document:
- You write something → **Working Directory**
- You highlight changes to include → **Staging Area**
- You save it with a message → **Commit**

## 🔧 Common Git Commands & Their Usage

### 🛠️ Setup & Configuration

| Command | Description |
|----------|------------|
| `git config --global user.name <"your name">` | Set your name (used in commits) |
| `git config --global user.email <"you@example.com">` | Set your email |
| `git config --list` | View all global config settings |

### 📁 Repository Management

| Command | Description |
|---------|-------------|
| `git init` | Initialize a new Git repository |
| `git clone <repo-url>` | Copy an existing remote repo to your local machine |
| `git status`| Check the current state of your working directory and staging area |
| `git log` | View commit history |
| `git diff` | Show changes not yet staged or committed |

### ✍️ Tracking & Committing Changes

| Command | Description |
|---------|-------------|
| `git add <file>` | Add file(s) to the staging area |
| `git add .` | Stage all changes in the current directory |
| `git commit -m "message"` | Commit staged changes with a message |
| `git reset <file>` | Unstage a file (but keep changes) |
| `git reset --hard` | Undo all changes and reset to the last commit |


:::warning
Using `git reset --hard` can cause you losing all your changes so use it wisely.
:::

### 🌿 Branching & Merging

| Command | Description |
|---------|-------------|
| `git branch` | List all local branches |
| `git branch <name>` | Create a new branch |
| `git checkout <name>` | Switch to a branch |
| `git checkout -b <name>` | Create and switch to a new branch |
| `git merge <branch>` | Merge the given branch into the current branch |
| `git branch -d <name>` | Delete a branch |

:::danger
Try not to use `git merge <branch>` in `main` or your deployement branch make directly and always follow pull request and review changes before hand, this may cause your application to break if changes are not correct.
:::

### 🌐 Working with Remote Repositories

| Command | Description |
|---------|-------------|
| `git remote -v` | Show linked remote repositories |
| `git remote add origin <url>` | Add a new remote repository |
| `git push origin <branch>` | Push local changes to a remote branch |
| `git pull` | Fetch and merge changes from the remote repo |
| `git fetch`| Download changes from the remote (but donâ€™t merge yet) |

### 🧼 Undo & Cleanup

| Command | Description |
|---------|-------------|
| `git checkout -- <file>` | Discard changes in a file (revert to last commit) |
| `git revert <commit>` | Create a new commit that undoes the specified commit |
| `git stash` | Temporarily save uncommitted changes |
| `git stash apply` | Reapply the stashed changes |

### 🔍 Viewing Info

| Command | Description |
|---------|-------------|
| `git show <commit>` | Show details of a specific commit |
| `git blame <file>` | See line-by-line who changed what |
| `git tag` | List tags (used for releases/versions)|

## Basic Git Workflow

```bash
# Step-by-step Git workflow
git init               # Start a new git repo
git add file.txt       # Add file to staging
git commit -m "message" # Commit the change

git remote add origin <url>  # Link to remote repo
git push origin main         # Push changes to main branch
```

## Branching – The Superpower of Git

### What is a Branch?
> A branch is a separate line of development. It lets you work on features or bug fixes **without affecting the main codebase**.

🪴 Analogy:
Imagine a tree:
- The main branch is your stable project (often called main or master).
- Each new branch is like a new stem where you can grow something new.

### Why use branches?
- To develop features independently.
- To test ideas.
- To manage releases or hotfixes.

## 🔄 Bonus: GitHub and Collaboration

With platforms like GitHub:
- You can create Pull Requests to propose code changes.
- Review code and discuss before merging.
- See project history and contributors.

## ✅ Recap
- Git tracks changes and helps you collaborate.
- You use commits to save work, branches to try things safely.
- You can push and pull from remote repositories to sync with others.
- GitHub makes team collaboration even easier.

## 🎯 Practice Time

Here are a few simple tasks for learners:
1. Initialize a Git repo in a folder.
2. Make a few changes and commit them.
3. Create and switch to a new branch.
4. Merge that branch back to main.

## 🔗 Useful links
- [Git official ebook](https://git-scm.com/book/en/v2)
- [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds)