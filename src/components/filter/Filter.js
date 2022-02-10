import React, {} from 'react';
import "./Filter.css";

const Filter = (props) => {
    const {products,handleData,handleState,statesName,handleCity,citiesName} = props;
    return (
        <div className='filter container'>
            <h4>Filters</h4>
            <select className="form-select" onChange={handleData}>
                <option value=''>Products</option>
                {products}
            </select>

            <select className="form-select" onChange={handleState}>
                <option value=''>State</option>
                {statesName}
            </select>

            <select className="form-select" onChange={handleCity}>
                <option value=''>City</option>
                {citiesName}
            </select>
            
            
        </div>
    );
};

export default Filter;
