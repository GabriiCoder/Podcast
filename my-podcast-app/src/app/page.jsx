import Image from "next/image";
import styles from "./page.module.css";
import PodcastList from "./componentes/PodcastList/PodcastList";

export default function Home() {
  return (
    <div>
    <main className={styles.main}>
      <PodcastList />
    </main>
    </div>
  );
}
