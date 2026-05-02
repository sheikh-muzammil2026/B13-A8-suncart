"use client";

import RegistredDataLoading from "@/app/(auth)/register/loading";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


const ProfilePage = () => {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const { data: session, isPending } = authClient.useSession();

    useEffect(() => {
    setMounted(true);
        }, []);
   
    // ইউজার লগইন না থাকলে রিডাইরেক্ট করা
    useEffect(() => {
        if (mounted && !isPending && !session?.user) {
            router.push("/login");
        }
    }, [session, isPending, router, mounted]);

    // ১. মাউন্ট হওয়ার আগে কিছু দেখাবে না (Hydration safe)
    if (!mounted) return null;

    // ২. সেশন লোড হওয়ার সময়  কাস্টম লোডিং দেখাবে
    if (isPending) {
        return <RegistredDataLoading />;
    }

    // ৩. ইউজার না থাকলে কিছুই দেখাবে না (রিডাইরেক্ট হওয়া পর্যন্ত)
    if (!session?.user) {
        return null;
    }

    const user = session.user;

    const handleLogout = async () => {
        try {
            await authClient.signOut();
            toast.success("Logged out successfully!");
            router.push("/login");
        } catch (error) {
            toast.error("Something went wrong during logout.");
        }
    };

    return (
        <div className="min-h-[80vh] bg-gray-50 py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                    {/* Header Banner */}
                    <div className="h-32 bg-gradient-to-r from-orange-400 to-orange-600"></div>

                    <div className="px-8 pb-10">
                        <div className="relative flex justify-between items-end -mt-12 mb-6">
                            <div className="p-1 bg-white rounded-full shadow-sm">
                                <Image
                                    src={user.image || "https://i.ibb.co.com/XrH9m4Zt/avatar.png"}
                                    alt="Profile"
                                    width={120}
                                    height={120}
                                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white"
                                />
                            </div>
                            
                            <button 
                                onClick={handleLogout}
                                className="btn bg-red-50 hover:bg-red-100 text-red-600 border-none rounded-2xl px-6 h-12"
                            >
                                Logout
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-black text-gray-800">{user.name}</h1>
                                <p className="text-gray-500 font-medium">
                                    Member since {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-2">Email Address</p>
                                    <p className="text-gray-700 font-semibold">{user.email}</p>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-2">Verification</p>
                                    <div className="flex items-center gap-2">
                                        <span className={`w-2.5 h-2.5 rounded-full ${user.emailVerified ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                        <p className="text-gray-700 font-semibold">
                                            {user.emailVerified ? "Verified" : "Pending"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default ProfilePage;