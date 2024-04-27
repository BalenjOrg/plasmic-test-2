// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EmojiSmileSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EmojiSmileSvgrepoComsvgIcon(
  props: EmojiSmileSvgrepoComsvgIconProps
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
          "M8.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-8.111 4.041a1 1 0 00-1.783.906c.082.165.187.319.297.466.183.243.46.557.848.868.79.632 2.006 1.22 3.75 1.22 1.742 0 2.96-.588 3.749-1.22.388-.31.664-.625.847-.868.11-.148.211-.302.297-.465a1.01 1.01 0 00-.447-1.342 1 1 0 00-1.335.435 2.576 2.576 0 01-.611.678c-.46.369-1.244.781-2.5.781-1.258 0-2.04-.412-2.501-.78a2.578 2.578 0 01-.611-.679z"
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

export default EmojiSmileSvgrepoComsvgIcon;
/* prettier-ignore-end */
