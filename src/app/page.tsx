import Image from "next/image";
import { LinkList } from "@/components/LinkList";
import { MeteorShower } from "@/components/MeteorShower";
import { Starfield } from "@/components/Starfield";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 15%, rgba(109,31,102,0.35), transparent 55%), radial-gradient(circle at 85% 90%, rgba(109,31,102,0.25), transparent 45%)",
        }}
      />

      <Starfield />
      <MeteorShower />

      <main className="relative z-10 flex w-full max-w-md flex-1 flex-col items-center px-6 py-16">
        <div className="animate-float-logo relative h-40 w-40 sm:h-48 sm:w-48">
          <Image
            src="/logo.svg"
            alt="Observatório Estelar"
            fill
            priority
            sizes="192px"
            className="object-contain"
          />
        </div>

        <h1
          className="animate-fade-in-up mt-2 text-center text-2xl font-semibold tracking-wide text-foreground sm:text-3xl"
          style={{ animationDelay: "0.15s" }}
        >
          Observatório Estelar
        </h1>
        <p
          className="animate-fade-in-up mt-1 text-center text-sm tracking-wide text-accent-gold/80"
          style={{ animationDelay: "0.3s" }}
        >
          Sob o céu, encontramos as respostas.
        </p>

        <LinkList />
      </main>

      <footer
        className="animate-fade-in-up relative z-10 pb-8 text-xs tracking-wide text-foreground/40"
        style={{ animationDelay: "0.75s" }}
      >
        © {new Date().getFullYear()} Observatório Estelar
      </footer>
    </div>
  );
}
