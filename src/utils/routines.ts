import md5 from 'crypto-js/md5';
import { format } from 'date-fns';

export function routineLogId(routineId: string, date: Date) {
  return md5(
    JSON.stringify({
      routineId,
      date: format(date, 'yyyy-MM-dd'),
    })
  ).toString();
}
