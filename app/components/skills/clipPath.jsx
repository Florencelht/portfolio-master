import styles from './path.module.css';
import {
    SiReact,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiVuedotjs,
    SiDocker,
    SiTsnode,
    SiNodedotjs,
    SiExpress,
  } from "react-icons/si";
  import { useAnimate } from "framer-motion";
  
  export const SkillSet = () => {
    return (
      <div className={`${styles.mt2} ${styles.px4} ${styles.py12} ${styles.responsiveContainer}`}>
        <div className={`${styles.mxAuto} ${styles.maxW7xl}`}> 
          <ClipPathLinks />
        </div>
      </div>
    );
  };
  
  const ClipPathLinks = () => {
    return (
      <div className={`${styles.divideY} ${styles.divideNeutral900} ${styles.borderNeutral900}`}> 
        <div className={`${styles.grid} ${styles.gridCols2} ${styles.divideX} ${styles.divideNeutral900}`}>
          <LinkBox Icon={SiCss3} />
          <LinkBox Icon={SiDocker} />
        </div>
        <div className={`${styles.grid} ${styles.gridCols4} ${styles.divideX} ${styles.divideNeutral900}`}>
          <LinkBox Icon={SiJavascript} />
          <LinkBox Icon={SiTsnode} />
          <LinkBox Icon={SiReact}/>
          <LinkBox Icon={SiHtml5}/>
        </div>
        <div className={`${styles.grid} ${styles.gridCols3} ${styles.divideX} ${styles.divideNeutral900}`}>
          <LinkBox Icon={SiExpress}  />
          <LinkBox Icon={SiNodedotjs} />
          <LinkBox Icon={SiVuedotjs} />
        </div>
      </div>
    );
  };
  
  const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
  const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
  const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
  const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
  const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";
  
  const ENTRANCE_KEYFRAMES = {
    left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    right: [TOP_LEFT_CLIP, NO_CLIP],
  };
  
  const EXIT_KEYFRAMES = {
    left: [NO_CLIP, TOP_RIGHT_CLIP],
    bottom: [NO_CLIP, TOP_RIGHT_CLIP],
    top: [NO_CLIP, TOP_RIGHT_CLIP],
    right: [NO_CLIP, BOTTOM_LEFT_CLIP],
  };
  
  const LinkBox = ({ Icon, href }) => {
    const [scope, animate] = useAnimate();
  
    const getNearestSide = (e) => {
      const box = e.target.getBoundingClientRect();
  
      const proximityToLeft = {
        proximity: Math.abs(box.left - e.clientX),
        side: "left",
      };
      const proximityToRight = {
        proximity: Math.abs(box.right - e.clientX),
        side: "right",
      };
      const proximityToTop = {
        proximity: Math.abs(box.top - e.clientY),
        side: "top",
      };
      const proximityToBottom = {
        proximity: Math.abs(box.bottom - e.clientY),
        side: "bottom",
      };
  
      const sortedProximity = [
        proximityToLeft,
        proximityToRight,
        proximityToTop,
        proximityToBottom,
      ].sort((a, b) => a.proximity - b.proximity);
  
      return sortedProximity[0].side;
    };
  
    const handleMouseEnter = (e) => {
      const side = getNearestSide(e);
  
      animate(scope.current, {
        clipPath: ENTRANCE_KEYFRAMES[side],
      });
    };
  
    const handleMouseLeave = (e) => {
      const side = getNearestSide(e);
  
      animate(scope.current, {
        clipPath: EXIT_KEYFRAMES[side],
      });
    };
  
    return (
      <a
        href={href}
        onMouseEnter={(e) => {
            handleMouseEnter(e);
          }}
          onMouseLeave={(e) => {
            handleMouseLeave(e);
          }}
          className={`${styles.relative}  ${styles.grid} ${styles.placeContentCenter} ${styles.h20} ${styles.wFull}`}
      >
        <Icon className={`${styles.textXl} ${styles.smText3xl} ${styles.mdText4xl}`}/>
  
        <div
          ref={scope}
          style={{
            clipPath: BOTTOM_RIGHT_CLIP,
          }}
          className={`${styles.absolute} ${styles.inset0} ${styles.grid} ${styles.placeContentCenter} ${styles.bgNeutral900} ${styles.textWhite}`}
        >
          <Icon className={`${styles.textXl} ${styles.smText3xl} ${styles.mdText4xl}`}/>
        </div>
      </a>
    );
  };
  