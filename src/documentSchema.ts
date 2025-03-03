import { nth, split } from 'lodash';
import * as yup from 'yup';
import * as schemas from './schema';

// Can take any document snapshot from firestore, get its collection type, and return a schema for
// validation.
export const documentSchema = yup.lazy(snap => {
  const path = snap.ref.path;
  const collection = nth(split(path, '/'), -2)!;

  if (typeof snap.type === 'string' && snap.type in schemas) {
    return schemaMap[collection];
  }

  return yup.object();
});

export const schemaMap: Record<string, yup.Schema | yup.Lazy<unknown>> = {
  behaviors: schemas.behaviorSchema,
  callStatuses: schemas.callStatusSchema,
  days: schemas.daySchema,
  daysSummarys: schemas.daysSummarySchema,
  experiments: schemas.experimentSchema,
  issues: schemas.issueSchema,
  locations: schemas.locationSchema,
  mailTemplates: schemas.mailTemplateSchema,
  messages: schemas.messageSchema,
  metrics: schemas.metricSchema,
  profiles: schemas.profileSchema,
  recoveryCodes: schemas.recoveryCodeSchema,
  suggestions: schemas.suggestionSchema,
  supportGroups: schemas.supportGroupSchema,
  therapists: schemas.therapistSchema,
  threads: schemas.threadSchema,
  tactics: schemas.tacticSchema,
  userTactics: schemas.userTacticSchema,
};
