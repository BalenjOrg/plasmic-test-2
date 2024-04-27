// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _72SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _72SvgIcon(props: _72SvgIconProps) {
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

          <circle
            transform={"rotate(-45.001 276.53 275.536)"}
            cx={"276.5"}
            cy={"275.5"}
            strokeWidth={"2"}
            r={"259.5"}
          ></circle>

          <path
            d={
              "M124 312c23.4 84.8 84.8 122.7 156.9 124 47.6.8 109.5-22.8 138.3-76 11.6-21.5 14.9-42.3 15.8-56"
            }
            strokeWidth={"16"}
          ></path>
        </g>
      </switch>
    </svg>
  );
}

export default _72SvgIcon;
/* prettier-ignore-end */
