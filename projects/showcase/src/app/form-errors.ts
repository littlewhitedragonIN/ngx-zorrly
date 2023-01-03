export const defaultErrorMessages = [
  {name: 'required', message: 'This field is required'},
  {name: 'minLength', message: (err: any, field: any): string => `Minimum ${field.props.minLength} characters required`},
  {name: 'maxLength', message: (err: any, field: any): string => `Exceeds maximum ${field.props.maxLength} characters limit`},
  {name: 'min', message: (err: any, field: any): string => `Number should less than ${field.props.min}`},
  {name: 'max', message: (err: any, field: any): string => `Number should more than ${field.props.max}`},
  {name: 'email', message: 'Invalid email address'},
];
