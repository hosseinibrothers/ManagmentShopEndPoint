export const changeFieldValue = (setField, prevField, fieldName, value) => {
    setField({
        ...prevField,
        [fieldName]: value
    })
}