"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const LeftSidbar = ({user, onClose}) => {
    const {image, name, email} = user;

      const handleLogoutBtn = () =>{
          authClient.signOut();
          window.location.href = "/login";
        }

    return (
       <div className="fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-xl flex items-center justify-center gap-3 flex-col p-5 z-50">
            
                       <IoClose className='absolute top-2 right-2' cursor-pointer onClick={onClose}/>
            {/* User Avatar */}
                            <Image
                              
                              src={`${image || user?.picture ? user.image : "https://i.ibb.co.com/XrH9m4Zt/avatar.png"}`}
                              alt="user"
                              className="w-10 h-10 rounded-full border-2 border-orange-400"
                              width={40}
                              height={40}
                            />
                            <h1 className='font-bold'>{name}</h1>
                            <p className=''>{email}</p>
                             {/* Logout Button */}
                <button onClick={handleLogoutBtn}  className="btn bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg duration-300 w-full">
                  Logout
                </button>
       </div>
    );
};

export default LeftSidbar;