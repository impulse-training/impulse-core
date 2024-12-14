// import { compact, isUndefined } from 'lodash';
// import * as yup from 'yup';
// import { OptionValue } from '.';
// import { optionValueBaseSchema } from './base';

// // Both time and counter options are "numeric", in the sense that we measure them with greaterThan
// // and lessThanOrEqualTo conditions
// export const numericOptionSchema = optionValueBaseSchema('numeric')
//   .shape({
//     setbackThreshold: yup.number(),
//     greaterThan: yup.number(),
//     lessThanOrEqualTo: yup.number(),
//   })
//   .test(
//     'validate-conditions',
//     'Either greaterThan or lessThanOrEqualTo must be provided, but not both',
//     function (values) {
//       const { greaterThan, lessThanOrEqualTo } = values;
//       const hasGreaterThan = typeof greaterThan !== 'undefined';
//       const hasLessThanOrEqualTo = typeof lessThanOrEqualTo !== 'undefined';

//       if (!hasGreaterThan && !hasLessThanOrEqualTo) return false;
//       if (hasGreaterThan && hasLessThanOrEqualTo) return false;
//       return true;
//     }
//   );

// export type NumericOptionValue = yup.InferType<typeof numericOptionSchema>;

// export function optionIsNumericOption(
//   option: OptionValue
// ): option is NumericOptionValue {
//   return option.type === 'numeric';
// }

// // Returns a string like "Up to 5 minutes (success)" or "More than 5 minutes (setback)"
// export function numericOptionText(option: NumericOptionValue) {
//   const { greaterThan, lessThanOrEqualTo } = option;
//   if (isUndefined(greaterThan) && isUndefined(lessThanOrEqualTo)) return '';
//   const formatter = String; // optionIsTimeOption(option) ? formatSecondsInWords : String;
//   // if (optionIsTimeOption(option) && lessThanOrEqualTo === 0)
//   //   return 'No time spent';
//   // if (optionIsTimeOption(option) && greaterThan === 0) return 'Time spent';
//   const unit = !isUndefined(lessThanOrEqualTo)
//     ? lessThanOrEqualTo
//       ? 'Up to'
//       : ''
//     : 'More than';
//   const value = [greaterThan, lessThanOrEqualTo].filter(
//     v => v !== undefined
//   )[0]!;
//   return compact([unit, formatter(value)]).join(' ');
// }
