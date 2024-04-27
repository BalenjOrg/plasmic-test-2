// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EmojiSadCircle548SvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function EmojiSadCircle548SvgrepoComsvgIcon(
  props: EmojiSadCircle548SvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 20 20"}
      version={"1.1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16 8a2 2 0 11-3.999.001A2 2 0 0116 8M6 10a2 2 0 11-.001-3.999A2 2 0 016 10m8.893 5.164c.117.599-.38 1.251-.991 1.251H6.098c-.611 0-1.108-.755-.991-1.354 1.007-5.138 8.779-5.034 9.786.103M10 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8m0-18C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default EmojiSadCircle548SvgrepoComsvgIcon;
/* prettier-ignore-end */
