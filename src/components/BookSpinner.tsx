
const BookSpinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <img src="/src/assets/bookspinner.gif" alt=""  />
      <div className=""><span className="text-orange-600 text-2xl font-semibold">O</span><span className="text-blue-600 text-xl">pen</span><span className="text-sm text-gray-400 italic">ing</span><span className="text-2xl text-blue-600 font-semibold">B</span><span className="text-xl text-orange-600">ook</span></div>
    </div>
  );
};

export default BookSpinner;
