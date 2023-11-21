"use client";
import styles from "./styles.module.css";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  return (
    <div className={styles.main}>
      <h1>Hello {params.name}</h1>
    </div>
  );
}
