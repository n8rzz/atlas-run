import { Fragment, PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  condition: boolean;
}

export function UiIf(props: IProps) {
  return (
    <Fragment>
      {props.condition && props.condition}
      {!props.condition && null}
    </Fragment>
  );
}
