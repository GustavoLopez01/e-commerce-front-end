import { Outlet } from 'react-router';
import NavbarShop from '../components/shop/components/NavbarShop';

export default function ShopLayout() {
  return (
    <>
      <div className="w-full h-full">
        <NavbarShop />
        <Outlet />
      </div>
    </>
  )
}
