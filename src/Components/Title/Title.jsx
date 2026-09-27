import { FONTS } from "../../Utils/fonts";
import "./Title.css";

const TITLES = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

const Title = ({ children, type = "h2", font, className }) => {
  const Tag = TITLES[type] || "h2";
  return (
    <Tag className={className} style={font && { fontFamily: FONTS[font] }}>
      {children}
    </Tag>
  );
};

export default Title;