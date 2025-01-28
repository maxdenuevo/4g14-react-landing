import React from 'react';

const Jumbotron = () => {
    return (
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container text-start">
          <h1 className="display-4">A Warm Welcome!</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, 
            in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis 
            illo aspernatur vitae fugiat numquam repellat.
          </p>
          <button className="btn btn-primary btn-lg">Call to action!</button>
        </div>
      </div>
    );
};

export default Jumbotron;