import axios from "axios";
import phones from "../../types/phones";


const getPhones = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const Smartphones = async () => {
  return (
    <>
      <div> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {getPhones().map((phone) => (
            <div key={phone.id} className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="font-bold text-xl mb-2">{phone.title}</h2>
              <p className="text-gray-500">{phone.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Smartphones;
