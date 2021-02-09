interface LogoProps {
  scale: number;
}

export const Logo = (props: LogoProps) => {
  return (
    <svg height={80 * props.scale} width={120 * props.scale}>
      <g xmlns="http://www.w3.org/2000/svg">
        <rect
          id="left"
          height={70 * props.scale}
          width={105 * props.scale}
          y={5 * props.scale}
          x={5 * props.scale}
          strokeWidth={5 * props.scale}
          stroke="#000"
          fill="#000"
        />
        <rect
          id="right"
          height={70 * props.scale}
          width={70 * props.scale}
          y={5 * props.scale}
          x={42 * props.scale}
          strokeWidth={5 * props.scale}
          stroke="#000"
          fill="#fff"
        />
      </g>
    </svg>
  );
};
