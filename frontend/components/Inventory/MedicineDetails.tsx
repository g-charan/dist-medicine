"use client";
import { useState } from "react";
import CustomButton from "../CustomButton";
import TimelineComponent from "../Testing/TimelineComponent";

const VendorDetails = () => {
  return (
    <>
      <p className=" font-semibold mb-4 text-lg">General Information</p>
      <div className="grid grid-rows-3 grid-cols-3 p-4 gap-2 w-full">
        <div className=" flex flex-col col-span-1">
          <p className=" font-semibold text-sm text-gray-400">Batch</p>
          <p className=" font-semibold text-sm">PN2024A</p>
        </div>
        <div className=" flex flex-col col-span-1">
          <p className=" font-semibold text-sm text-gray-400">Batch</p>
          <p className=" font-semibold text-sm">PN2024A</p>
        </div>
        <div className=" flex flex-col col-span-1">
          <p className=" font-semibold text-sm text-gray-400">Batch</p>
          <p className=" font-semibold text-sm">PN2024A</p>
        </div>
        <div className=" flex flex-col col-span-1">
          <p className=" font-semibold text-sm text-gray-400">Batch</p>
          <p className=" font-semibold text-sm">PN2024A</p>
        </div>
        <div className=" flex flex-col col-span-1">
          <p className=" font-semibold text-sm text-gray-400">Batch</p>
          <p className=" font-semibold text-sm">PN2024A</p>
        </div>
        <div className=" flex flex-col col-span-1">
          <p className=" font-semibold text-sm text-gray-400">Batch</p>
          <p className=" font-semibold text-sm">PN2024A</p>
        </div>
      </div>
      <div className=" w-full">
        <p className=" font-semibold mb-4 text-lg">Storage Information</p>
        <div className="grid grid-rows-3 grid-cols-3 p-4 gap-2 w-full">
          <div className=" flex flex-col col-span-1">
            <p className=" font-semibold text-sm text-gray-400">Batch</p>
            <p className=" font-semibold text-sm">PN2024A</p>
          </div>
          <div className=" flex flex-col col-span-1">
            <p className=" font-semibold text-sm text-gray-400">Batch</p>
            <p className=" font-semibold text-sm">PN2024A</p>
          </div>
          <div className=" flex flex-col col-span-1">
            <p className=" font-semibold text-sm text-gray-400">Batch</p>
            <p className=" font-semibold text-sm">PN2024A</p>
          </div>
          <div className=" flex flex-col col-span-1">
            <p className=" font-semibold text-sm text-gray-400">Batch</p>
            <p className=" font-semibold text-sm">PN2024A</p>
          </div>
          <div className=" flex flex-col col-span-1">
            <p className=" font-semibold text-sm text-gray-400">Batch</p>
            <p className=" font-semibold text-sm">PN2024A</p>
          </div>
          <div className=" flex flex-col col-span-1">
            <p className=" font-semibold text-sm text-gray-400">Batch</p>
            <p className=" font-semibold text-sm">PN2024A</p>
          </div>
        </div>
      </div>
    </>
  );
};

