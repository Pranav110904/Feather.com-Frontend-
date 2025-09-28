

const RoundedButton = ({ icon: Icon, label, onClick, color }) => {
  return (
    <div
      onClick={onClick}
      className={`flex mb-3 gap-6 text-lg md:text-xl transition-all duration-300 ease-in-out 
                 hover:cursor-pointer items-center justify-center font-medium h-[50px] 
                 w-[95%] md:w-[300px] rounded-full mx-auto md:mx-0 ${color}`}
    >
      {label}
      {Icon && <Icon />}
    </div>
  );
};

export default RoundedButton;