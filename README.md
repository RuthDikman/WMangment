# WM | Workers Management

WM | Workers Management is an employee management interface designed to streamline the process of managing employee information within a company. This project provides a client-side interface built with React and a server-side API implemented in .NET C#.

## Features

- **Employee Listing:** Display a table of all employees in the company, including their name, ID card, date of joining the company, list of positions, administrative status for each position, and date of entry into each position.
- **Excel Export:** Download the employee table to an Excel file for easy sharing and analysis.
- **Search Filtering:** Filter the employee table by search to quickly find specific employees.
- **Administrator Access:** Authorization using JWT grants administrators additional privileges.
- **Administrative Actions:** Administrators can delete employees, edit employee details, and add new employees.
- **Dynamic Position Selection:** When adding an employee, dynamically select positions for the employee.
- **Settings Page:** View and edit administrator details, as well as add new roles.
- **Employee Entry Graph:** Graphical representation of employee entry into the system by month.

## Technologies Used

- **Client Side:**
  - React
  - JavaScript
  - HTML
  - CSS
- **Server Side:**
  - .NET C#
- **Authentication:** JWT (JSON Web Tokens)
- **Database:** [WMangment]
- **HTTP Functions:** Used for retrieving and storing data from/to the database.

## Getting Started

To get started with WM | Workers Management, follow these steps:

1. Clone the repository to your local machine.

2. **Run Server Side:**
- Navigate to the server directory.
- Run the server-side API.

3. **Run Client Side:**
- Navigate to the client directory.
- Install the necessary dependencies.

  ```
  npm install
  ```
- Start the client-side application in development mode.
  ```
  npm run dev
  ```
4. **Running the SQL Script:**
- Locate the script file named `WMnagmnet.sql`.
- Run the script file in Microsoft SQL Server Management Studio (SSMS) by opening the file and executing its contents.

5. Once both the server-side API and client-side application are running, open your web browser and navigate to the specified URL to access WM | Workers Management.

6. **Administrator Credentials:** Log in with the following administrator credentials to access the full functionality of the application:
   - **Username:** Dan Lang
   - **Password:** 123

These steps will ensure that both the server-side and client-side of the application are up and running, allowing you to access and utilize WM | Workers Management efficiently.

## Screenshots
![image](https://github.com/RuthDikman/WMangment/assets/148651671/09986c3c-e759-4a45-b87f-e0eec05ceb85)
![image](https://github.com/RuthDikman/WMangment/assets/148651671/980ca634-5f94-435f-a9a2-07adb366f232)
![image](https://github.com/RuthDikman/WMangment/assets/148651671/e4dbf7bf-4327-43d7-a748-91a80c75e544)
![image](https://github.com/RuthDikman/WMangment/assets/148651671/557527fd-c7ad-409b-84b0-4090ec69eaee)
![image](https://github.com/RuthDikman/WMangment/assets/148651671/140b511d-cf0f-4569-aa37-2ad2ff50be0f)


## Author

- **Name:** [Ruth Dikman]
- **Email:** [rut9811@gmail.com]
- **Phone:** [053-3179811]
