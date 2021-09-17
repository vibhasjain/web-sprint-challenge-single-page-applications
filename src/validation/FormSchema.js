import * as yup from 'yup';

const formSchema = yup.object().shape({

    name:yup
        .string()
        .trim()
        .required('Whats your name???'),
    size:yup
        .string(),
    topping1:yup
        .boolean(),
    topping2:yup
        .boolean(),
    topping3:yup
        .boolean(),
    topping4:yup
        .boolean(),
    special:yup
        .string()
        .trim()
    })

export default formSchema;