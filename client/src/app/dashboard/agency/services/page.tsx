"use client";
import Footer from "@/app/mainpage/mainpagecomponents/footer";
import Header from "@/app/mainpage/mainpagecomponents/header";
import { useState } from "react";
import { useToast } from "@/context/ToastProvider";

// import { useEffect } from "react";
// import axios from "axios";

const Page = () => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState("view");
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Web Development",
      description: "Building responsive websites",
      price: "500",
      category: "Technology",
    },
    {
      id: 2,
      name: "Graphic Design",
      description: "Creating stunning visuals",
      price: "300",
      category: "Design",
    },
    {
      id: 3,
      name: "SEO Optimization",
      description: "Improving search engine ranking",
      price: "400",
      category: "Marketing",
    },
  ]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  // Fetch services from API
  //   useEffect(() => {
  //     const fetchServices = async () => {
  //       try {
  //         const response = await axios.get("YOUR_API_URL/services");
  //         setServices(response.data);
  //       } catch (error) {
  //         console.error("Error fetching services:", error);
  //       }
  //     };
  //     fetchServices();
  //   }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.description ||
      !formData.price ||
      !formData.category
    ) {
      showToast("Error adding service!", "error");
      return;
    }
    try {
      //   const response = await axios.post("YOUR_API_URL/services", formData);
      // setServices([...services, response.data]);
      //for now temporary
      const newService = {
        id: services.length + 1, // Generating a new ID
        ...formData,
      };

      setServices([...services, newService]); // Adding new service to the list

      setFormData({ name: "", description: "", price: "", category: "" });
      showToast("Data added Successfully!", "success");
    } catch (error) {
      showToast("Error adding service!", "error");
      console.error("Error adding service:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 rounded-l-lg border-b-2 border-[#c3eb2f] ${
              activeTab === "view"
                ? "bg-[#c3eb2f] text-black"
                : "bg-[#09090B] text-white"
            }`}
            onClick={() => setActiveTab("view")}
          >
            View Services
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg border-b-2 border-[#c3eb2f] ${
              activeTab === "add"
                ? "bg-[#c3eb2f] text-black"
                : "bg-[#09090B] text-white"
            }`}
            onClick={() => setActiveTab("add")}
          >
            Add Service
          </button>
        </div>

        {activeTab === "view" ? (
          <div>
            <h2 className="text-2xl font-semibold text-center">
              Available Services
            </h2>
            <div className="mt-4 space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="p-4 border rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-bold">{service.name}</h3>
                  <p className="text-sm">{service.description}</p>
                  <p className="font-semibold">Price: ${service.price}</p>
                  <p className="text-gray-500">Category: {service.category}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Add New Service
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block font-medium">Service Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter service name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block font-medium">Description</label>
                <textarea
                  className="w-full p-2 border rounded"
                  placeholder="Enter service description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                ></textarea>
              </div>
              <div>
                <label className="block font-medium">Price</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  placeholder="Enter price"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block font-medium">Category</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter category"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#c3eb2f] text-[#09090B] font-semibold py-2 rounded transition duration-300 hover:bg-[#a8d91c] hover:shadow-lg hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Page;
