# Animal Farm Search

## Overview

Animal Farm Search is a simple web application that allows users to search through a list of randomly generated animals. The application is built using React for the frontend and Express.js for the backend, demonstrating the use of hooks and async data fetching.

## Purpose

This project serves as a simple platform for me to learn React. It is not intended for production use but as a sandbox where I can experiment with API integration, asynchronous and server/client interaction in a controlled environment.

## Features

- Search for animals by name.
- Displays animal details such as type and age.
- Responsive UI that updates as you type.
- Uses local storage to remember the last search query.

## Setup and Installation

### Prerequisites

- Node.js and npm must be installed on your machine.

### Installation Steps

To run this application, you need Node.js and npm installed. Follow these steps:

1. Clone the repository:

2. Navigate to the project directory

3. Install dependencies: npm install

4. Start the backend server:
   Navigate to the server directory
   Start the server: node server.js

In a separate terminal, start the Vite development server for the frontend: npm run dev

## Usage

After starting both servers, open a web browser and navigate to the URL provided by Vite - typically:
http://localhost:5173

Start typing in the search box to see the animals filtered by your query.
The list updates with each keystroke to reflect the current search results.
If no animals are found, a message will be displayed.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
