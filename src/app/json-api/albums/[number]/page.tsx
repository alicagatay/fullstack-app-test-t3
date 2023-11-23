"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useParams } from "next/navigation";

type APIResponse = {
  userId: number;
  id: number;
  title: string;
};
export default function Page() {
  const [data, setData] = useState<APIResponse | null>(null);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/json-api/albums/${params.number as string}/api`
        );
        const jsonData: APIResponse = (await response.json()) as APIResponse;
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData().catch((error) => console.error("Error in fetchData:", error));
  }, [params.number]);

  return (
    <div className={styles.main}>
      {data &&
        Object.entries(data).map(([key, value]) => (
          <h1 key={key}>
            {key}: {value}
          </h1>
        ))}
    </div>
  );
}
