import styled from "styled-components/macro";

const DEFAULT_CLAMP = 8;

const ClampedParagraph = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(p) => p.maxNumOfLines || DEFAULT_CLAMP};
  overflow: hidden;
`;

export default ClampedParagraph;
