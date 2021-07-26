import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    ArrayInput,
    SimpleFormIterator,
    FormDataConsumer,
    DateInput,
    SelectInput,
    required
} from 'react-admin';
import { Box, Typography, Card, CardContent } from '@material-ui/core';

import { styles } from './PropertiesStyles';
import { FilesCreateEdit } from '../../components/PreviewFiles/FilesCreateEdit';
import { CountNumberInput } from '../../components/InputFields/CountNumberInput';

export const PropertiesCreate = props => {
    const classes = styles();
    return (
        <Create {...props}>
            <SimpleForm redirect="list" className={classes.createForm}>
                <Card>
                    <CardContent>
                        <Box display={{ md: 'block', lg: 'flex' }}>
                            <Box flex={2} mr={{ md: 0, lg: '1em' }} className={classes.box}>
                                <Typography variant="h6" gutterBottom>
                                    Information
                                </Typography>
                                <TextInput required source="name"
                                    className={classes.editField}
                                    formClassName={classes.editCell}
                                />
                                <SelectInput source="category"
                                    choices={[
                                        { id: 'Furniture', name: 'Furniture' },
                                        { id: 'Telephone', name: 'Telephone' },
                                        { id: 'Laptop', name: 'Laptop' },
                                        { id: 'Monitor', name: 'Monitor' },
                                        { id: 'Pc', name: 'PC' },
                                        { id: 'Keyboard', name: 'Keyboard' },
                                        { id: 'Mouse', name: 'Mouse' },
                                    ]}
                                    validate={[required()]}
                                    fullWidth
                                />
                                <TextInput source="description"
                                    className={classes.editField}
                                    formClassName={classes.editCell}
                                />
                            </Box>
                            <Box flex={2} mr={{ md: 0, lg: '1em' }} className={classes.box}>
                                <Typography variant="h6" gutterBottom>
                                    Warranty
                                </Typography>
                                <DateInput source="purchaseDate"
                                    className={classes.editField}
                                    formClassName={classes.editCell}
                                />
                                <CountNumberInput label="Purchase cost (USD) (month)" source="purchaseCost"
                                    className={classes.editField}
                                    formClassName={classes.editCell}
                                />
                                <CountNumberInput label="Warranty (month)" source="warranty"
                                    className={classes.editField}
                                    formClassName={classes.editCell}
                                />
                            </Box>
                            <Box flex={2} mr={{ md: 0, lg: '1em' }} className={classes.box}>
                                <Typography variant="h6" gutterBottom>
                                    Status
                                </Typography>
                                <SelectInput source="status"
                                    choices={[
                                        { id: 'Active', name: 'Active' },
                                        { id: 'Reparation', name: 'Reparation' },
                                        { id: 'BrokenNotFixable', name: 'Broken - Not fixable' },
                                        { id: 'Archived', name: 'Archived' },
                                    ]}
                                    validate={[required()]}
                                    fullWidth
                                />
                            </Box>
                            <ArrayInput source="attachments">
                                <SimpleFormIterator >
                                    <FormDataConsumer>
                                        {({ getSource, scopedFormData }) => {
                                            return (
                                                <FilesCreateEdit record={scopedFormData} source={getSource('path')} />
                                            );
                                        }}
                                    </FormDataConsumer>
                                </SimpleFormIterator>
                            </ArrayInput>
                        </Box>
                    </CardContent>
                </Card>
            </SimpleForm>
        </Create>
    );
};