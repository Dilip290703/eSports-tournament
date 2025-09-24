# 🎮 Esports Tournament Management System (React + Node.js)

This project is a **web-based Esports Tournament Registration &
Management System** built with **React** for the frontend and
**Node.js/Express** for the backend. It allows players, teams, and
organizers to participate in and manage esports tournaments. It supports
popular games like BGMI, Clash of Clans, Free Fire, and Valorant, with
modules for registration, payments, schedules, and results.

------------------------------------------------------------------------

## 📂 Project Structure

    esports-frontend/         # React frontend
    │-- public/               # Static files
    │-- src/
    │   ├── components/       # Reusable UI components (buttons, forms, cards)
    │   ├── pages/            # Pages (Home, Registration, Dashboard, Leaderboard)
    │   ├── services/         # API calls using Axios
    │   └── App.jsx           

    esports-backend/         # Node.js + Express backend
    │-- controllers/          # Handle API logic
    │-- routes/               # Express routes (auth, teams, tournaments, matches)
    │-- models/               # Database models (using Sequelize or Prisma)
    │-- middleware/           # Authentication (JWT)
    │-- config/               # DB connection and environment variables
    │-- server.js             # Entry point

------------------------------------------------------------------------

## 🌟 Features

-   📝 **User & Team Registration** -- Players and teams can sign up for
    tournaments.
-   💳 **Payment Integration** -- Secure payment handling via
    third-party APIs.
-   📜 **Rules & Regulations** -- Game-wise rules and eligibility
    guidelines.
-   📅 **Match Scheduling** -- Automated notifications and schedule
    updates.
-   🏆 **Leaderboard & Rankings** -- Displays top teams and players.
-   📡 **Live Updates** -- Real-time scores, stats, and optional
    streaming integration.
-   👥 **Community Building** -- Platform for gamers to connect and
    compete.
-   📩 **Email Notifications** -- Confirmation emails and alerts using
    NodeMailer.

------------------------------------------------------------------------

## 🛠 Tech Stack

-   **Frontend:** React, TailwindCSS, Axios, React Router
-   **Backend:** Node.js, Express.js
-   **Database:** MySQL (with Sequelize or Prisma ORM)
-   **Authentication:** JWT
-   **Email Service:** NodeMailer
-   **Tools:** VS Code, Git

------------------------------------------------------------------------

## ⚡ Installation & Setup

### 1️⃣ Backend Setup

1.  Clone the repository:

``` bash
git clone https://github.com/your-username/eSports-tournament.git
cd eSports-tournament/esports-backend
```

2.  Install dependencies:

``` bash
npm install
```

3.  Create a `.env` file and configure:

```{=html}
<!-- -->
```
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=
    DB_NAME=esports_db
    JWT_SECRET=your_jwt_secret
    PORT=5000

4.  Import the MySQL database:

``` bash
mysql -u root -p
CREATE DATABASE esports_db;
SOURCE docs/db_register.sql;
```

5.  Start backend server:

``` bash
npm run dev
```

------------------------------------------------------------------------

### 2️⃣ Frontend Setup

1.  Navigate to frontend:

``` bash
cd ../esports-frontend
```

2.  Install dependencies:

``` bash
npm install
```

3.  Start React development server:

``` bash
npm run dev
```

4.  Open in browser:

```{=html}
<!-- -->
```
    http://localhost:5173

------------------------------------------------------------------------

## 📸 Screenshots

*Frontend pages now use React components with dynamic API data.*

-   **Homepage / Dashboard**
-   **Registration Forms**
-   **Payment Page**
-   **Match Schedules & Leaderboard**



------------------------------------------------------------------------

## 📂 Database

The project uses MySQL with the following main tables:
- `bgmi_register` -- BGMI player/team registration
- `coc_register` -- Clash of Clans registration
- `free_register` -- Free Fire registration
- `valo_register` -- Valorant registration
- `tbl_register` -- Generic registration table


------------------------------------------------------------------------

## 👩‍💻 Contributors

-   Dilip Choudhary
-   Lalit Yelane
-   Shreyas Barawkar

------------------------------------------------------------------------

## 📜 License

This project is for educational purposes only. Not intended for
commercial or clinical use.
