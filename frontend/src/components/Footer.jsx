import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

  return (
    <>
    <div className='mt-30 flex gap-3 sm:gap-50'>
        <div>
            <h1 className='font-bold text-xl mb-5'>Doc Appoint</h1>
            <p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam repudiandae temporibus ducimus provident corporis voluptas nulla quia eius aut, dolorem sit perspiciatis autem sunt quisquam similique. Voluptates, labore fuga!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fuga veniam amet sapiente recusandae, numquam reprehenderit dolores natus optio. Delectus, consectetur distinctio. Repellendus assumenda veniam officia, tenetur maiores porro natus?
            </p>
        </div>
        <div>
            <h1 className='mb-5 font-bold text-zinc-600'>COMPANY</h1>
            <div className='text-xs flex flex-col gap-3 text-zinc-500'>
            <p onClick={()=> navigate('/')} className='cursor-pointer hover:text-black'>Home</p>
            <p onClick={()=> navigate('/about')} className='cursor-pointer hover:text-black'>About Us</p>
            <p onClick={()=> navigate('/contact')} className='cursor-pointer hover:text-black'>Contact Us</p>
            <p onClick={()=> navigate('/privacy')} className='cursor-pointer hover:text-black'>Privacy Policy</p>
            </div>
        </div>
        <div className='min-w-40'>
            <h1 className='mb-5 font-bold text-zinc-600'>GET IN TOUCH</h1>
            <div className='text-xs flex flex-col gap-3 text-zinc-500'>
                <p>+1 3258745</p>
                <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjgCNwPGzqcqcRWmVqXcHsbtKcjZgJxLzmBttcrwfDMHjPJBKZvjMHkFLPfnKLZXhcDXnL' className='cursor-pointer hover:text-black'>dummy@m.com</a>
            </div>
        </div>
    </div>
    <hr className='my-15 min-w-fit text-gray-300' />
    <p className='text-center mb-5 text-gray-500'>Copyright &copy; Lorem ipsum dolor sit, amet consectetur .</p>
    </>
  )
}

export default Footer