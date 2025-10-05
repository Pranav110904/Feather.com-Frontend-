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
  const handleClose = () => (onClose ? onClose() : console.log("Flow closed/redirected."));

  return (
    <div className="relative w-screen h-screen overflow-hidden font-syne">

      {/* Background Image */}
      <div className="background-image absolute top-0 left-0 w-full h-full"></div>


      {/* Content Layer */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 relative z-10 text-white">

        {/* Glass Card */}
        <div className="glass-card w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl">

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 left-4 text-gray-300 hover:text-white text-2xl sm:text-3xl font-bold"
          >
            ×
          </button>

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-6 px-2 sm:px-0">
            <div className="w-full flex justify-center items-center mt-6 sm:mt-10 mb-4 sm:mb-6">
              <BsFeather className="text-white text-4xl sm:text-5xl md:text-6xl" />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              Select language
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-base">
              You'll be able to see posts, people, and trends in any language you choose.
            </p>
          </div>

          {/* Language List */}
          <div className="flex flex-col max-h-[35vh] sm:max-h-[25vh] md:max-h-[30vh] overflow-y-auto pr-2 sm:pr-0">
            {availableLanguages.map((lang) => {
              const isSelected = selectedLanguage === lang.name;
              return (
                <div
                  key={lang.name}
                  onClick={() => handleLanguageSelect(lang.name)}
                  className={`flex justify-between items-center py-3 px-4 cursor-pointer border-b border-white/20 rounded-xl transition-all duration-300 ${
                    isSelected
                      ? "bg-[#1D9BF0]/80 border-[#1D9BF0]/60 shadow-lg shadow-[#1D9BF0]/40"
                      : "bg-[#35353590] border-white/20 hover:bg-white/20 hover:border-white/40 backdrop-blur-md"
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
              color={`${
                selectedLanguage
                  ? "bg-[#1D9BF0]/80 text-white hover:bg-[#1D9BF0] hover:shadow-lg hover:shadow-[#1D9BF0]/40"
                  : "bg-[#1D9BF0]/30 text-white cursor-not-allowed"
              } w-full sm:w-48 py-3 backdrop-blur-md border border-[#1D9BF0]/40`}
              disabled={!selectedLanguage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;
