// We can probably structure this better, for example, by setting up converters on our documents to
// wrap them in a class that has a toGptInput method. We actually used to use converters, but it was

import { compact, flatMap } from 'lodash';
import { LogValue } from '../../schema';

const SEPARATOR = ',';

// Given a log, generate a text description that can be used as input to an LLM
export function logTextForGpt(log: LogValue): string {
  let text = log.text! + ' ';

  // Handle tactics that have been completed

  if (log.behaviorData) {
    const behaviorsDescription = compact(
      flatMap(log.behaviorsById, (behavior, behaviorId) => {
        const prompt = behavior.prompt;
        const userAnswer = log.behaviorData?.[behaviorId];
        const goalText = userAnswer?.setbackThreshold
          ? ` (goal is ${userAnswer.setbackThreshold} or less)`
          : '';
        if (!userAnswer) return null;
        return [prompt + goalText, userAnswer.stringValue].join(': ');
      })
    );
    text += behaviorsDescription.join(SEPARATOR);
  }

  return text;
}
