import {IconCloud} from "./IconCloud";
 
const slugs = [
  "react","postgresql", "javascript", "typescript", "css3", "html5","nodedotjs","express","github","git","figma","amazonaws","python","nextdotjs","docker","visualstudiocode","vue-dot-js"
];
 
export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}