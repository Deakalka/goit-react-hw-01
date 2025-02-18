import css from "./TransactionHistory.module.css";
import PropTypes from 'prop-types';

const TransactionHistory = ({items}) =>{
    // const {type, amount, currency} = transactions;
    return (
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
                
            <tbody>
                {items.map(({id, type, amount,currency }) => {
                    return (
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td className={css.type}>{currency}</td>
                        </tr>);
                    })
                };
            </tbody>
        </table>

    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default TransactionHistory;