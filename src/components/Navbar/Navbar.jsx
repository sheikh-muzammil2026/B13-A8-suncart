"use client";

import RegistredDataLoading from "@/app/(auth)/register/loading";
import { authClient } from "@/lib/auth-client";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import LeftSidbar from "../sidbar/leftSidbar";

const Navbar = () => {

  const [show, setShow] = useState(false);
  
  const [showRegister, setShowRegister] = useState(false);
  const [showHambarIcon, setShowHmabarIcon] = useState(false);

   const { 
        data: session, 
        isPending, 
    } = authClient.useSession() 

    if (isPending) return <RegistredDataLoading/>

    const user = session?.user;
   
    const handleLogoutBtn = () =>{
      authClient.signOut();
      window.location.href = "/login";
    }

    const handleProfileIcon = () =>{
      setShow(!show)

    }

    const handleUserIcon = () =>{
     setShowRegister(!showRegister);
      
    }

    const handleHmabarIcon = () =>{
          setShowHmabarIcon(!showHambarIcon)
    }

  return (
    <nav className="bg-white shadow-md">
      
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">

          <IoMenu onClick={()=> handleHmabarIcon()} className="md:hidden" />
        {/* Logo */}
        <div className="text-center md:text-left">
          
          <Link
            href="/"
            className="text-3xl font-bold text-orange-500"
          >
            SunCart
          </Link>
        </div>

        {/* Nav Links medium divice*/}
        <ul className="hidden md:flex items-center gap-6 font-medium">

          <li>
            <Link
              href="/"
              className="hover:text-orange-500 duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/products"
              className="hover:text-orange-500 duration-300"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className="hover:text-orange-500 duration-300"
            >
              My Profile
            </Link>
          </li>

        </ul>

         {/* Nav Links small divice*/}
        {
          showHambarIcon && (<div className="fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-xl flex items-center justify-center gap-3 flex-col p-5 z-50">

          <IoClose className='absolute top-2 right-2' cursor-pointer onClick={()=> setShowHmabarIcon(false)} />
         <ul >

          <li>
            <Link
              href="/"
              className="hover:text-orange-500 duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/products"
              className="hover:text-orange-500 duration-300"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className="hover:text-orange-500 duration-300"
            >
              My Profile
            </Link>
          </li>

        </ul>
        </div>)
        }
        
       

        {/* Right Side medium divice */}
        <div className={`hidden md:flex items-center gap-4`}>


          {/* profile */}

          {
            user ? (
              <>
              <h1>Hello, {user.name}</h1>
                {/* User Avatar */}
                <Image
                  src={`${user?.image || user?.picture ? user.image : "https://i.ibb.co.com/XrH9m4Zt/avatar.png"}`}
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-orange-400"
                  width={40}
                  height={40}
                />

                {/* Logout Button */}
                <button onClick={handleLogoutBtn}  className="hidden md:flex btn carsor-pointer bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg duration-300">
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Login Button */}
                <Link href="/login">
                  <button className="btn cursor-pointer border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-5 py-2 rounded-lg duration-300">
                    Login
                  </button>
                </Link>

                {/* Register Button */}
                <Link href="/register">
                  <button className="btn cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg duration-300">
                    Register
                  </button>
                </Link>
              </>
            )
          }
               {/* profile on small divice*/}
        </div>

        {/* Right Side for small divice*/}
        <div className="md:hidden">
          {
          show && <LeftSidbar onClose={()=> setShow(false)} user={user}/>
        }

        {
          user ? 
          <>

                {/* User Avatar */}
                <Image
                  onClick={()=> handleProfileIcon()}
                  src={`${user?.image || user?.picture ? user.image : "https://i.ibb.co.com/XrH9m4Zt/avatar.png"}`}
                  alt="user"
                  className={`${show ? "hidden" : "w-10 h-10 rounded-full border-2 border-orange-400" }`}
                  width={40}
                  height={40}
                />
          </>
          :
          <User onClick={()=> handleUserIcon()} />
        }

        {
          showRegister && (<div className="fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-xl flex items-center justify-center gap-3 flex-col p-5 z-50">
                {/* Login Button */}
                 <IoClose className='absolute top-2 right-2' cursor-pointer onClick={()=> setShowRegister(false)}/>
                <Link href="/login">
                  <button className="btn cursor-pointer border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-5 py-2 rounded-lg duration-300">
                    Login
                  </button>
                </Link>

                {/* Register Button */}
                <Link href="/register">
                  <button className="btn cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg duration-300">
                    Register
                  </button>
                </Link>
              </div>)
              
        }

        </div>
      </div>

    </nav>
  );
};

export default Navbar;

// logo er age ekbar hambar use korbo . small divice er jonno.
// logoo er pore ekta user profile icone use korbo. 
// ei 2 ti icon er upor clcik korle router and profile dekhabe.

// user profile in right sidbar
/**
 * 1. image er upor click korle right sidbar asbe.
 * 2. rigth sidbar e thakbe upore image, er nice name, er ncie email, myprofile, logut.
 * */ 

// router page in leftbar
/**
 * 1. hambar e click korle asbe home page, products, about us.
 * */ 


// useState ans image show-off kora
/**
 * 1. show, setShow nilam. zokhon show true hobe tokhon leftsidbar asbe, r zokhon show false hobe shurute image dekhabe. sateh onclose props er moddhe click korle show ta false hoye zabe.
 * 2. component er vitore keu onclose e click korleo colbe.
 * */  