"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tactic_1 = require("../tactic");
describe('tacticSchema', () => {
    it('is valid without a source file', () => {
        const tactic = {
            type: 'basic',
            prompt: 'Tactic 1',
            description: 'This is a tactic',
        };
        const result = tactic_1.tacticSchema.validate(tactic);
        expect(result).toBeDefined();
    });
});
