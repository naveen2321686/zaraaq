"use client";
import React, { useEffect, useState } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4">Loading todos...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="bg-white rounded-xl shadow p-4 mt-4">
      <h3 className="text-indigo-950 font-bold text-lg mb-3">Todos</h3>
      <ul className="divide-y divide-gray-200">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center py-2">
            <input
              type="checkbox"
              checked={todo.completed}
              readOnly
              className="accent-blue-500 mr-3"
            />
            <span className={todo.completed ? "line-through text-gray-400" : "text-gray-700"}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
