"use client"
import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
            {/* মেইন স্পিনার এনিমেশন */}
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
                <div className="absolute inset-2 border-4 border-blue-100 border-t-blue-400 rounded-full animate-spin-slow"></div>
            </div>

            {/* টেক্সট এনিমেশন */}
            <div className="flex flex-col items-center">
                <h2 className="text-xl font-semibold text-gray-700 animate-pulse">
                    Suncart
                </h2>
                <p className="text-sm text-gray-500 tracking-widest">
                    Product details loading...
                </p>
            </div>

            {/* কাস্টম এনিমেশনের জন্য স্টাইল */}
            <style jsx>{`
                .animate-spin-slow {
                    animation: spin 2s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Loading;