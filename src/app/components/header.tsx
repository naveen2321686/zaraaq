// 'use client';

// import { FaSearch, FaBell } from 'react-icons/fa';
// import Image from 'next/image';
// import headerLogo from "../images/logoImage.png"
// import { useRouter } from 'next/navigation'

// const Header: React.FC = () => {
// const router = useRouter()

//   const handleLogout=()=>{
//     localStorage.removeItem("login")
//     router.push("/auth")

//   }
//   return (
//     <header className="bg-teal-500 px-4 py-5 flex items-center justify-between ">
//       {/* Left: Logo */}
//       <div className="flex items-center gap-2">
//         <Image src={headerLogo} alt="Zaraaq Logo" width={32} height={32} />
//         <span className="text-black font-semibold text-lg">Zaraaq</span>
//       </div>

//       {/* Center: Search */}
//       <div className="flex-1 max-w-100 mx-6">
//               <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
//                 <FaSearch className="text-gray-400 mr-2"/>
//                 <input
//                   type="text"
//                   placeholder="Search here..."
//                   className="w-full outline-none text-sm text-gray-700"/>
//               </div>
//             </div>

//       {/* Right: Notification + Profile */}
//       <div className="flex items-center gap-4">
//         <div className="bg-white p-2 rounded-full">
//           <FaBell className="text-gray-700" />
//         </div>
//         <div className="flex items-center gap-2 text-white">
//           <Image
//             src="/user.jpg"
//             alt="Profile"
//             width={32}
//             height={32}
//             className="rounded-full"/>
//           <div className="hidden sm:block">
//             <p className="text-black font-medium">Naveen Kumar</p>
//             <p className="text-xs">Admin</p>
//           </div>
//         </div>
//         <div>
//           <button onClick={handleLogout} className='cursor-pointer border p-2 rounded-lg px-2 bg-teal-700 text-white'>Logout</button>
//         </div>
//       </div>
//     </header>

//   );
// };

// export default Header;


'use client';

import { FaSearch, FaBell } from 'react-icons/fa';
import Image from 'next/image';
import headerLogo from "../images/logoImage.png";
import { useRouter } from 'next/navigation';

import naveenphoto from "../images/naveenphotos.jpg";

const Header: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("login");
    router.push("/auth");
  };  

  return (
    <header className="bg-[#73A9A5] px-4 py-5 flex items-center">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <Image src={headerLogo} alt="Zaraaq Logo" width={32} height={32} />
        <span className="text-black font-semibold text-lg">Zaraaq</span>
      </div>

      {/* Right Side Container (ml-auto pushes this to right) */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Search */}
        <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm w-[350px]">
          <FaSearch className="text-gray-200 mr-2" /> 
          <input
            type="text"
            placeholder="Search here..."
            className="w-full outline-none text-sm text-gray-700"
          />
        </div>


        {/* Bell Icon */}
        <div className="bg-white p-2 rounded-full">
          <FaBell className="text-gray-700" />
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 text-white">
          <Image 
            src={naveenphoto}
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="hidden sm:block text-black">
            <p className="font-medium">Naveen Kumar</p>
            <p className="text-xs">Admin</p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="cursor-pointer border p-2 rounded-lg px-2 bg-teal-700 text-white"
        >
          Logout
        </button>
      </div>
    </header>

  );
};

export default Header;
