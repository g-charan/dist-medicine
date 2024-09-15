import CustomButton from "@/components/CustomButton";

export default function Home() {
  return (
    <div className="h-screen">
      <div>
        <div className="flex justify-center w-full">
          <div className="flex justify-between px-10 py-5 w-3/5">
            <h1 className="p-2 font-bold text-[20px]">CG</h1>
            <div className="flex justify-between w-3/5">
              <a className="px-3 p-3">
                <button className="hover:bg-black px-3 py-1 rounded-md hover:text-white">
                  Home
                </button>
              </a>
              <a className="px-3 p-3">
                <button className="hover:bg-black px-3 py-1 rounded-md hover:text-white">
                  Home
                </button>
              </a>
              <a className="px-3 p-3">
                <button className="hover:bg-black px-3 py-1 rounded-md hover:text-white">
                  Home
                </button>
              </a>
              <a className="px-3 p-3">
                <button className="hover:bg-black px-3 py-1 rounded-md hover:text-white">
                  Home
                </button>
              </a>
              <div className="p-2">
                <div className="flex">
                  <CustomButton className="py-1">Login</CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="border-2 border-black w-full">
          <div>Some content</div>
        </div>
      </div>
    </div>
  );
}
