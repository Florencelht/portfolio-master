import { Button } from "../button/button";
import { CoolMode } from "./CoolMode";
 
export function CoolModeDemo() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <Button>Contact!</Button>
      </CoolMode>
    </div>
  );
}