function Button({ children, outline, className }) {
  return (
    <button
      className={`tracking-widest font-sans px-7 py-3 rounded-sm font-medium transition-colors duration-300 ${className} 
      ${
        outline
          ? "text-[#777] border border-[#dbdbdb] hover:bg-red-800 hover:text-white"
          : "bg-red-800 text-white hover:bg-black"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
