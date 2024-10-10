"use client";

import { Medicine } from "@/app/pages/hospital/Inventory/page";
import Image from "next/image";
import { Rating } from "primereact/rating";
import { useState } from "react";
import img1 from "../../app/assets/Folder.png";

import { ChartConfig } from "@/components/ui/chart";

const VendorsDetails = () => {
  const [value, setValue] = useState(4);
  const Alerts = [{ name: "1" }, { name: "1" }, { name: "1" }];

  const tableData: Medicine[] = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      batch: "PN2024A",
      manufacturer: "PharmaCo",
      expiry: "2025-06-30",
      manufactured: "2023-06-01",
      quantity: 1000,
      category: "Tablet",
      reorderLevel: 200,
      reorderQuantity: 500,
      status: "In Stock",
      minStockLevel: 100,
      maxStockLevel: 1500,
      storageLocation: "Rack 5 / Shelf 3",
      tempRequirements: "Store at 25°C",
      certification: "GMP Certified",
    },
    {
      id: 2,
      name: "Dolo 650",
      batch: "PN2024A",
      manufacturer: "PharmaCo",
      expiry: "2025-06-30",
      manufactured: "2023-06-01",
      quantity: 1000,
      category: "Tablet",
      reorderLevel: 200,
      reorderQuantity: 500,
      status: "In Stock",
      minStockLevel: 100,
      maxStockLevel: 1500,
      storageLocation: "Rack 5 / Shelf 3",
      tempRequirements: "Store at 31°C",
      certification: "GMP Certified",
    },
    // ...other data
  ];

  const AlertsComponents = ({ Items }: any) => {
    return (
      <div className="flex flex-col gap-2">
        {Items.map(() => (
          <div className="border-2  hover:bg-black mx-4 p-4 border-black rounded-md hover:text-white cursor-pointer">
            <p className=" font-semibold text-sm text-gray-600">
              Stocks Level extremely low
            </p>
          </div>
        ))}
      </div>
    );
  };
  const DocComponents = ({ Items }: any) => {
    return (
      <div className="flex flex-col gap-2">
        {Items.map(() => (
          <div className="border-2 flex hover:bg-black mx-4 p-4 border-black rounded-md hover:text-white cursor-pointer">
            <div className=" self-center p-2">
              <Image src={img1} alt="" />
            </div>
            <div className=" flex flex-col m-0">
              <p className=" font-semibold">License for tablets by India</p>
              <p className=" text-sm font-semibold text-gray-400">1.2mb</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ];
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;
  return (
    <div className="border-2 grid grid-rows-11 p-4 w-5/6 mx-2 rounded-md h-full">
      <div className="row-span-1">
        <div className="flex gap-4 p-2">
          <p className=" font-semibold">Tata Pharmacy</p>
          <p>
            <Rating
              value={value}
              onChange={(e) => setValue(e.value)}
              cancel={false}
            />
          </p>
        </div>
      </div>
      <div className="grid grid-cols-6 row-span-5 ">
        <div className="border-2 col-span-2 border-gray-400 rounded-md p-2 mx-2">
          <p className=" font-semibold p-2">Manufacturer Details</p>
          <p className="py-2 px-4">Manufacturer Name :</p>
          <p className="py-2 px-4">Address :</p>
          <p className="py-2 px-4">Manufacturer :</p>
          <p className="py-2 px-4">Manufacturer :</p>
          <p className="py-2 px-4">Manufacturer :</p>
        </div>
        <div className=" col-span-2">
          <div className="flex flex-col gap-4 mx-2  h-full border-2 border-gray-400 rounded-md p-2">
            <p className=" font-semibold p-2">Alerts & Notifications</p>
            <AlertsComponents Items={Alerts} />
          </div>
        </div>
        <div className=" grid grid-rows-2 col-span-2 rounded-md">
          <div className="border-2  mb-2 mx-4 p-4 border-black rounded-md">
            {/* <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer> */}
          </div>
          <div className="border-2 mt-2 mx-4 border-black rounded-md">2</div>
        </div>
      </div>
      <div className="grid grid-cols-6 row-span-5">
        <div className="border-2 col-span-4 p-2 m-2 border-gray-400 rounded-md">
          <div className=" mx-2 font-semibold">Previous Orders</div>
          <div className=" w-full overflow-auto p-4">
            {" "}
            <table className="table-auto  w-full overflow-hidden">
              <thead>
                <tr>
                  <th className="">Item ID</th>
                  <th className="">Item Name</th>
                  <th className="">Expiry Date</th>
                  <th className="">Manufactured Date</th>
                  <th className="">Quantity In Stock</th>
                </tr>
              </thead>
              <tbody>
                {tableData &&
                  tableData.map((item: Medicine, index: any) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-100 cursor-pointer border-t-2 border-b-2"
                      onClick={() => console.log("clicked")}
                    >
                      <td className="text-center ">{item.id}</td>
                      <td className="text-center ">{item.name}</td>
                      <td className=" text-center">{item.expiry}</td>
                      <td className=" text-center">{item.manufactured}</td>
                      <td className=" text-center">{item.quantity}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="border-2 col-span-2 border-gray-400 rounded-md m-2">
          <p className="p-4">Licenses</p>
          <DocComponents Items={Alerts} />
        </div>
      </div>
    </div>
  );
};

export default VendorsDetails;
