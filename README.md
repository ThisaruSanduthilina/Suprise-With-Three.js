Love Code - Interactive Romantic Surprise 💖
An interactive web application created with React and Three.js that offers a romantic surprise through engaging gameplay and beautiful animations.

Project Overview
Love Code is a web application that presents the user with a starry 3D background and invites them to click for a surprise. The surprise page features an interactive heart collection game where users collect floating hearts to fill a heart-shaped tank. Upon collecting enough hearts, a special "I ❤️ YOU" message is revealed.

Features
Beautiful 3D Starry Background: Created with Three.js particle system
Interactive Heart Collection Game: Collect floating hearts to fill a heart meter
Progress Visualization: Heart-shaped tank fills up as hearts are collected
Visual Effects: Animation effects including floating hearts, pulsing text, and shimmer effects
Mobile Responsive: Fully responsive design works on all device sizes
Sound Effects: Gentle melody plays when completing the game
Romantic Reveal: Special message appears after completing the challenge

Technologies Used
React 19
React Router DOM 7.5
Three.js 0.175
CSS Animations
Web Audio API
Installation

Clone the repository:
git clone https://github.com/yourusername/lovecode.git
cd lovecode

Install dependencies:
npm install

Run the development server:
npm start

Open your browser and navigate to http://localhost:3000

Project Structure

lovecode/
├── public/              # Static files
│   └── index.html       # HTML template
├── src/                 # Source files
│   ├── components/      # Reusable components
│   ├── pages/           # Main page components
│   │   ├── home.jsx     # Home page with 3D background
│   │   ├── suprise.jsx  # Surprise page with heart game
│   │   └── styles/      # Page-specific styles
│   ├── App.js           # Main app component with routing
│   └── index.js         # Entry point
└── package.json         # Dependencies and scripts


Usage
The application has two main pages:

Home Page: Features a 3D starry background with a "Little Surprise For You" message and a "Click Me" button
Surprise Page: Contains an interactive game where users collect floating hearts to fill a heart-shaped tank
When 10 hearts are collected, a special romantic message is revealed with animation effects.

Contributing
Fork the repository
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
License
This project is licensed under the MIT License - see the LICENSE file for details.

Credits
Created with ❤️ as a special gift for someone special.

