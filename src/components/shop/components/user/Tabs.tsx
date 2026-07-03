import {
  ChevronRight,
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
    <div className="col-span-4 md:col-span-2 xl:col-span-1">
      <div className="w-full bg-white flex gap-4 items-center border border-gray-300 h-32 rounded-md pl-5">
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

      <div className="w-full mt-5 bg-white grid border border-gray-300 rounded-md">
        {TABS.map(({ name, icon }, i) => {
          const isSelected = currentTab === name;
          return (
            <div
              className={`text-left cursor-pointer 
                ${isSelected ? ' font-family-inter-bold' : ''}`}
            >
              <span
                className={`flex gap-4 py-4 px-5 
                  ${isSelected ? ' bg-gray-100 font-family-inter-bold' : 'border-b'}
                  ${i === 0 ? 'rounded-t-md' : i === TABS.length - 1 ? 'rounded-b-md' : ''}
                  hover:bg-gray-50
                `}
                onClick={() => setCurrentTab(name)}
              >
                <span className={isSelected ? 'text-brand' : ''}>
                  {icon}
                </span>

                <span className="w-full flex justify-between">
                  {name}

                  {isSelected && (
                    <ChevronRight className="text-brand" />
                  )}
                </span>
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
