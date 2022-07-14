export interface Todo {
    _id: string;
    title: string;
    content: string;
}

export interface ITodos extends Todo {
    createdAt?: string;
    updatedAt?: string;
    isComplete: boolean;
}

export interface formValueTypes {
    title: string;
    content: string;
}