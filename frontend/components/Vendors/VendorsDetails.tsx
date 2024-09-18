"use client";

import { Medicine } from "@/app/pages/hospital/Inventory/page";

const VendorsDetails = () => {
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
          <div className="border-2 hover:bg-black mx-4 p-4 border-black rounded-md hover:text-white cursor-pointer">
            1
          </div>
        ))}
      </div>
    );
  };
  const OrdersComponents = ({ Items }: any) => {
    return (
      <div className="flex flex-col gap-2">
        {Items.map(() => (
          <div className="border-2 hover:bg-black mx-4 p-4 border-black rounded-md hover:text-white cursor-pointer">
            1
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="border-2 grid grid-rows-11 p-4 w-5/6 h-full">
      <div className="row-span-1"> dsalkhda@gmail.com</div>
      <div className="grid grid-cols-6 row-span-5">
        <div className="border-2 col-span-2 border-black">
          <p className="p-2">Manufacturer Name :</p>
          <p className="p-2">Address :</p>
          <p className="p-2">Manufacturer :</p>
          <p className="p-2">Manufacturer :</p>
          <p className="p-2">Manufacturer :</p>
        </div>
        <div className="border-2 col-span-2 border-black">
          <div className="flex flex-col gap-4 mx-4 py-2 h-full">
            <p>Licenses</p>
            <OrdersComponents Items={Alerts} />
          </div>
        </div>
        <div className="border-2 grid grid-rows-2 col-span-2 border-black">
          <div className="border-2 m-2 mx-4 p-4 border-black rounded-md">1</div>
          <div className="border-2 m-2 mx-4 p-4 border-black rounded-md">2</div>
        </div>
      </div>
      <div className="grid grid-cols-6 row-span-5">
        <div className="border-2 col-span-4 p-2 border-black">
          <div className=" mx-2  text-lg">Previous Orders</div>
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
        <div className="border-2 col-span-2 border-black">
          <p className="p-4">Alerts & Notifications</p>
          <AlertsComponents Items={Alerts} />
        </div>
      </div>
    </div>
  );
};

export default VendorsDetails;
