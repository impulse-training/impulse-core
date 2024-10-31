import * as yup from 'yup';
import {
  derivedProfileStrategySchema,
  DerivedProfileStrategyValue,
} from './derived';
import {
  originalProfileStrategySchema,
  OriginalProfileStrategyValue,
} from './original';

export * from './base';
export * from './derived';
export * from './original';

export const profileStrategySchemas: Record<
  ProfileStrategyValue['type'],
  yup.ObjectSchema<ProfileStrategyValue>
> = {
  original: originalProfileStrategySchema,
  derived: derivedProfileStrategySchema,
} as any;

export const profileStrategySchema = yup.lazy(value => {
  if (!value) return yup.mixed().required();

  if (typeof value.type === 'string' && value.type in profileStrategySchemas) {
    return profileStrategySchemas[value.type as ProfileStrategyValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<ProfileStrategyValue['type']>()
      .oneOf(
        Object.keys(profileStrategySchemas) as ProfileStrategyValue['type'][]
      )
      .required(),
  });
}) as yup.Lazy<ValidatedQuestion>;

// / This type represents the union of all possible validated tactic objects
type ValidatedQuestion = {
  [K in ProfileStrategyValue['type']]: yup.InferType<
    (typeof profileStrategySchemas)[K]
  >;
}[ProfileStrategyValue['type']];

export type ProfileStrategyValue =
  | OriginalProfileStrategyValue
  | DerivedProfileStrategyValue;
