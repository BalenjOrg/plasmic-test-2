// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _42SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _42SvgIcon(props: _42SvgIconProps) {
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
        <g
          fill={"none"}
          stroke={"currentColor"}
          strokeWidth={"16"}
          strokeMiterlimit={"10"}
        >
          <circle cx={"276.5"} cy={"275.5"} r={"259.5"}></circle>

          <path
            d={
              "M412.3 389c-10.6-69.6-70.7-123-143.3-123s-132.7 53.4-143.3 123h286.6z"
            }
          ></path>
        </g>
      </switch>
    </svg>
  );
}

export default _42SvgIcon;
/* prettier-ignore-end */
