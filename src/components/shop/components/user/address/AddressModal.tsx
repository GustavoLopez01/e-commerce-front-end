import { useState } from 'react';
import { api_saveAddress } from '../../../../../api/users/api_user_addresses';
import ModalComponent from '@/components/modal/ModalComponent';

interface AddAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddAddressModal({ isOpen, onClose }: AddAddressModalProps) {
  const [formData, setFormData] = useState({
    street: '',
    extNumber: '',
    postalCode: '',
    settlement: '',
    city: '',
    state: '',
    country: '',
    phoneNumber: '',
    observations: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api_saveAddress(formData);
      if (response) {
        alert("Dirección guardada con éxito");
        onClose();
      }
    } catch (error) {
      console.error("Error al guardar la dirección:", error);
      alert("Hubo un problema al guardar la dirección.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModalComponent
      isOpen={isOpen}
      title="Nueva Dirección"
      close={onClose}
    >
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        {/* Fila 1: Calle y Exterior */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Calle</label>
            <input
              type="text"
              placeholder="Ej: Calle Falsa 123"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
              onChange={(e) => setFormData({ ...formData, street: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Extensión / Interior</label>
            <input
              type="text"
              placeholder="Ej: Int. 4B"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"

              onChange={(e) => setFormData({ ...formData, extNumber: e.target.value })}
            />
          </div>
        </div>

        {/* Fila 2: Código Postal y Colonia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Código Postal</label>
            <input
              type="text"
              placeholder="Ej: 01000"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
              onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Colonia / Fraccionamiento</label>
            <input
              type="text"
              placeholder="Ej: Colonia Centro"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
              onChange={(e) => setFormData({ ...formData, settlement: e.target.value })}
            />
          </div>
        </div>

        {/* Fila 3: Ciudad y Estado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Ciudad</label>
            <input
              type="text"
              placeholder="Ej: Ciudad de México"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Estado</label>
            <input
              type="text"
              placeholder="Ej: CDMX"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            />
          </div>
        </div>

        {/* Fila 4: País y Teléfono */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">País</label>
            <input
              type="text"
              placeholder="Ej: México"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Teléfono</label>
            <input
              type="text"
              placeholder="Ej: +521234567890"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
          </div>
        </div>

        {/* Fila 5: Observaciones */}
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Observaciones</label>
          <textarea
            placeholder="Ej: Entregar en la puerta principal"
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all h-24 resize-none"
            onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-[#1fb0ad] hover:bg-[#179aa3] text-white rounded-full font-bold transition-all shadow-lg active:scale-95 disabled:opacity-50"
          >
            {isLoading ? 'Guardando...' : 'Confirmar Dirección'}
          </button>
        </div>
      </form>
    </ModalComponent>
  );
}