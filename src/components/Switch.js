import cx from "classnames";
import "./Switch.css";

const Switch = ({ rounded = true, isToggled, onToggle }) => {
  const sliderCx = cx("slider", {
    rounded: rounded,
  });

  return (
    <label className="switch" type="check">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className={sliderCx} />
    </label>
  );
};

export default Switch;
