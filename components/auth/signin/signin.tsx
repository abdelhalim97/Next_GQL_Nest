import React from 'react'
import { Box, Button, Checkbox, Container, Modal } from '@mui/material'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {Props,FormValues} from './signin.types'
import {schema} from './signin.schema'
import { InputCustom } from '../../reusble';
 const SignIn = ({openSiginModal,setOpenSignupModal,setOpenSigninModal}:Props) => {
    const handleClose = () =>{setOpenSigninModal(false)}
    const { register, handleSubmit,  formState: { errors } } = useForm<FormValues>({
      resolver: yupResolver(schema)
    });
    const submitForm = (data:FormValues) => {
    console.log(errors)
    };
    const formData = [
    {id:0,
      label:'Email',
    name:{...register("email", { required: true })},
    message:errors.email?.message,
    error:errors.email
    },

    {id:2,
      label:'Password',
    name:{...register("pass", { required: true })},
    message:errors.pass?.message,
    error:errors.pass
    },
  ]
  const handleGoSignIn = () =>{
    setOpenSignupModal(false)
    setOpenSigninModal(true)
  }
  const handleGoSignUp = () =>{
    setOpenSignupModal(true)
    setOpenSigninModal(false)
  }
  return (
    <Modal
        open={openSiginModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          <Container maxWidth='xs' sx={{display:'flex',alignItems:'center',width:'100%',height:'100vh'}}>
            <Box component='div' sx={{width:'100%',height:'75vh'}} className='bg-st rounded-md text-st px-2 overflow-y-auto'>
              <form onSubmit={handleSubmit(submitForm)}>
                <div className='text-center text-fourth mt-3'>Join LiveWitch today</div>
                <Box className='flex justify-start mt-3'>
                <div onClick={handleGoSignIn} className={`bg-th text-sec px-2 font-bold cursor-pointer mr-2 border-sec ${openSiginModal&&'border-b-2'}`}>Log in</div>
                  <div onClick={handleGoSignUp} className={`bg-th text-sec px-2 font-bold cursor-pointer border-sec ${!openSiginModal&&'border-b-2'}`}>Sign Up</div>
                </Box>
                {formData.map(data=>
                <InputCustom key={data.id} label={data.label} name={data.name} message={data.message} error={data.error} />
                  )}
                  
                <Button variant='contained' type="submit" id="submit" className='w-full bg-th text-sec my-3 hover:bg-th'>Sign In</Button>
                {/* material submit button */}
              </form>
            </Box>
          </Container>
      </Modal>
  )
}
export default SignIn