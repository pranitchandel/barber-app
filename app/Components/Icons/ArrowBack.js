import Svg, { Path } from "react-native-svg";

const ArrowBackIcon = ({ width, height, color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
    >
      <Path
        fill={color}
        d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z"
      />
    </Svg>
  );
};

export default ArrowBackIcon;
