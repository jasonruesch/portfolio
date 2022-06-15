import classNames from 'classnames';
import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import gsap from 'gsap';

const PageTransitions = ({ children, route, routingPageOffset }) => {
  const [transitioning, setTransitioning] = useState(false);

  const onExitStart = (element) => {
    setTransitioning(true);
    gsap
      .timeline()
      .fromTo(
        element,
        {
          clipPath:
            'polygon(1% 0%, 28% 0%, 69% 0%, 100% 1%, 100% 32%, 100% 68%, 100% 99%, 71% 100%, 34% 100%, 0% 99%, 0% 68%, 0% 29%)',
        },
        {
          clipPath:
            'polygon(26% 33%, 40% 36%, 56% 20%, 63% 33%, 72% 39%, 69% 49%, 69% 60%, 62% 75%, 50% 68%, 36% 73%, 25% 60%, 30% 45%)',
          rotation: -10,
          scale: 0.85,
        },
      )
      .to(element, { yPercent: 100 });
  };

  const stopTransition = () => {
    setTransitioning(false);
  };

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
          onExit={onExitStart}
          onExited={stopTransition}
        >
          <div style={{ transformStyle: 'preserve-3d' }}>
            <div className="page-transition-inner relative">{children}</div>
          </div>
        </CSSTransition>
      </TransitionGroup>

      <style jsx global>{`
        .page-exit-active main {
          transform: translateY(-${routingPageOffset}px);
        }
      `}</style>
    </>
  );
};

export default PageTransitions;
