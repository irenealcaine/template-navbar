import { FONTS } from "../../Utils/fonts";
import "./Paragraph.css";

const Paragraph = ({ children, font }) => {
  return <p style={font && { fontFamily: FONTS[font] }}>{children}</p>;
};

export default Paragraph;