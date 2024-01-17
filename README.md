# React quiz

This is a small interactive quiz built with the React JavaScript library.

### Prerequisites
- [Node.js](https://nodejs.org/) (version v21.x.x)
- [npm](https://www.npmjs.com/) (version 10.x.x)

## Installation

**Note:** In this installation guide, we are using a project folder named "react-quiz". You can choose your own folder name but in that case you need to change "homepage" value in package.json file.

To download and run the application on your local machine, follow these steps:

1. Open a terminal in your local development environment folder (usually named `htdocs` if using XAMPP or MAMP, etc.).
2. Clone the repository by running the following command in the terminal: 
`git clone [projects_repository] react-quiz`
Replace `[projects_repository]` with the HTTPS URL or SSH key of this repository. The "react-quiz" after the repository URL creates a folder named "react-quiz" and clones the repository into that folder.
3. After the clone is complete, navigate to the "react-quiz" folder and run the following command to install packages:
`npm install`

### Running the application
You can run the application with two methods:
- Development: for this method you have to delete "homepage" row from package.json file and then run `npm start` in terminal. That starts the development server and opens the application in browser.
- Production build: for this method you have to run `npm run build` in the terminal. Now you can access the application in your browser at the localhost URL: http://localhost/react-quiz/build/.
