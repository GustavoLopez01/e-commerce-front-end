import { toast } from "sonner";

const DURATION = 2500;
const CLASS_NAME = '!transition !delay-150 !duration-300 !ease-in-out';

export const showToast = (type: string, msg: string) => {

  switch (type) {
    case "success":
      toast.success(msg, {
        className: CLASS_NAME,
        duration: DURATION,
      });
      break;
    case "warning":
      toast.warning(msg, {
        className: CLASS_NAME,
        duration: DURATION,
      });
      break;

    default:
      toast.success(msg);
      break;
  }
} 