import {
  Heart,
  MapPinned,
  Package2,
  Settings,
  WalletCards
} from "lucide-react";

type TabsProps = {
  currentTab: string
  setCurrentTab: (tab: string) => void
}

const TABS = [
  { name: "Mis pedidos", icon: <Package2 className="size-5" /> },
  { name: "Favoritos", icon: <Heart className="size-5" /> },
  { name: "Direcciones", icon: <MapPinned className="size-5" /> },
  { name: "Métodos de pago", icon: <WalletCards className="size-5" /> },
  { name: "Configuración", icon: <Settings className="size-5" /> }
];

export default function Tabs({
  currentTab,
  setCurrentTab
}: TabsProps) {
  return (
    <div className="col-span-1">
      <div className="w-full bg-white grid grid-cols-3 justify-center items-center border border-gray-300 h-36 rounded-md px-5">
        <div className="bg-black col-span-1 h-15 flex items-center justify-center text-white w-16 text-center rounded-md">
          <span className="font-family-inter-bold">G</span>
        </div>

        <div className="col-span-2 flex flex-col wrap-break-word">
          <p className="flex flex-col font-family-inter-bold">
            Gustavo López
            <span className="font-family-inter-regular text-sm">
              gustavo@gmail.com
            </span>
          </p>
        </div>
      </div>

      <div className="w-full mt-5  bg-white grid border border-gray-300 rounded-md">
        {TABS.map(({ name, icon }, i) => {
          const isSelected = currentTab === name;
          return (
            <div
              className={`${isSelected ? ' bg-gray-100 font-family-inter-bold' : ''}
                       text-left cursor-pointer`}
            >
              <span
                className={`flex gap-4 py-4 mx-1 ${isSelected ? ' bg-gray-100 font-family-inter-bold' : 'border-b'}`}
                onClick={() => setCurrentTab(name)}
              >
                <span className={isSelected ? 'text-brand' : ''}>
                  {icon}
                </span>
                {name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
