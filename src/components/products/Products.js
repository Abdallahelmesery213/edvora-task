import React from 'react';
import "./Products.css";
import Moment from 'moment'; // format date
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, {Navigation} from 'swiper';
import "swiper/components/navigation/navigation.min.css";
SwiperCore.use([Navigation]);

const Products = (props) => {
    const {data, loading,allSelected, selectedData} = props;
    const mapSwiper = data.map((el, index) => (
        <SwiperSlide key={index} className='prod-col' >
        <div className='row'>
            <div className='col-md-5'>
                <img src={el.image} alt={el.product_name} className='img-fluid' />
            </div>
            <div className='col-md-7'>
                <p className='prod-name'>{el.product_name}</p>
                <p className='brand-name'>{el.brand_name}</p>
                <p className='price-name'><span>$ </span>{el.price}</p>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-5'>
                <p className='address-name'>{el.address.city}</p>
            </div>
            <div className='col-md-7'>
                <p className='date-name'> Date: {Moment(el.date).format('DD-MM-YYYY')}</p>
            </div>
        </div>
        <div className='row'>
            <p className='discr-name'>{el.discription}</p>
        </div>
        </SwiperSlide>
    ));
    const mapSwiper2 = allSelected.map((el, index) => (
        <SwiperSlide key={index} className='prod-col' >
        <div className='row'>
            
            <div className='col'>
                <p className='prod-name mt-2'>{el}</p>
                
            </div>
        </div>
        <div className='row'>
            <div className='col-md-5'>
                {/* <p className='address-name'>{el.address.city}</p> */}
            </div>
            <div className='col-md-7'>
                {/* <p className='date-name'> Date: {Moment(el.date).format('DD-MM-YYYY')}</p> */}
            </div>
        </div>
        <div className='row'>
            {/* <p className='discr-name'>{el.discription}</p> */}
        </div>
        </SwiperSlide>
    ));


    return (
        <div className='products container'>

            <h2>Edvora</h2>
            <h6>Products</h6>
            <p className='product-name'>Product Name</p>
            <hr />

            <div className='my-products d-flex'>
            {loading ? <p>loading...</p> : (
                <Swiper 
                    spaceBetween={40} 
                    // slidesPerView={4} 
                    navigation 
                    breakpoints={{
                        576: {
                            slidesPerView: 1,
                        },
                        768: {
                            spaceBetween: 20,
                            slidesPerView: 2,
                        },
                        992: {
                            spaceBetween: 30,
                            slidesPerView: 4,
                        },
                    }}
                >
                    {mapSwiper}
                </Swiper>
            )}
            </div>

            <p className='product-name mt-5'>{selectedData.length>0 ? selectedData : 'Product Name'}</p>
            <hr />
            
            <div className='my-products d-flex '>
            {allSelected.length <1 ? <p>No products Selected</p> : (
                <Swiper 
                    spaceBetween={40} 
                    // slidesPerView={4} 
                    navigation 
                    breakpoints={{
                        576: {
                            slidesPerView: selectedData.length>4 ? 1 : selectedData.length(),
                        },
                        768: {
                            spaceBetween: 20,
                            slidesPerView: selectedData.length>4 ? 2 : selectedData.length(),
                        },
                        992: {
                            spaceBetween: 30,
                            slidesPerView: selectedData.length>4 ? 4 : selectedData.length(),
                        },
                    }}
                >
                    {mapSwiper2}
                </Swiper>
            )}
            </div>

        </div>
    );
};

export default Products;
