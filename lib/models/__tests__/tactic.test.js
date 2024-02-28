"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const factories_1 = require("../../__tests__/factories");
const TimestampLike_1 = require("../../utils/TimestampLike");
describe('Tactic', () => {
    describe('subtitle', () => {
        describe('FolderTactic', () => {
            it('should return a description for a folder tactic with multiple child tactics', () => {
                const tactic = __1.Tactic.from('1', factories_1.factories.folderTacticFactory.build({
                    tacticIds: ['1', '2', '3'],
                    tacticsById: {
                        1: factories_1.factories.tacticFactory.build({ title: 'Go for a walk' }),
                        2: factories_1.factories.tacticFactory.build({ title: 'Deep breathing' }),
                        3: factories_1.factories.tacticFactory.build({ title: 'Relax' }),
                    },
                }), TimestampLike_1.TimestampLike);
                expect(tactic.subtitle).toEqual('Go for a walk and 2 more');
            });
            it('should return a description for a folder tactic with one child tactic', () => {
                const tactic = __1.Tactic.from('1', factories_1.factories.folderTacticFactory.build({
                    tacticIds: ['1'],
                    tacticsById: {
                        1: factories_1.factories.tacticFactory.build({ title: 'Go for a walk' }),
                    },
                }), TimestampLike_1.TimestampLike);
                expect(tactic.subtitle).toEqual('Go for a walk');
            });
            it('should return null for a folder tactic with no child tactic', () => {
                const tactic = __1.Tactic.from('1', factories_1.factories.folderTacticFactory.build({
                    tacticIds: [],
                    tacticsById: {},
                }), TimestampLike_1.TimestampLike);
                expect(tactic.subtitle).toEqual(null);
            });
        });
    });
});
