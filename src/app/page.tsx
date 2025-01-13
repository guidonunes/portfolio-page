import { Header } from "./components/Header";
import ShuffleHero from "./components/ShuffleHero";

export default function Home() {
  return (
    <div className="home">
      <header className="w-full bg-gray-100 shadow-md">
        <Header />
      </header>
      <main className="mt-16 p-16 flex justify-center items-center">
        <ShuffleHero />
      </main>
    </div>
  );
}
