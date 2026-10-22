import type { TaskConfigModel } from "./TaskConfigModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // Data de conclusão da tarefa, se concluída
  interruptedDate: number | null; // Data de interrupção da tarefa, se interrompida
  type: keyof TaskConfigModel;
};
