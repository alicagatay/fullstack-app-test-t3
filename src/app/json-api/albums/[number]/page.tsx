"use client";
import styles from "./styles.module.css";
import { useParams } from "next/navigation";
import useSWR from "swr";

type APIResponse = {
  userId: number;
  id: number;
  title: string;
};
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
  const params = useParams();

  const { data, error, isLoading } = useSWR<APIResponse, Error>(
    `${params.number as string}/api`,
    fetcher
  );

  // Handling loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handling error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.main}>
      {data ? (
        Object.entries(data).map(([key, value]) => (
          <h1 key={key}>
            {key}: {value}
          </h1>
        ))
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
}
