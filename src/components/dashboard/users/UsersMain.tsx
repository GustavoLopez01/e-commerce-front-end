import { Suspense, useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../../../api/users/api_user";
import { errorToast, successToast } from "../../../toast";
import { getAllRoles } from "../../../api/users/api_roles";
import CreateUserModal from "../../modal/CreateUserModal";
import DeleteModal from "../../modal/DeleteModal";
import UsersList from "./UsersList";
import UserForm from "./UserForm";
import type { UserBody } from "../../../types/user";
import type { UserRole } from "../../../types/rol";

export default function UsersMain() {
  const [userList, setUserList] = useState<UserBody[]>([]);
  const [rolList, setRolList] = useState<UserRole[]>([]);
  const [currentUser, setCurrentUser] = useState<UserBody | null>();
  const [showModalUser, setShowModalUser] = useState(false);
  const [showDeleteModalUser, setShowDeleteModalUser] = useState(false);

  const handleDeleteUser = async () => {
    if (!currentUser?.id) return;

    const response = await deleteUser(currentUser.id);
    if (!response?.success) {
      errorToast(response?.message ?? "Ocurrió un error al eliminar al usuario");
      return;
    }

    const updatedUserList = userList.filter(user => 
      user.id !== currentUser.id
    );

    successToast(response.message);
    setUserList(updatedUserList);
    setCurrentUser(null);
    setShowDeleteModalUser(false);
  }

  const handleUpdateUserList = (user: UserBody) => {
    let updatedUserList = [];
    if (currentUser?.id) {
      updatedUserList = userList.map(userItem => {
        if (userItem?.id === user?.id) {
          return {
            ...userItem,
            ...user
          }
        }

        return userItem;
      })
    } else {
      updatedUserList = [
        ...userList,
        user
      ]
    }

    setUserList(updatedUserList);
    setCurrentUser(null);
    setShowModalUser(false);
  }

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
              setCurrentUser(null);
              setShowModalUser(false);
            }}
          >
            <UserForm
              rolList={rolList}
              userToEdit={currentUser?.id ? currentUser : null}
              closeModal={handleUpdateUserList}
            />
          </CreateUserModal>
        </Suspense>
      )}

      {showDeleteModalUser && (
        <Suspense fallback={<></>}>
          <DeleteModal
            isOpen={showDeleteModalUser}
            message={`¿Estas seguro de eliminar al usuario ${currentUser?.name}?`}
            onAccept={handleDeleteUser}
            onCancel={() => {
              setShowDeleteModalUser(false);
              setCurrentUser(null);
            }}
            close={() => {
              setShowDeleteModalUser(false);
              setCurrentUser(null);
            }}
          />
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
            setCurrentUser(user);
            setShowModalUser(true);
          }}
          deleteUser={(user) => {
            setCurrentUser(user);
            setShowDeleteModalUser(true);
          }}
        />
      </div>
    </>
  )
}
