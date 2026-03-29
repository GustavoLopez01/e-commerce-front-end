import { useEffect, useState } from "react"
import { getAllRoles } from "../../../api/users/api_roles";
import type { UserRole } from "../../../types/rol";
import Table from "./Table";
import { TabView, TabPanel } from 'primereact/tabview';
import Loader from "../../ux/Loader";

export default function CatalogueMain() {
  const [rolList, setRolList] = useState<UserRole[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = async () => {
    setIsLoading(true);
    const responseRoles = await getAllRoles();
    if (responseRoles?.success) setRolList(responseRoles.roles);
    setIsLoading(false);
  }

  useEffect(() => {
    handleLoad();
  }, []);
  
  return (
    <>
      <div className={`w-full flex flex-col justify-center ${isLoading ? 'items-center h-full' : ''} text-black pt-5`}>
        {isLoading ? (
          <Loader
            width="30px"
            height="30px"
          />
        ) : (
          <TabView
            pt={{
              navContainer: { className: "bg-white border-0" },
              tab: { className: "text-red-500" },
            }}
          >
            <TabPanel header="Roles"
              className=""
              pt={{
                headerTitle: { className: "bg-b-red-500 " }
              }}
            >
              <Table
                rolList={rolList}
              />
            </TabPanel>

            <TabPanel header="Categorias">
              <div>
                Categoria
              </div>
            </TabPanel>
          </TabView>
        )}
      </div>
    </>
  )
}
