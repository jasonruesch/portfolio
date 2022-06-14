import classNames from 'classnames';
import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PageTransitions = ({ children, route, routingPageOffset }) => {
  const [transitioning, setTransitioning] = useState(false);

  const playTransition = () => {
    setTransitioning(true);
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
          onEnter={playTransition}
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
