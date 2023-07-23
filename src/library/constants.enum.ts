export enum COLOR_TYPES {
    info = 'info',
    danger = 'danger',
}

export const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export interface selector {
    options: string;
    defaultValue: string;
    value: string;
    onChange(): void;
}
