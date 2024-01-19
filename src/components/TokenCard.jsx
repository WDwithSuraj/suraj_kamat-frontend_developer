import React from 'react'
import bitcoin from "../assets/bitcoin.png"
import styled from 'styled-components'
import { YellowButton } from './YellowButton'
export const TokenCard = ({ item }) => {
    return (
        <DIV>
            <img src={bitcoin} id="bitcoin" alt="" />
            <div className="toeknText">
                <h3>{item.tokenName}</h3>
                <p> <span className='titleText'>Symbol</span> <span className='itemText symbol'>{item.symbol}</span></p>
                <p> <span className='titleText' >Decimal</span> <span className='itemText decimal'>{item.decimals}</span></p>
                <p><span className='titleText'>Market Cap</span> <span className='itemText marketcap'>{item.marketcap}</span></p>
                <p> <span className='titleText'>Chain</span> <span className='itemText chain'>{item.chain}</span></p>
                <div className='detailBtn'>
                    <YellowButton text={"Details"} />
                </div>
            </div>

        </DIV>
    )
}


const DIV = styled.div`
    height: 468px;
    width: 314px;
    border: 3px solid #F9D32666;
    background-color: #141411;
    border-radius: 12px;
    font-family: Inter, sans-serif;
     .toeknText p,span {
        margin-top: -50px;
        margin-bottom: -50px;
    }

    h3 {
        font-size: 24px;
        font-weight: 700;
        margin: 30px 0 10px 10px;
    }
    
    span {
        font-size: 16px;
        font-weight: 400;
        margin: 30px 0 10px 10px;
    }

    #bitcoin {
        width: 110px;
        margin: auto;
        margin-top: 30px;
    }

    .toeknText {
        text-align: left;
        margin-top: 50px;
        margin-left: 20px;
    }
    .detailBtn {
        width: 43%;
        margin: auto;
        margin-top: 50px;
        margin-left: 50px;
        color: black;
    }

    .titleText {
        color: #CFCFCF;
        font-weight: 600;
    }
    .itemText {
        margin-left: 20px;
        font-weight: 400;
        color: #CFCFCF;
    }
   
   .marketcap {
    margin-left: 1px;
   }
   .symbol {
    margin-left: 32px;
   }

   .decimal {
          margin-left: 28px;
   }
   .chain {
    margin-left: 45px;
   }
`
