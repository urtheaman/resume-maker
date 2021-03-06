import styles from "./SwitchCheckbox.module.css";

const SwitchCheckbox: React.FC<{
  defaultChecked?: boolean;
  onChange: any;
  name?: string;
  fontSize?: string;
  className?: string;
  color?: string;
  fontWeight?: string | number;
}> = ({
  defaultChecked = false,
  fontSize,
  fontWeight,
  name,
  className,
  onChange,
  color,
  ...otherProps
}) => {
  return (
    <div className={styles.switchContainer}>
      {name && <span style={{ fontSize, fontWeight }}>{name}</span>}
      <label className={`${styles.switch} ${className && className}`}>
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          onChange={onChange}
          {...otherProps}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default SwitchCheckbox;
