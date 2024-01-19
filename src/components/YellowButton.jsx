import React from 'react'
import styled from 'styled-components'

export const YellowButton = ({ text }) => {
    return (
        <DIV>
            <button>{text} {`>`} </button>
        </DIV>
    )
}


const DIV = styled.div`
    border-radius:50px;
   
    background: linear-gradient(95deg, #FECC00 -2.53%, #FEA800 102.53%);
    padding:5px;
    margin-top:40px ;
    
    button {
        border: 1px solid white;
        background-color: transparent;
        border-radius: 50px;
        display: flex;
        gap: 10px;
        padding: 5px 20px;
        font-size: 16px;
        font-weight: 700;
        

    }

    button:hover {
         box-shadow: #FECC00 0 0 25px 0px;
    }
`
