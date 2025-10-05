const RoundedButton = ({ icon: Icon, label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex mb-3 gap-3 text-base sm:text-lg md:text-xl transition-all duration-300 ease-in-out 
                  hover:cursor-pointer items-center justify-center font-medium h-[50px] 
                  w-[95%] md:w-[300px] rounded-full mx-auto md:mx-0 
                  bg-white/10 backdrop-blur-md border border-white/20 
                  hover:bg-white/20 hover:border-white/30 hover:shadow-lg`}
    >
      {label}
      {Icon && <Icon />}
    </div>
  );
};

export default RoundedButton;
