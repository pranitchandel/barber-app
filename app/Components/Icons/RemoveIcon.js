import Svg, { Path } from "react-native-svg";

const RemoveIcon = ({ width, height, color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
    >
      <Path fill={color} d="M200-450v-60h560v60H200Z" />
    </Svg>
  );
};

export default RemoveIcon;
