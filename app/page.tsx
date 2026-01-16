import Image from "next/image";
import Chess from '@/components/Chess';
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2">
      <main className="m-auto flex w-full max-w-2xl flex-col items-center justify-center p-4">
        <Chess></Chess>
      </main>
    </div>
  );
}
