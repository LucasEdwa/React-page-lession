import 'tailwindcss/tailwind.css';
import banners from './componentes/banners';
import products from './componentes/products';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ButtonForMore from './componentes/ButtonForMore';

function App() {
  return (
    <>
        <div className="App bg-gray-900 m-0 p-0 container mx-auto ">
        <nav className="">
          <ul className='flex text-white p-4 space-x-4 '>
            <h1>HiStore</h1>
            <li className="hover:underline"><a href="/">Home</a></li>          
            <li className="hover:underline"><a href="/products">Products</a></li>
            <li className="hover:underline"><a href="/about">About Us</a></li>
          </ul>
        </nav>
        <header>
          <div className='banner  '>
            <Slider>
              {banners.map((banner, index) => (
                <div key={index}>
                  <img className='w-full ' src={banner.src} alt='banner' />
                  <div className='top-0 left-0 p-5'>
                    <h1 className='text-4xl font-bold text-white'>{banner.h1}</h1>
                    <p className='text-white'>{banner.p}</p>
                    <ButtonForMore text={banner.button} onClick={() => alert('More info about this product')} />

                  </div>
                </div>

              ))}
            </Slider>
          </div>
        </header>
        <main>
          <div className='flex bg-green-500 p-8 space-x-40 items-center'>
            <h1>Best upgrade solutions</h1>
            <h1>Good Prices</h1>
            <h1>High quality webDesign</h1>
            <h1>Fast delivery</h1>
            <h1>Support 24/7</h1>
          </div>
          <section className='p-6 flex justify-center'>
            <div className='product-container  flex space-x-10 m-10 border border-gray-500 p-9'>
              {products.map((product) => (
                <div className='product-holder shadow-custom-color border border-gray-500 p-8 w-full ' key={product.id}>
                  <div className='product  text-white'>
                    <img className='w-full h-60' src={product.image} alt='product' />
                    <h2 className='p-2 mb-1'>{product.name}</h2>
                    <p>{product.description}
                    <ButtonForMore className='p-10' text='More' onClick={() => alert('More info about this product')} />
                    </p>
                  </div>
                  </div> 
              ))} 
              
            </div>
          </section>  
        </main>
        <footer >
          <div className='bg-blue-900 text-white p-8'>
            <div className='flex justify-center space-x-40'>
              <div className='flex flex-col'>
                <h1 className='text-2xl'>HiStore</h1>
                <p>HiStore is a website that sells Websites.</p>
              </div>
              <div className='flex flex-col'>
                <h1 className='text-2xl'>Contact Us</h1>
                <p>Phone: 123456789</p>
                <p>Email:

                </p>
              </div>
            </div>
          </div>

        </footer>
      </div>
    </>
  );
}

export default App;