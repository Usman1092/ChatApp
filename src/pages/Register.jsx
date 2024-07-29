import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

export const Register = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      // Upload the file and metadata
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (err) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
            // console.log("File available at: " + downloadUrl);
            await updateProfile(res.user, {
              displayName,
              photoUrl: downloadUrl,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoUrl: downloadUrl,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
          });
        }
      );

      // Pause the upload
      // uploadTask.pause();

      // Resume the upload
      // uploadTask.resume();

      // Cancel the upload
      // uploadTask.cancel();
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <>
      <div class="flex flex-col items-center bg-bg2 justify-center px-6 py-8 mt-0 mx-auto md:min-h-screen lg:py-0">
        <div class="w-full bg-tb rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Register
            </h1>

            <form class="space-y-4 md:space-y-6 " onSubmit={handleSubmit}>
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name"
                  required=""
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  // onChange={(e) => setEmail(e.target.value)}
                  // vlaue={email}
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>

              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  // onChange={(e) => setPassword(e.target.value)}
                  // vlaue={password}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <input style={{ display: "none" }} type="file" id="file" />{" "}
                <label htmlFor="file">
                  <img src={Add} alt="UserImage" />
                  <span>Add an avatar</span>
                </label>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-bt bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
                Sign Up
              </button>
              {err && <span>Some thing went wrong.</span>}
              <p class="text-sm font-medium text-center">
                Don't have an account?{" "}
                <a
                  href="#"
                  class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
