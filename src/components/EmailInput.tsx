import { TextBox, TextBoxChangeEvent } from "@progress/kendo-react-inputs";

interface Props {
  value: string;
  placeHolder: string;
}
function handleChange(_event: TextBoxChangeEvent): void {}
function EmailInput(props: Props) {
  return (
    <>
      <TextBox
        className="m1"
        value={props.value}
        type="email"
        onChange={handleChange}
        placeholder={props.placeHolder}
      />
    </>
  );
}
export default EmailInput;
