import Link from 'next/link';
import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
      <div className="w-full gap-2 md:max-w-screen-sm sm-max-h:max-w-lg">
        <h1>About me</h1>
        <p>
          My name is Jason Ruesch, and I enjoy creating software that looks
          amazing and is easy to use! I have a passion for learning new
          technologies and building things that are useful to others.
        </p>
        {/* 1. 2. 3. Accomplishements */}
        <p>
          Outside of work, I like to spend time with my family, play video
          games, and watch movies and tv shows.
        </p>
        <p>
          I am always open to connect. If you are interested in learning more
          about me, please{' '}
          <Link href="/contact">
            <a className="underline hover:text-brand-bleu-de-france">
              reach out to me.
            </a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default About;
