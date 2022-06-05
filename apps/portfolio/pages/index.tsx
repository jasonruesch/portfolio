import { ChevronRightIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import { motion, useAnimation, Variants } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Layout } from '../components';

export default function Home() {
  const variants: Variants = {
    initial: { x: -24 },
    hovering: { x: -24 },
    animate: {
      x: [-24, -48, 0, -24],
      transition: {
        repeat: Infinity,
        repeatDelay: 0.75,
        ease: 'backOut',
        delay: 0.8,
        duration: 0.5,
      },
    },
  };
  const controls = useAnimation();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) {
      controls.stop();
      controls.set('hovering');
    } else {
      controls.start('animate');
    }
  }, [isHovering, controls]);

  return (
    <Layout shouldCenterPage isHome>
      <div>
        <h1
          className={classNames(
            'font-heading text-center text-3xl font-bold',
            'lg:text-4xl',
          )}
        >
          Hi! I&apos;m
          <br />
          <span className="text-primary">Jason Ruesch</span>
          <br />
          and I am a<br />
          <span className="text-secondary">Software Engineer</span>
          <br />
          focusing on
          <br />
          Web Development and Design
        </h1>

        <motion.div
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
          className="mt-4 flex justify-center"
        >
          <Link href="/about">
            <a
              className={classNames(
                'text-link flex w-24 justify-end text-sm font-medium',
                'hover:text-link-hover',
              )}
              aria-label="Learn more about me"
            >
              <motion.div
                initial="initial"
                animate={controls}
                variants={variants}
                className="w-12"
              >
                <ChevronRightIcon className="h-12 w-12" aria-hidden="true" />
              </motion.div>
            </a>
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
}
