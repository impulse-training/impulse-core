import {
  ImpulseLogValue,
  LogValue,
  logIsImpulseLog,
  logIsLocationLog,
  logIsTimeLog,
} from '../schema';

export class Log {
  constructor(private id: string, private data: LogValue) {}

  get text() {
    if (logIsImpulseLog(this.data)) return formatPattern(this.selectedPattern);

    if (logIsLocationLog(this.data)) {
      return `${this.data.locationMode === 'enter' ? 'Arrived at' : 'Left'} ${
        this.data.locationName
      }`;
    }

    if (logIsTimeLog(this.data)) {
      return `Scheduled`;
    }

    return '';
  }

  get selectedPattern() {
    const data = this.data as ImpulseLogValue;
    return data.patternsById?.[data.patternId];
  }

  // get getTacticSummary() {
  //   return reduce(
  //     this.data.tacticIds,
  //     (memo, id) => {
  //       const tags = pickBy(this.data.tagsByTacticId[id], (_tag, id) =>
  //         this.data.tagIds.includes(id)
  //       );
  //       const tagsSummary = values(tags)
  //         .map(tag => tag.emoji)
  //         .join(' ');
  //       const text = compact([this.data.tactics[id].title, tagsSummary]).join(
  //         ' | '
  //       );

  //       memo[id] = { text, applied: true };
  //       return memo;
  //     },
  //     {} as Record<string, { text: string; applied: boolean }>
  //   );
  // }
}

export function formatPattern(pattern?: { emoji?: string; name: string }) {
  return pattern?.emoji || pattern?.name;
}
// TODO: Remove this export (it's used in the app)
export const tagSymbol = formatPattern;

export function initials(str: string) {
  if (!str) return '';
  const matches = str
    .split(/(?=[A-Z])/)
    .join(' ')
    .match(/\b(\w)/g);
  return (matches?.join('') || '').toUpperCase();
}
