const EnttryCard = (entry2) => {
  const date = new Date(entry2.entry2.createdAt).toDateString();
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
     <h2 className="text-2xl font-bold mb-2">{date}</h2> 
     <p  className="text-gray-700">summary</p> 
     <p  className="text-gray-700">mood</p> 
    </div>
  );
};

export default EnttryCard;
