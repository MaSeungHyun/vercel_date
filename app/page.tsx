import PrintDate from "./components/PrintDate";

export default function Home() {
  const serverDate = new Date();

  console.log("pure:", serverDate);
  console.log("iso:", serverDate.toISOString());
  console.log("utc:", serverDate.toString());
  console.log("local:", serverDate.toLocaleString());

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-[#1E1F21] gap-5">
      <PrintDate />
    </div>
  );
}
