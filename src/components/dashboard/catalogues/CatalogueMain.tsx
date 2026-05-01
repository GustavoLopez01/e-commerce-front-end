import { useEffect, useState } from "react";
import { TabView, TabPanel } from 'primereact/tabview';
import { getAllRoles } from "../../../api/users/api_roles";
import { api_getAllCategories } from "../../../api/category-products/api_categoryProducts";
import RolesTable from "./RolesTable";
import CategoriesTable from "./CategoriesTable";
import Loader from "../../ux/Loader";
import type { UserRole } from "../../../types/rol";
import type { ProductCategory } from "../../../types/productCategory";

type ContextTabPanelProps = {
  active?: boolean
  first?: boolean
  last?: boolean
}

export default function CatalogueMain() {
  const [rolList, setRolList] = useState<UserRole[]>([]);
  const [categoryList, setCategoryList] = useState<ProductCategory[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = async () => {
    setIsLoading(true);
    const promises =
      [
        getAllRoles(),
        api_getAllCategories()
      ] as const;

    const [roles, categories] = await Promise.allSettled(promises);

    if (roles.status === "fulfilled" && roles.value?.roles) {
      setRolList(roles.value?.roles)
    }

    if (categories.status === "fulfilled" && categories.value?.categories) {
      setCategoryList(categories.value.categories)
    }

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
              navContainer: { className: "bg-white border-0" }
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
              <RolesTable
                rolList={rolList}
                setRolList={setRolList}
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
              <CategoriesTable 
                categoryList={categoryList}
                setCategoryList={setCategoryList}
              />
            </TabPanel>
          </TabView>
        )}
      </div>
    </>
  )
}
