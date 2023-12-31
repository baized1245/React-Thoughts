import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comment from "../components/Comment";

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            10 Uses of Artificial Intelligence in day to day life.
          </h1>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <p>
            <BiEdit />
          </p>
          <p>
            <MdDelete />
          </p>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>mdbaizedhasans@gmail.com</p>
          <div className="flex space-x-2">
            <p>16/06/2023</p>
            <p>10:30</p>
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1703672514~exp=1703673114~hmac=0dddd4064801704d680c092fcfdc306bb22d5e282239d9a69b4f55f3fb9e9c0a"
          className="w-full mx-auto mt-8"
          alt=""
        />
        <p className="mx-auto mt-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          accusantium ut numquam aliquam, recusandae laboriosam laborum qui eum
          facere quod. Dolorem voluptatum exercitationem blanditiis eveniet
          magnam veritatis error neque pariatur illum similique? Aliquam error
          doloremque illum minus, dignissimos iste, consequuntur sequi ad
          temporibus corporis, porro assumenda doloribus ipsum autem officia
          neque architecto? Dolores inventore alias reprehenderit, assumenda
          minima tenetur aspernatur!
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories: </p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">Ai</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
          <Comment />
          <Comment />
        </div>
        {/* write a comment */}
        <div className="w-full mt-4 flex flex-col md:flow-row">
          <input
            type="text"
            placeholder="Write a comment"
            className=" outline-none py-2 px-4 mt-4 md:mt-0 bg-gray-200 rounded-md"
          />
          <button className="bg-black text-sm text-white px-2 py-2 mx-auto mt-4 md:mt-4 rounded-lg">
            Add Comment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
