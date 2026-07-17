import { Star } from "lucide-react";

interface Order {
  id: string;
  date: string;
  status: 'Entregado' | 'En camino' | 'En proceso';
  productName: string;
  price: number;
  imageUrl: string;
}

const sampleOrders: Order[] = [
  {
    id: "NX-48291",
    date: "28 mayo 2026",
    status: "Entregado",
    productName: "Auriculares Nova Pro X",
    price: 299,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06e30c?w=100&h=100&fit=crop"
  },
  {
    id: "NX-47831",
    date: "15 mayo 2026",
    status: "En camino",
    productName: "Reloj Apex Carbon",
    price: 1748,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-391d24c3b4bc?w=100&h=100&fit=crop"
  }
];

type OrdersProps = {
  currentTab: string;
};

export default function Orders({ currentTab }: OrdersProps) {
  return (
    <section>
      {/* Título principal adaptado al estilo de la aplicación */}
      <h1 className="text-2xl font-bold mb-6 text-gray-900">
        {currentTab}
      </h1>

      <div className="flex flex-col gap-4">
        {sampleOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm"
          >
            {/* Header: ID y Estado con diseño alineado */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="font-bold text-lg">{order.id}</h2>
                <p className="text-sm text-gray-500 font-medium">{order.date}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className={`h-2 w-2 rounded-full ${order.status === 'Entregado' ? 'bg-green-500' :
                      order.status === 'En camino' ? 'bg-orange-500' : 'bg-yellow-500'
                    }`}
                />
                <span className={`text-sm font-bold ${order.status === 'Entregado' ? 'text-green-600' :
                    order.status === 'En camino' ? 'text-orange-600' : 'text-yellow-600'
                  }`}>
                  {order.status}
                </span>
              </div>
            </div>

            {/* Body: Contenido del producto */}
            <div className="flex items-center gap-4">
              {/* Contenedor de imagen con fondo suave y redondeado */}
              <div className="w-16 h-16 rounded-2xl bg-gray-50 p-1 border border-gray-100">
                <img
                  src={order.imageUrl}
                  alt={order.productName}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-lg">{order.productName}</h3>
                {/* Botón Ver detalle con estilo de pastilla azul claro */}
                <button className="mt-1 text-sm font-medium text-blue-500 hover:text-blue-700 transition-colors">
                  Ver detalle
                </button>
              </div>

              <div className="text-right">
                <p className="font-bold text-lg">{order.price} €</p>
              </div>
            </div>

            {/* Footer: Botón Valorar con estilo redondeado y color turquesa */}
            {order.status === 'Entregado' && (
              <div className="mt-4">
                <button className="px-6 py-2 bg-[#1fb0ad] hover:bg-[#179aa3] text-white rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-md active:scale-95">
                  <Star className="size-5" /> Valorar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}