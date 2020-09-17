import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
    .required('The name is required')
    .min(3, 'come on your names not that short'),
  email: yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup.string()
    .required('Password is require'),
    terms: yup.boolean()
    .oneOf([true], "You know how terms and conditions work"),
})