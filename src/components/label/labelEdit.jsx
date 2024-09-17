import {
    Edit,
    SimpleForm,
    TextInput,
    BooleanInput
} from "react-admin";

const LabelEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm >
                <TextInput source="name" label="Name" variant="standard"/>
                <BooleanInput source="isDisable" label="Is Disable?" />
            </SimpleForm>
        </Edit>
    );
};

export default LabelEdit;