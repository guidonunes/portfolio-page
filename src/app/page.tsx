
import { Header } from "./components/Header";
import ShuffleHero from "./components/ShuffleHero";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <header className="w-full bg-gray-100 shadow-md">
        <Header />
      </header>
      <main className="mt-16 flex flex-col items-center">
        <ShuffleHero />
        <About />
      </main>
    </>
  );
}
