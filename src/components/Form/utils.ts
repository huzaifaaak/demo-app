import { UseFetchIssue } from '@fetch';

export function getIssue(issues: UseFetchIssue[], field: string, te: any) {
    const issueCode = issues.find((issue) => issue.field === field)?.code;
    if (issueCode) {
        return te(issueCode);
    }
}
