export type Props = {
    openSiginModal:boolean,
    setOpenSignupModal: (state:boolean) => void,
    setOpenSigninModal: (state:boolean) => void
    }
export type FormValues = {
    email:string,
    pass:string,
    }