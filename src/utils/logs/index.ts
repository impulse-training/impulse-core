// // We can probably structure this better, for example, by setting up converters on our documents to
// // wrap them in a class that has a toGptInput method. We actually used to use converters, but it was

// import { compact, flatMap, map } from 'lodash';
// import OpenAI from 'openai';
// import { LogValue } from '../../schema';

// const SEPARATOR = '|';

// type Message = OpenAI.Chat.Completions.ChatCompletionMessageParam;

// // half-hearted, and added complexity without much benefit. We should revisit this.
// export function logGptPayload(log: LogValue): Message[] | null {
//   switch (log.type) {
//     case 'impulse':
//       return [
//         {
//           role: 'user',
//           content: `I'm facing an ${log.issueName} impulse right now (craving or urge)`,
//         },
//       ];
//     case 'message':
//       return [
//         {
//           role: log.isGptSender ? 'assistant' : 'user',
//           content: log.text,
//         },
//       ];
//     case 'questions':
//       return compact(
//         flatMap(log.questionsById, (question, questionId) => {
//           const prompt = question.prompt;
//           const userAnswer = log.questionData?.[questionId];
//           const goalText = userAnswer?.setbackThreshold
//             ? ` (Reminder: your goal is ${userAnswer.setbackThreshold} or less)`
//             : '';
//           if (!userAnswer) return null;
//           return [
//             {
//               role: 'assistant',
//               content: prompt + goalText,
//             },
//             {
//               role: 'user',
//               content: userAnswer.stringValue,
//             },
//           ];
//         })
//       );
//     case 'tactics':
//       const suggestedTactics = map(
//         log.tacticsById,
//         tactic => tactic.prompt
//       ).join(SEPARATOR);
//       const assistantMessage: Message = {
//         role: 'assistant',
//         content: `SUGGESTED ACTIONS: ${suggestedTactics}`,
//       };
//       const userMessage: Message | null = log.completedTacticIds?.length
//         ? {
//             role: 'user',
//             content: `I'VE COMPLETED: ${map(
//               log.completedTacticIds,
//               id => log.tacticsById[id].prompt
//             ).join(SEPARATOR)}`,
//           }
//         : null;
//       return compact([assistantMessage, userMessage]);
//     default:
//       if (log.text)
//         return [
//           {
//             role: 'user',
//             content: log.text,
//           },
//         ];
//       return null;
//   }
// }
