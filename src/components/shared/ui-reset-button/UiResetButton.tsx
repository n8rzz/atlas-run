import { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface IProps extends PropsWithChildren {
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}

export function UiResetButton(props: IProps) {
  const { className = '', disabled = false } = props;

  return (
    <button
      className={clsx('px-2', className)}
      disabled={disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
