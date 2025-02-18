'use strict';

var React = require('react');

function useMergedRefs(...refs) {
  return React.useCallback(instance => {
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

exports.useMergedRefs = useMergedRefs;
