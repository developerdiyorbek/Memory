import MemoryGame from "./components/MemoryGame";

function App() {
  return (
    <div className="max-w-xl max-md:px-5 mx-auto mt-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 text-center">
        Memory game
      </h1>
      <MemoryGame
        images={[
          "https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
          "https://images.unsplash.com/photo-1546842931-886c185b4c8c",
          "https://images.unsplash.com/photo-1520763185298-1b434c919102",
          "https://images.unsplash.com/photo-1442458017215-285b83f65851",
          "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
          "https://images.unsplash.com/photo-1591181520189-abcb0735c65d",
        ]}
      />
    </div>
  );
}

export default App;
