import { Filter, TextInput, SelectInput, DateInput } from 'react-admin';
import { useEffect, useState } from 'react';
import { useDataProvider } from 'react-admin';

const ProductFilter = (props) => {
    const [categories, setCategories] = useState([]);
    const [labels, setLabels] = useState([]);
    const dataProvider = useDataProvider();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await dataProvider.getList('category', {
                    pagination: { page: 1, perPage: 100 },
                    sort: { field: 'name', order: 'ASC' },
                });
                setCategories(data.map(cat => ({ id: cat.id, name: cat.name })));
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        const fetchLabels = async () => {
            try {
                const { data } = await dataProvider.getList('label', {
                    pagination: { page: 1, perPage: 100 },
                    sort: { field: 'name', order: 'ASC' },
                });
                setLabels(data.map(label => ({ id: label.id, name: label.name })));
            } catch (error) {
                console.error('Error fetching labels:', error);
            }
        };

        fetchCategories();
        fetchLabels();
    }, [dataProvider]);

    return (
        <Filter {...props}>
            <TextInput label="Name" source="name" />
            <TextInput label="Code" source="code" />
            <TextInput label="Price" source="price" />
            <TextInput label="Image" source="image" />
            <TextInput label="Short Description" source="shortDescription" />
            <TextInput label="Long Description" source="longDescription" />
            <TextInput label="Instructions" source="instructions" />
            <SelectInput
                label="Is Disabled"
                source="isDisable"
                choices={[
                    { id: 'true', name: 'Yes' },
                    { id: 'false', name: 'No' }
                ]}
            />
            <DateInput label="Released At" source="releasedAt" />
            <SelectInput
                label="Category"
                source="categoryIds" // Assuming you're filtering by category IDs
                choices={categories}
            />
            <SelectInput
                label="Label"
                source="labelIds" // Assuming you're filtering by label IDs
                choices={labels}
            />
        </Filter>
    );
};

export default ProductFilter;
