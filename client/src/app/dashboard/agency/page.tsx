import Footer from "@/app/mainpage/mainpagecomponents/footer";
import Header from "@/app/mainpage/mainpagecomponents/header";
import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Services",
    image:
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "TechStack",
    image:
      "https://images.yourstory.com/cs/1/6b460cd040d711e994bbefffe3577d8b/full-stack-web-development-1586433444650.png",
  },
  {
    title: "Blogs",
    image:
      "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Projects",
    image:
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJvamVjdHN8ZW58MHwwfDB8fHww",
  },
  {
    title: "Pricing",
    image:
      "https://images.unsplash.com/photo-1634757439914-23b8acb9d411?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFByaWNlfGVufDB8MHwwfHx8MA%3D%3D",
  },
  {
    title: "Team",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbXxlbnwwfDB8MHx8fDA%3D",
  },
  {
    title: "Messages",
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVzc2FnZXxlbnwwfDB8MHx8fDA%3D",
  },
  {
    title: "Contact Details",
    image:
      "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29udGFjdHxlbnwwfDB8MHx8fDA%3D",
  },
];

const Page = () => {
  return (
    <>
      <Header />
      <div className="p-6">
        <div className="text-4xl font-semibold font-sans my-15 text-center">
          What do You want to Update
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-30 p-6">
          {sections.map((section, index) => (
            <Link
              href={`/dashboard/agency/${section.title
                .replace(/\s+/g, "")
                .toLowerCase()}`}
              key={index}
            >
              {" "}
              <div
                key={index}
                className="shadow-lg border-b-4 border-[#c3eb2f] rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 text-[#c3eb2f] text-center">
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
