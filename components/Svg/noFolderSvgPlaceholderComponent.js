import React from "react";
import { SvgXml } from "react-native-svg";
export default function NoFolderSvgPlaceholderComponent() {
  const svgMarkup = `
  <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="62" height="62" fill="url(#pattern0)" fill-opacity="0.4"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_320_973" transform="scale(0.01)"/>
</pattern>
<image id="image0_320_973" width="100" height="100" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>

  `;

  const SvgImage = () => <SvgXml xml={svgMarkup} width="195px" />;

  return <SvgImage />;
}
