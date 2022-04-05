import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext/UserContect";
import { Link } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const [users, setUsers] = useContext(UserContext);
  const { id } = useParams();

  const user = users.filter((user) => user.id === parseInt(id));

  const [name, setName] = useState(user[0].name);
  const [position, setPosition] = useState(user[0].position);
  const [salary, setSalary] = useState(user[0].salary);

  const editUser = () => {
    // setUsers(users);
    axios.put(process.env.REACT_APP_SERVER_URL + "update", {
      _id: user[0]._id,
      id: user[0].id,
      name: name,
      position: position,
      salary: salary,
    });
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit User</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setUsers(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        user[0].name = e.target.value;
                      }}
                    />
                  </div>
                  <div className="w-full md:full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Position
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="position"
                      type="text"
                      value={position}
                      onChange={(e) => {
                        setPosition(e.target.value);
                        user[0].position = e.target.value;
                      }}
                    />
                  </div>
                  <div className="w-full md:full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Salary
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="salary"
                      type="number"
                      value={salary}
                      onChange={(e) => {
                        setSalary(e.target.value);
                        user[0].salary = e.target.value;
                      }}
                    />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <Link to="/">
                      <button
                        className="text-[#fff] transition ease-in-out delay-150 bg-[#00dd0088] hover:-translate-y-1 hover:scale-110 hover:bg-[#00880088] duration-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Back to Home
                      </button>
                      <button
                        className="text-[#fff] transition ease-in-out delay-150 bg-[#0000dd88] hover:-translate-y-1 hover:scale-110 hover:bg-[#00008888] duration-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => editUser()}
                      >
                        Edit
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
