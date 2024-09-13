// components/category/DisableButton.tsx
import { useNotify, useRefresh, useDataProvider } from 'react-admin';
import Button from '@mui/material/Button';
import BlockIcon from '@mui/icons-material/Block';

const DisableButton = ({ record }: { record: any }) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const dataProvider = useDataProvider();

  const handleDisable = async () => {
    try {
      // Asegurarte de que el ID se pase correctamente en la ruta
      await dataProvider.custom('api/category/disable', {
        id: record.id, // El ID es importante para la ruta
        data: { isDisable: true },
        previousData: record,
      });
      notify('Category disabled', { type: 'info' });
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
    <Button onClick={handleDisable} startIcon={<BlockIcon />}>
      Disable
    </Button>
  );
};

export default DisableButton;
