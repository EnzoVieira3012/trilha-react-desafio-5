import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  const posts = [
    { id: 1, title: 'Primeiro Post', description: 'Introdução ao blog' },
    { id: 2, title: 'Segundo Post', description: 'Aprendendo Next.js' },
  ];

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center mb-8">Bem-vindo ao Meu Blog!</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <Link href={`/posts/${post.id}`}>
              <a className="text-xl font-semibold hover:underline">{post.title}</a>
            </Link>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}