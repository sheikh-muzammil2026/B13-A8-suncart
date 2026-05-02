"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const UpdateProfileModal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

 const handleUpdateProfileFunc = async (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const name = e.target.name.value;

    try {
       
        const { data, error } = await authClient.updateUser({
            image,
            name
        });

        if (error) {
            toast.error("Update failed:", error.message);
            return;
        }

        // আপডেট সফল হলে মডেলটি বন্ধ
        onClose(); 
        toast.success("Profile updated successfully!")

    } catch (err) {
        toast.error("An unexpected error occurred:", err);
    }
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
        
        <form onSubmit={handleUpdateProfileFunc} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input 
              type="text" 
              name="name"
              defaultValue={user?.name} 
              className="w-full border p-2 rounded" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input 
              type="url" 
              name="image"
              defaultValue={user?.image} 
              className="w-full border p-2 rounded" 
            />
          </div>
          
          <div className="flex justify-end gap-2 mt-4">
            <button 
            
              type="button" 
              onClick={onClose} 
              className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
            >
              Close
            </button>
            <button 
              type="submit" 
            //   onClick={()=> setIsModalOpen(false)} 
              className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileModal;