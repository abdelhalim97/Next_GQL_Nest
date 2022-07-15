import React from 'react'
import { Box, Button, Checkbox, Container, Modal, TextField } from '@mui/material'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {Props,FormValues} from './signup.types'
import {schema} from './signup.schema'
import { Error, InputCustom } from '../../reusble';
 const SignUp = ({openSignupModal,setOpenSignupModal,setOpenSigninModal}:Props) => {
    const handleClose = () =>{setOpenSignupModal(false)}
    const { register, handleSubmit,  formState: { errors } } = useForm<FormValues>({
      resolver: yupResolver(schema)
    });
    const submitForm = (data:any) => {
    console.log(errors)
    };
    
  const handleGoSignIn = () =>{
    setOpenSignupModal(false)
    setOpenSigninModal(true)
  }
  const handleGoSignUp = () =>{
    setOpenSignupModal(true)
    setOpenSigninModal(false)
  }
  const formData = [{
    id:0,
    label:'Username',
    name:{...register("username", { required: true })},
    message:errors.username?.message,
    error:errors.username,
    },
    {id:1,
      label:'Email',
    name:{...register("email", { required: true })},
    message:errors.email?.message,
    error:errors.email
    },
    {id:2,
      label:'Age',
    name:{...register("age", { required: true })},
    message:errors.age?.message,
    error:errors.age
    },
    {id:3,
      label:'Password',
    name:{...register("pass", { required: true })},
    message:errors.pass?.message,
    error:errors.pass
    },
    {id:4,
    label:'Confirm Password',
    name:{...register("confirmPass", { required: true })},
    message:"Type the same passwords!",
    error:errors.confirmPass
    },]
  return (
    <Modal
        open={openSignupModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Container maxWidth='xs' sx={{display:'flex',alignItems:'center',width:'100%',height:'100vh'}}>
          <Box component='div' sx={{width:'100%',height:'75vh'}} className='bg-st rounded-md text-st px-2 overflow-y-auto'>
            <form onSubmit={handleSubmit(submitForm)}>
              <div className='text-center text-fourth mt-3'>Join LiveWitch today</div>
              <Box className='flex mt-3'>
                <div onClick={handleGoSignIn} className={`bg-th text-sec px-2 font-bold cursor-pointer mr-2 border-sec ${!openSignupModal&&'border-b-2 '}`}>Log in</div>
                <div onClick={handleGoSignUp} className={`bg-th text-sec px-2 font-bold cursor-pointer border-sec ${openSignupModal&&'border-b-2 '}`}>Sign Up</div>
              </Box>
              {formData.map(data=>
              <InputCustom key={data.id} label={data.label} name={data.name} message={data.message} error={data.error} />
                )}
                <div className='text-sec mt-3 font-bold text-sm'>Phone number</div>
                <TextField size='small' {...register("phone")} className='bg-white outline-none rounded-sm w-full mt-3' />
                {errors.phone &&<Error error={errors.phone?.message}></Error>}
                  <div className='flex items-center'>
                    <Checkbox {...register("check")} className='text-sec' color='secondary' />
                    <div className='text-sec font-bold '>agreed on terms and services</div>
                  </div>
                {errors.check &&<Error error={errors.check?.message}></Error>}
              <Button type="submit" id="submit" className='w-full bg-th text-sec my-3'>Sign up</Button>
            </form>
          </Box>
        </Container>
      </Modal>
  )
}
export default SignUp