// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DownvoteSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DownvoteSvgrepoComsvgIcon(
  props: DownvoteSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.901 10.566A1.001 1.001 0 0020 10h-4V3a1 1 0 00-1-1H9a1 1 0 00-1 1v7H4a1.001 1.001 0 00-.781 1.625l8 10a1 1 0 001.562 0l8-10c.24-.301.286-.712.12-1.059z"
        }
      ></path>
    </svg>
  );
}

export default DownvoteSvgrepoComsvgIcon;
/* prettier-ignore-end */
