interface File {
    lastModified: string;
    lastModifiedDate: string;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
}
export type EventParams = {
    handleChange: {
        target: {
            value: string | number;
            name: string;
        };
    };
    handleImage: {
        target: {
            files: any | File;
        };
    };
};
