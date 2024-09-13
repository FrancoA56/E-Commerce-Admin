import {
    Create,
    SimpleForm,
    TextInput,
    BooleanInput
} from "react-admin";

const BrandCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="name" label="Name" />              
                <BooleanInput source="isDisable" label="Is Disable?" />
            </SimpleForm>
        </Create>
    );
};

export default BrandCreate;