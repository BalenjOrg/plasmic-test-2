// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _52SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _52SvgIcon(props: _52SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 552 552"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <switch>
        <g fill={"none"} stroke={"currentColor"} strokeMiterlimit={"10"}>
          <circle
            cx={"276.5"}
            cy={"275.5"}
            strokeWidth={"16"}
            r={"259.5"}
          ></circle>

          <path
            d={
              "M132.8 364.3c9.6-8.9 66.7-60.5 152.6-54.9 76.5 5 123.6 51.9 134.3 63.1"
            }
            strokeWidth={"16"}
          ></path>

          <circle
            transform={"rotate(-45.001 276.53 275.536)"}
            cx={"276.5"}
            cy={"275.5"}
            strokeWidth={"2"}
            r={"259.5"}
          ></circle>
        </g>
      </switch>
    </svg>
  );
}

export default _52SvgIcon;
/* prettier-ignore-end */
