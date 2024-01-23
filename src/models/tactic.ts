// import { TacticValue } from '../schema';
// import { PhoneTacticValue } from '../schema/tactic';
// import { TimestampLike } from '../utils/TimestampLike';
// import twilioClient, { IMPULSE_NUMBER } from '../utils/twlioClient';

// abstract class Tactic {
//   static from(
//     id: string,
//     value: TacticValue,
//     TimestampClass: typeof TimestampLike
//   ) {
//     const Klass = value.type === 'phone' ? PhoneTactic : OtherTactic;

//     return new Klass(id, value, TimestampClass);
//   }

//   process() {}
// }

// class OtherTactic {}

// export class PhoneTactic extends Tactic {
//   constructor(
//     private id: string,
//     private data: PhoneTacticValue,
//     private TimestampClass: typeof TimestampLike
//   ) {
//     super();
//   }

//   // Make a phone call to the number provided, using Twilio
//   process() {
//     if (!this.data.phoneScript || !this.data.phoneNumber) return;

//     twilioClient.calls.create({
//       twiml: `<Response>
//         <Say>${this.data.phoneScript}</Say>
//       </Response>
//       `,
//       to: this.data.phoneNumber,
//       from: IMPULSE_NUMBER,
//     });
//   }
// }
