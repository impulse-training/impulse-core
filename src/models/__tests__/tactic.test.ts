import { Tactic } from '..';
import { factories } from '../../__tests__/factories';
import { TimestampLike } from '../../utils/TimestampLike';

describe('Tactic', () => {
  describe('subtitle', () => {
    describe('FolderTactic', () => {
      it('should return a description for a folder tactic with multiple child tactics', () => {
        const tactic = Tactic.from(
          '1',
          factories.folderTacticFactory.build({
            tacticIds: ['1', '2', '3'],
            tacticsById: {
              1: factories.tacticFactory.build({ title: 'Go for a walk' }),
              2: factories.tacticFactory.build({ title: 'Deep breathing' }),
              3: factories.tacticFactory.build({ title: 'Relax' }),
            },
          }),
          TimestampLike
        );
        expect(tactic.subtitle).toEqual('Go for a walk and 2 more');
      });

      it('should return a description for a folder tactic with one child tactic', () => {
        const tactic = Tactic.from(
          '1',
          factories.folderTacticFactory.build({
            tacticIds: ['1'],
            tacticsById: {
              1: factories.tacticFactory.build({ title: 'Go for a walk' }),
            },
          }),
          TimestampLike
        );
        expect(tactic.subtitle).toEqual('Go for a walk');
      });

      it('should return null for a folder tactic with no child tactic', () => {
        const tactic = Tactic.from(
          '1',
          factories.folderTacticFactory.build({
            tacticIds: [],
            tacticsById: {},
          }),
          TimestampLike
        );
        expect(tactic.subtitle).toEqual(null);
      });
    });
  });
});
