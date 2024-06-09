"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const yup_1 = require("yup");
const factories_1 = require("../../factories");
const schema_1 = require("../../schema");
const TimestampLike_1 = require("../../utils/firestore/TimestampLike");
const factories = (0, factories_1.makeFactories)(TimestampLike_1.TimestampLike);
describe('factories', () => {
    (0, lodash_1.forEach)(factories, (factory, name) => {
        it(name, () => {
            const document = factory.build({});
            const snap = { id: 'abc123', data: () => document };
            const schema = schemaMap[name];
            if (!schema)
                return console.log('No schema exists for ' + name + ' factory - exiting');
            try {
                const result = schema.validateSync(snap.data(), {
                    abortEarly: false,
                });
                expect(result).toBeDefined();
            }
            catch (error) {
                if (error instanceof yup_1.ValidationError) {
                    // Log each validation error with its path and message
                    error.inner.forEach(err => {
                        console.error(`Validation error at ${err.path}: ${err.message}`);
                    });
                }
                else {
                    console.error('An unexpected error occurred:', error);
                }
                // Rethrow the error to fail the test
                throw error;
            }
        });
    });
});
const schemaMap = {
    profileLogsSummaryFactory: schema_1.profileLogsSummarySchema,
    folderStrategyFactory: schema_1.folderStrategySchema,
    tacticStrategyFactory: schema_1.tacticStrategySchema,
    dayLogsSummaryFactory: schema_1.dayLogsSummarySchema,
    applicationFactory: null,
    commentFactory: schema_1.commentSchema,
    impulseFactory: schema_1.logSchema,
    timeLogFactory: schema_1.logSchema,
    locationLogFactory: schema_1.logSchema,
    locationFactory: null,
    profileFactory: null,
    issueFactory: null,
    folderFactory: schema_1.folderSchema,
    tacticFactory: schema_1.tacticSchema,
    questionTimeTacticFactory: schema_1.tacticSchema,
    timeRoutineFactory: schema_1.timeRoutineSchema,
};
