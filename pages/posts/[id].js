import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const posts = {
  1: { title: 'Primeiro Post', content: 'Esse é o conteúdo do primeiro post.' },
  2: { title: 'Segundo Post', content: 'Esse é o conteúdo do segundo post.' },
};

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const post = posts[id];

  if (!post) return <p>Post não encontrado!</p>;

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </Layout>
  );
}