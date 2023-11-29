import React from 'react'
import supermarket from './../Assests/Supermarket_login.png'
import kola from './../Assests/Kola_login.png'
import idea_nft from './../Assests/idea_nft_login.png'

function Project({projectref}) {
  return (
    <div ref={projectref} className='pt-20 '>
      <h1 id="titl" className='font-extrabold text-3xl md:pl-20 pl-6 underline pb-20 uppercase'>Projects</h1>
      <div>

        <div id="ideaNFT" className='md:flex'>
          <div className='md:w-1/2 p-14 flex justify-center items-center'>
            <div>
              <h2 className='font-serif text-3xl underline'>Idea NFT</h2>
              <p className='text-justify'>Idea NFT is an innovative web3.0 project centered around preserving and safeguarding Non-patent Ideas in an immutable manner. As a skilled Backend Developer, my primary responsibility was to establish a robust database infrastructure capable of securely storing these valuable ideas. Through cutting-edge blockchain technology, each idea is recorded as a unique Non-Fungible Token (NFT), ensuring its authenticity and preventing any unauthorized modifications or deletions. Moreover, my contributions enabled the seamless display of these fascinating Idea Topics to the public, encouraging collaboration, inspiration, and the exchange of knowledge. Idea NFT stands at the forefront of revolutionizing idea protection and sharing in the digital age. </p>
            </div>
          </div>
          <div className='md:w-1/2 p-14 md:block hidden'>
            <img src={idea_nft} alt=''/>
          </div>
        </div>

        <div id="Shoppingweb" className='md:flex'>
          <div className='md:w-1/2 h-1/2 p-20 md:block hidden'>
            <img src={supermarket} alt="Supermarket Login IMG" />
          </div>
          <div className='md:w-1/2 p-14 flex justify-center items-center'>
            <div>
              <h2 className='font-serif text-3xl underline'>Shopping Web (Clone)</h2>
              <p className='text-justify'>This application marks my maiden project in which I employed Server-Side Rendering using Flask, MySQL, and front-end technologies like HTML, CSS, and JS. The core functionality revolves around utilizing Ajax for seamless Asynchronous Callbacks, facilitating smooth interactions such as adding or removing products from the cart or the list. The combination of Flask as the backend framework, MySQL for robust data storage, and the power of HTML, CSS, and JS for intuitive user interfaces, allowed me to craft a feature-rich web application. This project showcases my proficiency as a developer and represents the beginning of an exciting journey into the world of web development.</p>  
            </div>
          </div>
        </div>

        <div id="ideaNFT" className='md:flex h-1/3'>
          <div className='md:w-1/2 p-14 flex justify-center items-center'>
            <div>
              <h2 className='font-serif text-3xl underline'>KOLA</h2>
              <p className='text-justify'>This innovative mobile application is developed using the React Native framework for the frontend, coupled with Flask-Restful API for the robust backend. Its primary purpose is to empower farmers by enabling them to easily enter and manage the availability of their agricultural produce. Through seamless integration with nearby warehouses, farmers can securely store their goods for future use. Additionally, the app offers convenient access to transportation services, ensuring the efficient and timely movement of the stored produce to desired destinations. Leveraging the flexibility of React Native, this application delivers a user-friendly experience, bridging the gap between farmers, warehouses, and transportation services to optimize the agricultural supply chain.</p>
            </div>
          </div>
          <div className='h-1/2 md:flex justify-center hidden'>
            <img className='md:w-1/2' src={kola} alt=''/>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Project