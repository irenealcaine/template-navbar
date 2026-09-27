import { FONTS } from "../../Utils/fonts";
import "./Paragraph.css";

const Paragraph = ({ children, font, className }) => {
  return (
    <p className={className} style={font && { fontFamily: FONTS[font] }}>
      {children}
    </p>
  );
};

export default Paragraph;