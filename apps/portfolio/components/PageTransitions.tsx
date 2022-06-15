import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import gsap from 'gsap';

const PageTransitions = ({ children, route, routingPageOffset }) => {
  const [transitioning, setTransitioning] = useState(false);
  const tl = useRef<gsap.core.Timeline>(null);
  const transitionRef = useRef<HTMLDivElement>(null);

  const playTransition = () => {
    tl.current.play(0);
    setTransitioning(true);
  };

  const stopTransition = () => {
    setTransitioning(false);
  };

  useEffect(() => {
    if (!transitionRef.current) {
      return;
    }

    gsap.set(transitionRef.current.children, { autoAlpha: 1 });
    tl.current = gsap
      .timeline({
        repeat: 1,
        repeateDelay: 0.2,
        yoyo: true,
        paused: true,
      })
      .fromTo(
        transitionRef.current.children,
        { scale: 0, borderRadius: '100%' },
        {
          scale: 1,
          borderRadius: 0,
          stagger: {
            grid: 'auto',
            from: 'edges',
            ease: 'sine',
            amount: 0.5,
          },
        },
      );

    return () => {
      tl.current.kill();
    };
  }, []);

  return (
    <>
      <TransitionGroup
        className={classNames({
          transitioning: transitioning,
        })}
      >
        <CSSTransition
          key={route}
          classNames="page"
          timeout={1000}
          onEnter={playTransition}
          onExited={stopTransition}
        >
          <div style={{ transformStyle: 'preserve-3d' }}>
            <div className="page-transition-inner relative">{children}</div>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <div
        ref={transitionRef}
        className="page-grid fixed top-0 left-0 grid h-screen w-full"
      >
        {[...Array(100)].map((_, i) => (
          <div key={i} />
        ))}
      </div>

      <style jsx global>{`
        .page-exit-active main {
          transform: translateY(-${routingPageOffset}px);
        }
      `}</style>
    </>
  );
};

export default PageTransitions;
