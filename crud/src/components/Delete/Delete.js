import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext/UserContect";
import { Link } from "react-router-dom";
import axios from "axios";

const Delete = () => {
  const [users, setUsers] = useContext(UserContext);
  const { id } = useParams();

  const deteteUser = () => {
    const newUsers = users.filter((user) => user.id !== parseInt(id));
    setUsers(newUsers);

    const user = users.filter((user) => user.id === parseInt(id));

    axios
      .delete("http://localhost:3003/delete/" + user[0]._id)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {setUsers ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Delete data !</h3>
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
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Are you sure you want to delete this data ?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <Link to="/">
                    <button
                      className="text-[#fff] transition ease-in-out delay-150 bg-[#0000dd88] hover:-translate-y-1 hover:scale-110 hover:bg-[#00008888] duration-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Close
                    </button>
                    <button
                      className="text-[#fff] transition ease-in-out delay-150 bg-[#dd000088] hover:-translate-y-1 hover:scale-110 hover:bg-[#88000088] duration-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => deteteUser()}
                    >
                      Delete
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Delete;
