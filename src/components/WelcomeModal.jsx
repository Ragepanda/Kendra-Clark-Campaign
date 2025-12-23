import Modal from "react-modal";
import { useEffect, useState } from "react";

// Accessibility requirement for react-modal
Modal.setAppElement("#root");

function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenWelcomeModal");
    if (!hasSeenModal) {
      setIsOpen(true);
    }
  }, []);

  const closeModal = () => {
    localStorage.setItem("hasSeenWelcomeModal", "true");
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      className="relative bg-white w-full max-w-5xl mx-4 rounded-xl shadow-lg outline-none"
    >
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
        aria-label="Close modal"
      >
        ×
      </button>

      {/* Modal Content */}
      <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10">
        {/* Left: Text */}
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-orange">
            Donate Today
          </h2>
          <p className="text-black text-xl">
            Contribute now to support our campaign in the fight to create a
            Georgia that works for all!
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-4">
            <button className="w-full md:w-5/12 py-2 rounded-lg bg-brand-blue text-white hover:bg-white hover:text-brand-blue hover:border-2 hover:border-brand-blue">
              $25
            </button>
            <button className="w-full md:w-5/12 py-2 rounded-lg bg-brand-blue text-white hover:bg-white hover:text-brand-blue hover:border-2 hover:border-brand-blue">
              $50
            </button>
            <button className="w-full md:w-5/12 py-2 rounded-lg bg-brand-blue text-white hover:bg-white hover:text-brand-blue hover:border-2 hover:border-brand-blue">
              $100
            </button>
            <button className="w-full md:w-5/12 py-2 rounded-lg bg-brand-blue text-white hover:bg-white hover:text-brand-blue hover:border-2 hover:border-brand-blue">
              $250
            </button>
            <button className="w-full md:w-5/12 py-2 rounded-lg bg-brand-blue text-white hover:bg-white hover:text-brand-blue hover:border-2 hover:border-brand-blue">
              Other Amount
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default WelcomeModal;
