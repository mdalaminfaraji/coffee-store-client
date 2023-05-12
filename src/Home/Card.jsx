import React from 'react';

const Card = ({quality}) => {
    const {image, title, details}=quality;
    return (
        
        <div className="card ">
                        <figure className="px-10 pt-10">
                            <img src={image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 style={{fontFamily:'Rancho'}} className="card-title">{title}</h2>
                            <p style={{fontFamily:'Raleway', fontWeight:'400px'}}>{details}</p>
                        </div>
                    </div>
    );
};

export default Card;