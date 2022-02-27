import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [values, setValues] = useState({});
  const [errorCode, setErrorCode] = useState(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    if (Object.values(values).length > 2) setIsSubmitDisabled(false);
  }, [values]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const result = await axios.post(
        "http://localhost:5000/api/v1/details/addDetail",
        values
      );
      console.log(result);
    } catch (error) {
      setErrorCode(error.response.status);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="space-y-4">
        <div>
          <div>
            <label>Name</label>
          </div>
          <input
            required
            autoComplete="off"
            className="focus:outline-none border rounded-md px-2 py-1"
            style={{ fontSize: "12px" }}
            onChange={handleChange}
            type="text"
            name="name"
            value={values.name || ""}
          />
        </div>
        <div>
          <div>
            <label>Email</label>
          </div>
          <input
            required
            autoComplete="off"
            className="focus:outline-none border rounded-md px-2 py-1"
            style={{ fontSize: "12px" }}
            onChange={handleChange}
            type="email"
            name="email"
            value={values.email || ""}
          />
          {errorCode === 409 && (
            <div className="flex space-x-1 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="py-1 text-sm text-red-500">
                Email Already Registered
              </div>
            </div>
          )}
        </div>
        <div>
          <div>
            <label>Phone Number</label>
          </div>
          <input
            required
            autoComplete="off"
            type="number"
            className="focus:outline-none border rounded-md px-2 py-1"
            style={{ fontSize: "12px" }}
            onChange={handleChange}
            name="mobile"
            value={values.mobile || ""}
          />
        </div>
        <div>
          <button
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
            className={`${
              isSubmitDisabled
                ? "bg-gray-200 text-gray-900"
                : "bg-blue-400 text-white"
            }  rounded-md shadow-lg p-1 py-1 w-full`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
