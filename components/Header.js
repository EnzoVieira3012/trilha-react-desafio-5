import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="py-6 border-b">
      <h1 className="text-3xl font-bold text-center">
        <Link href="/">{name}</Link>
      </h1>
    </header>
  );
}