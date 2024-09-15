const Addnew = () => {
  return (
    <div className="">
      <p className=" font-bold py-2 text-lg ">Add New</p>
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 p-7">
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Item ID
          </label>
          <input
            type="text"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 focus:border-blue-500 rounded-md w-full focus:outline-none sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Item Name
          </label>
          <input
            type="text"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Batch Number
          </label>
          <input
            type="text"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Manufacturer
          </label>
          <input
            type="text"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Expiry Date
          </label>
          <input
            type="date"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Manufactured Date
          </label>
          <input
            type="date"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Quantity in Stock
          </label>
          <input
            type="number"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Category (Tablet, Syrup,etc.)
          </label>
          <input
            type="text"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Reorder Level
          </label>
          <input
            type="number"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Reorder Quantity
          </label>
          <input
            type="number"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Status (In Stock/Out of Stock)
          </label>
          <select className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 focus:border-blue-500 rounded-md w-full focus:outline-none sm:text-sm">
            <option value="in_stock">In Stock</option>
            <option value="out_of_stock">Out of Stock</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Minimum Stock Level
          </label>
          <input
            type="number"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Maximum Stock Level
          </label>
          <input
            type="number"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Storage Location
          </label>
          <input
            type="text"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Temperature Requirements
          </label>
          <input
            type="text"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium text-gray-700 text-sm">
            Certification/Patents
          </label>
          <input
            type="text"
            className="block border-2 border-gray-300 mt-1 py-2 pr-10 pl-3 rounded-md w-full sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Addnew;