const ItemDetails = () => {
  return (
    <>
      <p className=" font-semibold mb-4 text-lg">General Information</p>
      <div className="grid grid-rows-3 grid-cols-3 p-4 gap-2 w-full">
        <div className=" flex flex-col col-span-1">
          <p className=" font-semibold text-sm text-gray-400">Batch</p>
          <p className=" font-semibold text-sm">PN2024A</p>
        </div>
        <div className=" flex flex-col col-span-1">
          <p className=" font-semibold text-sm text-gray-400">Batch</p>
          <p className=" font-semibold text-sm">PN2024A</p>
        </div>
        <div className=" flex flex-col col-span-1">
          <p className=" font-semibold text-sm text-gray-400">Batch</p>
          <p className=" font-semibold text-sm">PN2024A</p>
        </div>
        <div className=" flex flex-col col-span-1">
          <p className=" font-semibold text-sm text-gray-400">Batch</p>
          <p className=" font-semibold text-sm">PN2024A</p>
        </div>
        <div className=" flex flex-col col-span-1">
          <p className=" font-semibold text-sm text-gray-400">Batch</p>
          <p className=" font-semibold text-sm">PN2024A</p>
        </div>
        <div className=" flex flex-col col-span-1">
          <p className=" font-semibold text-sm text-gray-400">Batch</p>
          <p className=" font-semibold text-sm">PN2024A</p>
        </div>
      </div>
      <div className=" w-full">
        <p className=" font-semibold mb-4 text-lg">Storage Information</p>
        <div className="grid grid-rows-3 grid-cols-3 p-4 gap-2 w-full">
          <div className=" flex flex-col col-span-1">
            <p className=" font-semibold text-sm text-gray-400">Batch</p>
            <p className=" font-semibold text-sm">PN2024A</p>
          </div>
          <div className=" flex flex-col col-span-1">
            <p className=" font-semibold text-sm text-gray-400">Batch</p>
            <p className=" font-semibold text-sm">PN2024A</p>
          </div>
          <div className=" flex flex-col col-span-1">
            <p className=" font-semibold text-sm text-gray-400">Batch</p>
            <p className=" font-semibold text-sm">PN2024A</p>
          </div>
          <div className=" flex flex-col col-span-1">
            <p className=" font-semibold text-sm text-gray-400">Batch</p>
            <p className=" font-semibold text-sm">PN2024A</p>
          </div>
          <div className=" flex flex-col col-span-1">
            <p className=" font-semibold text-sm text-gray-400">Batch</p>
            <p className=" font-semibold text-sm">PN2024A</p>
          </div>
          <div className=" flex flex-col col-span-1">
            <p className=" font-semibold text-sm text-gray-400">Batch</p>
            <p className=" font-semibold text-sm">PN2024A</p>
          </div>
        </div>
      </div>
    </>
  );
};
const OrderDetails = (props: any) => {
  const content = [
    {
      data: {
        single: { time: "9 30am", action: "Eat" },
        second: { time: "9 30am", action: "Eat" },
      },
    },
    {
      data: {
        single: { time: "9 30am", action: "Eat" },
      },
    },
    {
      data: {
        single: { time: "10am", action: "Sleep" },
        second: { time: "630pm", action: "Exercise" },
      },
    },
    {
      data: {
        single: { time: "10am", action: "Sleep" },
        second: { time: "630pm", action: "Exercise" },
      },
    },
    {
      data: {
        single: { time: "10am", action: "Sleep" },
        second: { time: "630pm", action: "Exercise" },
      },
    },
    {
      data: {
        single: { time: "10am", action: "Sleep" },
        second: { time: "630pm", action: "Exercise" },
      },
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center col-span-4 row-span-2 mt-10">
        <p className="mx-8 font-semibold text-gray-900">Shipment Timeline</p>
        <TimelineComponent content={props.props} />
      </div>
    </>
  );
};

const MedicineDetails = ({ selectedMedicine }: any) => {
  const content = [
    {
      data: {
        single: { time: "9 30am", action: "Eat" },
        second: { time: "9 30am", action: "Eat" },
      },
    },
    {
      data: {
        single: { time: "9 30am", action: "Eat" },
      },
    },
    {
      data: {
        single: { time: "10am", action: "Sleep" },
        second: { time: "630pm", action: "Exercise" },
      },
    },
    {
      data: {
        single: { time: "10am", action: "Sleep" },
        second: { time: "630pm", action: "Exercise" },
      },
    },
    {
      data: {
        single: { time: "10am", action: "Sleep" },
        second: { time: "630pm", action: "Exercise" },
      },
    },
    {
      data: {
        single: { time: "10am", action: "Sleep" },
        second: { time: "630pm", action: "Exercise" },
      },
    },
  ];
  const [tabsPos, settabsPos] = useState<number>(1);
  const tabs = [
    { name: "Item Details", component: ItemDetails, pos: 1 },
    { name: "Order Details", component: OrderDetails, pos: 2, props: content },
    { name: "Vendor", component: VendorDetails, pos: 3 },
  ];

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = useState(0);
  console.log(tabsPos);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="w-full text-left">
      <p className=" font-semibold text-lg">Medicine Details</p>
      <div className=" mt-10 flex flex-row w-full justify-between mb-5">
        <div className=" flex">
          <img
            src={selectedMedicine.imageUrl}
            alt={selectedMedicine.name}
            className=" border-2 rounded-md p-2 mr-4  w-32 h-32 object-cover"
          />
          <div className="mt-2">
            <p
              className=" font-semibold text-gray-900 text-lg
            "
            >
              Paracetamol
            </p>
            <h3 className="font-semibold text-gray-400 text-sm ">
              Item ID : {selectedMedicine.id}
            </h3>
          </div>
        </div>
        <div className=" mr-5 self-center flex gap-3 ">
          <CustomButton className="px-2 py-1">Print</CustomButton>
          <CustomButton className="px-2 py-1">Report This</CustomButton>
        </div>
      </div>

      <div className="pt-4 border-t-2">
        <div className="flex w-full justify-start gap-4 pb-4">
          {tabs.map((data) => (
            <>
              <CustomButton
                className={`  hover:bg-black hover:text-white rounded-sm   ${
                  data.pos == tabsPos
                    ? " bg-black text-white"
                    : "bg-white text-black border-none outline-none"
                }`}
                onClick={() => settabsPos(data.pos)}
              >
                {data.name}
              </CustomButton>
            </>
          ))}
        </div>
        <div className=" w-full pt-2">
          {tabs.map((data) => (
            <>
              {tabsPos && data.pos == tabsPos ? (
                <data.component props={data.props} />
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
      </div>
      {/* THIS IS THE TIMELINE CODE */}
      {/* <div className="flex flex-col justify-center col-span-4 row-span-2 mt-10">
        <p className="mx-8">Order Details</p>
        <TimelineComponent content={content} />
      </div> */}
    </div>
  );
};

export default MedicineDetails;
