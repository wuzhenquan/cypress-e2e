import { useState } from 'react';

const Template = () => {
  const [username, setUsername] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-green-500">登录成功</h1>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSubmit} className="flex items-center justify-center h-screen">
        <div className="border rounded-md p-4">
          <h1 className="text-3xl font-bold mb-4">登录</h1>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded py-2 px-3 w-full"
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
            Submit
          </button>
        </div>
      </form>
    );
  }
};

export default Template;