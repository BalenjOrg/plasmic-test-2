// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LastQuarterSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LastQuarterSvgrepoComsvgIcon(
  props: LastQuarterSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"16"}
        cy={"16"}
        r={"11"}
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
      ></circle>

      <path
        d={"M27 16c0 6.075-4.925 11-11 11V5c6.075 0 11 4.925 11 11z"}
      ></path>
    </svg>
  );
}

export default LastQuarterSvgrepoComsvgIcon;
/* prettier-ignore-end */
