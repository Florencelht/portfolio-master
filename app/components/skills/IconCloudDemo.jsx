import {IconCloud} from "./IconCloud";
 
const slugs = [
  "react","postgresql", "javascript", "typescript", "css3", "html5","nodedotjs","express","github","git","figma","amazonaws","python","nextdotjs","docker","visualstudiocode","vue-dot-js"
];
 
export function IconCloudDemo() {
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      width: '100%', // size-full
      alignItems: 'center', // items-center
      justifyContent: 'center', // justify-center
      overflow: 'hidden', // overflow-hidden
      paddingLeft: '5rem', // px-20
      paddingRight: '5rem', // px-20
      paddingBottom: '5rem', // pb-20
      paddingTop: '2rem', // pt-8
    }}>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}