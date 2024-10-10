import { useRef, useState } from "react";
import CustomButton from "../CustomButton";
import CustomFieldInput from "../CustomFieldInput";

import { Toast } from "primereact/toast";

const RequestNewOrder = () => {
  const toast = useRef<any>(null);
  //   const postquery = useMutation({
  //     mutationFn: createPost,
  //     onSuccess: () => {
  //       console.log("posted");
  //     },
  //   });
  const show = () => {
    toast.current.show({
      severity: "info",
      summary: "Info",
      detail: "Message Content",
    });
  };
  const [formData, setformData] = useState<any>({
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

  return (
    <div className="h-full">
      <Toast ref={toast} />
      {/* FIELDS */}
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
          <CustomButton onClick={show} className="px-2 py-1">
            Submit
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default RequestNewOrder;
