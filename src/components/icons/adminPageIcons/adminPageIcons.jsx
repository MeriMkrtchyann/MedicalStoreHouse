import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

function OrderConfirm({ color }) {
  return (
    <div>
      <FontAwesomeIcon icon={faSquareCheck} style={{ color: color }} />
    </div>
  );
}

export { OrderConfirm };
