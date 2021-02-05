import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './form';
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema'
import User from './user'

const intitialformvalues = {
  // strings
  name:'',
  email:'',
  password:'',
  // check box
  terms: false,
}
const initialFormErrors = {
  name:'',
  email:'',
  password:'',
  terms: '',
}
export default function App() {
  const [Users, setUsers] = useState({});
  const [formValues, setFormValues]= useState(intitialformvalues);
  const [formErrors, setFormErrors]= useState(initialFormErrors);
  const [disabled, setDisabled]= useState(true);


  const getUsers = () =>{
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data);
        console.log(Users);
      })
      .catch(err =>{
        console.log(err);
      })
  }

  const addNewUser = newuser => {
    axios.post('https://reqres.in/api/users', newuser)
      .then(res=>{
        setUsers(res.data)
        setFormValues(intitialformvalues)
        console.log(Users)
      })
      .catch(err => {
        debugger
      })
      .finally(()=>{

      })
  }

  const validate = (name, value) => {
    yup
      .reach(schema, name)

      .validate(value)

      .then(valid =>{
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  const formSubmit = () => {
    const newuser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    addNewUser(newuser)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div className="App">
      <header></header>
      <Form
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}/>

      <User details={Users}/>
    </div>


  );
}

