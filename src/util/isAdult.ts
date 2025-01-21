import { isValid, parseISO, differenceInYears } from 'date-fns';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export function IsAdult(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isAdult',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          if (!value || !isValid(parseISO(value))) return false;
          const age = differenceInYears(new Date(), parseISO(value));
          return age >= 18;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must indicate an age of at least 18 years.`;
        },
      },
    });
  };
}
