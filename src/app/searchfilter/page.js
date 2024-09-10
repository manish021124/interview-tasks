import SearchFilter from "@/Components/Task1/SearchFilter";

export default function Task1() {
  // Sample items to pass to the SearchFilter component as a prop
  const sampleItems = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 mt-20">Search Filter Component</h1>

      {/* Render SearchFilter component and pass sampleItems as a prop */}
      <SearchFilter items={sampleItems} />
    </div>
  );
}
