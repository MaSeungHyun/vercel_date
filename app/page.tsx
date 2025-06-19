"use client";

import { useState } from "react";
import Button from "./components/Button";
import Container from "./components/Container";

type DateType = {
  iso: string;
  utc: string;
  local: string;
};

export default function Home() {
  const [date, setDate] = useState<DateType[] | []>([]);

  const handleGetDate = async () => {
    const response = await fetch("/api/date");
    const data = await response.json();

    const now = new Date();
    console.log(now.toISOString());
    console.log(now.toString());
    console.log(now.toLocaleString());

    setDate((prev) => [...prev, data]);
  };

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-[#1E1F21] gap-5">
      <section className="flex items-center justify-center gap-3">
        <div className="flex flex-col gap-3 justify-center">
          <Container>
            {date.map((date) => (
              <p key={date?.iso}>{date?.iso}</p>
            ))}
          </Container>
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <Container>
            {date.map((date) => (
              <p key={date?.utc}>{date?.utc}</p>
            ))}
          </Container>
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <Container>
            {date.map((date) => (
              <p key={date?.local}>{date?.local}</p>
            ))}
          </Container>
        </div>
      </section>
      <Button
        className="bg-blue-500 text-white p-2 rounded-md w-[900px] cursor-pointer"
        onClick={handleGetDate}
      >
        Get Date
      </Button>
    </div>
  );
}
