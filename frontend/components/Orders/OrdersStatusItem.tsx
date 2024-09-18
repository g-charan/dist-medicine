"use client";

import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import CustomButton from "../CustomButton";

const OrdersStatusItem = ({ status }: any) => {
  const [open, setOpen] = useState<boolean>();
  return (
    <div className="flex justify-between border-2 py-14 p-7 border-black rounded-md">
      <div className="flex gap-5">
        <p>ID: 1234</p>
        <div>
          {status == 0 && (
            <p className="bg-yellow-400 bg-opacity-50 px-2 rounded-lg">
              Pending
            </p>
          )}
          {status == 1 && (
            <p className="bg-red-400 bg-opacity-50 px-2 rounded-lg">Rejected</p>
          )}
          {status == 2 && (
            <p className="bg-green-400 bg-opacity-50 px-2 rounded-lg">
              Completed
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <CustomButton onClick={() => setOpen(true)}>View Details</CustomButton>
        <CustomButton>Report</CustomButton>
      </div>
      <Sidebar
        visible={open}
        position="right"
        onHide={() => setOpen(false)}
        className="bg-white border-black w-[75%] text-black"
      >
        Testing
      </Sidebar>
    </div>
  );
};

export default OrdersStatusItem;
