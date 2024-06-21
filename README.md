# Cashflow Tracker

A simple web application to track your daily expenses using React and Context API. This application allows users to add, view, and delete expenses, as well as see the total budget, remaining amount, and total spent amount. It is a basic-level application with no database integration.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Contributing](#contributing)
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

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
