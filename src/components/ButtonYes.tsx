import * as React from "react";
import {
  PlasmicButtonYes,
  DefaultButtonYesProps
} from "./plasmic/balenj_components/PlasmicButtonYes";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface ButtonYesProps extends DefaultButtonYesProps {
  // Feel free to add any additional props that this component should receive
}
function ButtonYes_(props: ButtonYesProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButtonYes.useBehavior<ButtonYesProps>(
    props,
    ref
  );
  return <PlasmicButtonYes {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<ButtonYesProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<ButtonYesProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const ButtonYes = React.forwardRef(ButtonYes_) as any as ButtonComponentType;

export default Object.assign(ButtonYes, { __plumeType: "button" });
