import React from 'react';
import Link from 'next/link';

const About = () => (
  <main>
    <section className=" grid place-content-center bg-[#777777] px-4 pt-[200px] pb-[120px] text-center text-white">
      <img
        className="mx-auto mt-0 mb-[50px] h-[300px] w-[300px] rounded-full"
        src="https://source.unsplash.com/user/erondu/600x600"
        alt=""
      />
      <h1>This is the &quot;About&quot; page</h1>
      <Link href="/">Oh go back!</Link>
    </section>
    <section className="my-0 mx-auto w-full max-w-[684px] py-20 px-4">
      <p>
        Sunt officiis illum ratione similique et veniam. Nihil laborum sit
        maxime aut distinctio qui. Impedit expedita impedit autem.
      </p>
      <p>
        Facere sapiente qui cum magnam provident. Dignissimos officiis eos id
        quidem vel nulla. Libero porro necessitatibus minima quod placeat hic
        beatae aliquid. Incidunt cupiditate natus maiores recusandae. Quod enim
        dolores incidunt voluptas perferendis dolorem sit. Dolorem velit amet
        voluptatem dolorum a.
      </p>
      <p>
        Culpa quisquam et exercitationem. Eveniet porro reprehenderit sequi
        aperiam commodi nesciunt. Iste qui error natus. Autem id eius magni
        similique enim officia.
      </p>
      <p>
        Explicabo qui nobis qui omnis praesentium at. Labore enim minus voluptas
        quia minima et natus. Accusamus id aspernatur non quod rerum ullam
        dicta.
      </p>
      <p>
        Molestiae quo qui blanditiis similique officia. Corporis ut sint magni
        recusandae quis iure eius exercitationem. Quasi sint iusto culpa
        asperiores aspernatur velit commodi. Voluptatem est quo ut. Est vero
        omnis modi. Minima autem non voluptas fuga quas.
      </p>
    </section>
  </main>
);

export default About;
