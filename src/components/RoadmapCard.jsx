import React from 'react'
import styled from 'styled-components'

export const RoadmapCard = ({ index }) => {
    return (
        <DIV className="craouselContainer">
            <h1 className='headerNo'>0{index}</h1>
            <div className="shape">
                <h2 className='phaseData'>PHASE-{index}</h2>
                <svg className='crousel_shape' xmlns="http://www.w3.org/2000/svg" width="187" height="62" viewBox="0 0 187 62" fill="none">
                    <g filter="url(#filter0_di_3350_97)">
                        <path d="M8.5 0.0184326C8.5 0.0184326 60.2909 2.51843 93.5 2.51843C126.709 2.51843 178.5 0.0184326 178.5 0.0184326V51.0184C178.5 51.0184 126.926 61.0184 93.5 61.0184C60.0738 61.0184 8.5 51.0184 8.5 51.0184V0.0184326Z" fill="#FFD940" />
                    </g>
                    <defs>
                        <filter id="filter0_di_3350_97" x="0.4" y="-5.08157" width="186.2" height="77.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="3" />
                            <feGaussianBlur stdDeviation="4.05" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3350_97" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3350_97" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="2" />
                            <feGaussianBlur stdDeviation="4.25" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_3350_97" />
                        </filter>
                    </defs>
                </svg>
                <svg className='red_svg' xmlns="http://www.w3.org/2000/svg" width="197" height="19" viewBox="0 0 197 21" fill="none">
                    <path d="M13.5 0.0184326C13.5 0.0184326 65.2911 2.51843 98.5 2.51843C131.709 2.51843 183.5 0.0184326 183.5 0.0184326C187.262 8.72424 189.938 13.2179 196.5 20.0184H0.5C7.42572 12.9001 10.1215 8.47554 13.5 0.0184326Z" fill="#969000" />
                </svg>
            </div>

            <div className="outer_container">

                <div className="inner_container">
                    <p className='inner_heading'>Initial Design and Development</p>
                    <p className='inner_data'>Q4 2023</p>
                    <p className='inner_desc'>Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada </p>
                </div>
            </div>
        </DIV>
    )
}


const DIV = styled.div`

        position: relative;
        width: 80%;
        height: 360px;
        margin: auto;
        top: 180px;
        display: flex;
        justify-content: center;
        

    .crousel_shape {
        height: 61px;
        width: 171px;
        z-index: 5;
        position: relative;
        top: -3px;
    }
    .phaseData {
        z-index: 6 !important;
    }
    .shape {
        position: absolute;
        top: -17px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .shape > h2 {
        font-size: 20px;
        position: absolute;
        font-weight: 700;
    }
    
    .red_svg{
        position: absolute;
        top: -1px;
        z-index: 1;
    }

   .outer_container  {
    height: 360px;
    width: 399px;
    border: 1px solid black;
    background-color: black;
    color: white;
    border-radius: 20px;
    padding: 24px;
    z-index: 3;
   }

    .inner_container {
            border: 2px solid #FECC00;
        border-radius: 16px;
        padding: 36px 16px;
        text-align: center;
          box-shadow: #DBB80033 10px 10px 19px 0px;
    }
  
   
   .inner_data {
    color: grey;
    font-size: 20px;
   }

   .inner_heading{
    font-weight: 700 !important;
    font-size: 24px !important;
    
   }
   .inner_desc {
    margin-top: 24px;
    font-size: 16px;
    font-weight: 400;

   }
          
   .headerNo {
    color: transparent;
    font-size: 200px;
    position: absolute;
    z-index: 2;
    top: -200px;
    -webkit-text-stroke-color: rgba(255, 255, 255, 0.40);
    -webkit-text-stroke-width: 7px;
   }
`