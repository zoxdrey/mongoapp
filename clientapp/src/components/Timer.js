import Button from 'react-bootstrap/Button'

export default function Timer(){
    return (
    <div className="block timer">00:00:00
        <div className="timer-buttons">
        <Button variant="dark" className="button button-start">Start</Button>
        <Button variant="dark" className="button button-save" onClick={() => {
            fetch('http://127.0.0.1:3001/api/savetime', {
                method: 'POST',
                headers: {
    'Content-Type': 'application/json'
  },
                body: JSON.stringify({
                    date: new Date(),
                    time: "1"})
            }).then(res => console.log(res))
        }}>Save</Button>
        </div>
    </div>)
}