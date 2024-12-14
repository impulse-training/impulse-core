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
      flatMap(log.behaviorData, ({ behavior, data }) => {
        const prompt = behavior.prompt;
        const goalText = data?.setbackThreshold
          ? ` (goal is ${data.setbackThreshold} or less)`
          : '';
        if (!data) return null;
        return [prompt + goalText, data.stringValue].join(': ');
      })
    );
    text += behaviorsDescription.join(SEPARATOR);
  }

  return text;
}
