import { Button } from "@progress/kendo-react-buttons";

interface Props {
  text: string;
  themeColor:
    | "base"
    | "primary"
    | "secondary"
    | "tertiary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "dark"
    | "light"
    | "inverse";
}
function CButton(props: Props) {
  return (
    <>
      <Button className="button button-lg" themeColor={props.themeColor}>
        {props.text}
      </Button>
    </>
  );
}
export default CButton;
