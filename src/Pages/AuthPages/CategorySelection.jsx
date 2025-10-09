import { useState } from "react";
import RoundedButton from "../../components/UIComponents/RoundedButton";

const CategorySelection = ({ onComplete, onClose }) => {
  const availableCategories = [
    "News",
    "Sports",
    "Music",
    "Dance",
    "Celebrity",
    "Relationships / Lifestyle",
    "Movies & TV",
    "Technology",
    "Business / Finance",
    "Politics",
    "Gaming",
    "Hobbies & DIY",
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const MIN_SELECTIONS = 5;

  const handleCategoryToggle = (categoryName) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handleNext = () => {
    if (selectedCategories.length >= MIN_SELECTIONS && onComplete) {
      onComplete(selectedCategories);
    } else {
      console.error(`Please select at least ${MIN_SELECTIONS} categories.`);
    }
  };

  const handleClose = () =>
    onClose ? onClose() : console.log("Flow closed/redirected.");

  const isNextDisabled = selectedCategories.length < MIN_SELECTIONS;

  return (
    <div className="relative w-screen h-screen overflow-hidden font-syne">
      {/* Background Layer */}
      <div className="background-image absolute top-0 left-0 w-full h-full"></div>

      {/* Content Layer */}
      <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Frosted Glass Card */}
        <div className="glass-card w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col relative shadow-2xl">

          {/* Cross Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 left-4 text-gray-400 hover:text-white text-2xl sm:text-3xl font-bold"
          >
            ×
          </button>

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-6 px-2 sm:px-0">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
              What do you want to see on Feather?
            </h1>
            <p className="text-gray-300 text-sm sm:text-base">
              Choose what you like, and we'll customize your experience.
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-grow overflow-y-auto max-h-[50vh] mb-6">
            {availableCategories.map((category) => {
              const isSelected = selectedCategories.includes(category);
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryToggle(category)}
                  className={`
                    h-24 sm:h-28 md:h-32 rounded-xl text-white font-semibold 
                    text-sm sm:text-base p-3 flex items-end justify-start 
                    transition-all duration-300 border 
                    ${
                      isSelected
                        ? "bg-[#1D9BF0]/80 border-[#1D9BF0]/60 shadow-lg shadow-[#1D9BF0]/40 "
                        : "bg-[#35353590] border-white/20 hover:bg-white/20 hover:border-white/40 backdrop-blur-md"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Bottom Counter and Action Button */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-400 mb-4 self-start">
              {selectedCategories.length} of {MIN_SELECTIONS} selected
            </p>
            <RoundedButton
              onClick={handleNext}
              label={"Next"}
              color={`${
                isNextDisabled
                  ? "bg-[#1D9BF0]/30 text-white cursor-not-allowed"
                  : "bg-[#1D9BF0]/80 text-white hover:bg-[#1D9BF0] hover:shadow-lg hover:shadow-[#1D9BF0]/40"
              } w-full sm:w-48 py-3 backdrop-blur-md border border-[#1D9BF0]/40`}
              disabled={isNextDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
