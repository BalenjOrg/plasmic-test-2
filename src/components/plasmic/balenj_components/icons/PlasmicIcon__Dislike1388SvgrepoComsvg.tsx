// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Dislike1388SvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Dislike1388SvgrepoComsvgIcon(
  props: Dislike1388SvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -0.5 21 21"}
      version={"1.1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.9 0h-2.1v11.988h2.1c1.16 0 2.1-.894 2.1-1.998V1.998C21 .894 20.06 0 18.9 0M4.698 0H14.7v11.988l-1.805 6.188c-.213 1.316-1.65 2.199-3.105 1.667-.87-.318-1.39-1.18-1.39-2.068v-4.788c0-.552-.47-1-1.05-1H2.873c-1.847 0-3.213-1.634-2.798-3.346L1.9 2.118C2.2.878 3.36 0 4.698 0"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Dislike1388SvgrepoComsvgIcon;
/* prettier-ignore-end */
