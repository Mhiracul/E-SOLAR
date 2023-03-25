function Button({ children }) {
    return (
      <button className="bg-red p-[15px] text-white rounded-full sm:w-[50%]">
        {children}
      </button>
    );
  }
  
  export default Button;
  