import Svg, { Path } from "react-native-svg";

const ExpandMore = ({ width, height, color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
    >
      <Path
        fill={color}
        d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"
      />
    </Svg>
  );
};

export default ExpandMore;
