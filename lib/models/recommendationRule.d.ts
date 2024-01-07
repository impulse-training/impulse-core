import { RecommendationRuleValue } from '../schema';
export declare class RecommendationRule {
    private id;
    private data;
    constructor(id: string, data: RecommendationRuleValue);
    get forDescription(): string | undefined;
}
