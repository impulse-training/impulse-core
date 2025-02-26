import { compact, flatMap } from 'lodash';
import { ChatCompletionMessageParam } from 'openai/resources';
import { GptLogValue, LogValue, UserLogValue } from '../../schema';
import { formatBehaviorLimit } from '../behaviors';

export function getGptPayload(
  log: LogValue
): ChatCompletionMessageParam | undefined {
  let text = `${log.text || (log as UserLogValue).audioTranscript} `;

  if (log.type === 'call') {
    if (!log.endedAt || log.transcriptSummary) return undefined;
    return {
      role: 'assistant',
      content: `<SYSTEM>CALL BETWEEN ASSISTANT AND USER: ${log.transcriptSummary}</SYSTEM>`,
    };
  }

  if (log.type === 'impulse') {
    return {
      role: 'user',
      content:
        "<SYSTEM>IMPULSE BUTTON PRESSED IN-APP. I'M HAVING AN URGE OR CRAVING</SYSTEM>",
    };
  }

  if (log.type === 'outcome' && log.outcome) {
    return {
      role: 'user',
      content: `<SYSTEM>THIS MOMENT WAS MARKED AS A ${log.outcome}</SYSTEM>`,
    };
  }

  if (log.behaviorData) {
    text += `<SYSTEM>The user reported acting on the impulse, tracking: \n`;

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
    text += behaviorsDescription.join('\n') + '</SYSTEM>';
  }

  if (log.metricData) {
    text += '<SYSTEM>Emotions: \n';
    const metricsDescription = compact(
      flatMap(log.metricData, ({ data }) => data.label)
    );
    text += metricsDescription.join('\n') + '</SYSTEM>';
  }

  if (log.tacticsData) {
    text += '<SYSTEM>Strategies used: \n';
    const tacticsDescription = compact(
      flatMap(log.tacticsData, ({ tactic }) => tactic.prompt)
    );
    text += tacticsDescription.join('\n') + '</SYSTEM>';
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
