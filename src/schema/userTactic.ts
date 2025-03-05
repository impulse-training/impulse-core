import * as yup from 'yup';
import { tacticSchemas, TacticValue } from './tactic';
import { documentReferenceSchema } from './utils/firestore';
import { optionalTimestampSchema } from './utils/timestamp';

// User-specific fields that extend any tactic type
const userTacticExtensionSchema = {
  // References to behaviors this tactic is associated with
  allBehaviors: yup.boolean().required(),
  behaviorDocs: yup.array().of(documentReferenceSchema.required()).required(),

  // References to routines this tactic is associated with
  routineDocs: yup.array().of(documentReferenceSchema.required()).required(),

  // User-specific metadata
  completedAt: optionalTimestampSchema,

  // If this was adopted from an AI suggestion
  sourceId: yup.string().optional(),

  // User customizations
  customizations: yup
    .object({
      backgroundColor: yup.string().optional(),
      reminderTime: optionalTimestampSchema,
      notes: yup.string().optional(),
    })
    .optional(),

  // Usage statistics
  usageStats: yup
    .object({
      timesUsed: yup.number().default(0),
      lastUsed: optionalTimestampSchema,
      effectiveness: yup.number().min(1).max(5).optional(),
    })
    .optional(),
};

// Create a new schema for each tactic type, extended with user-specific fields
const userTacticSchemas: Record<
  TacticValue['type'],
  yup.ObjectSchema<any>
> = Object.entries(tacticSchemas).reduce((acc, [type, schema]) => {
  acc[type as TacticValue['type']] = schema.shape(userTacticExtensionSchema);
  return acc;
}, {} as Record<TacticValue['type'], yup.ObjectSchema<any>>);

// Create a lazy schema that selects the appropriate extended schema based on type
export const userTacticSchema = yup.lazy(value => {
  if (typeof value.type === 'string' && value.type in userTacticSchemas) {
    return userTacticSchemas[value.type as TacticValue['type']];
  }

  // Fallback schema that requires a valid type
  return yup.object({
    type: yup
      .mixed<TacticValue['type']>()
      .oneOf(Object.keys(userTacticSchemas) as TacticValue['type'][])
      .required(),
  });
}) as yup.Lazy<UserTacticTypes[TacticValue['type']]>;

// Type representing all possible user tactic types
export type UserTacticTypes = {
  [K in TacticValue['type']]: yup.InferType<(typeof userTacticSchemas)[K]>;
};

// The union type of all possible user tactic values
export type UserTacticValue = UserTacticTypes[TacticValue['type']];
