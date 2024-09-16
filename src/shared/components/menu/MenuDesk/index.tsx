import style from './style.min.module.css';

import Link from 'next/link';

const MenuDesk = () => {
  return (
    <ul className={style.menu_desk}>
      <li>
          <Link href={'/'}>Inicio</Link>
        </li>
        <li>
          <Link href={'/'}>Sobre</Link>
        </li>
        <li>
          <Link href={'/'}>Vitrine</Link>
        </li>
        <li>
          <Link href={'/'}>Serviços</Link>
        </li>
        <li>
          <Link href={'/'}>Contato</Link>
        </li>
    </ul>
  );
};

export default MenuDesk;
