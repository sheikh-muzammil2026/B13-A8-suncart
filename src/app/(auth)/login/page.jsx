'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';
import { Chrome } from 'lucide-react'; 

const LoginPage = () => {

    const handleLoginFunc = async(e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: '/',
        });

        if(error){
            toast.error(error.message || "Login failed!", {
                position: "top-right",
                autoClose: 3000,
            });
        }
    }

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    }

    return (
        <div className="container mx-auto min-h-[80vh] flex items-center justify-center px-4">
            <div className="w-full max-w-md mt-2">
                <form onSubmit={handleLoginFunc} className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50">
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black text-gray-800">Welcome Back</h2>
                        <p className="text-gray-400 mt-2 text-sm">Please enter your details to login</p>
                    </div>

                       {/* Google Login Button */}
                        <button 
                            type="button"
                            onClick={handleGoogleLogin}
                            className="btn w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-2xl h-12 font-semibold transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 shadow-sm"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            Continue with Google
                        </button>

                         {/* Divider */}
                        <div className="flex items-center my-6">
                            <div className="flex-grow border-t border-gray-100"></div>
                            <span className="px-3 text-gray-400 text-xs font-bold uppercase tracking-widest">OR</span>
                            <div className="flex-grow border-t border-gray-100"></div>
                        </div>


                    <div className="space-y-5">
                        {/* Email Field */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-gray-600">Email Address</span>
                            </label>
                            <input 
                                name='email'
                                type="email" 
                                placeholder="john.doe@example.com" 
                                className="input input-bordered w-full rounded-2xl focus:border-orange-400 focus:outline-none bg-gray-50 border-none h-12" 
                                required
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
                                required
                            />
                        </div>

                        {/* Login Button */}
                        <div className="pt-4">
                            <button type="submit" className="btn w-full bg-gray-900 hover:bg-orange-600 text-white border-none rounded-2xl h-12 font-bold transition-all duration-300 shadow-lg shadow-gray-200 active:scale-95">
                                Login
                            </button>
                        </div>

                       

                     

                        {/* Footer Section */}
                        <p className="text-center text-sm text-gray-500 pt-2">
                            Don&apos;t have an account? 
                            <Link href={'/register'}><span className="text-orange-500 font-bold ml-1 cursor-pointer hover:underline">Sign up</span></Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;