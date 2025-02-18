import { useCallback } from 'react';

function useMergedRefs(...refs) {
  return useCallback(instance => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(instance);
      } else if (ref) {
        ref.current = instance;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}

export { useMergedRefs };
