import Image from "next/image";
import Link from "next/link";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const works = [
  {
    image: "pic2.png",
    title: "Designing Dashboards",
    year: "2020",
    category: "Dashboards",
    description:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa duis enim velit mollit. Exercitation veniam consequat sunt<br/> nostrud amet.",
  },
   {
    image: "pic1.png",
    title: "Designing Dashboards",
    year: "2020",
    category: "Dashboards",
    description:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa duis enim velit mollit. Exercitation veniam consequat sunt<br/> nostrud amet.",
  },
   {
    image: "pic3.png",
    title: "Designing Dashboards",
    year: "2020",
    category: "Dashboards",
    description:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa duis enim velit mollit. Exercitation veniam consequat sunt<br/> nostrud amet.",
  }
];

export default function Home() {
  return (
   <div>
    <div>
      <ul className="flex flex-row space-x-8 justify-end p-8 mr-12">
        <li><Link href="">Works</Link></li>
        <li><Link href="">Blog</Link></li>
        <li><Link href="">Contact</Link></li>
      </ul>
    </div>
    <section className="flex flex-col md:flex-row justify evenly py-20">
    <div className="text-center md:text-left max-w-md md:max-w-none mt-16">
    <h1 className="text-5xl font-bold text-gray-800 ml-20">
                    Hi, I am John,
                    <br/>
                    Creative Technologist
                </h1>
                <p className="mt-6 text-grey-600 mb-4 ml-20">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br/> sint.
                 Velit officia consequat duis enim velit mollit. Exercitation veniam <br/>consequat
                  sunt nostrud amet.
                </p>
                <button className="mt-6 px-4 py-2 text-white bg-red-400 drop-shadow-lg ml-20">
                  Download Resume
                </button>
             </div>
             <div className="md:mt-10 ml-36">
              <img src="hero-image.png" alt="image not available" width={250} height={250} className="rounded-full shadow-x1 ml-36"/>
             </div>
             </section>   


             { /* blog section */}

             <section className="bg-red-100 py-12 px-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold ml-20">Recent Post</h2>
                    <a href="#" className="text-red-400 font-medium mr-24">View all</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 ml-10 p-10 -mt-8">
                <div className="bg-white p-4 shadow-md mr-12">
                  <h3 className="text-xl font-semibold mb-4">Making a design system from <br/> scratch</h3>
                  <p className="text-grey-500 mt-4 mb-4">12 Feb 2020<span className="mx-2">|</span>
                  Design, Pattern</p>
                  <p className="text-grey-600 mb-8">
                  Amet minim mollit non deserunt ullamco est sit aliqua <br />
                   dolor do amet sint. Velit officia consequat
                    duis enim<br/> velit mollit. Exercitation veniam consequat sunt<br/> nostrud amet.
                  </p>
                </div>
                <div className="bg-white p-4 shadow-md mr-12">
                <h3 className="text-xl font-semibold mb-4">Making a design system from <br/> scratch</h3>
                  <p className="text-grey-500 mt-4 mb-4">12 Feb 2020<span className="mx-2">|</span>
                  Design, Pattern</p>
                  <p className="text-grey-600 mb-8">
                  Amet minim mollit non deserunt ullamco est sit aliqua <br />
                   dolor do amet sint. Velit officia consequat
                    duis enim<br/> velit mollit. Exercitation veniam consequat sunt<br/> nostrud amet.
                  </p>
                </div>
                </div>
            </div>
        </section>

        {/* featured_work */}

        <section className=" py-12 px-4">


<div className="container mx-auto">
        <h2 className="text-lg font-semibold ml-20">Featured Works</h2>
        <div className="space-y-8">
        {works.map((work, index) => (
    <div key={index} className="flex space-x-6 mr-72 ml-32">
  <img 
  src={work.image}
  alt={work.title}
  className="w-32 h-32 object-cover rounded-md" />
  
  <div>
    <h3 className="text-xl font-semibold">{work.title}</h3>
    <div className="flex items-center text-grey-500 ">
    <button className="px-3 py text-white bg-red-400 drop-shadow-lg rounded-full mr-4">{work.year}</button>
    
         {work.category}  
      
    </div>
    <p className="text-grey-600 mt-4">
                  Amet minim mollit non deserunt ullamco est sit aliqua
                   dolor do amet sint. Velit <br/>officia  consequat duis enim velit mollit. Exercitation veniam consequat sunt 
                   <br/>nostrud amet.
                  </p>

    </div>
    </div>
   
    )
    
     ) };
  </div>
    </div>
    </section>

   {/* footersection */}

<div className="mt-20 flex justify-center mb-12 space-x-8 text-2xl">
  <ImFacebook2 />
  <FaInstagram />
  <FaTwitter />
  <FaLinkedin />
</div>
<div>
  <h1 className="flex justify-center -mt-7">
Copyright @2020 All rights reserved
  </h1>
</div>

          
   </div>
            
       
  );
}
