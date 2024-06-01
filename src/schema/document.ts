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
  strategies: schemas.strategySchema,
  logs: schemas.logSchema,
  streams: schemas.streamSchema,
  comments: schemas.commentSchema,
  locations: schemas.locationSchema,
  profiles: schemas.profileSchema,
  issues: schemas.issueSchema,
  mailTemplates: schemas.mailTemplateSchema,

  // NOT implemented
  // invitations: schemas.invitationSchema,
  // categories: schemas.categorySchema,
};
