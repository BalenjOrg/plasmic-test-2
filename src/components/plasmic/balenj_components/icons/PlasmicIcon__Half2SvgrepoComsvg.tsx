// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Half2SvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Half2SvgrepoComsvgIcon(props: Half2SvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 15 15"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.5.877a6.623 6.623 0 100 13.246A6.623 6.623 0 007.5.877zm0 .95a5.673 5.673 0 000 11.346V1.827z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Half2SvgrepoComsvgIcon;
/* prettier-ignore-end */
