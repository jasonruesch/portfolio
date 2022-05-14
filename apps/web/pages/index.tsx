import { motion, useAnimation, Variants } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';

const Index = () => {
  const variants: Variants = {
    initial: { x: 0 },
    hovering: { x: 0 },
    animate: {
      x: [-48, 0],
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
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    if (isHovering) {
      controls.stop();
      controls.set('hovering');
    } else {
      controls.set('initial');
      controls.start('animate');
    }
  }, [isHovering, controls]);

  return (
    <Layout centerPage={true}>
      <div className="flex w-full flex-col gap-2 text-xl text-accent md:max-w-screen-sm md:text-3xl sm-max-h:max-w-lg sm-max-h:flex-row sm-max-h:items-center">
        <div className="grid gap-2">
          <p className="order-1 mb-0">
            Hi, I&apos;m <span className="sr-only">Jason Ruesch</span>
          </p>
          <p className="order-3 mb-0">
            I am a Software Engineer focusing on Web Development &amp; Design.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 811 108.14"
            className="order-2 w-full"
          >
            <g id="Jason_Ruesch" data-name="Jason Ruesch">
              <g id="Logo_Primary">
                <polygon
                  points="16.7 14.54 1.44 14.98 0 13.54 1.01 0.14 36.29 0.14 36.06 14.33 16.7 14.54"
                  className="fill-logo-primary stroke-light-gray dark:stroke-0"
                />
                <path
                  d="M450.84,14.32a22.2,22.2,0,0,0-5.31-7.19Q437.61,0,423.07,0L387.5.14l.22,14.18Z"
                  className="fill-logo-primary stroke-light-gray dark:stroke-0"
                />
              </g>
              <g id="Logo_Base">
                <path
                  d="M35.73,34.33l-.45,28,.29,13.11a32.35,32.35,0,0,1-2.74,14A27.22,27.22,0,0,1,24,99.65,72.43,72.43,0,0,1,7.2,108.14L1.3,97.78V96.05q8.93-4.62,12.6-9.15t3.67-11.73v-11l-.52-29.89Z"
                  className="fill-logo-base"
                />
                <path
                  d="M120,92.88H101.66l-2-10.51-1.3-4.18-14.69-.14-13,.29-1,3L67.54,92.88H49.82L75.31,20.16H96.77ZM94.46,64.51,86.25,36.72H85.1L75.46,64.51l9.35.15Z"
                  className="fill-logo-base"
                />
                <path
                  d="M179.71,22.75,177,38.88l-2.59.72a39.55,39.55,0,0,0-8.93-5.18,21.35,21.35,0,0,0-7.92-1.73,9.54,9.54,0,0,0-6.33,1.94,5.93,5.93,0,0,0-2.31,4.68,5.81,5.81,0,0,0,2.88,5,55.56,55.56,0,0,0,9.08,4.54,106.31,106.31,0,0,1,10.58,5,21.78,21.78,0,0,1,7.06,6.4,17.25,17.25,0,0,1,2.95,10.3,22.13,22.13,0,0,1-3.24,11.59,23.25,23.25,0,0,1-9.79,8.71q-6.56,3.31-16.2,3.32A65.4,65.4,0,0,1,140.9,93.1,59.71,59.71,0,0,1,129,89.71l2.45-17,1.87-1.3A39.17,39.17,0,0,0,144,78.34a26.75,26.75,0,0,0,10.51,2.59,10.13,10.13,0,0,0,6.55-2,6.19,6.19,0,0,0,2.52-5,5.89,5.89,0,0,0-3-5.11,53,53,0,0,0-9.14-4.39,97.12,97.12,0,0,1-10.59-5.11,22.29,22.29,0,0,1-7.05-6.56,17.49,17.49,0,0,1-3-10.36,21,21,0,0,1,3.53-11.81,23.52,23.52,0,0,1,10.08-8.35,36.23,36.23,0,0,1,15.34-3A55.64,55.64,0,0,1,179.71,22.75Z"
                  className="fill-logo-base"
                />
                <path
                  d="M254.73,28.37q8.93,9.36,8.93,26.49,0,18.72-9.72,29t-27.43,10.3q-16.27,0-25.2-9.58t-8.93-27q0-18.43,9.65-28.51T229.39,19Q245.8,19,254.73,28.37ZM215.06,38.52q-3.81,4.83-3.82,16.63,0,9.51,1.66,14.91t5.33,7.7q3.68,2.31,9.86,2.3,9.07,0,12.89-4.75t3.82-16.7q0-9.51-1.73-14.91T237.74,36q-3.6-2.3-9.94-2.3Q218.88,33.7,215.06,38.52Z"
                  className="fill-logo-base"
                />
                <path
                  d="M343.15,69.84l.72,23H324.14L295.05,47.81h-1l-.15,19.58.58,25.49H278.06l.72-21.31-.72-51.41h19.59l29.08,45.07H328l-.58-44.35,16.71-1.15Z"
                  className="fill-logo-base"
                />
                <path
                  d="M458.49,88.27l-.29,2.16a69.11,69.11,0,0,1-19.15,3.89l-2-1.58q-10.36-17.86-16.84-31.11h-14V63.5l.86,29.38H387.5l1-27.65L388,34.33h18.7l-.22,12.18,14.25.58q9.84-3.36,11.76-12.76h20.21a30.25,30.25,0,0,1-3.82,9.52A35.35,35.35,0,0,1,436.17,56Q447.41,73.87,458.49,88.27Z"
                  className="fill-logo-base"
                />
                <path
                  d="M530.06,57.17l-.15,11.09q.15,12.38-8.13,19.08T498.09,94q-15,0-22.9-6.69t-7.48-19.08l.14-11.38-.43-36.72h18.14l-.86,45.5q-.15,7.07,3.38,10.37t10.73,3.31q7.35,0,10.87-3.38t3.39-10.3l-.72-45.5h18.28Z"
                  className="fill-logo-base"
                />
                <path
                  d="M599.61,78.19l1.15,1.15-1.29,13.54H549.64l.72-21.6-.72-51.12h50.55l1,1.44L600,35l-18.72-.72H567.79L567.5,49l13,.14L593,48.67l1,1.3-1.15,13.68-13.68-.43H567.21l-.15,6.33.29,9.22H580Z"
                  className="fill-logo-base"
                />
                <path
                  d="M661,22.75l-2.73,16.13-2.6.72a39.5,39.5,0,0,0-8.92-5.18,21.35,21.35,0,0,0-7.92-1.73,9.57,9.57,0,0,0-6.34,1.94,5.92,5.92,0,0,0-2.3,4.68,5.81,5.81,0,0,0,2.88,5,55.37,55.37,0,0,0,9.07,4.54,105.24,105.24,0,0,1,10.58,5,21.78,21.78,0,0,1,7.06,6.4,17.25,17.25,0,0,1,2.95,10.3,22.13,22.13,0,0,1-3.24,11.59,23.19,23.19,0,0,1-9.79,8.71q-6.55,3.31-16.2,3.32a65.4,65.4,0,0,1-11.31-1.08,59.71,59.71,0,0,1-11.88-3.39l2.45-17,1.87-1.3a39.17,39.17,0,0,0,10.66,6.92,26.79,26.79,0,0,0,10.51,2.59,10.13,10.13,0,0,0,6.55-2,6.19,6.19,0,0,0,2.52-5,5.89,5.89,0,0,0-3-5.11,53,53,0,0,0-9.14-4.39,97.12,97.12,0,0,1-10.59-5.11,22.39,22.39,0,0,1-7-6.56,17.48,17.48,0,0,1-3-10.36,20.94,20.94,0,0,1,3.52-11.81,23.58,23.58,0,0,1,10.08-8.35,36.23,36.23,0,0,1,15.34-3A55.6,55.6,0,0,1,661,22.75Z"
                  className="fill-logo-base"
                />
                <path
                  d="M731.37,22.9,728.2,38.16l-1.44.72a26.44,26.44,0,0,0-7.78-3.6,32,32,0,0,0-8.92-1.3Q701.27,34,697,39.1t-4.32,16q0,23.76,18.29,23.76a36.72,36.72,0,0,0,8.93-1.15,35.83,35.83,0,0,0,8.35-3.17l1.58.87-1.44,15.12A48.87,48.87,0,0,1,709.77,94q-17.71,0-26.93-9.5t-9.22-27.36q0-18.15,9.8-28.08t27.79-9.94A53.7,53.7,0,0,1,731.37,22.9Z"
                  className="fill-logo-base"
                />
                <path
                  d="M810,69.55l.72,23.33H792.57l.72-21.6-.15-7.06-16.27-.14-14.54.29-.15,5.18.72,23.33H744.76l.72-21.6-.72-51.12h18.43L762.61,49l15.41.29,15-.15-.43-28.94H811Z"
                  className="fill-logo-base"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="order-4 mt-4 flex justify-end">
          <motion.div
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            <Link href="/about">
              <a
                className="flex w-24 justify-end text-foreground hover:text-brand-bleu-de-france"
                aria-label="Learn more about me."
              >
                <motion.div
                  initial="initial"
                  animate={controls}
                  variants={variants}
                  className="w-12"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
