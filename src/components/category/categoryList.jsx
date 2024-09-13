// components/category/CategoryList.tsx
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  DateField,
} from 'react-admin';

const CategoryList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      {/* Agregar columna personalizada para el botón de deshabilitar */}
      <BooleanField source="disable" label="Disable" />
    </Datagrid>
  </List>
);

export default CategoryList;
