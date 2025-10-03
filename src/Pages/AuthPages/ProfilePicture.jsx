import  { useState } from "react";
import { Camera } from "lucide-react";
import { BsFeather } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import RoundedButton from "../../components/RoundedButton";

const ProfilePictureSetup = ({ formData, onComplete }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleAction = () => {
    console.log("Profile Picture action:", imagePreview ? "Uploaded" : "Skipped");
    if (onComplete) onComplete();
  };

  const handleClose = () => {
    navigate("/"); // redirect to login page
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen font-syne bg-[#1f1f1f] text-white px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
      <div className="bg-black w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto rounded-3xl p-6 sm:p-10 flex flex-col justify-start items-center relative">

        {/* Feather Icon centered at top */}
        <div className="w-full flex justify-center items-center mb-6 sm:mb-8 lg:mb-12">
          <BsFeather className="text-white text-5xl sm:text-6xl lg:text-7xl" />
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-white text-2xl sm:text-3xl font-bold"
        >
          ✕
        </button>

        {/* Header */}
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-center">
          Pick a profile picture
        </h1>
        <p className="text-gray-400 mb-6 text-center text-sm sm:text-base">
          Have a favorite selfie? Upload it now.
        </p>

        {/* Profile Upload */}
        <div className="relative mb-8 sm:mb-10 lg:mb-12">
          <div className="w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-[#353535] rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-700 transition-all duration-200">
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <svg className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            )}
          </div>

          <label htmlFor="profile-upload" className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black bg-opacity-25 hover:bg-opacity-40 rounded-full transition-all duration-200">
            <Camera className="text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
          </label>
          <input id="profile-upload" type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
        </div>

        {/* Action Button */}
        <RoundedButton
          label={imagePreview ? "Continue" : "Skip for now"}
          onClick={handleAction}
          color="bg-[#1D9BF0] text-white hover:bg-[#54b2ff] w-full sm:w-auto px-6 py-3"
        />
      </div>
    </div>
  );
};

export default ProfilePictureSetup;
