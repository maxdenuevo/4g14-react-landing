# <img src="https://skillicons.dev/icons?i=react" height="40" alt="react logo"  /> Landing page with React

## Overview

This project demonstrates component-based architecture using React functional components. The landing page is split into reusable Bootstrap components, all imported into a main `Home.jsx` component.

## Technologies Used

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

<br/>

Split Bootstrap components into different function components; they'll all be imported into the main component Home.jsx

## Project Requirements

- All components must be function components
- The `<Card />` component should be reusable with different content passed through props
- Follow the provided design closely
- Ensure responsive design using Bootstrap

## Project Structure

The landing page is broken down into the following components:

- `<Navbar />` - Navigation bar component
- `<Jumbotron />` - Hero section component
- `<Card />` - Reusable card component using props for different content
- `<Home />` - Main component that imports all other components
- `<Footer />`-

### Component Strategy

![Component Strategy](https://github.com/breatheco-de/exercise-landing-page-with-react/blob/master/strategy.gif?raw=true)

Key considerations for component architecture:

- Identify reusable components
- Follow DRY (Don't Repeat Yourself) principles
- Use props to handle varying content (especially for cards)
- Keep components small and focused
- Maintain clean separation of concerns

, `<Footer />`, `<Navbar />`, `<Navbar />`

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000)

### Project Source

This exercise is part of the complete 4Geeks Academy Full Stack course:

[![4Geeks Academy](https://img.shields.io/badge/4Geeks%20Academy-blue.svg)](https://4geeks.com/interactive-coding-tutorial/todo-list)
