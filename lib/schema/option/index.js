"use strict";
// import { findKey, isUndefined, sortBy } from 'lodash';
// import * as yup from 'yup';
// import { BehaviorDataValue } from '../log';
// import {
//   NumericOptionValue,
//   numericOptionSchema,
//   numericOptionText,
//   optionIsNumericOption,
// } from './numeric';
// import {
//   StringOptionValue,
//   optionIsStringOption,
//   stringOptionSchema,
// } from './string';
// export * from './followUp';
// export * from './numeric';
// export * from './string';
// export const optionSchemas: Record<
//   OptionValue['type'],
//   yup.ObjectSchema<OptionValue>
// > = {
//   string: stringOptionSchema,
//   numeric: numericOptionSchema,
// };
// export const optionSchema = yup.lazy(value => {
//   if (!value) return yup.mixed().required();
//   if (typeof value.type === 'string' && value.type in optionSchemas) {
//     return optionSchemas[value.type as OptionValue['type']];
//   }
//   return yup.object({
//     type: yup
//       .mixed<OptionValue['type']>()
//       .oneOf(Object.keys(optionSchemas) as OptionValue['type'][])
//       .required(),
//   });
// }) as yup.Lazy<ValidatedOption>;
// // / This type represents the union of all possible validated tactic objects
// type ValidatedOption = {
//   [K in OptionValue['type']]: yup.InferType<(typeof optionSchemas)[K]>;
// }[OptionValue['type']];
// export type OptionValue = NumericOptionValue | StringOptionValue;
// // For display purposes, we sort by lessThanOrEqualTo ascending, then by greaterThan ascending
// // This function returns a tuple to sort the objects.
// // It checks if "lessThanOrEqualTo" or "greaterThan" exists and sorts based on these values.
// // The second element in the tuple (0 or 1) is used to ensure "lessThanOrEqualTo" comes before "greaterThan" when values are the same.
// export function optionSortValueForDisplay(
//   option: OptionValue
// ): [number, number] {
//   const { greaterThan, lessThanOrEqualTo } = option as NumericOptionValue;
//   // Check if "lessThanOrEqualTo" is defined and use it as the primary sort value with higher
//   if (lessThanOrEqualTo === 0) return [-1, 0];
//   // priority (0).
//   if (lessThanOrEqualTo !== undefined) [lessThanOrEqualTo, 0];
//   // If "lessThanOrEqualTo" is not present, check "greaterThan". It is used as the sort value with
//   // lower priority (1).
//   if (greaterThan !== undefined) [greaterThan, 1];
//   // If neither is defined, treat it as the highest value for sorting purposes.
//   return [Infinity, 1];
// }
// // For matching purposes, we sort by lessThanOrEqualTo ascending, then by greaterThan descending
// // We first sort in a way that options with a small lessThanOrEqualTo value are first, then by
// // greaterThan value in descending order. This helps us find the "best" matching option
// function optionSortValueForMatching(option: OptionValue) {
//   return [
//     isUndefined((option as NumericOptionValue).lessThanOrEqualTo)
//       ? Infinity
//       : (option as NumericOptionValue).lessThanOrEqualTo,
//     isUndefined((option as NumericOptionValue).greaterThan)
//       ? -Infinity
//       : -((option as NumericOptionValue).greaterThan || 0),
//   ];
// }
// export function findBestMatchingOption(
//   optionsById: Record<string, OptionValue>,
//   data: BehaviorDataValue
// ) {
//   const optionsArray = Object.keys(optionsById).map(id => ({
//     id,
//     ...optionsById[id],
//   }));
//   const sortedOptions = sortBy(optionsArray, optionSortValueForMatching);
//   // Find the first key that matches the criteria
//   return findKey(optionsById, (_option, key) =>
//     optionMatches(sortedOptions.find(opt => opt.id === key)!, data)
//   );
// }
// export function optionMatches(option: OptionValue, data: BehaviorDataValue) {
//   if (optionIsStringOption(option)) return option.text === data.stringValue;
//   if (option.greaterThan != null)
//     return (
//       typeof data.numericValue === 'number' &&
//       data.numericValue > option.greaterThan
//     );
//   if (option.lessThanOrEqualTo != null)
//     return (
//       typeof data.numericValue === 'number' &&
//       data.numericValue <= option.lessThanOrEqualTo
//     );
//   return false;
// }
// export function optionText(option: OptionValue) {
//   if (optionIsNumericOption(option)) return numericOptionText(option);
//   if (optionIsStringOption(option)) return option.text;
//   return '';
// }
