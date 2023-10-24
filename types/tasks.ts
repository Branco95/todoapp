export interface ITask {
  id: string;
  text: string;
  date?: string; // ? means optional field
  dateend?: Date | undefined;
}
