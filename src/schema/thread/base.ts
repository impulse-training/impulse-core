import * as yup from 'yup';
import { logSchema } from '../log';
import { optionalStringArray } from '../utils/array';
import { documentReferenceSchema } from '../utils/firestore';
import { objectOf } from '../utils/objectOf';
import { optionalTimestampSchema } from '../utils/timestamp';

export default function threadBase<T extends string>(type: T) {
  return yup.object({
    type: yup.mixed<T>().oneOf([type]).required(),
    dateString: yup.string().required(),
    firstLogId: yup.string(),
    profileId: yup.string().required(),
    isProcessing: yup.boolean(),
    isVisible: yup.boolean().required(),
    title: yup.string(),
    tacticsWithCommentsIds: optionalStringArray,
    sharedWithFolderIds: optionalStringArray,
    logsById: objectOf(logSchema),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    // We're introducing a "whatsapp thread", which is
    // Optionally, whatsapp threads can be pointed at a folder, and can write tactics into that folder
    whatsappFolderDoc: documentReferenceSchema,
  });
}
