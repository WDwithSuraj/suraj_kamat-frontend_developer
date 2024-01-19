import React from 'react'
import styled from 'styled-components'
import greyLine from "../assets/grey_line.png"
import quoteSign from "../assets/quoteSign.png"
import { RoadmapCard } from './RoadmapCard'
import { MiddleDot } from './MiddleDot'


export const Roadmap = () => {
    return (
        <DIV>
            <div className="RoadmapHeading">
                <h1>Roadmap</h1>
                <img src={greyLine} id='line' alt="" />
            </div>
            {/* <img src={quoteSign} id='quote' alt="siggn" /> */}
            <div className="slider">
                <div className="container">
                    <MiddleDot position={"first"} />
                    <RoadmapCard index={1} />
                    <MiddleDot />
                    <RoadmapCard index={2} />
                    <MiddleDot />
                    <RoadmapCard index={3} />
                    <MiddleDot />
                    <RoadmapCard index={4} />
                    <MiddleDot />
                    <RoadmapCard index={5} />
                    <MiddleDot position={"last"} />
                </div>
            </div>
        </DIV>
    )
}



const DIV = styled.div`
    height: 80vh;
    background-color: #FECC00;
    color: black;
    font-weight: 700;
    font-size: 56px;
    font-family: Inter, sans-serif;
    width: 100%;

    #line {
        margin-left: 100px;
        margin-top:-7px;
    }

    .RoadmapHeading {
        position: absolute;
       margin-left: 100px;
       margin-top: 40px;
    }

    .container {
        display: flex;
         margin: 0 100px;
         align-items: center;
         z-index: 5;
    }
    .slider {
        padding-top : 10vh;
        position: relative;
        height: 800px;
        overflow-x: scroll;
        top: 50px;
       
        &::-webkit-scrollbar {
            -webkit-appearance: none;
     
       }
    }
   
`