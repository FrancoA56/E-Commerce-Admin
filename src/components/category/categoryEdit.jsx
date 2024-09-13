import {
    Edit,
    SimpleForm,
    TextInput,
    BooleanInput
} from "react-admin";

const CategoryEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm >
                <TextInput source="name" label="Name" />
                <BooleanInput source="isDisable" label="Is Disable?" />
            </SimpleForm>
        </Edit>
    );
};

export default CategoryEdit;