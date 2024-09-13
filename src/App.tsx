import { Admin, Resource } from 'react-admin';
import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';
import './App.css';
import CategoryCreate from './components/category/categoryCreate';
import CategoryEdit from './components/category/categoryEdit';
import CategoryList from './components/category/categoryList';
import CategoryIcon from '@mui/icons-material/Category';
import LabelCreate from './components/label/labelCreate';
import LabelList from './components/label/labelList';
import LabelEdit from './components/label/labelEdit';
import LabelIcon from '@mui/icons-material/Label';
import BrandCreate from './components/brand/brandCreate';
import BrandEdit from './components/brand/brandEdit';
import BrandList from './components/brand/brandList';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';

export function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name="category"
        list={CategoryList}
        edit={CategoryEdit}
        create={CategoryCreate}
        icon={CategoryIcon}
      />

      <Resource
        name="label"
        list={LabelList}
        create={LabelCreate}
        edit={LabelEdit}
        icon={LabelIcon}
      />

      <Resource
        name="brand"
        list={BrandList}
        create={BrandCreate}
        edit={BrandEdit}
        icon={BrandingWatermarkIcon}
      />
    </Admin>
  );
}
