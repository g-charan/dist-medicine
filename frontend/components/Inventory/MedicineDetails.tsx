const MedicineDetails = ({ selectedMedicine }: any) => {
  return (
    <div className="w-full text-left">
      <h3 className="font-medium text-gray-900 text-lg leading-6">
        {selectedMedicine.id}
      </h3>
      <div className="flex mt-4">
        <img
          src={selectedMedicine.imageUrl}
          alt={selectedMedicine.name}
          className="mr-4 w-32 h-32 object-cover"
        />
        <div>
          <p>
            <strong>Batch:</strong> {selectedMedicine.batch}
          </p>
          <p>
            <strong>Manufacturer:</strong> {selectedMedicine.manufacturer}
          </p>
          <p>
            <strong>Expiry:</strong> {selectedMedicine.expiry}
          </p>
          <p>
            <strong>Quantity:</strong> {selectedMedicine.quantity}
          </p>
          <p>
            <strong>Category:</strong> {selectedMedicine.category}
          </p>
          <p>
            <strong>Status:</strong> {selectedMedicine.status}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p>
          <strong>Storage Location:</strong> {selectedMedicine.storageLocation}
        </p>
        <p>
          <strong>Temperature Requirements:</strong>{" "}
          {selectedMedicine.tempRequirements}
        </p>
        <p>
          <strong>Certification:</strong> {selectedMedicine.certification}
        </p>
      </div>
    </div>
  );
};

export default MedicineDetails;
