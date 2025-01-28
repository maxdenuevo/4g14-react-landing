import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';

const Home = () => {
    const cards = [
      {
        title: "Card title",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
      },
      {
        title: "Card title",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
      },
      {
        title: "Card title",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
      },
      {
        title: "Card title",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
      }
    ];
  
    return (
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="container flex-grow-1">
          <Jumbotron />
          <div className="row">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
};
  
export default Home;