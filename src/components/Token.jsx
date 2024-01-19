import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import line from "../assets/line.png"
import axios from 'axios'

import { TokenCard } from './TokenCard'

export const Token = () => {
    const [tokenData, setTokenData] = useState([])
    function getData() {
        axios.get(`https://bitverse-sej5.onrender.com/data`)
            .then((res) => setTokenData(res.data))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <DIV>
            <div className="tokenHeading">
                <h1>Our <span id="token">Tokens</span></h1>
                <img src={line} id='line' alt="" />
            </div>
            <p id='headingPra'>Pellentesque habitant morbi tristique senectus et netus et Pellentesque habitant morbi.</p>

            <div className="card_container">
                {
                    tokenData?.map((item, index) => {
                        return (
                            <TokenCard item={item} key={index} />
                        )
                    })
                }
            </div>

            <div className="pagination">
                <button>Previous</button>
                <p>Page 1 of 10</p>
                <button>Next</button>
            </div>
        </DIV>

    )
}


const DIV = styled.div`
    height: 270vh;
    background:linear-gradient(to top left, black, #2c2408 );
    color: white;
    font-weight: 700;
    font-size: 56px;
    text-align: center;
    font-family: Inter, sans-serif;
    padding-top: 250px;

    #token {
        color: #FECC00;
    }

    .tokenHeading {
        position: relative;
    }
    #headingPra {
        font-size: 16px;
        font-weight: 400;
      
    }

     #line {
        position: absolute;
        right: 35%;
        bottom: 0;
    }


    .card_container {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        width: 80%;
        margin: auto;
        gap: 24px;
        margin-top: 40px;
    }

    .pagination {
        display: flex;
        font-size: 14px;
        font-weight: 500;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
    }
    
    .pagination p {
        line-height: 20px;
        margin: 0 100px;
    }
    .pagination button {
        height: 38px;
        width: 100px;
        font-weight: 500;
        font-size: 14px;
        border: 1px;
        border-radius: 8px;
        padding: 8px 14px;
        background-color: #FFFFFF;
        color: #344054;
         box-shadow: #1018280D 10px 10px 19px 0px;
    }
`