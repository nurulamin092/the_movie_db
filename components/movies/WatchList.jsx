import { AddedIcon, AddIcon } from "../ui/UiIcon";

const WatchList = () => {
  return (
    <>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg">
          <AddIcon />
          Add to Watch List
        </button>
        <button className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg text-green-600">
          <AddedIcon />
          Added to Watch List
        </button>
      </div>
    </>
  );
};

export default WatchList;
