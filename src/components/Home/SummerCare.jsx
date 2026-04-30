import React from 'react';

const SummerCare = () => {
    return (
        <div>
               {/* Summer Care Tips Section */}
<section className="py-12 bg-orange-50 mt-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
      ☀️ Summer Care Tips
    </h2>
 

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Tip 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-orange-500">
        <div className="text-4xl mb-4">💧</div>
        <h3 className="text-xl font-semibold mb-2">Stay Hydrated</h3>
        <p className="text-gray-600">গরম থেকে বাঁচতে দিনে অন্তত ৩-৪ লিটার পানি পান করুন। সাথে ডাব বা লেবুর শরবত রাখতে পারেন।</p>
      </div>

      {/* Tip 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-orange-500">
        <div className="text-4xl mb-4">🧴</div>
        <h3 className="text-xl font-semibold mb-2">Skin Protection</h3>
        <p className="text-gray-600">বাইরে বের হওয়ার ২০ মিনিট আগে অবশ্যই SPF 50 সানস্ক্রিন ব্যবহার করুন ত্বককে রক্ষা করতে।</p>
      </div>

      {/* Tip 3 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-orange-500">
        <div className="text-4xl mb-4">👕</div>
        <h3 className="text-xl font-semibold mb-2">Wear Cotton</h3>
        <p className="text-gray-600">আরামদায়ক ও হালকা রঙের সুতির পোশাক পরুন যা বাতাস চলাচল করতে সাহায্য করবে।</p>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default SummerCare;