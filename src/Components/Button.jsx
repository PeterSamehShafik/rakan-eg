function Button({ content, outline, className }) {
  return (
    <button
      className={`tracking-widest font-sans px-7 py-3 rounded-sm font-medium transition-colors duration-300 text-sm ${className} 
      ${
        outline
          ? "text-[#777] border border-[#dbdbdb] hover:bg-red-500 hover:text-white"
          : "bg-red-500 text-white hover:bg-black"
      }`}
    >
      {content}
    </button>
  );
}

export default Button;
