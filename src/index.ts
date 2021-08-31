import { ButtonsData } from './models/models';
import { ButtonsComponent } from './Buttons';

export namespace Buttons {
  export const Buttons = ButtonsComponent;

  export interface Params extends ButtonsData { }
};
