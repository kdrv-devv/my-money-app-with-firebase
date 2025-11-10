// style
import "./transactionform.css";
// react imports
import { useState } from "react";
// toaster
import { toast } from "sonner";
// custom hook
import { useFireStore } from "../../../hooks/useFairstore";
import { useGlobalContext } from "../../../hooks/useGlobalContext";
const AddTransactionForm = () => {
  const { user } = useGlobalContext()
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const { addDocument } = useFireStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !price.trim()) {
      toast.error("Please , fill all fields");
      return;
    }
    const newTransaction = {
      title,
      price: Number(price),
      uid:user.uid
    };
    // add firestore new Transaction 
    addDocument(newTransaction, "pul");
    // cleat all inputs
    setTitle("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Title..."
        className="input"
        type="text"
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        placeholder="Price"
        className="input"
        type="number"
      />
      <button className="add-btn">Add new transaction</button>
    </form>
  );
};

export default AddTransactionForm;
