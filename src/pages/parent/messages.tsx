import { openGuard } from "@kidneed/utils";
import { Messages } from "saturn/Messages";

export default function Message() {
  return <Messages/>
}

Message.guard = openGuard;
