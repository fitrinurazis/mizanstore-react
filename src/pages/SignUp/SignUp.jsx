import { Link } from "react-router-dom";
import logoGoogle from "../../assets/img/google.png";

const SignUp = () => (
  <div className="flex justify-center items-center">
    <div className="flex flex-col justify-center px-3 max-w-md ">
      <div>
        <h1 className="text-3xl font-bold py-4">Registrasi Member</h1>
      </div>
      <form>
        <div className="flex flex-col gap-2">
          <label>Nama Depan</label>
          <input
            type="text"
            name="firstName"
            placeholder="-"
            className="border-2 rounded-lg px-2 h-8"
          />
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="-"
            className="border-2 rounded-lg px-2 h-8"
          />
        </div>
        <div className="flex flex-col gap-2 pt-2 ">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="-"
            className="border-2 rounded-lg px-2 h-8"
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="-"
            className="border-2 rounded-lg px-2 h-8 "
          />
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="-"
            className="border-2 rounded-lg px-2 h-8"
          />
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="-"
            className="border-2 rounded-lg px-2 h-8"
          />
        </div>
      </form>
      <div className="flex gap-2 py-5">
        <input type="checkbox" name="checkbox" id="checkbox" required />{" "}
        <span>
          I agree all statements in{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            terms of service
          </a>
        </span>
      </div>
      <div className=" flex flex-col gap-3">
        <button className="py-3 text-md text-white duration-200 bg-blue-600 rounded-2xl hover:scale-105">
          Create Accout
        </button>

        <button className=" flex justify-center p-3 text-md text-white duration-200 bg-blue-600 rounded-2xl hover:scale-105 gap-2">
          <img src={logoGoogle} className="h-5 " />
          <p>Sign-in with google</p>
        </button>
      </div>
      <div className="py-3 text-center ">
        <p>
          Don’t have an account?{" "}
          <Link to="/login">
            {" "}
            <button className="text-blue-600">Login</button>{" "}
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default SignUp;
