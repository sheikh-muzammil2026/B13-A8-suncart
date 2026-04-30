'use client'

const Loading = () => {
    return (
        <div className="min-h-[70vh] w-full flex flex-col items-center justify-center space-y-6">
            {/* Unique Animated Sun Loader */}
            <div className="relative flex items-center justify-center">
                {/* Outer Glow */}
                <div className="absolute w-20 h-20 bg-orange-200 rounded-full animate-ping opacity-20"></div>
                
                {/* Main Sun Circle */}
                <div className="relative w-16 h-16 bg-gradient-to-tr from-orange-400 to-yellow-300 rounded-full shadow-lg shadow-orange-100 flex items-center justify-center animate-bounce">
                    <span className="text-2xl">🕶️</span>
                </div>

                {/* Rotating Rays */}
                <div className="absolute inset-0 w-24 h-24 border-4 border-dashed border-orange-300 rounded-full animate-[spin_4s_linear_infinite]"></div>
            </div>

            {/* Fun Text Message */}
            <div className="text-center">
                <h2 className="text-xl font-bold text-gray-800 tracking-tight animate-pulse">
                    Preparing your summer...
                </h2>
                <p className="text-sm text-gray-400 mt-1 font-medium">
                    Finding the best products for you
                </p>
            </div>

            {/* Minimal Progress Bar */}
            <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 rounded-full animate-[loading_1.5s_ease-in-out_infinite] origin-left"></div>
            </div>

            <style jsx>{`
                @keyframes loading {
                    0% { transform: scaleX(0); }
                    50% { transform: scaleX(1); }
                    100% { transform: scaleX(0); transform-origin: right; }
                }
            `}</style>
        </div>
    );
};

export default Loading;