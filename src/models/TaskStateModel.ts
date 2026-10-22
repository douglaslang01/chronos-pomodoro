import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
  task: TaskModel[];
  secondsRemaining: number; // Segundos restantes para a tarefa atual
  formatedSecondsRemaining: string; // Segundos restantes formatados como string
  activeTask: TaskModel | null; // Tarefa atualmente ativa, se houver
  currentCycle: number; // Ciclo atual da tarefa, 1 a 8
  config: {
    workTime: number; // Duração do tempo de trabalho em segundos
    shortBreakTime: number; // Duração do intervalo curto em segundos
    longBreakTime: number; // Duração do intervalo longo em segundos
  };
};
