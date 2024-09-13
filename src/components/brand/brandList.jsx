import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
} from 'react-admin';

const BrandList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <BooleanField source="isDisable" />
      </Datagrid>
    </List>
  );
};

export default BrandList;
