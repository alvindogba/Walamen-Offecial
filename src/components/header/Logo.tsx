import walamenLogo from '../../assets/images/walamenLogo.png';

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <img src={walamenLogo} alt="Walamen Logo" className="h-16" />
    </div>
  );
};

export default Logo;