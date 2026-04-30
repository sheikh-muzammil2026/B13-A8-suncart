"use client";


const Hero = () => {
  return (
    <section className="container mx-auto ">

    

      <div
  className="hero min-h-screen"
  style={{
      backgroundImage: "url(https://i.ibb.co.com/4Rndjkjk/heroback-Image.png)",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
  }}
>

  <div className="hero-overlay bg-black/40"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
        <p className="text-orange-500 font-semibold mb-3">
            HOT DEALS 🔥
          </p>
      <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
            Summer Sale
            <span className="text-[#FF7F50] block md:inline"> 50% OFF</span>
          </h1>
     
       <p className="mt-5 text-gray-100 text-lg font-medium">
            Discover trendy summer outfits, sunglasses,
            sandals and more for your perfect summer vibe.
          </p>
          
    
     <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
        <button className="bg-[#FF7F50] hover:bg-[#ff6a33] text-white px-8 py-3 rounded-xl font-bold transition duration-300 transform hover:scale-105 shadow-lg">
              Shop Now
            </button>

            <button className="border-2 border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-white px-8 py-3 rounded-xl font-bold transition duration-300">
              Explore Deals
            </button>

     </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default Hero;