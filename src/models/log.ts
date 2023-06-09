import { ImpulseLogValue, LogValue } from '../schema';

export class Log {
  constructor(private id: string, private data: LogValue) {}

  get text() {
    if (this.data.type === 'impulse')
      return this.selectedPatterns.map(tagSymbol).join(', ');

    if (this.data.type === 'location') {
      return `${this.data.locationMode === 'enter' ? 'Arrived at' : 'Left'} ${
        this.data.locationName
      }`;
    }

    return '';
  }

  get selectedPatterns() {
    const data = this.data as ImpulseLogValue;
    if (!data.patternIds) return [];
    return data.patternIds.map(id => data.patterns[id]);
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

export function tagSymbol(tag: { emoji?: string; name: string }) {
  return tag.emoji || tag.name;
}

export function initials(str: string) {
  if (!str) return '';
  const matches = str
    .split(/(?=[A-Z])/)
    .join(' ')
    .match(/\b(\w)/g);
  return (matches?.join('') || '').toUpperCase();
}
