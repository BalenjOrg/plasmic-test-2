// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EmojiNeutralSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EmojiNeutralSvgrepoComsvgIcon(
  props: EmojiNeutralSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8 14a1 1 0 100 2h8a1 1 0 000-2H8z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-2.007a8.993 8.993 0 110-17.986 8.993 8.993 0 010 17.986z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EmojiNeutralSvgrepoComsvgIcon;
/* prettier-ignore-end */
