import { QuestionIcon, IssueOpenedIcon, GitPullRequestIcon, IssueClosedIcon, SkipIcon, GitPullRequestClosedIcon, GitMergeIcon, GitPullRequestDraftIcon, IssueDraftIcon, GitMergeQueueIcon, AlertIcon } from '@primer/octicons-react';
import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { get } from '../constants.js';
import Octicon from '../Octicon/Octicon.js';
import sx from '../sx.js';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const octiconMap = {
  issueOpened: IssueOpenedIcon,
  pullOpened: GitPullRequestIcon,
  issueClosed: IssueClosedIcon,
  issueClosedNotPlanned: SkipIcon,
  pullClosed: GitPullRequestClosedIcon,
  pullMerged: GitMergeIcon,
  draft: GitPullRequestDraftIcon,
  issueDraft: IssueDraftIcon,
  pullQueued: GitMergeQueueIcon,
  unavailable: AlertIcon
};
const labelMap = {
  issueOpened: 'Issue',
  pullOpened: 'Pull request',
  issueClosed: 'Issue',
  issueClosedNotPlanned: 'Issue, not planned',
  pullClosed: 'Pull request',
  pullMerged: 'Pull request',
  draft: 'Pull request',
  issueDraft: 'Issue',
  pullQueued: 'Pull request',
  unavailable: ''
};
const colorVariants = variant({
  prop: 'status',
  variants: {
    issueClosed: {
      backgroundColor: 'done.emphasis',
      color: 'fg.onEmphasis'
    },
    issueClosedNotPlanned: {
      backgroundColor: 'neutral.emphasis',
      color: 'fg.onEmphasis'
    },
    pullClosed: {
      backgroundColor: 'closed.emphasis',
      color: 'fg.onEmphasis'
    },
    pullMerged: {
      backgroundColor: 'done.emphasis',
      color: 'fg.onEmphasis'
    },
    pullQueued: {
      backgroundColor: 'attention.emphasis',
      color: 'fg.onEmphasis'
    },
    issueOpened: {
      backgroundColor: 'open.emphasis',
      color: 'fg.onEmphasis'
    },
    pullOpened: {
      backgroundColor: 'open.emphasis',
      color: 'fg.onEmphasis'
    },
    draft: {
      backgroundColor: 'neutral.emphasis',
      color: 'fg.onEmphasis'
    },
    issueDraft: {
      backgroundColor: 'neutral.emphasis',
      color: 'fg.onEmphasis'
    },
    unavailable: {
      backgroundColor: 'neutral.emphasis',
      color: 'fg.onEmphasis'
    }
  }
});
const sizeVariants = variant({
  prop: 'variant',
  variants: {
    small: {
      paddingX: 2,
      paddingY: 1,
      fontSize: 0
    },
    normal: {
      paddingX: '12px',
      paddingY: 2,
      fontSize: 1
    }
  }
});
const StateLabelBase = styled.span.withConfig({
  displayName: "StateLabel__StateLabelBase",
  componentId: "sc-qthdln-0"
})(["display:inline-flex;align-items:center;font-weight:", ";line-height:16px;color:", ";text-align:center;border-radius:", ";", ";", ";", ";"], get('fontWeights.bold'), get('colors.canvas.default'), get('radii.3'), colorVariants, sizeVariants, sx);
function StateLabel({
  children,
  status,
  variant: variantProp = 'normal',
  ...rest
}) {
  const octiconProps = variantProp === 'small' ? {
    width: '1em'
  } : {};
  return /*#__PURE__*/React.createElement(StateLabelBase, _extends({}, rest, {
    variant: variantProp,
    status: status
  }), status && /*#__PURE__*/React.createElement(Octicon, _extends({}, octiconProps, {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    icon: octiconMap[status] || QuestionIcon,
    "aria-label": labelMap[status],
    sx: {
      mr: 1
    }
  })), children);
}
StateLabel.displayName = "StateLabel";

export { StateLabel as default };
