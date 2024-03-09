import { FormInputLable, Input, Group } from "./admin-auth-form-input.style";

const AdminAuthFormInput = ({ label, inputOptions }) => {
  return (
    <Group>
      <Input {...inputOptions} />
      {label && (
        <FormInputLable shrink={inputOptions.value.length}>
          {label}
        </FormInputLable>
      )}
    </Group>
  );
};

export default AdminAuthFormInput;