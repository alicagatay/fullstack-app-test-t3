"use client";

import { useParams } from "next/navigation";
import styles from "./styles.module.css";
export default function Page() {
  const params = useParams();
  return (
    <div className={styles.main}>
      <h1>Date 1: {params.date1}</h1>
      <h1>Date 2: {params.date2}</h1>
    </div>
  );
}
