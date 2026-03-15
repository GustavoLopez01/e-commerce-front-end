import { Suspense, useEffect, useState } from "react";
import { getAllUsers } from "../../../api/users/api_user";
import { getAllRoles } from "../../../api/users/api_roles";
import CreateUserModal from "../../modal/CreateUserModal";
import UsersList from "./UsersList";
import UserForm from "./UserForm";
import type { UserBody } from "../../../types/user";
import type { UserRole } from "../../../types/rol";

export default function UsersMain() {
  const [userList, setUserList] = useState<UserBody[]>([]);
  const [rolList, setRolList] = useState<UserRole[]>([]);
  const [userToEdit, setUserToEdit] = useState<UserBody | null>();
  const [showModalUser, setShowModalUser] = useState(false);

  useEffect(() => {
    getAllUsers().then(response => {
      if (response?.success) setUserList(response.users);
    });
    getAllRoles().then(response => {
      if (response?.success) setRolList(response.roles);
    })
  }, []);

  return (
    <>
      {showModalUser && (
        <Suspense fallback={<></>}>
          <CreateUserModal
            isOpen={showModalUser}
            close={() => {
              setUserToEdit(null);
              setShowModalUser(false);
            }}
          >
            <UserForm
              rolList={rolList}
              userToEdit={userToEdit?.id ? userToEdit : null}
              closeModal={() => {
                setUserToEdit(null);
                setShowModalUser(false);
              }}
            />
          </CreateUserModal>
        </Suspense>
      )}

      <div className="text-black p-5">
        <div className="grid md:grid-cols-2 gap-3 pb-5">
          <div className="flex h-10 gap-1">
            <input
              type="text"
              placeholder="Buscar usuario..."
              className="bg-white px-5 rounded-md outline-0"
            />
          </div>
          <div className="flex md:justify-end">
            <button
              className="bg-blue-500 cursor-pointer text-white px-5 py-2 rounded-md"
              onClick={() => setShowModalUser(true)}
            >
              + Agregar usuario
            </button>
          </div>
        </div>

        <UsersList
          usersList={userList}
          rolList={rolList}
          setUserToEdit={(user) => {
            setShowModalUser(true);
            setUserToEdit(user)
          }}
        />
      </div>
    </>
  )
}
