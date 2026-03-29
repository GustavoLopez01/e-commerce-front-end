import styled from "styled-components";

type LoaderProps = {
  width?: string
  height?: string
  color?: string
}

const LoaderComponent = styled.span<LoaderProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 2px solid;
  border-color: ${({ color }) => color} transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loader({
  width = "10px",
  height = "10px",
  color = "oklch(48.8% 0.243 264.376)"
}: LoaderProps) {
  return (
    <LoaderComponent
      width={width}
      height={height}
      color={color}
    />
  )
}
