import { FaLinkedin, FaGithub, FaInstagram,FaDownload } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1 className='mx-2 text-[28px] font-semibold'>OS</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/omsinghan/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/Om1513" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/omsinghan__/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a 
          href="/Resume_Om.pdf"  // Ensure the CV is in the public folder
          download="OmSinghan_CV.pdf" 
          className="flex items-center gap-2 hover:text-blue-300 text-2xl"
        >
          <FaDownload/> {/* Download Icon */}
          <span className='text-sm'>Resume</span>
        </a>
        </div>
    </nav>
  );
}

export default NavBar;
