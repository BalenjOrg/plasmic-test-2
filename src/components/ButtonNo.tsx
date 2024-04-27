import * as React from "react";
import {
  PlasmicButtonNo,
  DefaultButtonNoProps
} from "./plasmic/balenj_components/PlasmicButtonNo";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface ButtonNoProps extends DefaultButtonNoProps {
  // Feel free to add any additional props that this component should receive
}
function ButtonNo_(props: ButtonNoProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButtonNo.useBehavior<ButtonNoProps>(
    props,
    ref
  );
  return <PlasmicButtonNo {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<ButtonNoProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<ButtonNoProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const ButtonNo = React.forwardRef(ButtonNo_) as any as ButtonComponentType;

export default Object.assign(ButtonNo, { __plumeType: "button" });
