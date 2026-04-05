import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle
} from "@headlessui/react";
import { X } from "lucide-react";
import type { ReactNode } from "react";

type CreateProductModalProps = {
  isOpen: boolean
  close: () => void
  children: ReactNode
}

export default function CreateProductModal({
  isOpen,
  close,
  children
}: CreateProductModalProps) {
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
        <div className="flex md:min-w-3xl min-h-full items-center justify-center p-4">
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
              className="text-center font-bold text-2xl"  
            >
              Crear producto
            </DialogTitle>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
