import { use, useEffect } from "react";
import { getUserByToken } from "../../api/users/api_user";
import { useUserStore } from "../../store/useUser";
import { removeCookie } from "../../helpers/cookie";
import { LogOut, User } from "lucide-react";
import { useNavigate } from "react-router";

const user = getUserByToken();

export default function Nabvar() {
  const navigate = useNavigate();
  const userResponse = use(user);
  const userStore = useUserStore(state => state.user);
  const updateUser = useUserStore(state => state.updateUser);

  const handleLogout = async () => {
    removeCookie('userToken');
    navigate('/', {
      replace: true
    });
    window.location.reload();
  }

  useEffect(() => {
    if (userResponse?.user) updateUser(userResponse.user);
  }, [userResponse?.user]);

  return (
    <nav className="w-full flex justify-between text-black shadow px-6 py-5">
      <div className="w-full grid grid-cols-2">
        <h3 className="font-bold text-2xl">
          ShopHub
        </h3>

        <div className="flex justify-end">
          <div className="cursor-pointer flex items-center justify-center gap-3">
            <User className="text-gray-500 size-6" />
            {userStore?.name}
            <LogOut
              className="text-gray-500 size-5"
              onClick={handleLogout}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
