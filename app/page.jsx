import Image from 'next/image';
import Link from 'next/link';
import Container from '../components/ui/Container';

import background from '../public/images/main.jpeg';

export default function Page() {
  return (
    <main className="relative min-h-screen flex justify-center items-center text-center">
      <Container>
        <section className="flex flex-col gap-12 items-center">
          <h1 className="text-8xl font-bold">Rick and Morty</h1>
          <Link
            className="aspect-square transition duration-300 hover:shadow-lg hover:shadow-slate-50 p-6 w-full text-slate-900 font-semibold text-xl rounded-lg border border-slate-100 bg-opacity-75 bg-slate-50 flex justify-center items-center max-w-[12rem]"
            href="/characters">
            <span>characters</span>
          </Link>
        </section>
      </Container>
      <Image
        src={background}
        alt="Rick and Morty"
        priority
        className="absolute inset-0 w-full h-full z-10 blur object-cover"
      />
      <div className="z-20 absolute inset-0 w-full h-full bg-slate-900 bg-opacity-25"></div>
    </main>
  );
}
