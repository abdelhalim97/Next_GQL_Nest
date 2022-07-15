export type Props = {
    openSignupModal:boolean,
    setOpenSignupModal: (state:boolean) => void,
    setOpenSigninModal: (state:boolean) => void
    }
export type FormValues = {
    username:string,
    email:string,
    age:string,
    pass:string,
    confirmPass:string,
    phone:any,
    check:boolean,
    }