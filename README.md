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

## Usage

- **Dashboard**: View an overview of employees, recent hires, and current projects.
- **Manage Leaves**: Approve, reject, or track the status of employee leave requests.
- **Employee Profiles**: View detailed information about each employee, including contact and department information.

## API Documentation

The project relies on an API that provides data for employees, leave requests, and projects. API endpoints are defined in the `MasterService`.

### Example Endpoints

- **Get Dashboard Data**: `/api/dashboard`
- **Get Employee List**: `/api/employees`
- **Get Leave Requests**: `/api/leaves`

For detailed information, see the API documentation in the `services/master.service.ts` file.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

Please ensure your code follows the style guidelines and is well-documented.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Project Structure

```ruby
src
├── app
│   ├── components        # Core UI components
│   ├── services          # API and business logic services
│   ├── models            # Data models and interfaces
│   ├── pages             # Page components (Dashboard, Employee Management, etc.)
│   ├── app-routing.module.ts
│   └── app.component.ts
├── assets                # Static files and images
├── environments          # Environment configurations
└── main.ts               # Angular entry point


