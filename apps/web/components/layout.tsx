import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import ThemeSelector from './themeSelector';

export default function Layout({
  children,
  centerPage = false,
}: {
  children: React.ReactNode;
  centerPage?: boolean;
}) {
  const { route } = useRouter();

  return (
    <div className="h-full">
      <header className="mx-4 flex h-14 items-center justify-between md:mx-8">
        <div className="flex-auto">
          <motion.div layoutId="logo" className={route === '/' ? 'hidden' : ''}>
            <Link href="/">
              <a className="block w-6 hover:text-brand-bleu-de-france">
                <svg
                  viewBox="0 0 2560 2298"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="JR" fillRule="nonzero">
                      <g id="R" transform="translate(1051.738149, 0.000000)">
                        <path
                          d="M1382.83037,743.775695 C1367.02854,809.776086 1341.02334,872.375353 1304.81477,931.573496 C1240.56832,1036.61134 1150.31735,1122.78316 1034.06188,1190.08897 C1193.14832,1442.99562 1351.21498,1671.42743 1508.26185,1875.38441 L1502.14314,1921.27473 C1369.57111,1968.18484 1233.93972,1995.71903 1095.24897,2003.87731 L1052.41801,1970.22441 C905.568982,1717.31775 786.25415,1497.04422 694.473509,1309.4038 L397.716107,1309.4038 L397.716107,1349.17541 L416.072235,1973.28376 L0,1973.28376 L21.4154827,1385.88766 L11.4745166,743.985284 M408.296112,743.915595 L403.834816,988.171558 L706.710928,1000.40898 C840.912117,954.622688 923.17052,869.115446 953.486138,743.887251"
                          id="Shape"
                          className="fill-current"
                        ></path>
                        <path
                          d="M4.8649679,317.197282 L0,3.05935467 L755.660603,0 C961.65715,0 1120.74359,50.479352 1232.91993,151.438056 C1284.14343,197.539209 1323.67175,252.677553 1351.50487,316.853091"
                          id="Path"
                          className="fill-current"
                        ></path>
                      </g>
                      <g id="J" transform="translate(0.000000, 3.059355)">
                        <path
                          d="M758.979274,739.220002 L749.541894,1321.64122 L755.660603,1600.04249 C755.660603,1716.29797 736.28469,1815.2171 697.532864,1896.79989 C658.781038,1978.38268 596.064268,2050.78741 509.382552,2114.01408 C422.700837,2177.24074 303.895897,2237.40805 152.967733,2294.516 L27.534192,2074.24246 L27.534192,2037.53021 C153.987518,1972.26398 243.218696,1907.50764 295.227725,1843.26119 C347.236755,1779.01474 373.241269,1695.90227 373.241269,1593.92378 L373.241269,1361.41283 L362.432887,739.930828"
                          id="Shape"
                          className="fill-current"
                        ></path>
                        <polyline
                          id="Path"
                          className="fill-current"
                          points="354.885141 305.935467 30.5935467 315.113531 0 284.519984 21.4154827 0 770.957376 0 765.845034 315.504566"
                        ></polyline>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </Link>
          </motion.div>
        </div>
        <div className="flex items-center justify-end gap-4">
          <ThemeSelector />
        </div>
      </header>
      <main
        className={`flex flex-col items-center justify-center gap-12 p-4 md:px-8 sm-max-h:-mt-14 sm-max-h:h-full sm-max-h:flex-row sm-max-h:justify-between ${
          centerPage ? '-mt-14 h-full' : ''
        }`}
      >
        <div>
          <motion.div
            layoutId="profile_image"
            className="relative h-[150px] w-[150px] rounded-full border border-light-gray dark:border-0 md:h-[300px] md:w-[300px]"
          >
            <Image
              priority
              src="/images/profile.png"
              className="rounded-full bg-logo-primary"
              layout="fill"
              alt="Jason Ruesch"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: 'easeInOut' }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
