import React from 'react'

export default function PizzaForm(props) {
    
    const { values,submit,change,disabled,errors } = props

    const onSubmit = event=> {
        event.preventDefault();
        submit()
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change (name, valueToUse)
    }

    return ( 

        <form onSubmit={onSubmit} id="pizzaForm">
            <label>
                Your Name
                <input 
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    />
            </label>
            <br></br>
            <label>Pizza Size
                <select name="size" value={values.size} onChange={onChange}>
                    <option value = "6inch">6inch</option>
                    <option value = "12inch">12inch</option>
                </select>
            </label>
            <br></br>
            <label>Mushrooms
                <input 
                type="checkbox"
                name="topping1"
                value={values.topping1}
                onChange={onChange}
                />
            </label>
            <br></br>
            <label>Pepperoni
                <input 
                type="checkbox"
                name="topping2"
                value={values.topping2}
                onChange={onChange}
                />
            </label>
            <br></br>
            <label>Sausage
                <input 
                type="checkbox"
                name="topping3"
                value={values.topping3}
                onChange={onChange}
                />
            </label>
            <br></br>
            <label>Parmesan
                <input 
                type="checkbox"
                name="topping4"
                value={values.topping4}
                onChange={onChange}
                />
            </label>
            <br></br>
            <label>
                Special Instructions
                <input 
                    type="text"
                    name="special"
                    value={values.special}
                    onChange={onChange}
                    />
            </label>
            <br></br>
            <button disabled={disabled} id="order">Order Now</button>
            <div style={{color:"red"}}>
                <p>{errors.name}</p>
            </div>
        </form>

    )
}