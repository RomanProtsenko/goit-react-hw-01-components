import PropTypes from 'prop-types';
import styled from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
    return (
        <table className={styled.transactions}>
            <thead className={styled.table}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                 {transactions.map(({ type, amount, currency,id }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.array.isRequired
};