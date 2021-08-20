export const defaultErrorMessages = [
  {name: 'required', message: 'This field is required'},
  {name: 'minlength', message: (err: any, field: any): string => `Minimum ${field.templateOptions.minLength} characters required`},
  {name: 'maxlength', message: (err: any, field: any): string => `Exceeds maximum ${field.templateOptions.maxLength} characters limit`},
  {name: 'min', message: (err: any, field: any): string => `Number should less than ${field.templateOptions.min}`},
  {name: 'max', message: (err: any, field: any): string => `Number should more than ${field.templateOptions.max}`},
  {name: 'email', message: 'Invalid email address'},
];
