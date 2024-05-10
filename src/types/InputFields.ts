export type InputFieldT={
    label:string;
    htmlFor:string;
    id:string;
    type:string;
    value:string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    maxLength?:number;
    min?:number;
}