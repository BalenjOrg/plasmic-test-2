// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EmojiLoveSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EmojiLoveSvgrepoComsvgIcon(
  props: EmojiLoveSvgrepoComsvgIconProps
) {
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
        d={
          "M8.889 14.541a1 1 0 00-1.783.906c.082.165.187.319.297.466.183.244.46.557.848.868.79.632 2.006 1.22 3.75 1.22 1.742 0 2.96-.588 3.749-1.22.388-.31.664-.624.847-.868.11-.148.211-.302.297-.465a1.01 1.01 0 00-.447-1.342 1 1 0 00-1.335.435 2.576 2.576 0 01-.611.678c-.46.369-1.244.781-2.5.781-1.258 0-2.04-.412-2.501-.78a2.578 2.578 0 01-.611-.679zM6.5 7C5 7 5 8.667 5 8.667 5 10 7.5 12 8 12s3-2 3-3.333C11 8.667 11 7 9.5 7S8 9 8 9s0-2-1.5-2zM13 8.667S13 7 14.5 7 16 9 16 9s0-2 1.5-2S19 8.667 19 8.667C19 10 16.5 12 16 12s-3-2-3-3.333z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-2.007a8.993 8.993 0 110-17.986 8.993 8.993 0 010 17.986z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EmojiLoveSvgrepoComsvgIcon;
/* prettier-ignore-end */
