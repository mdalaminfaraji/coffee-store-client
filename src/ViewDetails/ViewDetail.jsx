import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetail = () => {
    const product=useLoaderData();
    const {_id, name, chef, supplier, taste, category, details, photo}=product;
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={photo} className="max-w-sm md:w-56 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Name: {name}</h1>
            <p className="py-3">Details: {details}</p>
            <p className="py-3">chef: {chef}</p>
            <p className="py-3">Supplier: {supplier}</p>
            <p className="py-3">category: {category}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default ViewDetail;