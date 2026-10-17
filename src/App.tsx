import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Heading attr="String"> Olá, Mundo 1! </Heading>
      <Heading> Olá, Mundo 2! </Heading>
      <Heading> Olá, Mundo 3! </Heading>
    </>
  );
}
