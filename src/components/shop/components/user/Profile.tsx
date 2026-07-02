import { useState } from "react";
import Tabs from "./Tabs";

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

          <div className="col-span-3">

          </div>
        </div>
      </div>
    </section>
  )
}
