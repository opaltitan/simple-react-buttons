
interface ButtonData {
  id: number;
  displayText: string;
  params: Array<any>;
  paramDeriver?: (params: any) => Array<any>;
  clickCallback: (...params: Array<any>) => void;
}

export interface ButtonsData {
  parentClass: string;
  buttons: Array<ButtonData>;
}