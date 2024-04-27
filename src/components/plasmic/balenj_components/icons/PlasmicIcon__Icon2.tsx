// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
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
          "M8 11V9a1 1 0 012 0v2a1 1 0 01-2 0zm7 1a1 1 0 001-1V9a1 1 0 00-2 0v2a1 1 0 001 1zm-3 2a6.036 6.036 0 00-4.775 2.368 1 1 0 101.55 1.264 4 4 0 016.45 0 1 1 0 001.55-1.264A6.036 6.036 0 0012 14zm11-2A11 11 0 1112 1a11.013 11.013 0 0111 11zm-2 0a9 9 0 10-9 9 9.01 9.01 0 009-9z"
        }
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
