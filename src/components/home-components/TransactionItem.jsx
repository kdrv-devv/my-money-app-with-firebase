// components
import Deletebtn from "../ui/delete-btn";
// custom hook
import { useFireStore } from "../../hooks/useFairstore";

const TransactionItem = ({ transaction }) => {
  const { delDocument } = useFireStore();
  const handleDelete = (id) => {
    delDocument(id, "pul");
  };

  return (
    <div className="w-full border-l-3 bg-[#3a54fbc3] border-[#ffaa00] p-2 rounded-md flex items-center justify-between">
      <h2 className="text-xl md:text-2xl text-white font-[600]">
        {transaction.title}
      </h2>
      <h2 className="text-lg md:text-xl text-white">${transaction.price}</h2>
      <div className="actions flex items-center gap-3">
        <Deletebtn
          onClick={() => handleDelete(transaction.id)}
          className={"!h-10 !w-10"}
        ></Deletebtn>
      </div>
    </div>
  );
};

export default TransactionItem;
