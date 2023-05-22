import Svg, { Path } from "react-native-svg";

const SortIcon = ({ width, height, color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 96 960 960"
      width={width}
    >
      <Path
        fill={color}
        d="M120 816v-60h240v60H120Zm0-210v-60h480v60H120Zm0-210v-60h720v60H120Z"
      />
    </Svg>
  );
};

export default SortIcon;
