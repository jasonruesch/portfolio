import { Layout } from '../../components';

export default function Index() {
  return (
    <Layout>
      <div className="space-y-4">
        <h1 className="font-alegreya-sans-sc text-accent text-3xl font-bold lg:text-4xl">
          About Me
        </h1>
        <p>
          My name is Jason Ruesch, and I enjoy creating software that looks
          amazing and is easy to use! I have a passion for learning new
          technologies and building things that are useful to others.
        </p>
        <p>
          Outside of work, I like to spend time with my family, play video
          games, and watch movies and tv shows.
        </p>
        <p>
          I am always open to connect. If you are interested in learning more
          about me or how I can help you with your web needs, please reach out.
        </p>
      </div>
    </Layout>
  );
}
