'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const RegisterPage = () => {
        const router = useRouter();

    const handleSinupFunc = async(e) =>{
       e.preventDefault();
       const name = e.target.name.value;
       const email = e.target.email.value;
       const password = e.target.password.value;
    //    console.log(name, email, password, "from register page")

       const {data, error} = await authClient.signUp.email(
        {
        name: name, // required
        email: email, // required
        password: password, // required
        callbackURL: "/",
       },
       {
        onRequest: (ctx) => {
            //show loading
        },
        onSuccess: (ctx) => {
            //redirect to the dashboard or sign in page
            router.push('/')
        },
        onError: (ctx) => {
            // display the error message
            alert(ctx.error.message);
        },
    });
    
    
      
    }
    
    return (
            <div className="container mx-auto min-h-[80vh] flex items-center justify-center px-4 py-20">
    <div className="w-full max-auto max-w-md">
        <form onSubmit={handleSinupFunc} className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-black text-gray-800">Welcome Back</h2>
                <p className="text-gray-400 mt-2 text-sm">Please enter your details to Sing up</p>
            </div>

            <div className="space-y-5">
                {/* Name Field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold text-gray-600">User Name</span>
                    </label>
                    <input 
                        name="name"
                        type="text" 
                        placeholder="Jhon" 
                        className="input input-bordered w-full rounded-2xl focus:border-orange-400 focus:outline-none bg-gray-50 border-none h-12" 
                    />
                </div>

                {/* Email Field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold text-gray-600">Email Address</span>
                    </label>
                    <input 
                        name='email'
                        type="email" 
                        placeholder="example@mail.com" 
                        className="input input-bordered w-full rounded-2xl focus:border-orange-400 focus:outline-none bg-gray-50 border-none h-12" 
                    />
                </div>

                {/* Password Field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold text-gray-600">Password</span>
                        <span className="label-text-alt text-orange-500 font-medium cursor-pointer hover:underline">Forgot?</span>
                    </label>
                    <input 
                        name='password'
                        type="password" 
                        placeholder="••••••••" 
                        className="input input-bordered w-full rounded-2xl focus:border-orange-400 focus:outline-none bg-gray-50 border-none h-12" 
                    />
                </div>

                {/* Login Button */}
                <div className="pt-4">
                    <button className="btn w-full bg-gray-900 hover:bg-orange-500 text-white border-none rounded-2xl h-12 font-bold transition-all duration-300 shadow-lg shadow-gray-200 hover:shadow-orange-200 active:scale-95">
                        Sing up
                    </button>
                </div>

                {/* Footer Section */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Already hove an account? 
                    <Link href={'/login'}><span className="text-orange-500 font-bold ml-1 cursor-pointer hover:underline">Login</span></Link>
                </p>
            </div>
        </form>
    </div>
</div>
    );
};

export default RegisterPage;