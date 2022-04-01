import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContect';

const Home = () => {
    const [user, setUser] = useContext(UserContext);
    return (
      <div>
        <button className="rounded-full text-xl pb-1 px-4 text-[#fff] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          Save
        </button>
        <table className="table-auto bg-[#555] m-2">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.position}</td>
                <td>{user.Salary}</td>
                <td>
                  <button className="m-1 rounded-full text-m pb-1 px-4 text-[#fff] transition ease-in-out delay-150 bg-[#00dd0088] hover:-translate-y-1 hover:scale-110 hover:bg-[#00880088] duration-300">
                    Read
                  </button>
                  <button className="m-1 rounded-full text-m pb-1 px-4 text-[#fff] transition ease-in-out delay-150 bg-[#0000dd88] hover:-translate-y-1 hover:scale-110 hover:bg-[#00008888] duration-300">
                    Edit
                  </button>
                  <Link to={'/delate'+ user.id}>
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
    );
};

export default Home;