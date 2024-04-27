// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
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
          "M17.707 8.707l-.793.793.793.793a1 1 0 11-1.414 1.414l-.793-.793-.793.793a1 1 0 01-1.414-1.414l.793-.793-.793-.793a1 1 0 111.414-1.414l.793.793.793-.793a1 1 0 111.414 1.414zm-10 3l.793-.793.793.793a1 1 0 001.414-1.414L9.914 9.5l.793-.793a1 1 0 10-1.414-1.414l-.793.793-.793-.793a1 1 0 10-1.414 1.414l.793.793-.793.793a1 1 0 101.414 1.414zM23 12A11 11 0 1112 1a11.013 11.013 0 0111 11zm-2 0a9 9 0 10-9 9 9.011 9.011 0 009-9zm-5 2H8a1 1 0 000 2h2v1a2 2 0 004 0v-1h2a1 1 0 000-2z"
        }
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
