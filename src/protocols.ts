
export type ApplicationError = {
  name: string;
  message: string;
};

export interface Expense {
  id: number;
  cardId: number;
  name: string;
  value: number;
  person: string;
}