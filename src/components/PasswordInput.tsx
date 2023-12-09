import { TextBox, TextBoxChangeEvent } from "@progress/kendo-react-inputs";
interface Props {
  value: string;
  placeHolder: string;
}
function handleChange(_event: TextBoxChangeEvent): void {}
function PasswordInput(props: Props) {
  return (
    <>
      <TextBox
        className="mt-1"
        value={props.value}
        type="password"
        onChange={handleChange}
        placeholder={props.placeHolder}
      />
    </>
  );
}
export default PasswordInput;
