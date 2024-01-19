import React from 'react'
import styled from 'styled-components'
import cube from "../assets/cube.png"
import home from "../assets/house.png"
import ring from "../assets/ring.png"
import { YellowButton } from './YellowButton'
import { ReactLogo } from './ReactLogo'
import line from "../assets/line.png"

export const MainContainer = () => {
    return (
        <DIV>

            <div className='headerContainer'>
                <div className="heading_continer">
                    <h1>YOU<span>R </span>G<span>a</span>teway</h1>
                    <h1>To</h1>
                    <h1><span>D</span>efi <span id='position_relative'>on</span> <span className='bitcoint_color'>BitCoin</span></h1>

                    <img src={line} id="line" alt="" />

                </div>
                <div className="headerImageContainer">
                    <img id='house' src={home} alt="home" />
                    <img src={ring} id="ring" alt="ring" />
                </div>
            </div>
            <img id='cube' src={cube} alt="" />

            <p className='dummyText'>Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse id velit proin eleifend id mauris. Amet sem in id eget nunc quam lacus tellus augue.</p>
            <YellowButton text={"Details"} />
            <ReactLogo />


        </DIV>
    )
}



const DIV = styled.div`
    display: flex;
    align-items: center;
    padding-top: 120px;
    height: 140vh;
    width: 100%;
    flex-direction: column;
    /* position: relative; */
    background-color:black;

    .headerContainer {
        position: relative;
        height: 400px;
        width: 804px;
        font-weight: 700;
        font-size:90px;
        text-transform: uppercase;
        color: white;
      letter-spacing: 1px;
    }
    #line {
        position: absolute;
        right: 45px;
        bottom: 0;
    }
   
  .heading_continer, .headerImageContainer { 
        margin: auto;
        position: absolute;
        width: 100%;
        left: 0;
    }
    
  #position_relative {
    z-index: 3;
  }

   #ring {
    position: absolute;
    transform: translate(280px, -50px);
  }

 #house {
    transform: translate(-60px, 10px);
    width: 400px;
   z-index: 0;
   position: absolute;
 }
 
  .bitcoint_color {
    color: #FECC00;
  }

  .headerImageContainer {
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
     
  }

  #cube {
    position: absolute;
    left: 15px;
    top: 10px;
  }

  .dummyText {
    color: #FDFFE3;
    font-size: 20px;
    width: 70%;
    font-weight: 400;
    text-align: center;
    font-family: 'Inter', sans-serif;
    margin-top: 70px;
  }

`