# TodoExpress

A minimal, clean, and elegant Todo application built with a vanilla JavaScript frontend and a Node.js/Express backend.

## Features

- **Add Tasks**: Quickly add new tasks to your list.
- **Toggle Completion**: Mark tasks as done or pending with a simple click.
- **Delete Tasks**: Remove tasks you no longer need.
- **Clean UI**: A premium, Apple-like light theme with smooth micro-animations.
- **Responsive Design**: Works perfectly on both desktop and mobile devices.

## Tech Stack

- **Frontend**: HTML5, Vanilla JavaScript, CSS3
- **Backend**: Node.js, Express.js
- **Database**: In-memory array (for demonstration purposes)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone or download the project to your local machine.
2. Open a terminal and navigate to the project directory:
   ```bash
   cd TodoExpress
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Start the backend server:
   ```bash
   node server.js
   ```
   *The server will start on port 3001.*

2. Open your browser and navigate to:
   ```
   http://localhost:3001
   ```

## Project Structure

- `server.js`: The Express.js server providing the API routes (`/api`).
- `public/`: Contains static frontend files.
  - `public/index.html`: The main user interface and client-side logic.
- `package.json`: Project metadata and dependencies.
