# Employee Management System

![Employee Management System](https://img.shields.io/badge/Angular-16-blue) ![Status](https://img.shields.io/badge/Status-Active-green) ![License](https://img.shields.io/badge/License-MIT-orange)

An Employee Management System built with Angular, providing tools for managing employee data, leave requests, and projects. The app is designed to be user-friendly, with features to streamline HR management, record-keeping, and reporting.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Employee Dashboard**: Overview of employee statistics and recent activity.
- **Leave Management**: Track leave requests, including types, status, and totals.
- **Project Management**: Display and track recent projects and employees involved.
- **Responsive UI**: Optimized for both desktop and mobile views.
- **Real-time Updates**: Dynamic data binding with Angular’s reactivity features.
- **Secure Access**: Authentication for managing data (future enhancement).

## Screenshots

![Dashboard](images/dashboard-screenshot.png)
*Example of the dashboard overview screen.*

## Installation

1. **Clone the repository**
   
   ```bash
   git clone https://github.com/AminRsh/Employee-Management.git
   cd Employee-Management

3. **Install dependencies** Ensure you have Node.js installed, then run:
   
   ```bash
   npm install

4. **Set up environment variables**Configure your API endpoints in environment.ts and environment.prod.ts:
   
   ```bash
   export const environment = {
   production: false,
   apiUrl: 'https://your-api-url.com/api'
   };

5. **Run the application** Start the Angular server:
   
   ```bash
   ng serve

   
  Visit http://localhost:4209 to view the app in your browser.
   
  
