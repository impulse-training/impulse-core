import { optionalTimestampSchema } from '../../utils/timestamp';
import { tacticValueBaseSchema } from '../base';
import { RecapKeyType } from './recapKeyType';

export function recapTacticValueBaseSchema(type: RecapKeyType) {
  return tacticValueBaseSchema(type).shape({
    confirmedAt: optionalTimestampSchema,
  });
}
