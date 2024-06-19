// Our questions have a type field, which must be a member of this union
export type QuestionKeyType =
  | 'text'
  | 'time'
  | 'counter'
  | 'multipleChoice'
  | 'scaleOf1To10';
