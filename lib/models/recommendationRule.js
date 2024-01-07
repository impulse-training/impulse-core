"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecommendationRule = void 0;
class RecommendationRule {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
    get forDescription() {
        if (this.data.forAllIssues)
            return 'Everyone';
        // It's not for everyone, return a list of names of issues that it's for
        return this.data.issueNamesSummary;
    }
}
exports.RecommendationRule = RecommendationRule;
