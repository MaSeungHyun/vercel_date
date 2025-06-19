"use client";

import { useState } from "react";
import Button from "./Button";
import Container from "./Container";

type DateType = {
  iso: string;
  utc: string;
  local: string;
};

export default function PrintDate() {
  const [date, setDate] = useState<DateType[] | []>([]);

  const handleGetDate = async () => {
    const response = await fetch("/api/date");
    const data = await response.json();

    const now = new Date();
    console.log(now);
    console.log(now.toISOString());
    console.log(now.toString());
    console.log(now.toLocaleString());

    setDate((prev) => [...prev, data]);
  };

  return (
    <>
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
    </>
  );
}
