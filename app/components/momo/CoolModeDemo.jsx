import { Button } from "../button/button";
import { CoolMode } from "./CoolMode";
import { Link } from 'react-router-dom';
 
export function CoolModeDemo() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <Button>
        <Link to="./contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
        </Button>
      </CoolMode>
    </div>
  );
}