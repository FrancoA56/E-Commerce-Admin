// components/category/ToggleDisableButton.tsx
import { useNotify, useRefresh, useDataProvider } from 'react-admin';
import Button from '@mui/material/Button';
import BlockIcon from '@mui/icons-material/Block';
import CheckIcon from '@mui/icons-material/Check';

const ToggleDisableButton = ({ record }: { record: any }) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const dataProvider = useDataProvider();

  const handleToggleDisable = async () => {
    try {
      // Si la categoría está deshabilitada, la habilitamos, de lo contrario la deshabilitamos
      const endpoint = record.isDisable ? 'undisable' : 'disable';

      await dataProvider.update(`api/category/${endpoint}`, {
        id: record.id,
        data: { isDisable: !record.isDisable },
        previousData: record,
      });
      
      const action = record.isDisable ? 'enabled' : 'disabled';
      notify(`Category ${action}`, { type: 'info' });
      refresh();
    } catch (error) {
      if (error instanceof Error) {
        notify(`Error: ${error.message}`, { type: 'warning' });
      } else {
        notify('An unknown error occurred', { type: 'warning' });
      }
    }
  };

  return (
    <Button onClick={handleToggleDisable} startIcon={record.isDisable ? <CheckIcon /> : <BlockIcon />}>
      {record.isDisable ? 'Enable' : 'Disable'}
    </Button>
  );
};

export default ToggleDisableButton;
