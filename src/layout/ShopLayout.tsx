import { Outlet } from 'react-router';
import { Toaster } from "sonner";
import NavbarShop from '../components/shop/components/NavbarShop';
import Footer from '../components/ux/shop/Footer';

export default function ShopLayout() {
  return (
    <>
      <div className="w-full h-full overflow-x-hidden">
        <Toaster
          position="top-right"
          richColors
        />
        <NavbarShop />
        <div className='flex flex-col'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}
