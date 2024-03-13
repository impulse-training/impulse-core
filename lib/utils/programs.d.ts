import { ProgramValue } from '../schema';
export declare function sortPrograms(programs: Array<{
    _data: ProgramValue;
    id: string;
}>, parentIssueIds: Array<string>): {
    _data: ProgramValue;
    id: string;
}[];
