/// <reference types="react" />
import { ButtonData, ButtonsData } from './models/models';
export declare namespace Buttons {
    const Component: ({ params }: {
        params: ButtonsData;
    }) => JSX.Element;
    interface Params extends ButtonsData {
    }
    namespace Button {
        interface Params extends ButtonData {
        }
    }
}
