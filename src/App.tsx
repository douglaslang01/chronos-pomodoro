import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <>
      <Heading>
        Olá, Mundo!
        <button>
          {" "}
          <TimerIcon />
        </button>
      </Heading>
    </>
  );
}
