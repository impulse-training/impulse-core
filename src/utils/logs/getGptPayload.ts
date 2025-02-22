import { differenceInSeconds } from 'date-fns';
import { compact, flatMap } from 'lodash';
import { ChatCompletionMessageParam } from 'openai/resources';
import {
  formatSecondsInWords,
  GptLogValue,
  LogValue,
  UserLogValue,
} from '../../schema';
import { formatBehaviorLimit } from '../behaviors';

export function getGptPayload(
  log: LogValue
): ChatCompletionMessageParam | undefined {
  let text = `${log.text || (log as UserLogValue).audioTranscript} `;

  if (log.type === 'call') {
    if (!log.endedAt || log.transcriptSummary) {
      return {
        role: 'user',
        content: 'We had a live voice call. The transcript is pending.',
      };
    }
    const durationInSeconds = differenceInSeconds(
      log.endedAt.toDate(),
      log.date.toDate()
    );
    const formattedDuration = formatSecondsInWords(durationInSeconds);

    return {
      role: 'user',
      content: `We had a call that lasted ${formattedDuration}. ${log.transcriptSummary}`,
    };
  }

  if (log.type === 'impulse') {
    return {
      role: 'user',
      content: "I'm having an impulse moment (a craving or urge)",
    };
  }

  if (log.type === 'outcome' && log.outcome) {
    return {
      role: 'user',
      content: 'This impulse moment was marked as a ' + log.outcome,
    };
  }

  if (log.behaviorData) {
    text += `The user reported acting on the impulse, tracking: \n`;

    const behaviorsDescription = compact(
      flatMap(log.behaviorData, ({ behavior, data }) => {
        let trackedDescription = [behavior.name, data.formattedValue].join(
          ': '
        );
        const dailyLimit = behavior.dailyLimit;
        if (typeof dailyLimit === 'number') {
          trackedDescription += ` (goal: ${formatBehaviorLimit(
            behavior
          )} each day, or less)`;
        }
        return trackedDescription;
      })
    );
    text += behaviorsDescription.join('\n');
  }

  if (log.metricData) {
    text += 'Emotions: \n';
    const metricsDescription = compact(
      flatMap(log.metricData, ({ data }) => data.label)
    );
    text += metricsDescription.join('\n');
  }

  if (log.tacticsData) {
    text += 'Strategies used: \n';
    const tacticsDescription = compact(
      flatMap(log.tacticsData, ({ tactic }) => tactic.prompt)
    );
    text += tacticsDescription.join('\n');
  }

  if (log.type === 'toolCall') {
    return {
      role: log.role,
      content: text,
      tool_call_id: log.toolCallId,
    };
  }

  if (hasRole(log)) {
    return {
      role: log.role,
      content: text,
    };
  }

  return;
}

function hasRole(log: LogValue): log is UserLogValue | GptLogValue {
  return ['user', 'gpt'].includes(log.type);
}
