// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10 9v2a1 1 0 01-2 0V9a1 1 0 012 0zm5-1a1 1 0 00-1 1v2a1 1 0 002 0V9a1 1 0 00-1-1zm8 4A11 11 0 1112 1a11.013 11.013 0 0111 11zm-2 0a9 9 0 10-9 9 9.01 9.01 0 009-9z"
        }
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
