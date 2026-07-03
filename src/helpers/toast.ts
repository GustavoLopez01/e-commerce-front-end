import { toast } from "sonner";

const PROPERTIES = {
  duration: 2500,
  className: '!transition !delay-150 !duration-300 !ease-in-out',
  closeButton: true,
}

export const showToast = (type: string, msg: string) => {
  switch (type) {
    case "success":
      toast.success(msg, {...PROPERTIES});
      break;
    case "warning":
      toast.warning(msg, {...PROPERTIES});
      break;

    default:
      toast.success(msg);
      break;
  }
} 