import { FONTS } from "../../Utils/fonts";

const Paragraph = ({ children, font }) => {
  return <p style={font && { fontFamily: FONTS[font] }}>{children}</p>;
};

export default Paragraph;