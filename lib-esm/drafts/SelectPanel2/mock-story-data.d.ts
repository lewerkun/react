declare const data: {
    issue: {
        labelIds: string[];
        assigneeIds: string[];
    };
    ref: string;
    collaborators: ({
        id: string;
        name: string;
        login: string;
        recommended: boolean;
    } | {
        id: string;
        name: string;
        login: string;
        recommended?: undefined;
    })[];
    labels: ({
        color: string;
        id: string;
        name: string;
        description: string;
        createdAt: string;
    } | {
        color: string;
        id: string;
        name: string;
        description: null;
        createdAt: string;
    })[];
    users: {
        id: string;
        name: string;
        login: string;
    }[];
    branches: ({
        id: string;
        name: string;
        trailingInfo: string;
    } | {
        id: string;
        name: string;
        trailingInfo?: undefined;
    })[];
    tags: ({
        id: string;
        name: string;
        trailingInfo: string;
    } | {
        id: string;
        name: string;
        trailingInfo?: undefined;
    })[];
    repos: {
        org: string;
        name: string;
        description: string;
    }[];
    pulls: {
        id: string;
        name: string;
        description: string;
        status: string;
    }[];
};
export default data;
//# sourceMappingURL=mock-story-data.d.ts.map