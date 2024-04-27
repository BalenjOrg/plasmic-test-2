// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SmileSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SmileSvgrepoComsvgIcon(props: SmileSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 96.433 96.433"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24.82 48.678c5.422 0 9.832-6.644 9.832-14.811 0-8.165-4.41-14.809-9.832-14.809s-9.833 6.644-9.833 14.809c0 8.167 4.412 14.811 9.833 14.811zm46.786 0c5.422 0 9.833-6.644 9.833-14.811 0-8.165-4.411-14.809-9.833-14.809-5.421 0-9.831 6.644-9.831 14.809 0 8.167 4.411 14.811 9.831 14.811zm24.249 7.128a1.998 1.998 0 00-2.285-.4C81.232 61.29 65.125 64.53 48.214 64.53c-16.907 0-33.015-3.24-45.354-9.123a2 2 0 00-2.653 2.69c5.606 11.351 25.349 19.277 48.008 19.277 22.668 0 42.412-7.929 48.012-19.279a2.002 2.002 0 00-.372-2.289z"
        }
      ></path>
    </svg>
  );
}

export default SmileSvgrepoComsvgIcon;
/* prettier-ignore-end */
