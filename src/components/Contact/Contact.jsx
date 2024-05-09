export default function Contact({ contact: { id, name, number } }) {
    
    return (
        <div>
            <p>{name}</p>
            <p>{number}</p>
            <button type="button">Delete</button>
        </div>
    );
 } 