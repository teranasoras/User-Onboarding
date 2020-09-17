import React from 'react';


export default function Form(props){
const{
    values,
    submit,
    change,
    disabled,
    errors,
}= props;
const Submit = evt =>{
    evt.preventDefault()
    submit()
}

const onChange = evt =>{
    const {name, value, type, checked}= evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
}

return(
    <form className = 'formholder' onSubmit={Submit}>
        <div className = 'submitarea'>
        <h2>add a new user</h2>;
        <button disabled={disabled}>Submit</button>;
        <div className='errors'>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.terms}</div>
        </div>
        </div>

    <div className = 'inputs'>
        <label>Name
        <input 
            value= {values.name}
            onChange={onChange}
            name='name'
            type='text'/>
            </label>
            <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>
        <label>Password
        <input 
            value= {values.password}
            onChange={onChange}
            name='password'
            type='text'/>
            </label>

            <label>terms
          <input
            type="checkbox"
            name='terms'
            checked={values.terms}
            onChange={onChange}
          />
        </label>
    </div>

    </form>
)
}