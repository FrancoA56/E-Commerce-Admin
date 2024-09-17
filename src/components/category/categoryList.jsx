// components/category/CategoryList.tsx
import {
  List,
  Datagrid,
  TextField,
  DateField
} from 'react-admin';

const CategoryList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);

export default CategoryList;