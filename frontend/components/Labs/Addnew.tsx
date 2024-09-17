import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import CustomButton from "../CustomButton";

import { Medicine } from "@/app/pages/Labs/Inventory/page";
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
    imageUrl: "",
    hospital:"",
  });

  const postData = () => {
    console.log("posted");
    postquery.mutate(formData);
    setAdding(false);
  };

  return (
    <div className="">
      <p className=" font-bold py-2 text-lg ">Add New</p>

      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 p-7 ">
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Item ID
          </label>
          <input
            name="id"
            value={formData.id}
            onChange={(e) =>
              setformData({ ...formData, id: Number(e.target.value) })
            }
            type="number"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 focus:border-blue-500 rounded-md w-full focus:outline-none sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Item Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={(e) => setformData({ ...formData, name: e.target.value })}
            type="text"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Batch Number
          </label>
          <input
            name="batch"
            value={formData.batch}
            onChange={(e) =>
              setformData({ ...formData, batch: e.target.value })
            }
            type="text"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Manufacturer
          </label>
          <input
            name="manufacturer"
            value={formData.manufacturer}
            onChange={(e) =>
              setformData({ ...formData, manufacturer: e.target.value })
            }
            type="text"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Expiry Date
          </label>
          <input
            name="expiry"
            value={formData.expiry}
            onChange={(e) =>
              setformData({ ...formData, expiry: e.target.value })
            }
            type="date"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Manufactured Date
          </label>
          <input
            name="manufactured"
            value={formData.manufactured}
            onChange={(e) =>
              setformData({ ...formData, manufactured: e.target.value })
            }
            type="date"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Category (Tablet, Syrup,etc.)
          </label>
          <input
            name="category"
            type="text"
            value={formData.category}
            onChange={(e) =>
              setformData({ ...formData, category: e.target.value })
            }
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Hospital
          </label>
          <input
            name="category"
            type="text"
            value={formData.category}
            onChange={(e) =>
              setformData({ ...formData, category: e.target.value })
            }
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
      </div>
      <div className="px-7">
        <CustomButton onClick={() => postData()}>Submit</CustomButton>
      </div>
    </div>
  );
};

export default Addnew;
