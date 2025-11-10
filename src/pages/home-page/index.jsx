// component
import AddTransactionForm from "../../components/home-components/transaction-form/AddTransactionForm";
import TransactionItem from "../../components/home-components/TransactionItem";
// custom hook
import { useCollections } from "../../hooks/useCollections";
import { useGlobalContext } from "../../hooks/useGlobalContext";
const HomePage = () => {
  const { user } = useGlobalContext();
  const { data: transactions } = useCollections("pul", ["uid", "==", user.uid]);
  return (
    <div className="mt-10">
      <div className="mycon flex-col gap-5  flex md:flex-row items-start justify-between">
        <div className="transactions-list order-2 md:order-1 w-full md:w-[50%] flex flex-col gap-4">
          {transactions &&
            transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
        </div>

        <div className="add-transaction order-1 md:order-2 flex flex-col gap-4 w-full md:w-[45%]">
          <AddTransactionForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
