import {
    Create,
    SimpleForm,
    TextInput,
    BooleanInput
} from "react-admin";

const CategoryCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="name" label="Name" variant="standard"/>              
                <BooleanInput source="isDisable" label="Is Disable?" />
            </SimpleForm>
        </Create>
    );
};

export default CategoryCreate;