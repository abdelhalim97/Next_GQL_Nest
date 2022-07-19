import * as yup from "yup";
export const schema = yup.object().shape({
    username:yup.string().required('Type your username'),
    email:yup.string().email('Type your email').required('Type your email'),
    age:yup.number().typeError('You must specify a number').positive('Age has to be positive').required(),
    pass:yup.string().required('You have to type a pass').min(4,'Pass has to be longer then 4'),
    confirmPass:yup.string().oneOf([yup.ref("pass"), null]),
    phone:yup.number().typeError('You must specify a number').positive('Phone number has to be positive').min(8).required(),
    check:yup.boolean().oneOf([true], "You must accept the terms and conditions"),
})