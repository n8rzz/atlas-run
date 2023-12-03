import { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface IProps extends PropsWithChildren {
  className: string;
  disabled: boolean;
  onClick: () => void;
}

export function UiResetButton(props: IProps) {
  return (
    <button
      className={clsx(props.className)}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
