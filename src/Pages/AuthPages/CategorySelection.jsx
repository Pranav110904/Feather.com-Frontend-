import { useState } from "react";

import RoundedButton from "../../components/RoundedButton";

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
      "Hobbies & DIY"
  ];


    const [selectedCategories, setSelectedCategories] = useState([]);
    const MIN_SELECTIONS = 5;

    const handleCategoryToggle = (categoryName) => {
        setSelectedCategories(prev => 
            prev.includes(categoryName) 
                ? prev.filter(name => name !== categoryName) 
                : [...prev, categoryName]
        );
    };

    const handleNext = () => {
        if (selectedCategories.length >= MIN_SELECTIONS && onComplete) {
            onComplete(selectedCategories);
        } else {
            console.error(`Please select at least ${MIN_SELECTIONS} category.`);
        }
    };

    const handleClose = () => onClose ? onClose() : console.log("Flow closed/redirected.");

    const isNextDisabled = selectedCategories.length < MIN_SELECTIONS;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#1f1f1f] text-white px-4 sm:px-6 lg:px-8 font-syne">
            <div className="bg-black w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col relative">

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
                    <p className="text-gray-400 text-sm sm:text-base">
                        Choose what you like, and we'll customize your X experience with more of what you're interested in.
                    </p>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-grow overflow-y-auto max-h-[50vh] sm:max-h-[50vh] mb-6">
                    {availableCategories.map(category => {
                        const isSelected = selectedCategories.includes(category);
                        return (
                            <button
                                key={category}
                                onClick={() => handleCategoryToggle(category)}
                                className={`
                                    h-24 sm:h-28 md:h-32 rounded-lg text-white font-semibold text-sm sm:text-base p-3 flex items-end 
                                    transition-all duration-200 border-2 
                                    ${isSelected 
                                        ? 'bg-[#1D9BF0] border-[#1D9BF0] shadow-lg shadow-blue-900/50' 
                                        : 'bg-zinc-900 border-zinc-700 hover:bg-zinc-800'
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
                    <p className="text-sm text-gray-500 mb-4 self-start">
                        {selectedCategories.length} of {MIN_SELECTIONS} selected
                    </p>
                    <RoundedButton
                        onClick={handleNext}
                        label={'Next'}
                        color="bg-[#1D9BF0] text-white hover:bg-[#54b2ff] w-full sm:w-48 py-3"
                        disabled={isNextDisabled}
                        />
                  
                </div>
            </div>
        </div>
    );
};

export default CategorySelection;
