import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div>
      <FaUser /> <p> {name}</p>
      <FaPhoneAlt />
      <p>{number}</p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
