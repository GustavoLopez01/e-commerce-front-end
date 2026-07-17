import { useState } from "react";
import Tabs from "./Tabs";
import Orders from "./Orders";
import Addresses from "./Addresses";
import Notifications from "./Notifications";

export default function Profile() {
  const [currentTab, setCurrentTab] = useState("Mis pedidos");
  return (
    <section className="min-h-screen bg-background pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-4 gap-10">
          <Tabs
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />

          <div className="col-span-4 md:col-span-2 xl:col-span-3">
            {currentTab === "Mis pedidos" && (
              <Orders
                currentTab={currentTab}
              />
            )}

            {currentTab === "Direcciones" && (
              <Addresses />
            )}

            {currentTab === "Configuración" && (
              <Notifications />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
