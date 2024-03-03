import { nth, split } from 'lodash';
import * as yup from 'yup';
import * as schemas from '.';

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
  tactics: schemas.tacticSchema,
  gameplans: schemas.gameplanSchema,
  logs: schemas.logSchema,
  patterns: schemas.patternSchema,
  recommendationRules: schemas.recommendationRuleSchema,
  recommendations: schemas.recommendationSchema,
  supportGroups: schemas.supportGroupSchema,
  comments: schemas.commentSchema,
  locations: schemas.locationSchema,

  // These are yet to be implemented
  // locations: schemas.locationSchema,
  // categories: schemas.categorySchema,
  // issues: schemas.issueSchema,
  // mailTemplates: schemas.mailTemplateSchema,
  // profiles: schemas.profileSchema,
};
