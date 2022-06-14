import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PageTransitions = ({ children, route, routingPageOffset }) => {
  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition key={route} classNames="page" timeout={1000}>
          <div>{children}</div>
        </CSSTransition>
      </TransitionGroup>
      <div className="wipe fixed top-0 left-0 z-50 h-screen w-full translate-y-full bg-neutral-100"></div>

      <style jsx>{`
        .page-enter-active {
          postion: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
        }

        .page-enter-done ~ .wipe {
          transform: translateY(-100%);
          transition: transform 1000ms ease;
        }

        .page-exit ~ .wipe {
          transform: translateY(100%);
        }

        .page-exit-active ~ .wipe {
          transform: translateY(0);
          transition: transform 1000ms ease;
        }

        .page-exit-active * {
          transform: translateY(-${routingPageOffset}px);
        }
      `}</style>
    </>
  );
};

export default PageTransitions;
