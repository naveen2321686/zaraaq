'use client'

import React, { useState } from 'react';

const statusColors: Record<string, string> = {
  Active: 'text-green-600',
  Inactive: 'text-red-600',
};


type Dealer = {
  id: number;
  name: string;
  location: string;
  contact: string;
  status: string;
};

const DealersPage = () => {
  const [dealers, setDealers] = useState<Dealer[]>([
    { id: 1, name: 'Dealer One', location: 'Chennai', contact: '9876543210', status: 'Active' },
    { id: 2, name: 'Dealer Two', location: 'Coimbatore', contact: '9123456780', status: 'Inactive' },
    { id: 3, name: 'Dealer Three', location: 'Madurai', contact: '9988776655', status: 'Active' },
  ]);
  const [loading] = useState(false);
  const [error] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState<{ open: boolean; dealer?: Dealer }>({ open: false });

  // Form state
  const [form, setForm] = useState({ name: '', location: '', contact: '', status: 'Active' });

  // No API call, using local dummy data

  // Add Dealer
  const handleAdd = () => {
    const newDealer = {
      id: dealers.length ? Math.max(...dealers.map(d => d.id)) + 1 : 1,
      ...form,
    };
    setDealers([newDealer, ...dealers]);
    setShowAdd(false);
    setForm({ name: '', location: '', contact: '', status: 'Active' });
  };

  // Edit Dealer
  interface HandleEditDealer {
    id: number;
    name: string;
    location: string;
    contact: string;
    status: string;
  }

  const handleEdit = (dealer: HandleEditDealer) => {
    setShowEdit({ open: true, dealer });
    setForm({
      name: dealer.name,
      location: dealer.location,
      contact: dealer.contact,
      status: dealer.status,
    });
  };
  const handleUpdate = () => {
    setDealers(dealers.map(d => d.id === showEdit.dealer?.id ? { ...d, ...form } : d));
    setShowEdit({ open: false });
    setForm({ name: '', location: '', contact: '', status: 'Active' });
  };

  // Delete Dealer
  const handleDelete = (id: number) => {
    setDealers(dealers.filter(d => d.id !== id));
  };

  return (
    <div className="p-8 w-full h-full">
      <h2 className="text-2xl font-bold text-indigo-950 mb-6">Dealers</h2>
      <button
        className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        onClick={() => setShowAdd(true)}
      >
        <span className="text-black">+ Add Dealer</span>
      </button>
      <div className="overflow-x-auto">
        {loading ? (
          <div className="text-center py-8 text-black">Loading...</div>
        ) : error ? (
          <div className="text-center py-8 text-black">{error}</div>
        ) : (
          <table className="min-w-full bg-white rounded-lg shadow text-black">
            <thead>
              <tr className="bg-gray-100 text-black">
                <th className="py-2 px-4 text-left text-black">ID</th>
                <th className="py-2 px-4 text-left text-black">Name</th>
                <th className="py-2 px-4 text-left text-black">Location</th>
                <th className="py-2 px-4 text-left text-black">Contact</th>
                <th className="py-2 px-4 text-left text-black">Status</th>
                <th className="py-2 px-4 text-left text-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dealers.map((dealer) => (
                <tr key={dealer.id} className=" text-black border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{dealer.id}</td>
                  <td className="py-2 px-4 font-semibold">{dealer.name}</td>
                  <td className="py-2 px-4">{dealer.location}</td>
                  <td className="py-2 px-4">{dealer.contact}</td>
                  <td className={`py-2 px-4 font-bold ${statusColors[dealer.status]}`}>{dealer.status}</td>
                  <td className="py-2 px-4 flex gap-2">
                    <button
                      className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                      onClick={() => handleEdit(dealer)}
                    >Edit</button>
                    <button
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => handleDelete(dealer.id)}
                    >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Add Dealer Modal */}
      {showAdd && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4 text-black">Add Dealer</h3>
            <div className="mb-2">
              <input
                className="w-full border rounded px-3 py-2 mb-2 text-black placeholder-black"
                placeholder="Name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
              <input
                className="w-full border rounded px-3 py-2 mb-2 text-black placeholder-black"
                placeholder="Location"
                value={form.location}
                onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
              />
              <input
                className="w-full border rounded px-3 py-2 mb-2 text-black placeholder-black"
                placeholder="Contact"
                value={form.contact}
                onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
              />
              <select
                className="w-full border rounded px-3 py-2 mb-2 text-black"
                value={form.status}
                onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
              >
                <option value="Active" className="text-black">Active</option>
                <option value="Inactive" className="text-black">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 bg-gray-200 rounded text-black" onClick={() => setShowAdd(false)}>Cancel</button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded" onClick={handleAdd}>Add</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Dealer Modal */}
      {showEdit.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4 text-black">Edit Dealer</h3>
            <div className="mb-2">
              <input
                className="w-full border rounded px-3 py-2 mb-2 text-black placeholder-black"
                placeholder="Name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
              <input
                className="w-full border rounded px-3 py-2 mb-2 text-black placeholder-black"
                placeholder="Location"
                value={form.location}
                onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
              />
              <input
                className="w-full border rounded px-3 py-2 mb-2 text-black placeholder-black"
                placeholder="Contact"
                value={form.contact}
                onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
              />
              <select
                className="w-full border rounded px-3 py-2 mb-2 text-black"
                value={form.status}
                onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
              >
                <option value="Active" className="text-black">Active</option>
                <option value="Inactive" className="text-black">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 bg-gray-200 rounded text-black" onClick={() => setShowEdit({ open: false })}>Cancel</button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded" onClick={handleUpdate}>Update</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DealersPage;
