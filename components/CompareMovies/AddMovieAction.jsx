const AddMovieAction = ({ addSlot }) => {
  return (
    <button
      onClick={addSlot}
      className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
    >
      Add Movie +
    </button>
  );
};

export default AddMovieAction;
