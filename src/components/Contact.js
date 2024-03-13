import { useRef } from "react";

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();
  };

  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4 ">Contact Us Page</h1>
      <form
        ref={formRef}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Message"
        />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
