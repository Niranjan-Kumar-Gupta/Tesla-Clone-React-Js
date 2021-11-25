import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section title="Model S"
                     description="Order online for Touchable Delivery" 
                     backgroundImg="martin-katler-WyGUO1k7AEQ-unsplash.jpg"
                     leftBtnText="Custom order"
                     rightBtnText="Existing inventory"
                    
                    />

            <Section title="Model Y"
                     description="Order online for Touchable Delivery" 
                     backgroundImg="charlie-deets-AkgALppFIwo-unsplash.jpg"
                     leftBtnText="Custom order"
                     rightBtnText="Existing inventory"
                    
                    />

            <Section title="Model X"
                     description="Order online for Touchable Delivery" 
                     backgroundImg="samuele-errico-piccarini-FMbWFDiVRPs-unsplash.jpg"
                     leftBtnText="Custom order"
                     rightBtnText="Existing inventory"
                    
                    />
            <Section title="Model Z"
                     description="Order online for Touchable Delivery" 
                     backgroundImg="tech-nick-kPUQOsfThag-unsplash.jpg"
                     leftBtnText="Custom order"
                   
                    
                    />
        </Container>
    )
}

export default Home
const Container = styled.div`
    height:100vh;
`