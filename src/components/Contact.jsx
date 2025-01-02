import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Linegradient from "./Linegradient";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) =>{console.log(data)
    console.log(register) ;
  } 
  const handleError = (errors) => {console.log(errors)};

  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    Description: {
      required: "Description is required",
      minLength: {
        value: 8,
        message: "Description must have at least 8 characters",
      },
      maxLength:{
        value:100,
        message:"Description can not be more than 100 chars"
      }
    },
  };
  const container = (delay,hidden) => ({
    hidden: {x: -hidden, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 1, delay: delay}
    }
});
const onSubmit = (data, e) => {
  console.log("Valid data submitted:", data);
  e.target.submit(); // Submit the form if validation passes
};
  return (
    <section id="contact" className="py-24 ">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial={{y : -100 , opacity : 0}}
        whileInView={{ y : 0 , opacity : 1 }}
        animate="visible"
        transition={{ duration: 0.5}}
      >
        <div>
          <p className="font-playflair text-4xl font-semibold mb-5">
            Contect Me<span className="text-rose-400"> to get Started</span>
          </p>
          <div className="flex justify-center mt-5">
            <Linegradient width="w-full" />
          </div>
        </div>
        <p className="mt-10 mb-7">
           Hello there.... Let's connect and share some ideas to amaze each other's brain and innovate something mind boggling...
        </p>
      </motion.div>

      {/* { Contact Image Section} */}
      <div className="md:flex md:justify-between gap-16 mt-5 mb-20">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={container(0.2,100)}
        >
          <img
            src="/contact-image.jpeg"
            alt="Contact-info"
            height={400}
            width={400}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          className="basis-1/2 flex justify-center"
          variants={container(0.4,200)}
        >
          <form  target="_blank" method="POST"
          action="https://formsubmit.co/param020599@gmail.com"
          className="w-full h-full"
          onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5">
              <label>Name</label>
              <input
                className="w-full font-semibold font-playfair bg-cyan-400 p-3 placeholder-opaque-black mb-5 mt-5"
                name="name"
                type="text"
                {...register("name", registerOptions.name)}
                placeholder="Name"
              />
              <small className="text-danger mb-8">
                {errors?.name && errors.name.message}
              </small>
            </div>
            <div>
              <label>Email</label>
              <input
                className="w-full font-semibold font-playfair bg-cyan-400 p-3 placeholder-opaque-black mb-5"
                type="email"
                name="email"
                {...register("email", registerOptions.email)}
                placeholder="EMAIL"
              />
              <small className="text-danger mb-8 ">
                {errors?.email && errors.email.message}
              </small>
            </div>
            <div>
              <label>Description</label>
              <textarea
                className="w-full font-semibold font-playfair bg-cyan-400 p-3 placeholder-opaque-black"
                type="text"
                name="Description"
                {...register("Description", registerOptions.Description)}
                placeholder="Description "
              />
              <small className="text-danger mb-8">
                {errors?.Description && errors.Description.message}
              </small>
            </div>
            <button type="submit" className="bg-rose-500 p-2 font-playfair font-semibold text-black w-full hover:bg-yellow hover:text-white
            transition duration-500 ">SEND ME A MESSAGE</button>
          </form>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Contact;
