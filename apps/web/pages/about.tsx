import Layout from '../components/layout';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const About = (props: any) => {
  return (
    <Layout>
      <div className="sm-max-h:max-w-lg w-full gap-2 md:max-w-screen-sm">
        <h1>About me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est
          justo, consectetur quis sapien ut, volutpat porttitor magna. Etiam
          tincidunt orci eu nunc tristique, a finibus leo sagittis. Vestibulum
          volutpat, dolor id scelerisque aliquet, nulla mauris lacinia est, in
          ornare massa nisi quis leo. Donec ultricies tellus commodo neque
          rhoncus euismod. Mauris eu nulla magna. Suspendisse pulvinar magna
          vitae lacinia pretium. Maecenas at varius risus. Sed ut faucibus
          ligula.
        </p>
      </div>
    </Layout>
  );
};

export default About;
