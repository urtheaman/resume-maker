import { useAppDispatch } from "../../store/redux/store";
import { setTheme } from "../../store/redux/ui/uiSlice";

const ThemeBtn: React.FC<{ theme: string }> = ({ theme }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => dispatch(setTheme(theme))}
      className={`w-6 h-6 ${theme} rounded-full m-2`}
    ></button>
  );
};

export default ThemeBtn;
