import * as yup from 'yup';

export const omitSchemaFields = (
  originalSchema: yup.ObjectSchema<yup.AnyObject>,
  fieldsToOmit: Array<string>
) => {
  const newSchemaFields = Object.keys(originalSchema.fields)
    .filter(key => !fieldsToOmit.includes(key))
    .reduce((acc, key) => {
      acc[key] = originalSchema.fields[key];
      return acc;
    }, {} as yup.ObjectShape);

  return yup.object().shape(newSchemaFields);
};
