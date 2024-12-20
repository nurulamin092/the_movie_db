import Image from "next/image";

const ShareSection = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        <button className="text-center cursor-pointer">
          <Image
            src="http://facebook.com/favicon.ico"
            alt="Facebook"
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
            height={30}
            width={30}
          />
          <p className="text-sm">Facebook</p>
        </button>

        <button className="text-center cursor-pointer">
          <Image
            src="http://x.com/favicon.ico"
            alt="Facebook"
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
            height={30}
            width={30}
          />
          <p className="text-sm">X</p>
        </button>

        <button className="text-center cursor-pointer">
          <Image
            src="http://linkedin.com/favicon.ico"
            alt="Facebook"
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
            height={30}
            width={30}
          />
          <p className="text-sm">Linkedin</p>
        </button>
      </div>
    </>
  );
};

export default ShareSection;
