import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";

// Define Cloud props
const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};


// Render custom icon with theme support
const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

// IconCloud Component
export function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);
  const { theme } = useTheme();
  const [isReady, setIsReady] = useState(false); // 用来管理是否准备好渲染
  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then((iconsData) => {
      setData(iconsData);
      setIsReady(true); // 标记为准备就绪
      console.log('Component mounted and data fetched');
    });
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    console.log(requestAnimationFrame);

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);
  if (!isReady) return <div>Loading...</div>;
  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
  
}
