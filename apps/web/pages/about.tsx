import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
      <div className="w-full gap-2 md:max-w-screen-sm sm-max-h:max-w-lg">
        <h1>About me</h1>
        <p>
          My name is Jason Ruesch, and I strive to create software that is
          spectacular and easy to use. I have a passion for learning new
          technologies and building things that are useful to others.
        </p>
        {/* 1. 2. 3. Accomplishements */}
        <p>
          In my spare time, I enjoy spending time with my family, playing video
          games, and watching movies and tv shows.
        </p>
        <p>
          I am always open to connect. If you are interested in learning more
          about me, please reach out to me at{' '}
          <a
            className="underline hover:text-brand-bleu-de-france"
            href="mailto:jason.ruesch@me.com"
          >
            jason.ruesch@me.com
          </a>
          .
        </p>
      </div>
    </Layout>
  );
};

export default About;
