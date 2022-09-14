import { NextPage } from 'next';
import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import Link from 'next/link'

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
    const [userInfo, setUserInfo] = useState({email: "", password: ""})
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const res = await signIn('credentials', {
            email: userInfo.email,
            password: userInfo.password,
            redirect: false
        });

        console.log(res);
    };
    return (
    <div className='pb-20 bg-slate-200'>
        <form onSubmit={handleSubmit}>
            <h1 className='pt-10 pb-6 text-center font-bold text-3xl'>Log In</h1>
            <div className='text-center'>
                <div className='text-lg text-center'>Email:</div>
                <input className='text-lg text-center'
                value={userInfo.email}
                onChange={({ target }) =>
                    setUserInfo({ ...userInfo, email: target.value})
                } 
                type='email' 
                placeholder='raf@gmail.com'/>
                <div className='text-md text-center'>Password:</div>
                <input className='text-lg text-center'
                value={userInfo.password}
                onChange={({ target }) =>
                    setUserInfo({ ...userInfo, password: target.value})
                } 
                
                type='password' 
                placeholder='********'/>
                <div className='text-md text-center mt-6'></div>
                <input className='text-lg rounded bg-black text-white cursor-pointer p-1'
                type='submit' 
                placeholder='Login'/>
            </div>
        </form>
    </div>
    );
    
};
export default SignIn;