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

4. **Running the SQL Script:**
- Locate the script file named `WMnagmnet.sql`.
- Run the script file in Microsoft SQL Server Management Studio (SSMS) by opening the file and executing its contents.

  ```
  npm install
  ```
- Start the client-side application in development mode.
  ```
  npm run dev
  ```

4. Once both the server-side API and client-side application are running, open your web browser and navigate to the specified URL to access WM | Workers Management.

5. **Administrator Credentials:** Log in with the following administrator credentials to access the full functionality of the application:
   - **Username:** Dan Lang
   - **Password:** 123

These steps will ensure that both the server-side and client-side of the application are up and running, allowing you to access and utilize WM | Workers Management efficiently.

## Screenshots
![image](https://github.com/RuthDikman/WMangment/assets/148651671/864a307d-b95a-441d-b1bb-85f993a8d619)
![image](https://github.com/RuthDikman/WMangment/assets/148651671/fa76e91c-8fd6-40d0-ab70-b69bf58b388b)
![image](https://github.com/RuthDikman/WMangment/assets/148651671/2bbb7a14-5d46-493b-a732-ad490c6789c2)
![image](https://github.com/RuthDikman/WMangment/assets/148651671/76d62b7d-4745-4cae-82b6-503371cecda1)
![image](https://github.com/RuthDikman/WMangment/assets/148651671/d06e3e81-17ba-41a8-9362-7ae1ac9d22dc)






## Author

- **Name:** [Ruth Dikman]
- **Email:** [rut9811@gmail.com]
- **Phone:** [053-3179811]
