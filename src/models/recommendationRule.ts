import { RecommendationRuleValue } from '../schema';

export class RecommendationRule {
  constructor(private id: string, private data: RecommendationRuleValue) {}

  get forDescription() {
    if (this.data.forAllIssues) return 'Everyone';

    // It's not for everyone, return a list of names of issues that it's for
    return this.data.issueNamesSummary;
  }
}
