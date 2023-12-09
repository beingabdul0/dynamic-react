import { TextBox, TextBoxChangeEvent } from "@progress/kendo-react-inputs";
interface Props {
  value: string;
  placeHolder: string;
}
function TextInput(props: Props) {
  function handleChange(_event: TextBoxChangeEvent): void {}

  return (
    <>
      <TextBox
        value={props.value}
        type="text"
        onChange={handleChange}
        placeholder={props.placeHolder}
      />
    </>
  );
}
export default TextInput;
