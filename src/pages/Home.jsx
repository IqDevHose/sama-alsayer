import React, { useState } from "react";
import { Button, Typography, Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const staticImages = [
    "/assets/IMG-20240929-WA0064.jpg",
    "/assets/IMG-20240929-WA0070.jpg",
    "/assets/IMG-20240929-WA0054.jpg",
    "/assets/IMG-20240929-WA0062.jpg"
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="bg-white font-tajawal" >
      {/* Main Section */}
      <section className="container mx-auto py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side: Text section */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 px-4">
            <div className="max-w-lg">
              <div className="h-1 w-10 bg-black mb-4"></div>
              <h1 className="font-bold text-4xl mb-6">
                شركة طريق بيروت للتجارة
              </h1>
              <p
                className="text-lg text-gray-700 mb-6"
              >
                شركة متخصصة في بيع الملابس ومنتجات التجميل عبر الإنترنت، تقدم أحدث الصيحات بأسعار تنافسية. يقع مقر الشركة في بغداد وتلتزم بتوفير منتجات عالية الجودة وخدمة عملاء مميزة.
              </p>
              <Link to={"/about"}>
                <Button
                  color="black"
                  className="rounded-full hover:bg-gray-800 px-6 py-2 text-xl"
                >
                  من نحن
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side: Image section */}
          <div className="w-full md:w-1/2 flex justify-center px-4">
            <Card className="w-full max-w-lg overflow-hidden rounded-[30px]">
              <img
                src="/logo.png"
                alt="Fashion Model"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">من نحن</h2>
            <p className="text-gray-700 mb-8">
              نحن شركة متخصصة في تجارة الملابس ومواد التجميل، مقرنا في بغداد. نقدم مجموعة واسعة من أحدث صيحات الموضة ومنتجات العناية الشخصية، ملتزمون بتوفير منتجات عالية الجودة بأسعار تنافسية تلبي احتياجات جميع عملائنا. نسعى دائمًا إلى تقديم تجربة تسوق مميزة وخدمة عملاء استثنائية لضمان رضاكم وثقتكم.
            </p>
            {/* <Button className="bg-lime-300 text-gray-800 rounded-full w-40 py-3 hover:bg-lime-400 transition-colors">
              Shop now
            </Button> */}
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center p-8">
            <img
              src="/undraw_profile_re_4a55.svg"
              alt="Minimalist room design"
              className="w-full max-w-md h-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1
            className="text-3xl font-bold text-center mb-8" // Reduced heading size and margin
          >
            منتجاتنا
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Left Column: Two stacked images */}
            <div className="grid grid-rows-2 gap-4">
              {staticImages.slice(0, 2).map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[20px] shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer" // Reduced shadow and rounded corners
                  onClick={() => openModal(image)} // Open modal on image click
                >
                  <img
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-[20px] transition-transform duration-300 group-hover:scale-105" // Set fixed height for images
                    loading="lazy"
                    onError={(e) => {
                      if (!e.target.src.endsWith("placeholder-image.jpg")) {
                        e.target.src = "/assets/placeholder-image.jpg"; // Fallback image
                      }
                    }}
                  />
                </div>
              ))}
            </div>
            {/* Right Column: Tall image */}
            <div className="flex items-center">
              <div
                className="group relative overflow-hidden rounded-[20px] shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer w-full"
                onClick={() => openModal(staticImages[2])} // Open modal on tall image click
              >
                <img
                  src={staticImages[2]}
                  alt="Tall Image"
                  className="w-full h-full object-cover rounded-[20px] transition-transform duration-300 group-hover:scale-105" // Set fixed height for tall image
                  loading="lazy"
                  onError={(e) => {
                    if (!e.target.src.endsWith("placeholder-image.jpg")) {
                      e.target.src = "/assets/placeholder-image.jpg"; // Fallback image
                    }
                  }}
                />
              </div>
            </div>
          </div>
          {/* See More Button */}
          <div className="text-center mt-8">
            {" "}
            {/* Reduced margin */}
            <Link to="/gallery">
              <button
                className="bg-black text-white rounded-full hover:bg-gray-800 px-6 py-2 text-lg font-semibold" // Reduced padding
              >
                شاهد المزيد
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Section (Full Width) */}
      <section
        className="relative bg-cover bg-center h-80 flex items-center"
        style={{
          backgroundImage: "url('/assets/IMG-20240929-WA0069.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center w-full">
          <h1
            className="text-3xl font-bold text-white mb-4"
          >
            تواصل معنا
          </h1>
          <p
            className="text-lg text-gray-300 mb-8"
          >
            لا تتردد في إرسال رسالة لنا
          </p>
          <a href="mailto:nfoddddd@beirut.iq">
            <button
              className="bg-white rounded-full hover:bg-gray-300 px-6 py-1 text-gray-800 font-semibold text-lg"
            >
              ابدأ
            </button>
          </a>
        </div>
      </section>

      {/* Modal for larger image display */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal} // Close modal on backdrop click
        >
          <div
            className="relative bg-white p-2 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up to the backdrop
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Large View"
              className="max-w-[400px] h-auto rounded-lg" // Set a maximum width for the image
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
