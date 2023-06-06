import { Button } from "@components/general/Button";
import { NextPage } from "next";
import { Container } from "@components/general/Container";
import { ReactElement, useEffect, useState } from "react";

const SignIn: NextPage = () => {
  const [rememberMe, setRememberMe] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col h-screen w-screen bg-sand-white px-[120px] pb-16">
      <div className="flex flex-initial h-1/6 pt-4 flex-row w-full items-center justify-center">
        <div className="font-bold text-2xl hover:underline px-16">
          <a href="#">About Me</a>
        </div>
        <div className="font-bold text-2xl hover:underline px-16">
          <a href="#">Experience</a>
        </div>
        <div className="font-bold text-2xl hover:underline px-16">
          <a href="#">Projects</a>
        </div>
      </div>
      <div className="flex flex-1 flex-row w-full">
        <div className="flex w-2/5 justify-center">
          <Container>
            <section className="flex flex-col font-bold justify-center items-center">
              <div className="bg-white border rounded-full overflow-hidden w-36 h-36 mb-[16px]">
                <img src="prof_pic.jpg" className="object-cover object-left "/>
              </div>
              <h6 className="text-xs md:text-2xl text-center">
                Sultan Fahrezy Syahdwinata Nugraha
              </h6>
              <text className="text-xs md:text-lg text-center font-normal">
                Information System Student at Universitas Indonesia
              </text>
              <text className="text-xs md:text-lg text-center font-normal">
                GPA: 3.37
              </text>
            </section>
            <section className="mt-4 text-xs font-semibold sm:mt-6 sm:text-sm md:text-base">
              <h3 className="text-xs md:text-xl text-center">
                  Personal Information:
              </h3>
              <h4 className="text-xs md:text-lg">
                  Age:
              </h4>
              <text className="text-xs md:text-lg text-center font-normal">
                21
              </text>
              <h4 className="text-xs md:text-lg">
                  Place & DOB:
              </h4>
              <text className="text-xs md:text-lg text-center font-normal">
                Depok, 06 March 2002
              </text>
              <h4 className="text-xs md:text-lg">
                  Domicile:
              </h4>
              <text className="text-xs md:text-lg text-center font-normal">
                  Depok, West Java, Indonesia 
              </text>
            </section>
          </Container>
        </div>
        <div className="flex flex-col w-3/5 justify-center pl-[80px]">
            <div className="flex h-4/5 w-full">
            <Container>
              <section className="font-bold text-blue">
                <h3 className="text-xl sm:text-3xl">IPMS</h3>
                <h6 className="text-xs md:text-2xl">
                  Integrated Pest Management System
                </h6>
              </section>
              <section className="mt-4 text-xs font-semibold sm:mt-6 sm:text-sm md:text-base">
                <div className="w-full">
                  <div className="mb-1.5 flex items-center gap-x-2">
                    <img src="/icons/person.svg" />
                    <p>Username</p>
                  </div>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full rounded-md border border-[#1E1E1E] py-2 px-4 font-normal"
                    placeholder="username"
                  />
                </div>
                <div className="my-4 w-full">
                  <div className="mb-1.5 flex items-center gap-x-2">
                    <img src="/icons/password.svg" />
                    <p>Password</p>
                  </div>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="w-full rounded-md border border-[#1E1E1E] py-2 px-4 font-normal"
                    placeholder="password"
                  />
                </div>
                <div className="flex w-full flex-row justify-between gap-4 md:flex-col">
                  <div
                    onClick={() => setRememberMe(!rememberMe)}
                    className="flex items-center gap-x-2 font-normal hover:cursor-pointer"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded border border-[#111111]">
                      {rememberMe ? <p>&#10003;</p> : <p></p>}
                    </div>
                    <p>Ingat Saya?</p>
                  </div>
                  <Button
                    className="w-full"
                    action={{
                      name: "Login",
                    }}
                  ></Button>
                </div>
              </section>
            </Container>
            </div>
            <div className="flex h-1/5 w-full"></div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
