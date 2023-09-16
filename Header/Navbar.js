
import React from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
  
    const router = useRouter()


    const Register = () => {
        router.push('/register')
    }

    const Login = () => {
        router.push('/login')
    }


  
    return (
    <>
    <div className="flex bg-white px-[24px] justify-between w-full items-center"> 

        <img src='../../swensens-logo-vector-xs.png' className='h-[70px] w-[100px]'/>
        <div className='inline-flex'>
            <button className="text-[#e21c23]  border border-[#e21c23] bg-white rounded-full px-4 py-2 w-[140px] h-[48px] mr-[24px]" onClick={Register}> สมัครสมาชิก </button>
            <button className="text-white bg-[#e21c23] rounded-full px-4 py-2 w-[140px] h-[48px]" onClick={Login}> เข้าสู่ระบบ </button>
        </div>
    </div>
    </>
    
  )
}

export default Navbar