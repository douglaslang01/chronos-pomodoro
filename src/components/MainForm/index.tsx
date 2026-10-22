import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaulButton";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";

export function MainForm() {
  return (
    <form className="form" action="">
      <div className="formRow">
        <DefaultInput
          id="inputTask"
          labelText="Task"
          type="text"
          placeholder="Dite algo..."
        />
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
