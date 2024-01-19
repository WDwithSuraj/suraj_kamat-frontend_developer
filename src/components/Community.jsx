import React from 'react'
import email from "../assets/Email.png"
import insta from "../assets/insta.png"
import twitter from "../assets/twitter.png"
import styled from 'styled-components'
import copyrightLogo from "../assets/copyright logo .png"

export const Community = () => {
    return (
        <DIV>
            <div className='communityContainer'>
                <div className="communityText">
                    <p>Join Our</p>
                    <p id='communi'>Community</p>
                </div>
                <div className="social">
                    <div className="mail">
                        <img src={email} alt="" />
                    </div>
                    <div className="twitter">
                        <img src={twitter} alt="" />
                    </div>
                    <div className="insta">
                        <img src={insta} alt="" />
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="logoContainer">
                    <img src={copyrightLogo} id="copyrightLogo" alt="logo" />
                </div>
                <p>2023 All rights reserved</p>
            </div>

        </DIV>
    )
}


const DIV = styled.div`
    height: 60vh;
    background-color: #211D0D;
    color: white;

    .communityContainer {
        display: flex;
        position: relative;
        height: 244px;
        top: -122px;
        width: 80%;
        margin: auto;
        height: 2;
        background-color: #0D0E11;
        border: 4px solid #F9D32666;
        border-radius: 28px;
        padding: 56px 90px;
        justify-content: space-between;
        align-items: center;
    }

    .social {
        display: flex;
        gap: 30px;
    }

    .social div {
        height: 80.21px;
        aspect-ratio: 1/1;
        border-radius:49px;
        background:linear-gradient(to right top, #9C530F, #CFAF06 );
        text-align: center;

    }

    .social div img {
        margin-top: 25px;
        margin-left: 25px;
    }

    .communityText p {
        font-size: 44px;
        font-weight: 600;
        font-family: 'Kanit', sans-serif;
        line-height: 51.68px;
    }

    #communi {
        color: #FECC00;
    }

    .copyright {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -80px;
        border: none;
    }
    #copyrightLogo {
        width: 150px;
    }
    
    .copyright  p {
        font-size: 20px;
        font-weight: 400;
        font-family:Inter, sans-serif;
        text-align: center;
        line-height: 29px;
        letter-spacing: 1.5px;
        color: #D0D5DD;
    }
`