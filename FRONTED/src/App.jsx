function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold text-blue-600">My React App</h1>

        <p className="mb-6 text-gray-700">Tailwind CSS is working!</p>

        <div className="rounded-xl bg-white p-6 shadow-lg">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">Welcome</h2>

          <p className="mb-4 text-gray-600">
            This card is styled using Tailwind CSS.
          </p>

          <button className="rounded-lg bg-blue-500 px-5 py-2 font-medium text-white hover:bg-blue-600">
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
