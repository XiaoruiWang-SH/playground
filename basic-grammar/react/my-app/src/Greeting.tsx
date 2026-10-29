
type Props = {
    title: string;
    count?: number
}
export function Greeting({ title, count = 0 }: Props) {
    return <h1>{title} ({count})</h1>
}
