// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShareSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShareSvgrepoComsvgIcon(props: ShareSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
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
          "M13.803 5.333c0-1.84 1.5-3.333 3.348-3.333A3.341 3.341 0 0120.5 5.333c0 1.841-1.5 3.334-3.349 3.334a3.346 3.346 0 01-2.384-.994l-4.635 3.156a3.336 3.336 0 01-.182 1.917l5.082 3.34a3.346 3.346 0 012.12-.753 3.341 3.341 0 013.348 3.334C20.5 20.507 19 22 17.151 22a3.341 3.341 0 01-3.348-3.333 3.3 3.3 0 01.289-1.356L9.05 14a3.346 3.346 0 01-2.202.821A3.34 3.34 0 013.5 11.487a3.34 3.34 0 013.348-3.333c1.064 0 2.01.493 2.623 1.261l4.493-3.059a3.317 3.317 0 01-.161-1.023z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShareSvgrepoComsvgIcon;
/* prettier-ignore-end */
