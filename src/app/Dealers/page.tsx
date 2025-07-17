'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const statusColors: Record<string, string> = {
  Active: 'text-green-600',
  Inactive: 'text-red-600',
};

const getRandomStatus = () => (Math.random() > 0.5 ? 'Active' : 'Inactive');
const getRandomLocation = () => {
  const locations = ['Chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Salem'];
  return locations[Math.floor(Math.random() * locations.length)];
};
const getRandomContact = () => {
  return '9' + Math.floor(100000000 + Math.random() * 900000000).toString();
};


const DealersPage = () => {
  const [dealers, setDealers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState<{ open: boolean; dealer?: any }>({ open: false });

  // Form state
  const [form, setForm] = useState({ name: '', location: '', contact: '', status: 'Active' });

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const mapped = res.data.slice(0, 10).map((item: any) => ({
          id: item.id,
          name: item.title,
          location: getRandomLocation(),
          contact: getRandomContact(),
          status: getRandomStatus(),
        }));
        setDealers(mapped);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch dealers');
        setLoading(false);
      });
  }, []);

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
  const handleEdit = (dealer: any) => {
    setShowEdit({ open: true, dealer });
    setForm({
      name: dealer.name,
      location: dealer.location,
      contact: dealer.contact,
      status: dealer.status,
    });
  };
  const handleUpdate = () => {
    setDealers(dealers.map(d => d.id === showEdit.dealer.id ? { ...d, ...form } : d));
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
        + Add Dealer
      </button>
      <div className="overflow-x-auto">
        {loading ? (
          <div className="text-center py-8 text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">{error}</div>
        ) : (
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-gray-100 text-black">
                <th className="py-2 px-4 text-left">ID</th>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Location</th>
                <th className="py-2 px-4 text-left">Contact</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Actions</th>
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
            <h3 className="text-lg font-bold mb-4">Add Dealer</h3>
            <div className="mb-2">
              <input
                className="w-full border rounded px-3 py-2 mb-2"
                placeholder="Name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
              <input
                className="w-full border rounded px-3 py-2 mb-2"
                placeholder="Location"
                value={form.location}
                onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
              />
              <input
                className="w-full border rounded px-3 py-2 mb-2"
                placeholder="Contact"
                value={form.contact}
                onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
              />
              <select
                className="w-full border rounded px-3 py-2 mb-2"
                value={form.status}
                onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 bg-gray-200 rounded" onClick={() => setShowAdd(false)}>Cancel</button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded" onClick={handleAdd}>Add</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Dealer Modal */}
      {showEdit.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Edit Dealer</h3>
            <div className="mb-2">
              <input
                className="w-full border rounded px-3 py-2 mb-2"
                placeholder="Name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
              <input
                className="w-full border rounded px-3 py-2 mb-2"
                placeholder="Location"
                value={form.location}
                onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
              />
              <input
                className="w-full border rounded px-3 py-2 mb-2"
                placeholder="Contact"
                value={form.contact}
                onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
              />
              <select
                className="w-full border rounded px-3 py-2 mb-2"
                value={form.status}
                onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 bg-gray-200 rounded" onClick={() => setShowEdit({ open: false })}>Cancel</button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded" onClick={handleUpdate}>Update</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DealersPage;
