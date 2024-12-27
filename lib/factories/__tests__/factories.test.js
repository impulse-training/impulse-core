"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const yup_1 = require("yup");
const factories_1 = require("../../factories");
const schema_1 = require("../../schema");
const behavior_1 = require("../../schema/behavior");
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
                        console.error(`Validation error for ${name} at ${err.path}: ${err.message}`);
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
    // TODO: this doesn't yet have a schema
    applicationFactory: null,
    locationFactory: schema_1.locationSchema,
    daysSummaryFactory: schema_1.daysSummarySchema,
    dayFactory: schema_1.daySchema,
    regularLogFactory: schema_1.logSchema,
    profileFactory: schema_1.profileSchema,
    issueFactory: schema_1.issueSchema,
    suggestionFactory: schema_1.suggestionSchema,
    strategyFactory: schema_1.strategySchema,
    profileStrategyFactory: schema_1.profileStrategySchema,
    roadmapFactory: schema_1.roadmapSchema,
    tacticFactory: schema_1.tacticSchema,
    behaviorFactory: behavior_1.behaviorSchema,
    gameplanFactory: schema_1.gameplanSchema,
};
