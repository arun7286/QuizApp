# Quiz App in React.js

This is a simple and interactive quiz application built using **React.js**. The app allows users to answer multiple-choice questions, and tracks their score as they progress. It also includes features like disabling the "Next" button when no option is selected and displaying the score at the end of the quiz.

## Features

- **Multiple Choice Questions**: The app displays a series of multiple-choice questions with options to select from.
- **Disabling Next Button**: If the user doesn't select an option, the "Next" button remains disabled, preventing the user from moving to the next question until they select an answer.
- **Score Tracking**: The app keeps track of the user's score as they progress through the quiz.
- **Quiz Completion**: Once all the questions are answered, the app displays the user's score along with a completion message.

## Demo

You can view a live demo of the quiz app here: [Insert Demo Link]

## Installation

To run the quiz app locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/arun7286/quiz-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd quiz-app
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the application**:

   ```bash
   npm start
   ```

   This will launch the app in your default browser at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **JavaScript**: The core programming language used to create the app's logic.
- **CSS**: For styling the app and making it visually appealing.

## Features in Development

- Timer: Add a timer for each question to increase difficulty.
- High Scores: Allow users to view high scores or compete with others.
- Question Categories: Add different categories for the quiz questions.
- Difficulty Levels: Allow users to choose the difficulty of the questions.

## How It Works

- The questions and options are stored in a separate `data.js` file as an array of objects.
- The user navigates through the questions, selecting answers.
- The "Next" button is disabled until the user selects an option.
- The app calculates the score and displays it at the end of the quiz.

## Contribution

Feel free to fork the repository and contribute to the project by submitting pull requests. If you'd like to report an issue, please open an issue on the GitHub repository page.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
