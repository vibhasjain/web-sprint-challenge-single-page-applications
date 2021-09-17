import React from 'react'
import styled from 'styled-components'

const PizzaCard = styled.div`

    background:lightgray;
    padding:40px;
    margin-top:20px;
`

export default function PizzaOrder(props) {
    const { name, size, topping1, topping2, topping3, topping4, special} = props.props;
    let mushrooms = ''
    let pepperoni = ''
    let parmesan = ''
    let sausage = ''

    if (topping1) {
        mushrooms = 'mushrooms'
    }

    if (!!topping2) {
        pepperoni = 'pepperoni'
    }

    if (!!topping3) {
        sausage = 'sausage'
    }

    if (!!topping4) {
        parmesan = 'parmesan'
    }


    return (
        <PizzaCard>
            <h2>{name}</h2>
            <h3>{size}</h3>
            <h4>{mushrooms} {pepperoni} {parmesan} {sausage}</h4>
            <h5>{special}</h5>
        </PizzaCard>
    )
}