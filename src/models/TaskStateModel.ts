import type { TaskModel } from "./TaskModel";
import type { TaskConfigModel } from "./TaskConfigModel";

export type TaskStateModel = {
  task: TaskModel[];
  secondsRemaining: number; // Segundos restantes para a tarefa atual
  formatedSecondsRemaining: string; // Segundos restantes formatados como string
  activeTask: TaskModel | null; // Tarefa atualmente ativa, se houver
  currentCycle: number; // Ciclo atual da tarefa, 1 a 8
  config: TaskConfigModel;
};
