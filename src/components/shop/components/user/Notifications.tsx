interface NotificationOption {
  id: string;
  title: string;
  description: string;
}

const notificationOptions: NotificationOption[] = [
  {
    id: 'emails',
    title: 'Emails de pedidos',
    description: 'Confirmaciones y actualizaciones de estado',
  },
  {
    id: 'offers',
    title: 'Ofertas y novedades',
    description: 'Descuentos exclusivos y nuevos productos',
  },
  {
    id: 'push',
    title: 'Push notifications',
    description: 'Notificaciones en el navegador',
  },
  {
    id: 'sms',
    title: 'SMS',
    description: 'Mensajes sobre tu pedido',
  },
];

export default function Notifications() {
  return (
    <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm">
      <div className="space-y-1">
        {notificationOptions.map((option) => (
          <div 
            key={option.id} 
            className="flex items-center justify-between py-4 border-b border-gray-50 last:border-none"
          >
            <div className="flex flex-col">
              <h3 className="font-bold text-[15px] text-gray-900">
                {option.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                {option.description}
              </p>
            </div>
            
            {/* Toggle Switch Component */}
            <div className="relative inline-flex items-center cursor-pointer">
              <div 
                className="w-12 h-6 bg-[#73D5A0] rounded-full transition-colors duration-200"
                role="switch"
                aria-checked="true"
              >
                {/* El círculo blanco del toggle */}
                <div className="absolute right-1 bg-white w-4 h-4 rounded-full shadow-sm transform translate-x-1.5"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}