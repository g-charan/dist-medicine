import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import CustomButton from "../CustomButton";

import { Medicine } from "@/app/pages/hospital/Inventory/page";
import CustomFieldInput from "../CustomFieldInput";
const Addnew = ({ setAdding }: any) => {
  const createPost = async (formdata: any) => {
    const data = await axios.post("http://localhost:5000/medicine", {
      ...formdata,
    });
  };

  const postquery = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      console.log("posted");
    },
  });
  const [formData, setformData] = useState<Medicine>({
    id: undefined,
    name: "",
    batch: "",
    manufacturer: "",
    expiry: "",
    manufactured: "",
    quantity: undefined,
    category: "",
    reorderLevel: undefined,
    reorderQuantity: undefined,
    status: "",
    minStockLevel: undefined,
    maxStockLevel: undefined,
    storageLocation: "",
    tempRequirements: "",
    certification: "",
    imageUrl: "", // Assuming imageUrl can be optional
  });

  const postData = () => {
    console.log("posted");
    postquery.mutate(formData);
    setAdding(false);
  };

  return (
    <div className="h-full">
      <div>
        <p className="font-semibold text-gray-400 text-sm"> Adding new</p>
        <p className="font-bold text-lg">Medicine Details</p>
      </div>
      <div className="grid grid-cols-6 grid-rows-4 mt-10 h-2/5">
        <div className="col-span-2 p-2 self-center">
          <CustomFieldInput Label={"Item ID"} placeholder={"Item iD"} />
        </div>
        <div className="col-span-2 p-2 self-center">
          <CustomFieldInput Label={"Item Name"} placeholder={"Item Name"} />
        </div>
        <div className="col-span-2 p-2 self-center">
          <CustomFieldInput Label={"Item Name"} placeholder={"Item Name"} />
        </div>
        <div className="col-span-3 p-2 self-center">
          <CustomFieldInput Label={"Item Name"} placeholder={"Item Name"} />
        </div>
        <div className="col-span-3 p-2 self-center">
          <CustomFieldInput Label={"Item Name"} placeholder={"Item Name"} />
        </div>
        <div className="col-span-2 p-2 self-center">
          <CustomFieldInput Label={"Item Name"} placeholder={"Item Name"} />
        </div>
        <div className="col-span-2 p-2 self-center">
          <CustomFieldInput Label={"Item Name"} placeholder={"Item Name"} />
        </div>
        <div className="col-span-2 p-2 self-center">
          <CustomFieldInput Label={"Item Name"} placeholder={"Item Name"} />
        </div>
        <div className="col-span-2 p-2 self-center">
          <CustomFieldInput Label={"Item Name"} placeholder={"Item Name"} />
        </div>
        <div className="col-span-2 p-2 self-center">
          <CustomFieldInput Label={"Item Name"} placeholder={"Item Name"} />
        </div>
        <div className="col-span-2 p-2 self-center">
          <CustomFieldInput Label={"Item Name"} placeholder={"Item Name"} />
        </div>
      </div>
      <div className="flex justify-end mt-10 px-7 py-4 border-t-2">
        <div className="flex space-x-2">
          <CustomButton onClick={"none"} className="px-2 py-1">
            Cancel
          </CustomButton>
          <CustomButton onClick={() => postData()} className="px-2 py-1">
            Submit
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Addnew;
