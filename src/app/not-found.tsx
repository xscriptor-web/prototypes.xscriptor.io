import Link from "next/link";
import styles from "./hub.module.css";

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <div>
        <p className={styles.notFoundCode}>ERROR 404</p>
        <h1 className={styles.notFoundTitle}>Página no encontrada</h1>
        <p className={styles.notFoundText}>
          La ruta que buscas no forma parte de este catálogo de prototipos.
        </p>
        <Link href="/" className={styles.notFoundLink}>
          Volver al índice
        </Link>
      </div>
    </main>
  );
}
