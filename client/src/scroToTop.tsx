
//This component will use the useLocation hook from react-router-dom to listen for changes in the route and scroll the page to the top whenever a new route is visited.
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
