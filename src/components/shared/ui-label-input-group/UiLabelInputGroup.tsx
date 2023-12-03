import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {}

export function UiLabelInputGroup(props: IProps) {
  return (
    <div className={'py-1 flex items-center justify-between'}>
      {props.children}
    </div>
  );
}
