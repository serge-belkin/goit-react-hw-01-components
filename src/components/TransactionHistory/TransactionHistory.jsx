import { PropTypes } from 'prop-types';
import css from "./TransactionHistory.module.css";
import TransactionItem from './TransactionItem';

export default function TransactionHistory({ data }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.header}>
        <tr className={css.values}>
          <th className={css.columnTitle}>Type</th>
          <th className={css.columnTitle}>Amount</th>
          <th className={css.columnTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        <tr className={css.values}>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
        {data.map(transaction => (
          <TransactionItem
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};