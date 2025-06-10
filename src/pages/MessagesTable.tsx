// === FRONTEND FILE: MessagesTable.tsx ===
import { useEffect, useState } from 'react';

interface Message {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

const MessagesTable = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/messages')
      .then(res => res.json())
      .then(data => {
        setMessages(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching messages:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Submitted Contact Messages</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-4">S.No</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Phone</th>
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4">Message</th>
                <th className="py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg ,index)=> (
                <tr key={msg._id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{index + 1}</td> {/* Serial Number */}
                  <td className="py-2 px-4">{msg.name}</td>
                  <td className="py-2 px-4">{msg.email}</td>
                  <td className="py-2 px-4">{msg.phone}</td>
                  <td className="py-2 px-4">{msg.subject}</td>
                  <td className="py-2 px-4 max-w-xs truncate" title={msg.message}>{msg.message}</td>
                  <td className="py-2 px-4">{new Date(msg.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MessagesTable;