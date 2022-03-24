import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="max-w-3xl py-4">
          <h2 className="text-lg mb-2">
            CameroonLogos is an open source collection of High qualitym pixel perfect Cameroonian
            Company logos use for free.
          </h2>
          <div className="mb-2">Search through 20+ vector from different contributor.</div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contribute on Github
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
