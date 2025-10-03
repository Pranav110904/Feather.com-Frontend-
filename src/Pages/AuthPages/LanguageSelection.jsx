import { useState } from "react";
import { BsFeather } from "react-icons/bs";
import RoundedButton from "../../components/RoundedButton";

const LanguageSelection = ({ onComplete, onClose }) => {
  const availableLanguages = [
    { name: "English", local: "" },
    { name: "Bangla", local: "বাংলা" },
    { name: "Gujarati", local: "ગુજરાતી" },
    { name: "Hindi", local: "हिन्दी" },
    { name: "Kannada", local: "ಕನ್ನಡ" },
    { name: "Malayalam", local: "മലയാളം" },
    { name: "Marathi", local: "मराठी" },
    { name: "Nepali", local: "नेपाली" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageSelect = (languageName) => setSelectedLanguage(languageName);

  const handleNext = () => selectedLanguage && onComplete && onComplete(selectedLanguage);

  const handleClose = () => onClose ? onClose() : console.log("Flow closed/redirected.");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1f1f1f] text-white px-4 sm:px-6 lg:px-8 font-syne">
      <div className="bg-black w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col relative">

        {/* Close Button */}
        <div className="absolute top-4 left-4 z-10">
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white text-2xl sm:text-3xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Feather Icon */}
        <div className="w-full flex justify-center items-center mt-6 sm:mt-10 mb-4 sm:mb-6">
          <BsFeather className="text-white text-4xl sm:text-5xl md:text-6xl" />
        </div>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-4 sm:mb-6 px-2 sm:px-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Select language
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-base">
            You'll be able to see posts, people, and trends in any language you choose.
          </p>
        </div>

        {/* Language List */}
        <div className="flex flex-col  max-h-[35vh] sm:max-h-[25vh] md:max-h-[30vh] overflow-y-auto pr-2 sm:pr-0">
          {availableLanguages.map((lang) => {
            const isSelected = selectedLanguage === lang.name;
            return (
              <div
                key={lang.name}
                onClick={() => handleLanguageSelect(lang.name)}
                className={`flex justify-between items-center py-3 px-4 cursor-pointer border-b border-gray-800 rounded transition-colors duration-150 ${
                  isSelected ? "bg-[#1D9BF0]" : "hover:bg-gray-800"
                }`}
              >
                <p className="text-white text-base sm:text-lg md:text-lg font-medium">
                  {lang.name}{" "}
                  {lang.local && (
                    <span className="text-gray-300 ml-2 font-normal text-sm sm:text-base md:text-base">
                      - {lang.local}
                    </span>
                  )}
                </p>
                {isSelected && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-6 flex justify-center">
          <RoundedButton
            onClick={handleNext}
            label="Next"
            color="bg-white text-black hover:bg-gray-200 w-full sm:w-48 py-3"
          />
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;
