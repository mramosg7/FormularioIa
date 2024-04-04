
const form = localStorage.getItem('data');

export default function TempForm() {
    return (
        <div>
            <h1>TempForm</h1>
            <p>{form}</p>
        </div>
    )
}