import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Filter from './components/filter/Filter';
import Products from './components/products/Products';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect( ()=> {
      async function fetchData() {
          setLoading(true);
          const result = await axios.get("https://assessment-edvora.herokuapp.com/");
          console.log(result.data);
          setData(result.data);
          setLoading(false);
      }
      fetchData();
  }, []);

  const [selectedData, setSelected] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  const [allSelected, setAll] = useState([]);
  const [allSelectedState, setAllState] = useState([]);
  const [allSelectedCity, setAllCity] = useState([]);
    // products name
    const products = data.map((el, index) => (
        <option 
          key={index} 
          value={el.product_name} 
        >
          {el.product_name}
        </option>));

    // states name
    const statesName = data.map((el, index) => (
        <option 
          key={index} 
          value={el.address.state} 
        >
          {el.address.state}
        </option>));

    // citices name
    const citiesName = data.map((el, index) => (
        <option 
          key={index} 
          value={el.address.city} 
        >
          {el.address.city}
        </option>));

    // handle products name value 
    const handleData = (e) => {
      const selectedData = e.target.value;
      setSelected(selectedData);
      const allSelected = data.filter(el => el.product_name === selectedData).map(filt => filt.product_name);
      setAll(allSelected);
      console.log(allSelected);
    }

    // handle States value name
    const handleState = (e) => {
      const selectedState = e.target.value;
      setSelectedState(selectedState);
      const allSelectedState = data.filter(el => el.address.state === selectedState).map(filt => filt.address.state);
      setAllState(allSelectedState);
      console.log(allSelectedState)
    }

    // Handle Cities value name
    const handleCity = (e) => {
      const selectedCity = e.target.value;
      setSelectedState(selectedCity);
      const allSelectedCity = data.filter(el => el.address.city === selectedCity).map(filt => filt.address.city);
      setAllCity(allSelectedCity);
      console.log(allSelectedCity)
    }

  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2'>
            <Filter products={products} handleData={handleData}  handleState={handleState} statesName={statesName} citiesName={citiesName} handleCity={handleCity}/>
          </div>
          <div className='col-lg-10'>
            <Products data={data} loading={loading} products={products} allSelected={allSelected} selectedData={selectedData} />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
