import { useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { getUserByToken } from "../../api/users/api_user";
import { useUserStore } from "../../store/useUser";
import { removeCookie } from "../../helpers/cookie";
import { LogOut, Menu, User } from "lucide-react";

export default function Nabvar() {
  const navigate = useNavigate();
  const userStore = useUserStore(state => state.user);
  const updateUser = useUserStore(state => state.updateUser);
  const showSidebar = useUserStore(state => state.showSidebar);
  const setShowSidebar = useUserStore(state => state.setShowSidebar);

  const handleLogout = async () => {
    removeCookie('userToken');
    navigate('/', {
      replace: true
    });
    window.location.reload();
  }

  useEffect(() => {
    getUserByToken().then(response => {
      if (response?.user) updateUser(response.user)
    });
  }, [])

  return (
    <nav className="absolute bg-white w-full flex justify-between text-black shadow px-6 py-5">
      <div className="w-full grid grid-cols-2">
        <h3 className="font-bold text-2xl">
          ShopHub
        </h3>

        <div className="flex justify-end">
          <ContainerUserInformation className="cursor-pointer flex items-center justify-center gap-3">
            <User className="text-gray-500 size-6" />
            {userStore?.name}
            <LogOut
              className="text-gray-500 size-5"
              onClick={handleLogout}
            />
          </ContainerUserInformation>

          <MenuIcon
            className="text-gray-500 cursor-pointer"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </div>
      </div>
    </nav>
  )
}

const MenuIcon = styled(Menu)`
  display: none;
  @media (max-width: 1024px) {
    display: block; 
  }
`

const ContainerUserInformation = styled.div`
  display: block;
  @media (max-width: 1024px) {
    display: none;
  }

`
