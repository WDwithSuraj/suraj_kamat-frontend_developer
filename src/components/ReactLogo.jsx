import React from 'react'
// import eclipse1 from "../assets/Ellipse.png"
import eclipse2 from "../assets/Ellipse 4.png"
import eclipse3 from "../assets/Ellipse 5.png"
import eclipse4 from "../assets/Ellipse 6.png"
import eclipse5 from "../assets/Ellipse 7.png"

import styled from 'styled-components'

export const ReactLogo = () => {
    return (
        <DIV>
            <img className='eclipse' id='image_1' src={eclipse2} alt="1" />
            <img className='eclipse' id='image_2' src={eclipse3} alt="2" />
            <img className='eclipse' id='image_3' src={eclipse4} alt="3" />
            <img className='eclipse' id='image_4' src={eclipse5} alt="4" />
        </DIV>
    )
}


const DIV = styled.div`
    position: absolute;
    right: 0;
    width: 250px;
    height: 250px;
    transform: translateY(550px);
    .eclipse {
        position: absolute;
        right: 0;
    }
    #image_3{
        bottom: 0;
    }
    #image_4{
        top: 50%;
        transform: translateY(-50%);
    }
`
