import React from 'react';

const Card = ({ title, text }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card h-100">
                <img 
                    src="/api/placeholder/500/325" 
                    className="card-img-top" 
                    alt={title} 
                    style={{ backgroundColor: '#e9ecef', objectFit: 'cover' }} 
                />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
                <div className="card-footer text-center bg-white border-top-0">
                    <button className="btn btn-primary">Find Out More!</button>
                </div>
            </div>
        </div>
    );
};

export default Card;

