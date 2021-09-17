import React, { useState, useEffect } from 'react'
import PizzaOrder from './PizzaOrder'
import PizzaForm from './PizzaForm'
import * as yup from 'yup'
import schema from '../validation/FormSchema'
import { ValidationError } from 'yup'

const initialFormValues= {
    name:'',
    size: '6inch',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    special: ''
}

const initialFormErrors = {
    name: ''
}

const pizzaOrders = []
const initialDisabled = true;

export default function Pizza() {

    const [orders, setOrders] = useState(pizzaOrders)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const validate = (name,value) => {
        yup.reach(schema,name)
            .validate(value) 
            .then(() => setFormErrors({...formErrors,[name]:''}))
            .catch(err => setFormErrors({...formErrors,[name]:err.errors[0]})) 
    }

    const inputChange = (name,value) => {
        validate(name,value)
        setFormValues({...formValues, [name]:value})
    }

    const formSubmit = () => {
        const newPizza = {
            name: formValues.name.trim(),
            size: formValues.size,
            topping1: formValues.topping1,
            topping2: formValues.topping2,
            topping3: formValues.topping3,
            topping4: formValues.topping4
        }

        addPizza(newPizza)
    }

    const addPizza = newPizza => {
        setOrders([newPizza,...orders])
        setFormValues(initialFormValues)
        document.getElementById("pizzaForm").reset()
    }

    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled(!valid))
    },[formValues])

    return (
        <div>
            <br></br>
            <PizzaForm
                values={formValues}
                change={inputChange}
                submit={formSubmit}
                disabled={disabled}
                errors={formErrors}
                />
            {orders.map(order => {
                console.log(order)
                return (
                    <PizzaOrder key={order.id} props={order}/>
                )
            })}
        </div>

    )
}
