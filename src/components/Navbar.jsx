import React from 'react'
import styled from 'styled-components'
import logo from "../Image/Logo Yellow 1.png"

export const Navbar = () => {
    return (
        <DIV>
            <div className="logo_container">

                <img src={logo} alt="logo" />
                <div className="logo_text">
                    <p>Bitverse</p>
                    <p>Finance</p>
                </div>

            </div>
            <div className="navigation_container">
                <p>About</p>
                <p>Our Products</p>
                <p>Token Utility</p>
                <p>Roadmap</p>
                <button id='walletBtn'>Connect Wallet</button>
            </div>
        </DIV>
    )



}


const DIV = styled.div`
    position: fixed;
    width: 90%;
    margin: auto;
    height: 4.5rem;
    top: 30px;
    left: 50%;
    transform:  translateX(-50%);
    border: 2px solid #554800;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    background-color: #554800;
    color: #FFFF;
    box-shadow: #DBB80033 10px 10px 19px 0px;
    z-index: 10;

   

    .logo_container {
        display: flex;
        width: 25%;
        text-transform: uppercase;
        text-align: center;
        align-items: center;
    }

    .navigation_container {
        display: flex;
        justify-content: space-around;
        width: 60%;
        align-items: center;
        font-weight: 500;
        letter-spacing: 1px;
    }

    #walletBtn {
        background-color: #F9D326 ;
        color: black;
        height: 50px;
        text-align: center;
        border-radius: 10px;
        padding: 0 20px;
    }

    .logo_container p:nth-child(1) {
        font-family: Inter, sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #FFC603;
        line-height: 19.37px;
        letter-spacing: 1.5px;
        
    }

    .logo_container p:nth-child(2) {
         font-family: Inter, sans-serif;
        font-size: 8.73px;
        font-weight: 700;
        line-height: 10.56px;
         letter-spacing: 10px;
         margin-left: 12px;
    }
`