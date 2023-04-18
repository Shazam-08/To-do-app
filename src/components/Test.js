import { useState } from "react";
import Delete from "./Delete";
function Test() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!newItem) {
      alert("Please enter a work to be done");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
      done: false,
    };

    setItems((prevItems) => [...prevItems, item]);
    setNewItem("");
  };

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  const handleChange = (id) => {
    const newList = items.map((item) => {
      if (item.id === id) return { ...item, done: !item.done };
      return item;
    });
    setItems(newList);
  };

  const handleCheckboxChange = (done, address) => {
    if (done) return null;
    handleChange(address);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("form submitted ✅");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center h-screen bg-black">
        <div className="w-1/2 bg-[#aa0505] rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-white mb-4">Works To Do</h1>
          <input
            type="text"
            className="w-full px-3 py-2 my-4 rounded-lg border border-black bg-white text-xl font-serif"
            placeholder="Add Work Here"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button
            type="submit"
            className="bg-black hover:bg-slate-800 text-white font-bold py-2 px-8 rounded"
            onClick={addItem}
          >
            Add
          </button>
          <div>
            <ul className="my-4">
              {items.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="flex items-center mb-2 text-xl font-serif bg-white rounded-lg border border-black"
                  >
                    <input
                      type="checkbox"
                      checked={item.done}
                      onChange={() => handleCheckboxChange(item.done, item.id)}
                      className=" ml-0.5  rounded mr-4 my-4 w-6 h-6 accent-black "
                    />
                    <span
                      className={
                        item.done
                          ? "text-gray-400 line-through"
                          : "text-gray-800"
                      }
                    >
                      {item.value}
                    </span>
                    <button
                      className="ml-auto"
                      onClick={() => deleteItem(item.id)}
                    >
                      <Delete />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Test;
