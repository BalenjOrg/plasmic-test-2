// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BadEmoticonSquareFaceSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function BadEmoticonSquareFaceSvgrepoComsvgIcon(
  props: BadEmoticonSquareFaceSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 51.132 51.132"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M48.176 43.944a3.48 3.48 0 01-3.479 3.478H6.439a3.479 3.479 0 110-6.957h38.258a3.48 3.48 0 013.479 3.479zM50.21 4.632a3.147 3.147 0 01-.001 4.451l-9.455 9.456a3.148 3.148 0 01-4.451-4.451l9.456-9.455a3.147 3.147 0 014.451-.001zm.205 16.281a4.08 4.08 0 01-4.079 4.081 4.08 4.08 0 010-8.161 4.08 4.08 0 014.079 4.08zM.922 9.083a3.148 3.148 0 114.45-4.451l9.456 9.455a3.148 3.148 0 01-4.451 4.451L.922 9.083zm3.873 15.911a4.081 4.081 0 010-8.161 4.08 4.08 0 010 8.161z"
        }
      ></path>
    </svg>
  );
}

export default BadEmoticonSquareFaceSvgrepoComsvgIcon;
/* prettier-ignore-end */
