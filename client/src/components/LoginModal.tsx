import Modal from "./ui/Modal";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <div className="absolute ">
      <Modal isOpen={isOpen} onClose={onClose}>
        <h2 className="text-2xl  flex justify-center font-mono font-bold ">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="border-b-1 rounded-full border-[#c3eb2f] p-4  w-full my-2 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-b-1 rounded-full border-[#c3eb2f] p-4 w-full my-2 focus:outline-none"
        />
        <div className="mt-2 text-xs flex justify-end ">
          <a href="#">
            {" "}
            <p className="hover:text-[red]">forgot password?</p>
          </a>
        </div>
        <button
          className="bg-[#c3eb2f] text-black font-mono font-semibold mt-20 p-2 rounded-full w-full cursor-pointer
             transition-transform duration-300 ease-in-out transform 
             hover:scale-105 hover:bg-[#b0d92b] active:scale-95"
          onClick={onClose}
        >
          Login
        </button>
      </Modal>
    </div>
  );
};

export default LoginModal;
