// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _82SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _82SvgIcon(props: _82SvgIconProps) {
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
              "M120.5 301.6c8.1 83.3 79.3 147.1 162.4 146.1 83.7-1 153.7-67.5 159-151.7-107.2 1.9-214.3 3.7-321.4 5.6z"
            }
            strokeWidth={"16"}
          ></path>
        </g>
      </switch>
    </svg>
  );
}

export default _82SvgIcon;
/* prettier-ignore-end */
