import { useState } from "react";
import { MapPin } from "lucide-react";
import AddAddressModal from "./address/AddressModal";

interface Address {
  id: string;
  type: 'Principal' | 'Secundaria';
  name: string;
  street: string;
  city: string;
  zipCode: string;
  country: string;
  phone: string;
}

const sampleAddresses: Address[] = [
  {
    id: "1",
    type: "Principal",
    name: "Juan García López",
    street: "Calle Mayor, 42, 3º B",
    city: "Madrid",
    zipCode: "28001",
    country: "España",
    phone: "+34 600 123 456"
  }
];

export default function Addresses() {

  const [showModal, setShowModal] = useState(false);
  return (
    <div className="space-y-6">
      {showModal && (
        <AddAddressModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {sampleAddresses.map((address) => (
          <div
            key={address.id}
            className="bg-white border-2 border-gray-100 rounded-4xl p-6 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-bold tracking-widest text-green-600">
                  {address.type.toUpperCase()}
                </span>
              </div>
              <button className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
                Editar
              </button>
            </div>

            <div className="space-y-1">
              <h2 className="font-bold text-lg text-gray-900">{address.name}</h2>
              <p className="text-sm text-gray-600">{address.street}</p>
              <p className="text-sm text-gray-600">
                {address.zipCode} {address.city}, {address.country}
              </p>
              <p className="text-sm text-gray-500 mt-2">{address.phone}</p>
            </div>
          </div>
        ))}

        <div
          className="cursor-pointer border-2 border-dashed border-gray-200 rounded-xl p-10 flex flex-col items-center justify-center bg-gray-50/50 hover:border-gray-400 transition-all delay-75"
          onClick={() => setShowModal(true)}
        >
          <MapPin className="text-gray-400 size-8" />
          <span className="text-md py-2 text-gray-800">
            Añadir dirección
          </span>
        </div>
      </div>
    </div>
  );
}
