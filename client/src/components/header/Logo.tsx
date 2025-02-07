import { Link } from 'react-router-dom';
import walamenLogo from '../../assets/images/walamenLogo.png';

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
    <Link to={"/"} ><img src={walamenLogo} alt="Walamen Logo" className="h-14 md:h-16" /></Link>  
    </div>
  );
};

export default Logo;