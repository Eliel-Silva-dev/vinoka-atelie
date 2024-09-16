import Logo from '../Logo';
import MenuDesk from '../menu/MenuDesk';
import MenuMob from '../menu/MenuMob';

import style from './style.min.module.css';

const NavBar = () => {
  return (
    <nav id={style.navbar}>
      <Logo />
      <MenuDesk />
      <MenuMob />
    </nav>
  );
};

export default NavBar;
