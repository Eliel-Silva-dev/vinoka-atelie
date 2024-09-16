import Link from 'next/link';
import style from './style.min.module.css';

const Logo = () => {
  return (
    <div id={style.logo_title}>
      <h2>
        <Link href={'/'}>Vinoka Atelie</Link>
      </h2>
    </div>
  );
};

export default Logo;
