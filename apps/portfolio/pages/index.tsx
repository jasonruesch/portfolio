import { Layout } from '../components';

export default function Home() {
  return (
    <Layout shouldCenterPage isHome>
      <div>
        <h1 className="font-alegreya-sans-sc text-center text-3xl font-bold lg:text-4xl">
          Hi! I&apos;m
          <br />
          <span className="text-primary">Jason Ruesch</span>
          <br />
          and I am a<br />
          <span className="text-accent">Software Engineer</span>
          <br />
          focusing on
          <br />
          Web Development and Design
        </h1>
      </div>
    </Layout>
  );
}
