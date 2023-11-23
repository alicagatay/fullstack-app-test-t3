"use client";

import { useParams } from "next/navigation";
import styles from "./styles.module.css";
export default function Page() {
  const params = useParams();
  // convert date1 and date2 to Date objects
  //the date format is YYYY-MM-DD in a string format
  //then calculate the difference between the two dates
  //and display the difference in days

  const date1 = new Date(params.date1 as string);
  const date2 = new Date(params.date2 as string);

  const difference = date2.getTime() - date1.getTime();

  const days = difference / (1000 * 3600 * 24);

  return (
    <div className={styles.main}>
      <h1>Date 1: {params.date1}</h1>
      <h1>Date 2: {params.date2}</h1>
      <h1>Difference in days: {days}</h1>
    </div>
  );
}
