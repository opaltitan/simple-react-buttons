import { ButtonsData } from './models/models';

export const ButtonsComponent = ({ params }: { params: ButtonsData }): JSX.Element => {
  return (
    <div className={params.parentClass}>
      {params.buttons.map((button) =>
        <button key={button.id}
                onClick={() => button.clickCallback(...button.params)}>
          {button.displayText}
        </button>
      )}
    </div>
  );
};
