import Svg, { Path } from "react-native-svg";

const AddIcon = ({ width, height, color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
    >
      <Path
        fill={color}
        d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z"
      />
    </Svg>
  );
};

export default AddIcon;
