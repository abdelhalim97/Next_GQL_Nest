import * as yup from "yup";
export const schema = yup.object().shape({
    email:yup.string().email('Type your email').required('Type your email'),
    pass:yup.string().required('you have to type a pass').min(4,'Pass has to be longer then 4'),
})