import React, { useState } from "react";
import HeaderTwo from "../components/HeaderTwo";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";


const Create = () => {
  const redirect = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ title, description, tags });
    try {
      const res = await fetch("https://taskapi-jo15.onrender.com/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, tags }),
      });
      const data = await res.json();
      console.log(data);
      if (data.success) {
        toast.success("Goal was created");
        redirect("/all");
      } else {
        toast.error("Error creating Task , TryAgain");
      }
      setTitle("");
      setDescription("");
      setTags("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <HeaderTwo />
      <div className="container">
        <div>
          <Link to="/all" className="text-decoration-none ">
            <h3 className="mt-4 et">
              <IoIosArrowBack /> New Task
            </h3>
          </Link>
          <div>
            <form onSubmit={handleSubmit}>
              <ToastContainer />
              <div>
                <label className="title">
                  <legend className="Task-header">Task Title:</legend>
                </label>
                <fieldset>
                  <input
                    type="text"
                    className="title-input  border-1 ps-2"
                    placeholder="E.g Project Defense, Assignment ..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </fieldset>
              </div>

              <div>
                <label className="title">
                  <legend className="Task-header ">Description:</legend>
                </label>
                <fieldset>
                  <textarea
                    className="area ps-2  border-1"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </fieldset>
              </div>

              <div>
                <label>
                  <legend className="Task-header">Tags:</legend>
                </label>
                <fieldset>
                  <input
                    type="text"
                    className="title-input ps-2  border-1"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </fieldset>
              </div>

              <div>
                <button className="form-done mt-5">Done</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
