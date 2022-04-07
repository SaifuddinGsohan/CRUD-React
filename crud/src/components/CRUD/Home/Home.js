import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContect";

const Home = () => {
  const [users] = useContext(UserContext);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="text-center w-auto">
            <Link to={"/create"}>
              <button className="rounded-full text-xl pb-1 px-8 text-[#fff] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                Create Usre
              </button>
            </Link>
          </div>
          <table className="text-center table-auto bg-[#ffffff55] border-slate-500 border-2 m-4 ">
            <thead>
              <tr className=" bg-slate-500 border-slate-300 border-2">
                <th> # </th>
                <th>ID</th>
                <th>Name</th>
                <th>Position</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-slate-300 border-2">
                  <td></td>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.position}</td>
                  <td>{user.salary}</td>
                  <td>
                    <Link to={"/read/" + user.id}>
                      <button className="m-1 rounded-full text-m pb-1 px-4 text-[#fff] transition ease-in-out delay-150 bg-[#00dd0088] hover:-translate-y-1 hover:scale-110 hover:bg-[#00880088] duration-300">
                        Read
                      </button>
                    </Link>
                    <Link to={"/edit/" + user.id}>
                      <button className="m-1 rounded-full text-m pb-1 px-4 text-[#fff] transition ease-in-out delay-150 bg-[#0000dd88] hover:-translate-y-1 hover:scale-110 hover:bg-[#00008888] duration-300">
                        Edit
                      </button>
                    </Link>
                    <Link to={"/delete/" + user.id}>
                      <button className="m-1 rounded-full text-m pb-1 px-4 text-[#fff] transition ease-in-out delay-150 bg-[#dd000088] hover:-translate-y-1 hover:scale-110 hover:bg-[#88000088] duration-300">
                        Delete
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
