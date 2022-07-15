import { TextField } from '@mui/material'
import React from 'react'
import { ChangeHandler, RefCallBack } from 'react-hook-form';
import { Error } from './error';

type Props={
  label:string,
    name:{ onChange: ChangeHandler; onBlur: ChangeHandler; ref: RefCallBack },
    message?:string  ,
    error?:any,
}
export const InputCustom = ({label,name,error,message}:Props) => {
  return (
    <>
        <div className='text-sec mt-3 font-bold text-sm'>{label}</div>
        <TextField size='small' {...name} className='bg-white outline-none rounded-sm w-full mt-3' />
        {error &&<Error error={message}></Error>}
    </>
    

  )
}
