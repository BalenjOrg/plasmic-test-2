// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Like1385SvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Like1385SvgrepoComsvgIcon(
  props: Like1385SvgrepoComsvgIconProps
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
          "M0 20h4.2V8H0v12zm20.924-8.645l-1.823 6.535c-.302 1.241-1.462 2.11-2.799 2.11H6.3V8.021l1.805-6.196C8.274.775 9.223 0 10.339 0 11.588 0 12.6.964 12.6 2.153V8h5.526c1.847 0 3.214 1.641 2.798 3.355z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Like1385SvgrepoComsvgIcon;
/* prettier-ignore-end */
