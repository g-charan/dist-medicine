import CustomButton from "@/components/CustomButton";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center w-3/4">
        <div className="top-0 z-10 sticky flex bg-white rounded-sm w-full">
          <div className="flex flex-row justify-between items-center bg-white py-3 border-b-2 w-full text-lg">
            <div className="px-5 text-2xl">C</div>
            <div className="xl:flex xl:gap-20 hidden">
              <CustomButton>Hello</CustomButton>
              <CustomButton>Hello</CustomButton>
              <CustomButton>Hello</CustomButton>
              <CustomButton>Hello</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
