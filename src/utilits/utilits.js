export const required = (value) => {
  if(value) return undefined;
  return 'field is required';
};
export const maxLength = (length) => (value) => {
  if(value.length > length) return `max length in ${length}`;
  return undefined;
};