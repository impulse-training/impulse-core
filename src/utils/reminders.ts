import md5 from 'crypto-js/md5';
import { format } from 'date-fns';

export function reminderLogId(reminderId: string, date: Date) {
  return md5(
    JSON.stringify({
      reminderId,
      date: format(date, 'yyyy-MM-dd'),
    })
  ).toString();
}
