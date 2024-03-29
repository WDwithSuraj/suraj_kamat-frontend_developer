import React, { useEffect } from 'react'
import styled from 'styled-components'
import line from "../assets/line.png"
import ring from "../assets/ring.png"
import cart from "../assets/cart.png"
import straitLine from "../assets/straitLine.png"
import topRing from "../assets/topRing.png";
import coin from "../assets/coin.png"
import pin from "../assets/pin.png"
import rocket from "../assets/rocket.png"
import dollar from "../assets/dollar.png"
import AOS from "aos";
import "aos/dist/aos.css";

export const Product = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <DIV>
            <div data-aos="fade-up" className="productHeading">
                <h1>Our <span>Products</span></h1>
                <img src={line} id='line' alt="" />
            </div>
            <p data-aos="fade-up" id='headingPra'>Pellentesque habitant morbi tristique senectus et netus et Pellentesque habitant morbi.</p>
            <div data-aos="fade-up" className='card_container'>
                <div className='card'>
                    <img className="top_ring " src={topRing} alt="" />
                    <img className="bottom_ring " src={ring} alt="" />
                    <div className='innerCard'>
                        <img className='centerImage' src={cart} alt="" />
                        <h1>Bita Marketplace</h1>
                        <img className='centerImage' src={straitLine} alt="" />
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada </p>
                    </div>
                </div>
                <div className='card'>
                    <img className="top_ring " src={topRing} alt="" />
                    <img className="bottom_ring " src={ring} alt="" />
                    <div className='innerCard'>
                        <img className='centerImage' src={coin} alt="" />
                        <h1>Bita Marketplace</h1>
                        <img className='centerImage' src={straitLine} alt="" />
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada </p>
                    </div>
                </div>
                <div className='card'>
                    <img className="top_ring " src={topRing} alt="" />
                    <img className="bottom_ring " src={ring} alt="" />
                    <div className='innerCard'>
                        <img className='centerImage' src={pin} alt="" />
                        <h1>Bita Marketplace</h1>
                        <img className='centerImage' src={straitLine} alt="" />
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada </p>
                    </div>
                </div>
                <div className='card card_4'>
                    <img className="top_ring " src={topRing} alt="" />
                    <img className="bottom_ring " src={ring} alt="" />
                    <div className='innerCard'>
                        <img className='centerImage' src={rocket} alt="" />
                        <h1>Bita Marketplace</h1>
                        <img className='centerImage' src={straitLine} alt="" />
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada </p>
                    </div>
                </div>
                <div className='card card_5'>
                    <img className="top_ring " src={topRing} alt="" />
                    <img className="bottom_ring " src={ring} alt="" />
                    <div className='innerCard'>
                        <img className='centerImage' src={dollar} alt="" />
                        <h1>Bita Marketplace</h1>
                        <img className='centerImage' src={straitLine} alt="" />
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada </p>
                    </div>
                </div>
            </div>


        </DIV>
    )
}


const DIV = styled.div`
    height: 180vh;
    background:linear-gradient(to right top, #2c2408, black );
    color: white;
    font-weight: 700;
    font-size: 56px;
    text-align: center;
    font-family: Inter, sans-serif;
   
    span {
        color: #FECC00;
    }

    .card  h1 {
        font-size: 20px;
        font-weight: 700;
    }
    .productHeading {
        position: relative;
    }
    p{
        font-size: 16px;
        font-weight: 400;
      
    }

     #line {
        position: absolute;
        right: 35%;
        bottom: 0;
    }
    #headingPra {
        margin-bottom: 50px;
    }

    .card {
        position: relative;
        width: 304px;
        padding: 2px;
        border-radius: 12px;
        background-color: #FECC00;
        margin: auto;
        transition: transform 1s ease;
        }

        .innerCard {
            background-color: black;
            width: 100%;
            padding: 20px;
            border-radius: 12px;
            padding-top: 10px;
           transition: transform 1s ease;
        }
        
        .innerCard:hover >img:nth-child(1) {
            position: relative;
            top:-90px ;    
            transition: transform 1s ease; 
            transform: rotate(-10deg);
         }

         .card:hover > img:nth-child(1){
            display: block;
           
            transform: translate(-50px, -70px);
            opacity: 1;
         }

          .card:hover > img:nth-child(2){
            display: block;
           
            transform: translate(55px, 80px);
            opacity: 1;
            
         }
         .card_container {
            width: 80%;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: start;
            justify-content: center;
            row-gap: 50px;

         }
         

   .bottom_ring {
    position: absolute;
    width: 120px;
    bottom: 0;
    right: 0;
    opacity: 0;
    transition: transform 1s ease;
   }

   .top_ring {
    position: absolute;
    width: 100px;
   opacity: 0;
   transition: transform 1s ease;
   }
   .centerImage {
    margin: 10px auto;
    
   }
   .card_4 {
    margin-left:170px;
   }

   .card_5 {
    margin-right: 180px;
   }
`
