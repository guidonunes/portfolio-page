import { Header } from "./components/Header";
import ShuffleHero from "./components/ShuffleHero";
import About from "./components/About";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className="w-full bg-gray-100 shadow-md">
        <Header />
      </header>

      {/* Main Section */}
      <main className="mt-16">
        {/* Hero Section */}
        <section className="flex flex-col items-center pb-24">
          <ShuffleHero />
        </section>

        {/* About Section */}
        <section className="flex flex-col items-center py-24">
          <About />
        </section>
      </main>
    </>
  );
}
