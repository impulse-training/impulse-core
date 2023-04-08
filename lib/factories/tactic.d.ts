import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';
<<<<<<< HEAD
export declare const tacticFactory: Factory.Sync.Factory<
  TacticValue,
  | 'type'
  | 'uid'
  | 'createdAt'
  | 'ordinal'
  | 'isTemplate'
  | 'updatedAt'
  | 'originalId'
  | 'text'
  | 'delaySeconds'
  | 'title'
  | 'subtitle'
  | 'image'
  | 'language'
  | 'href'
  | 'isSharingEnabled'
  | 'showTitleField'
  | 'isBooster'
  | 'tagsSummary'
  | 'showResponseBox'
  | 'deviceTimeRemindersDigest'
  | 'deviceLocationRemindersDigest'
  | 'dataDigest'
  | 'patternIds'
  | 'allPatterns'
  | 'checkInEntries'
  | 'remindersSummary'
>;
export declare const scheduledTacticFactory: Factory.Sync.Factory<
  TacticValue,
  | 'type'
  | 'uid'
  | 'createdAt'
  | 'ordinal'
  | 'isTemplate'
  | 'updatedAt'
  | 'originalId'
  | 'text'
  | 'delaySeconds'
  | 'title'
  | 'subtitle'
  | 'image'
  | 'language'
  | 'href'
  | 'isSharingEnabled'
  | 'showTitleField'
  | 'isBooster'
  | 'tagsSummary'
  | 'showResponseBox'
  | 'deviceTimeRemindersDigest'
  | 'deviceLocationRemindersDigest'
  | 'dataDigest'
  | 'patternIds'
  | 'allPatterns'
  | 'checkInEntries'
  | 'remindersSummary'
>;
=======
export declare const tacticFactory: Factory.Sync.Factory<TacticValue, "type" | "uid" | "originalId" | "createdAt" | "updatedAt" | "ordinal" | "text" | "delaySeconds" | "title" | "subtitle" | "image" | "language" | "href" | "isSharingEnabled" | "showTitleField" | "isTemplate" | "isBooster" | "tagsSummary" | "showResponseBox" | "deviceTimeRemindersDigest" | "deviceLocationRemindersDigest" | "dataDigest" | "patternIds" | "allPatterns" | "checkInEntries" | "remindersSummary">;
export declare const scheduledTacticFactory: Factory.Sync.Factory<TacticValue, "type" | "uid" | "originalId" | "createdAt" | "updatedAt" | "ordinal" | "text" | "delaySeconds" | "title" | "subtitle" | "image" | "language" | "href" | "isSharingEnabled" | "showTitleField" | "isTemplate" | "isBooster" | "tagsSummary" | "showResponseBox" | "deviceTimeRemindersDigest" | "deviceLocationRemindersDigest" | "dataDigest" | "patternIds" | "allPatterns" | "checkInEntries" | "remindersSummary">;
>>>>>>> c59a545 (Add constant to time reminder class)
