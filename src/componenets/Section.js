import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section(props) {
    console.log(props.backgroundImg)
    return (
        <Wrap bgImage={props.backgroundImg}>
             <Fade bottom>        
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <ButtonGroup>
                     <Fade left>   
                         <LeftButton>
                           {props.leftBtnText}
                         </LeftButton>
                    </Fade>
                    {
                        props.rightBtnText && 
                        <Fade right>   
                            <RightButton>
                              {props.rightBtnText}
                           </RightButton>
                        </Fade>
                    }
                  
                </ButtonGroup>
                <DownArrow src="/images/down-arrow-svgrepo-com1.svg"  />
            </Buttons>
          
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
   
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
   
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
    


`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:768px){
        flex-direction:column;
    }

`

const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform: uppercase;
    font-size:12px;
    cursor:pointer;
    margin:5px;

`
const RightButton = styled(LeftButton)`
    background-color:rgba(255,255,252,0.65);
    color:black;
`

const DownArrow= styled.img`
    height:35px;
    overflow-x: hidden;
    animation:animateDown infinite 1.5s;
`

const Buttons= styled.div`
   
   
`