# Cashflow Tracker

A simple web application to track your daily expenses using React and Context API. This application allows users to add, view, and delete expenses, as well as see the total budget, remaining amount, and total spent amount. It is a basic-level application with no database integration.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Features

- Add new expenses with name and cost.
- View a list of all expenses.
- Delete expenses from the list.
- Display total budget, remaining amount, and total spent amount.
- Responsive design using Bootstrap.

## Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/muhammadmuzzamilkhan/cashflow-tracker.git
    cd cashflow-tracker
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the application**

    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. **View Total Budget**

    The total budget is displayed at the top of the page.

2. **View Remaining Amount**

    The remaining amount is calculated by subtracting the total expenses from the total budget.

3. **View Total Spent Amount**

    The total spent amount is the sum of all expenses.

4. **Add a New Expense**

    Fill in the name and cost of the expense in the "Add Expense" form and click "Save".

5. **Delete an Expense**

    Click the delete icon (a trash bin) next to the expense you want to delete.

## Components

- **App**: The main component that wraps all other components with the `AppProvider`.
- **AppContext**: Provides the context for the application, including the budget and expenses.
- **AddExpenseForm**: Form to add new expenses.
- **Budget**: Displays the total budget.
- **ExpenseItem**: Displays an individual expense item.
- **ExpenseList**: Displays a list of all expenses.
- **ExpenseTotal**: Displays the total amount spent.
- **Remaining**: Displays the remaining budget after subtracting expenses.

## Contributing

Follow the steps below to contribute to the existing work:

1. **Fork the Repository**

Fork the repository to your own GitHub account by clicking the "Fork" button at the top right corner of the repository page. This creates a copy of the repository under your GitHub account.

2. **Create a New Branch**

   Clone the forked repository to your local machine:

   ```bash
   git clone https://github.com/muhammadmuzzamilkhan/cashflow-tracker.git
   cd cashflow-tracker
   ```
   Create a new branch for your changes. Use a descriptive name for your branch to easily identify its purpose:
   ```bash
   git checkout -b feature-name
   ```
3. **Make your changes**
4. **Commit your changes**

    ```bash
    git commit -m "Description of your changes"
    ```

5. **Push to your branch**

    ```bash
    git push origin feature-name
    ```

6. **Submit a pull request**

## Credits

Created by Muhammad Muzzamil Khan

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Explore and contribute to CashFlow Tracker to enhance its functionality. If you have questions or suggestions, please open an issue or contact khanmuhammadmuzzamil500@gmail.com
