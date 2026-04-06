import { useEffect, useState } from "react"
import { TabView, TabPanel } from 'primereact/tabview';
import { getAllRoles } from "../../../api/users/api_roles";
import Table from "./Table";
import Loader from "../../ux/Loader";
import type { UserRole } from "../../../types/rol";

type ContextTabPanelProps = {
  active?: boolean
  first?: boolean
  last?: boolean
}

export default function CatalogueMain() {
  const [rolList, setRolList] = useState<UserRole[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = async () => {
    setIsLoading(true);
    const responseRoles = await getAllRoles();
    if (responseRoles?.success) setRolList(responseRoles.roles);
    setIsLoading(false);
  }

  const handleGenerateCssTabPanel = (state: ContextTabPanelProps) => {
    return `p-4 font-family-inter-bold hover:bg-gray-100
      ${state.active ? 'text-blue-600 border-b-2 border-b-blue-500' : 'bg-white text-black'}
    `;
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
            className="z-auto"
            pt={{
              navContainer: { className: "bg-white" }
            }}
          >
            <TabPanel header="Roles"
              className=""
              pt={{
                headerAction(options) {
                  const cssClass = handleGenerateCssTabPanel(options?.context!)
                  return {
                    className: cssClass
                  }
                },
              }}
            >
              <Table
                rolList={rolList}
              />
            </TabPanel>

            <TabPanel header="Categorias"
              pt={{
                headerAction(options) {
                  const cssClass = handleGenerateCssTabPanel(options?.context!)
                  return {
                    className: cssClass
                  }
                },
              }}
            >
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
