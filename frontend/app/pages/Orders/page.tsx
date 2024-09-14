"use client"; // Add this line at the top
import Link from 'next/link';
import React, { useState, Fragment } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Dialog, Transition } from '@headlessui/react';
import Select, { MultiValue, SingleValue } from 'react-select';

interface Orders {
    id: string;
    name: string;
    batch: string;
    manufacturer: string;
    expiry: string;
    manufactured: string;
    quantity: number;
    category: string;
    reorderLevel: number;
    reorderQuantity: number;
    status: string;
    minStockLevel: number;
    maxStockLevel: number;
    storageLocation: string;
    tempRequirements: string;
    certification: string;
    imageUrl?: string; // Assuming imageUrl can be optional
}

export default function TablePage() {
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [selectedMedicine, setSelectedMedicine] = useState<Orders | null>(null);
    
    const tableData = [
      {
        id: "#001",
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
        id: "#001",
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
        id: "#001",
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
        id: "#001",
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
        id: "#001",
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
        id: "#001",
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
        id: "#001",
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
        id: "#001",
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
        id: "#001",
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
        id: "#001",
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
      // ...other data
    ];
  
    const ItemId = [
      { value: '01', label: '01' },
      { value: '02', label: '02' },
      { value: '003', label: '003' }
    ];
    const ItemName = [
      { value: 'Paracetamol', label: 'Paracetamol' },
      { value: 'Aspirin', label: 'Aspirin' },
      { value: 'Ibuprofen', label: 'Ibuprofen' }
    ];
    const BatchNumber = [
      { value: '013', label: '013' },
      { value: '025', label: '025' },
      { value: '0039', label: '0039' }
    ];
    const Manufacturer = [
      { value: 'PharmaCo', label: 'PharmaCo' }, 
      { value: 'PharmaCo2', label: 'PharmaCo2' }, 
      { value: 'PharmaCo3', label: 'PharmaCo3' }
    ];
    const expiryOptions = [
      { value: 'Expires in 1 month', label: 'Expires in 1 month' },
      { value: 'Expires in 2 months', label: 'Expires in 2 months' },
      { value: 'Expires in 1 year', label: 'Expires in 1 year' },
      { value: 'Expires in 2 years', label: 'Expires in 2 years' }
    ];
    const categories = [
      { value: 'Tablet', label: 'Tablet' }, 
      { value: 'Syrup', label: 'Syrup' }
    ];
    const statusOptions = [
      { value: 'In Stock', label: 'In Stock' }, 
      { value: 'Out of Stock', label: 'Out of Stock' }
    ];
    
    const toggleModal1 = () => {
      setIsModalOpen1(!isModalOpen1);
    };
  
    const toggleDetailModal = (orders: Orders | null = null) => {
        setSelectedMedicine(orders);
        setIsDetailModalOpen(!isDetailModalOpen);
    };

    const toggleFilter = () => {
      setIsFilterOpen(!isFilterOpen);
    };
  
    type OptionType = {
        value: string;
        label: string;
    };
    
    interface FilterComponentProps {
        options: OptionType[];
        label: string;
    }

    const FilterComponent: React.FC<FilterComponentProps> = ({ options, label }) => {
        const [selectedOptions, setSelectedOptions] = useState<MultiValue<OptionType>>([]);
  
        const handleChange = (selected: MultiValue<OptionType>) => {
            setSelectedOptions(selected);
        };

        const handleOptionRemove = (optionToRemove: OptionType) => {
            setSelectedOptions((prevSelectedOptions) =>
                prevSelectedOptions.filter((option) => option.value !== optionToRemove.value)
            );
        };
    
      return (
        <div className="form-group">
          <label className="control-label">{label}</label>
          <Select
            isMulti
            name="filters"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleChange}
            value={selectedOptions}
          />
          <div className="selected-options">
            {selectedOptions.map(option => (
              <span key={option.value} className="selected-badge">
                {option.label}
                <button
                  type="button"
                  className="remove-option"
                  onClick={() => handleChange(selectedOptions.filter(opt => opt.value !== option.value))}
                >
                  x
                </button>
              </span>
            ))}
          </div>
        </div>
      );
    };
  
    return (
      <div className="container mx-auto p-4" style={{ marginLeft: '0px' }}>
        <Transition.Root show={isModalOpen1} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={toggleModal1}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                    <div className="text-left w-full">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Pranaam Hospitals : Add New Drug
                      </h3>
                      <div className="mt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Order ID</label>
                            <input
                              type="text"
                              className="mt-1 block w-full pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 sm:text-sm"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Ordered Item</label>
                            <input
                              type="text"
                              className="mt-1 block w-full pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md sm:text-sm"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Item Id</label>
                            <input
                              type="text"
                              className="mt-1 block w-full pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md sm:text-sm"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Vendors Available</label>
                            <input
                              type="text"
                              className="mt-1 block w-full pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md sm:text-sm"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Order Date</label>
                            <input
                              type="date"
                              className="mt-1 block w-full pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md sm:text-sm"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Delivery Date</label>
                            <input
                              type="date"
                              className="mt-1 block w-full pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md sm:text-sm"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Quantity</label>
                            <input
                              type="number"
                              className="mt-1 block w-full pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md sm:text-sm"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Price</label>
                            <input
                              type="text"
                              className="mt-1 block w-full pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md sm:text-sm"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Total Price</label>
                            <input
                              type="number"
                              className="mt-1 block w-full pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md sm:text-sm"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
                            <input
                              type="number"
                              className="mt-1 block w-full pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md sm:text-sm"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Payment Status</label>
                            <select className="mt-1 block w-full pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 sm:text-sm">
                              <option value="in_stock">In Stock</option>
                              <option value="out_of_stock">Out of Stock</option>
                            </select>
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Order Status</label>
                            <input
                              type="number"
                              className="mt-1 block w-full pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md sm:text-sm"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Contact Person</label>
                            <input
                              type="number"
                              className="mt-1 block w-full pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md sm:text-sm"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                            <input
                              type="text"
                              className="mt-1 block w-full pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md sm:text-sm"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Remarks</label>
                            <input
                              type="text"
                              className="mt-1 block w-full pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6 flex justify-end space-x-3">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                        onClick={toggleModal1}
                      >
                        Accept
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                        onClick={toggleModal1}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
  
   {/* Detail Modal */}
   <Transition.Root show={isDetailModalOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => toggleDetailModal(null)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                    {selectedMedicine && (
                      <div className="text-left w-full">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          {selectedMedicine.id}
                        </h3>
                        <div className="mt-4 flex">
                          <img
                            src={selectedMedicine.imageUrl}
                            alt={selectedMedicine.name}
                            className="w-32 h-32 object-cover mr-4"
                          />
                          <div>
                            <p><strong>Batch:</strong> {selectedMedicine.batch}</p>
                            <p><strong>Manufacturer:</strong> {selectedMedicine.manufacturer}</p>
                            <p><strong>Expiry:</strong> {selectedMedicine.expiry}</p>
                            <p><strong>Quantity:</strong> {selectedMedicine.quantity}</p>
                            <p><strong>Category:</strong> {selectedMedicine.category}</p>
                            <p><strong>Status:</strong> {selectedMedicine.status}</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p><strong>Storage Location:</strong> {selectedMedicine.storageLocation}</p>
                          <p><strong>Temperature Requirements:</strong> {selectedMedicine.tempRequirements}</p>
                          <p><strong>Certification:</strong> {selectedMedicine.certification}</p>
                        </div>
                      </div>
                    )}
                    <div className="mt-5 sm:mt-6 flex justify-end space-x-3">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                        onClick={() => toggleDetailModal(null)}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Sidebar Filter */}
<Transition.Root show={isFilterOpen} as={Fragment}>
  <Dialog as="div" className="relative z-10" onClose={toggleFilter}>
    <Transition.Child
      as={Fragment}
      enter="transform transition ease-in-out duration-500 sm:duration-700"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transform transition ease-in-out duration-500 sm:duration-700"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
    >
      <div className="fixed inset-y-0 right-0 flex max-w-full">
        <div className="w-screen max-w-sm">
          <Dialog.Panel className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll rounded-l-md">
            <div className="px-4 py-6 bg-[rgb(88,28,135)] sm:px-6 rounded-l-md">
              <div className="flex items-center justify-center relative">
                {/* Left filter icon */}
                <i className="fas fa-filter absolute left-0 text-white"></i>

                {/* Centered heading */}
                <Dialog.Title className="text-lg font-medium text-white">
                  Filters
                </Dialog.Title>

                {/* Close button */}
                <div className="ml-3 h-7 flex items-center absolute right-0">
                  <button
                    className="bg-transparent rounded-md text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onClick={toggleFilter}
                  >
                    <span className="sr-only">Close panel</span>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative flex-1 py-6 px-4 sm:px-6">
              <div className="grid grid-cols-1 gap-4">
                <FilterComponent options={ItemId} label="Order Id" />
                <FilterComponent options={ItemName} label="Ordered Item" />
                <FilterComponent options={BatchNumber} label="Item Id" />
                <FilterComponent options={Manufacturer} label="Vendors" />
                <FilterComponent options={expiryOptions} label="Price" />
                <FilterComponent options={statusOptions} label="Status" />
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
              <button
                className="bg-[rgb(88,28,135)] text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                onClick={toggleFilter}
              >
                Apply Filter
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Transition.Child>
  </Dialog>
</Transition.Root>


      {/* Table */}
      <div className="flex flex-wrap items-center justify-between mb-4">
        <div className="w-full sm:w-1/3">
          <div className="relative">
            <input
              placeholder="Search for name or designation..."
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
            <i className="fa fa-search absolute right-3 top-1/2 transform -translate-y-1/2"></i>
          </div>
        </div>
        <div className="w-full sm:w-auto flex gap-2 mt-4 sm:mt-0">
          <button
            onClick={toggleModal1}
            className="bg-blue-500 text-white p-2 rounded shadow-none flex items-center"
            aria-label="Add New"
          >
            <i className="fa fa-plus align-bottom"></i>
          </button>
          <button
            id="grid-view-button"
            className="bg-blue-500 text-white p-2 rounded shadow-none flex items-center"
            aria-label="Grid View"
          >
            <i className="fa fa-edit align-bottom"></i>
          </button>
          <button
            id="grid-view-button"
            className="bg-blue-500 text-white p-2 rounded shadow-none flex items-center"
            aria-label="Grid View"
          >
            <i className="fa fa-trash align-bottom"></i>
          </button>
          <button
            id="grid-view-button"
            onClick={toggleFilter}
            className="bg-blue-500 text-white p-2 rounded shadow-none flex items-center"
            aria-label="Grid View"
          >
            <i className="fas fa-filter"></i>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap" style={{ marginTop: '1rem' }}>
  <div className="w-full p-2">
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Set max height for scroll */}
      <div className="overflow-x-auto max-h-96 overflow-y-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Ordered Item</th>
              <th className="px-4 py-2 text-left">Item Id</th>
              <th className="px-4 py-2 text-left">Vendors Available:</th>
              <th className="px-4 py-2 text-left">Order Date</th>
              <th className="px-4 py-2 text-left">Delivery Date</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Total Price</th>
              <th className="px-4 py-2 text-left">Shipping Address</th>
              <th className="px-4 py-2 text-left">Payment Status</th>
              <th className="px-4 py-2 text-left">Order Status</th>
              <th className="px-4 py-2 text-left">Contact Person:</th>
              <th className="px-4 py-2 text-left">Contact Number</th>
              <th className="px-4 py-2 text-left">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100"   onClick={() => toggleDetailModal(item)}>
                <td className="px-4 py-2 text-left">{item.id}</td>
                <td className="px-4 py-2 text-left">{item.name}</td>
                <td className="px-4 py-2 text-left">{item.batch}</td>
                <td className="px-4 py-2 text-left">{item.manufacturer}</td>
                <td className="px-4 py-2 text-left">{item.expiry}</td>
                <td className="px-4 py-2 text-left">{item.manufactured}</td>
                <td className="px-4 py-2 text-left">{item.quantity}</td>
                <td className="px-4 py-2 text-left">{item.category}</td>
                <td className="px-4 py-2 text-left">{item.reorderLevel}</td>
                <td className="px-4 py-2 text-left">{item.reorderQuantity}</td>
                <td className="px-4 py-2 text-left">{item.status}</td>
                <td className="px-4 py-2 text-left">{item.minStockLevel}</td>
                <td className="px-4 py-2 text-left">{item.maxStockLevel}</td>
                <td className="px-4 py-2 text-left">{item.storageLocation}</td>
                <td className="px-4 py-2 text-left">{item.tempRequirements}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}