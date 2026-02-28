import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle
} from "@headlessui/react";
import { TriangleAlert, X } from "lucide-react";

type DeleteModalProps = {
  isOpen: boolean
  message: string
  onAccept: () => void
  onCancel: () => void
  close: () => void
}

export default function DeleteModal({
  isOpen,
  message,
  onAccept,
  onCancel,
  close
}: DeleteModalProps) {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}
    >
      <DialogBackdrop
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-w-3xl min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl text-black bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <div className="flex justify-end">
              <X
                className="size-4 cursor-pointer"
                onClick={close}
              />
            </div>
            <DialogTitle
              as="h3"
              className="text-center font-bold text-2xl flex flex-col justify-center items-center"
            >
              <TriangleAlert className="text-yellow-400 size-20" />
              Atención
            </DialogTitle>

            <p className="py-5 text-center font-semibold">
              {message}
            </p>

            <div className="flex justify-center gap-1">
              <button
                className="bg-slate-400 cursor-pointer text-white px-4 py-1 rounded-full"
                onClick={onCancel}
              >
                Cancelar
              </button>
              <button
                className="bg-blue-500 cursor-pointer text-white px-4 py-1 rounded-full"
                onClick={onAccept}
              >
                Aceptar
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
