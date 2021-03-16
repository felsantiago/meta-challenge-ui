import { useEffect } from 'react';
import { useRouter } from 'next/router';

function useRouterScroll({ behavior = 'smooth', left = 0, top = 0 } = {}) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      window.scrollTo({ top, left, behavior });
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [behavior, left, router.events, top]);
}

export default useRouterScroll;
