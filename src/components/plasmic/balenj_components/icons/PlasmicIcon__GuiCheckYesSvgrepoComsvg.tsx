// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GuiCheckYesSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GuiCheckYesSvgrepoComsvgIcon(
  props: GuiCheckYesSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"#000"}
      viewBox={"0 0 14 14"}
      role={"img"}
      focusable={"false"}
      aria-hidden={"true"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"green"}
        d={
          "M13 4.197q0 .31-.217.527l-5.605 5.605-1.053 1.053q-.217.217-.526.217-.31 0-.527-.217L4.02 10.329 1.217 7.526Q1 7.31 1 7t.217-.526L2.27 5.42q.216-.217.526-.217.31 0 .527.217l2.276 2.283 5.078-5.086q.217-.217.527-.217.31 0 .526.217l1.053 1.053q.217.217.217.526z"
        }
      ></path>
    </svg>
  );
}

export default GuiCheckYesSvgrepoComsvgIcon;
/* prettier-ignore-end */
