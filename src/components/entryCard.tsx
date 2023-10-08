const EnttrieCard = (entry2) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
     <h2 className="text-2xl font-bold mb-2">{entry2.entry2.id}</h2> 
     <p  className="text-gray-700">{entry2.entry2.content}</p> 
    </div>
  );
};

export default EnttrieCard;
