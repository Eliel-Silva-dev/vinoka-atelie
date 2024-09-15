import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main_home}>
      <button>
        <Link href='/teste'>pagina de teste</Link>
      </button>
    </main>
  );
}
