import { ButtonsData } from './models/models';
import { ButtonsComponent } from './Buttons';

export namespace Buttons {
  export const Component = ButtonsComponent;

  export interface Params extends ButtonsData { }
};
