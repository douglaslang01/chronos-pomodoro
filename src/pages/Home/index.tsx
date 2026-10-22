import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { MainLayout } from "../../layouts/MainLayout";

export function Home() {
  return (
    <MainLayout>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainLayout>
  );
}
