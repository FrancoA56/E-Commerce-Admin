import { List, Datagrid, TextField, DateField, BooleanField } from "react-admin";
import PresetFilter from "./presetFilter";
import UrlCustomField from "../../utils/urlCustomField/urlCustomField";

const ProductList = (props) => {
  return (
    <List {...props} filters={<PresetFilter />}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="code" />
        <TextField source="price" />
        <UrlCustomField source="image" />
        <TextField source="shortDescription" />
        <TextField source="longDescription" />
        <TextField source="instructions" />
        <BooleanField source="isDisabled" />
        <TextField source="labels" />
        <TextField source="categories" />
        <UrlCustomField source="url" />
        <DateField source="release" />
      </Datagrid>
    </List>
  );
};

export default ProductList;