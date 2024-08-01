import Modal from 'react-modal';
import style from '@/app/components/Modal/Modal.module.css'
import { RxCross2 } from "react-icons/rx";

const ModalComponent = ({ isOpen, closeModal, content }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      ariaHideApp={false}
      className={`${style.bg_} w--[20rem] border--2 border-red-900 w-full md:w-fit max-[340px]:h-[26rem] flex bg-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-4 rounded-xl overflow-hidden overflow-y-auto`}
    >
      <div className='relative'>
        <button onClick={closeModal} className='bg-[white] p-1 rounded-2xl absolute right-0 top-0'>
            <RxCross2 className='text-[1.5rem] text-[#22508E]' />
        </button>
        {content}
      </div>
    </Modal>
  );
};

export default ModalComponent;