import React from "react";

import { Button, Img, Input, Text } from "components";

const HomePagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-plusjakartasans items-center justify-start mx-auto p-[60px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1680px] mb-[17px] mx-auto w-full">
          <div className="absolute flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <Img
              className="md:absolute md:bottom-[] h-8 md:left-10 md:right-[400px] md:top-[45px]"
              src="images/img_odyssey.svg"
              alt="odyssey"
            />
            <Text
              className="absolute md:ml-[0] ml-[709px] md:right-[500px] right-[640px] text-black-900 text-lg md:top-[45px] w-40"
              size="txtPlusJakartaSansRomanSemiBold18"
            >
              Stay Connected
            </Text>
            <Text
              className="absolute ml-12 md:ml-[0] md:right-[390px] right-[520px] text-black-900 text-lg md:top-[45px]"
              size="txtPlusJakartaSansRomanSemiBold18"
            >
              Education
            </Text>
            <Text
              className="absolute ml-12 md:ml-[0] md:right-[270px] right-[390px] text-black-900 text-lg md:top-[45px]"
              size="txtPlusJakartaSansRomanSemiBold18"
            >
              Community
            </Text>
            <Text
              className="absolute ml-12 md:ml-[0] md:right-[180px] right-[270px] text-black-900 text-lg md:top-[45px]"
              size="txtPlusJakartaSansRomanSemiBold18"
            >
              About Us
            </Text>
            <Button
              className="absolute cursor-pointer font-semibold h-[60px] leading-[normal] ml-12 md:ml-[0] md:right-[0] right-[140px] rounded-[20px] text-center text-lg md:top-[25px] w-[120px]"
              color="black_900_01"
              size="sm"
            >
              Sign in{" "}
            </Button>
          </div>
          <div className="sm:h-[1010px] h-[860px] md:h-[939px] mt-20 relative w-full">
            <div className="flex flex-col gap-2.5 h-full items-start justify-start m-auto w-full">
              <div className="md:h-[767px] h-[768px] relative w-full">
                <div className="absolute md:h-[533px] h-[757px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute backdrop-opacity-[0.5] bg-blue_gray-600_cc blur-[134.00px] bottom-[0] h-[435px] right-[12%] rounded-[217px] w-[11%]"></div>
                  <div className="absolute h-[533px] inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      className="h-[533px] m-auto object-cover rounded-[40px] w-full"
                      src="images/img_rectangle1.png"
                      alt="rectangleOne"
                    />
                    <div className="absolute h-[533px] inset-[0] justify-center m-auto w-full">
                      <Img
                        className="h-[533px] m-auto object-cover rounded-[40px] w-full"
                        src="images/img_rectangle3.png"
                        alt="rectangleThree"
                      />
                      <Text
                        className="absolute left-[4%] md:text-5xl text-[64px] text-white-A700 top-[11%] w-1/4 sm:w-full"
                        size="txtPlusJakartaSansExtraBold64"
                      >
                        Unveiling the Wonders of the Universe
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute bottom-[4%] leading-[33.00px] left-[0] text-gray-900 text-lg w-[38%] sm:w-full"
                  size="txtPlusJakartaSansRomanMedium18"
                >
                  <>
                    At odissey, our mission is to inspire, educate, and ignite
                    your passion for the cosmos. We are your premier destination
                    for all things related to space exploration, astronomy, and
                    the mysteries of the universe. Whether you&#39;re a seasoned
                    astronomer or a curious novice, join us on a journey to the
                    furthest reaches of the cosmos.{" "}
                  </>
                </Text>
                <div className="absolute h-[767px] inset-y-[0] my-auto right-[3%] md:top-[] w-[767px] md:w-full">
                  <Img
                    className="md:absolute h-[767px] m-auto object-cover md:right-[-100px] md:top-[130px] w-[767px]"
                    src="images/img_lostinspace3.png"
                    alt="lostinspaceThree"
                  />
                  <div className="absolute bg-white-A700 md:bottom-[-10px] flex flex-col md:h-[140px] h-max inset-y-[0] items-start justify-start md:left-[] my-auto p-5 md:right-[-18px] right-[3%] rounded-[24px] shadow-bs1 md:top-60 w-[35%]">
                    <div className="md:absolute md:bottom-[-220px] flex flex-col gap-5 justify-start md:right-[-40px] md:top-[] w-[93%] md:w-full">
                      <div className="md:absolute flex flex-row gap-2.5 items-center justify-start md:right-[] md:top-[-260px] w-[67%] md:w-full">
                        <Button
                          className="md:absolute flex h-10 items-center justify-center md:right-[] md:top-[-80px] w-10"
                          shape="round"
                        >
                          <Img src="images/img_group113.svg" alt="group113" />
                        </Button>
                        <Text
                          className="md:absolute md:right-40 text-black-900 text-lg md:top-[-80px]"
                          size="txtPlusJakartaSansRomanSemiBold18"
                        >
                          Exercising
                        </Text>
                      </div>
                      <Img
                        className="md:absolute h-11 md:h-auto ml-4 md:ml-[0] object-cover md:right-10 md:top-[-300px]"
                        src="images/img_objects.png"
                        alt="objects"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[77px] items-center justify-start w-[31%] md:w-full">
                <Button
                  className="md:absolute cursor-pointer font-semibold leading-[normal] md:max-w-[100px] md:min-w-[120px] min-w-[245px] rounded-[20px] text-2xl md:text-[22px] text-center sm:text-xl md:top-[930px]"
                  color="black_900_01"
                  size="md"
                >
                  Get Started
                </Button>
                <Text
                  className="md:absolute h-10 max-w-[160px] md:max-w-full min-w-[200px] md:right-[570px] text-2xl md:text-[22px] text-black-900 sm:text-xl md:top-[940px] w-40"
                  size="txtPlusJakartaSansRomanSemiBold24"
                >
                  Watch the Video
                </Text>
              </div>
            </div>
            <div className="absolute border-solid bottom-[0] flex flex-col md:gap-10 gap-[120px] justify-start right-[11%] rounded-[60px] w-[57%]">
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[266px] w-[36%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="absolute bg-white-A700 flex flex-col md:h-[180px] items-center justify-start md:max-w-[300px] md:min-w-[80px] p-5 md:right-60 right-[300px] rounded-[24px] shadow-bs2 top-[-280px] md:top-[-340px] w-[300px] md:w-full">
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[53%] md:w-full">
                        <Button
                          className="!bg-colors border-none flex h-[30px] items-center justify-center rounded-tl-[5px] w-[100px]"
                          shape="round"
                        >
                          <Img
                            className="h-[19px]"
                            src="images/img_chartpie.svg"
                            alt="chartpie"
                          />
                        </Button>
                        <Text
                          className="text-black-900 text-lg"
                          size="txtPlusJakartaSansRomanSemiBold18"
                        >
                          Spacewalks
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-between w-full">
                        <Img
                          className="h-[98px] relative right-[0]"
                          src="images/img_objects_blue_gray_200.svg"
                          alt="objects_One"
                        />
                        <Img
                          className="h-[94px] relative right-0.5 w-[75px]"
                          src="images/img_objects_gray_900.svg"
                          alt="objects_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <Button
                  className="absolute flex h-10 items-center justify-center mb-5 sm:mt-0 mt-[70px] md:right-[430px] right-[540px] top-[-10px] md:top-[-30px] w-10"
                  shape="round"
                >
                  <Img className="h-5" src="images/img_play.svg" alt="play" />
                </Button>
                <div className="flex flex-col items-center justify-start">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="absolute bg-black-900 flex flex-col items-center justify-end p-[18px] right-10 md:right-[-90px] rounded-[24px] shadow-bs2 md:top-[-50px] top-[-5px]">
                      <div className="flex flex-col gap-5 justify-start w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-start w-1/2 md:w-full">
                          <Button
                            className="flex h-10 items-center justify-center w-10"
                            shape="round"
                          >
                            <Img
                              src="images/img_stopwatch.svg"
                              alt="stopwatch"
                            />
                          </Button>
                          <Text
                            className="text-lg text-white-A700"
                            size="txtPlusJakartaSansRomanSemiBold18WhiteA700"
                          >
                            Total time in space{" "}
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[50px] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[12.00px]"
                          size="txtPlusJakartaSansExtraBold24"
                        >
                          352D 5H 49M 20S
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[31px] mt-[119px] w-[97%] md:w-full">
            <Img
              className="absolute md:h-[100px] h-[31px] sm:h-auto md:max-w-[100px] md:min-w-[130px] object-cover right-[1040px] md:right-[800px] md:top-[] w-[19%] md:w-full"
              src="images/img_spacexlogo1.png"
              alt="spacexlogoOne"
            />
            <Img
              className="absolute md:bottom-[-620px] md:h-[18px] h-[31px] sm:h-auto md:max-w-[100px] md:min-w-[100px] md:ml-[0] ml-[226px] object-cover md:right-[400px] right-[840px] md:top-[] w-[8%] md:w-full"
              src="images/img_2560pxnasawormlogoblack.png"
              alt="2560pxnasaworml"
            />
            <Img
              className="absolute md:bottom-[-660px] md:h-[100px] h-[31px] sm:h-auto md:left-[220px] md:max-w-[160px] md:min-w-[100px] md:ml-[0] ml-[245px] object-cover right-[480px] md:right-[] w-[17%] md:w-full"
              src="images/img_boeinglogo1960present.png"
              alt="boeinglogo1960p"
            />
            <Img
              className="absolute md:bottom-[-800px] md:h-10 h-[31px] sm:h-auto md:max-w-[280px] md:min-w-[100px] md:ml-[0] ml-[143px] object-cover md:right-10 right-[100px] md:top-[1230px] w-1/5 md:w-full"
              src="images/img_astroscalemainlogorgb.png"
              alt="astroscalemainl"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:max-w-[3px] md:min-w-[400px] mt-[120px] md:w-[400px] w-[96%] sm:w-full">
            <Text
              className="md:h-[] md:max-h-[] md:max-w-[60px] md:min-h-[] md:min-w-[60px] md:text-5xl text-[64px] text-black-900 md:w-[60px]"
              size="txtPlusJakartaSansExtraBold64Black900"
            >
              Join our vibrant community of space enthusiasts where you can
            </Text>
            <div className="flex flex-col items-start justify-start">
              <div className="md:absolute flex flex-row sm:gap-10 items-center justify-between md:right-40 md:top-[1300px] md:w-[400px] w-[70%] sm:w-full">
                <div className="bg-blue_gray-200 flex flex-col md:h-20 h-[100px] items-center justify-start md:max-w-[80px] md:min-w-[80px] p-[30px] sm:px-5 rounded-[24px] w-[100px] md:w-[]">
                  <Img
                    className="h-[39px] md:h-[400px] w-[39px] md:w-[400px]"
                    src="images/img_physics.svg"
                    alt="physics"
                  />
                </div>
                <div className="bg-blue_gray-200 flex flex-col md:h-20 h-[100px] items-center justify-start md:max-w-[80px] md:min-w-[80px] p-[30px] sm:px-5 rounded-[24px] md:w-20 w-[100px]">
                  <Img
                    className="h-10 md:h-[400px]"
                    src="images/img_clipboard.svg"
                    alt="clipboard"
                  />
                </div>
              </div>
              <div className="md:absolute flex sm:flex-col flex-row sm:gap-10 md:h-[100px] items-start justify-between md:max-h-[100px] md:max-w-[100px] md:min-h-[100px] md:min-w-[100px] mt-5 md:right-[] md:top-[1200px] md:w-[100px] w-[85%] sm:w-full">
                <Text
                  className="md:absolute sm:mt-0 mt-0.5 md:right-[-380px] text-2xl md:text-[22px] text-black-900 sm:text-xl md:top-40"
                  size="txtPlusJakartaSansExtraBold24Black900"
                >
                  Astronomy 101
                </Text>
                <Text
                  className="md:absolute mb-0.5 md:right-[-740px] text-2xl md:text-[22px] text-black-900 sm:text-xl md:top-40"
                  size="txtPlusJakartaSansExtraBold24Black900"
                >
                  Latest Discoveries
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[5px] w-full">
                <Text
                  className="md:absolute md:h-[180px] leading-[33.00px] md:right-[400px] text-gray-900 text-lg md:top-[1420px] md:w-[200px]"
                  size="txtPlusJakartaSansRomanMedium18"
                >
                  Dive into the basics of astronomy. Learn about stars, planets,
                  galaxies, and the tools astronomers use to explore the
                  universe.
                </Text>
                <Text
                  className="md:absolute md:h-[] leading-[33.00px] md:max-w-[2000px] md:min-w-[200px] md:right-[70px] text-gray-900 text-lg md:top-[1420px] md:w-[100px]"
                  size="txtPlusJakartaSansRomanMedium18"
                >
                  Stay up-to-date with the most recent breakthroughs and
                  discoveries in the field of astrophysics and space
                  exploration.
                </Text>
              </div>
              <div className="flex flex-row sm:gap-10 items-center justify-between mt-[74px] w-[70%] md:w-full">
                <div className="md:absolute bg-blue_gray-200 flex flex-col md:h-20 h-[100px] items-center justify-end p-7 sm:px-5 md:right-[460px] rounded-[24px] md:top-[1640px] md:w-20 w-[100px]">
                  <Img
                    className="h-[41px] w-[41px]"
                    src="images/img_maximize.svg"
                    alt="maximize"
                  />
                </div>
                <div
                  className="md:absolute bg-cover bg-no-repeat flex flex-col md:h-20 h-[100px] items-center justify-end p-[30px] sm:px-5 md:right-[150px] md:top-[1640px] md:w-20 w-[100px]"
                  style={{ backgroundImage: "url('images/img_group10.svg')" }}
                >
                  <Img
                    className="h-[39px] w-[39px]"
                    src="images/img_chartpie_white_a700.svg"
                    alt="chartpie_One"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[821px] mt-[22px] right-[180px] top-[1760px] w-2/5 md:w-full">
            <Text
              className="md:absolute md:right-[380px] text-2xl md:text-[22px] text-black-900 sm:text-xl md:top-[1720px]"
              size="txtPlusJakartaSansExtraBold24Black900"
            >
              Space Exploration
            </Text>
            <Text
              className="md:absolute md:right-[70px] text-2xl md:text-[22px] text-black-900 sm:text-xl md:top-[1720px]"
              size="txtPlusJakartaSansExtraBold24Black900"
            >
              Space Technology
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[821px] mt-[5px] w-[48%] md:w-full">
            <Text
              className="absolute md:h-[180px] leading-[33.00px] right-[440px] text-gray-900 text-lg md:top-[1750px] top-[1820px] md:w-[200px] w-[280px]"
              size="txtPlusJakartaSansRomanMedium18"
            >
              Explore the latest missions, both past and present, from NASA,
              ESA, SpaceX, and other space agencies and organizations.
            </Text>
            <Text
              className="absolute md:h-[180px] leading-[33.00px] right-[120px] md:right-[60px] text-gray-900 text-lg md:top-[1750px] top-[1820px] md:w-[200px] w-[280px]"
              size="txtPlusJakartaSansRomanMedium18"
            >
              Delve into the cutting-edge technology powering space exploration,
              from spacecraft and telescopes to propulsion systems and space
              habitats.
            </Text>
          </div>
          <div className="flex flex-col mt-[120px] relative w-full">
            <div className="h-[533px] mx-auto w-full">
              <Img
                className="absolute h-[500px] m-auto object-cover rounded-[40px] top-[120px] w-full"
                src="images/img_rectangle8.png"
                alt="rectangleEight"
              />
              <Text
                className="absolute inset-x-[0] mx-auto md:right-40 md:text-5xl text-[64px] text-center text-white-A700 top-[110px] md:top-[60px] w-[68%] md:w-[77%] sm:w-full"
                size="txtPlusJakartaSansExtraBold64"
              >
                We are committed to making space science accessible to all.
                Explore our educational resources, including
              </Text>
            </div>
            <div className="absolute bg-white-A700 flex flex-col h-[340px] md:h-[360px] items-start justify-center ml-[110px] mt-[-146px] p-[52px] md:px-10 sm:px-5 md:right-[580px] right-[840px] rounded-[24px] shadow-bs3 md:top-[480px] top-[660px] md:w-[290px] w-[380px] z-[1]">
              <Text
                className="absolute mt-1.5 md:text-5xl text-[64px] text-blue_gray-200 text-center top-[-10px]"
                size="txtPlusJakartaSansExtraBold64Bluegray200"
              >
                01.
              </Text>
              <Text
                className="absolute mt-3 text-2xl md:text-[22px] text-black-900 sm:text-xl top-[55px] w-[85%] sm:w-full"
                size="txtPlusJakartaSansExtraBold24Black900"
              >
                Online free courses and tutorials
              </Text>
              <Text
                className="absolute leading-[33.00px] mb-2 mt-[29px] text-gray-900 text-lg top-[120px] w-[85%] sm:w-full"
                size="txtPlusJakartaSansRomanMedium18"
              >
                Dive into the basics of astronomy. Learn about stars, planets,
                galaxies, and the tools astronomers use to explore the universe.
              </Text>
            </div>
            <div className="absolute bg-white-A700 flex flex-col h-[340px] md:h-[360px] items-start justify-center mt-[-146px] mx-auto p-[52px] md:px-10 sm:px-5 md:right-[285px] right-[420px] rounded-[24px] shadow-bs3 md:top-[480px] top-[660px] md:w-[290px] w-[380px] z-[1]">
              <Text
                className="absolute mt-1.5 md:text-5xl text-[64px] text-blue_gray-200 text-center top-[-10px]"
                size="txtPlusJakartaSansExtraBold64Bluegray200"
              >
                02.
              </Text>
              <Text
                className="absolute mt-3 text-2xl md:text-[22px] text-black-900 sm:text-xl top-[55px] w-[85%] sm:w-full"
                size="txtPlusJakartaSansExtraBold24Black900"
              >
                Resources for teachers and educators
              </Text>
              <Text
                className="absolute leading-[33.00px] mb-2 md:min-w-[] mt-[29px] text-gray-900 text-lg top-[115px] md:w-[120%] w-[85%] sm:w-full"
                size="txtPlusJakartaSansRomanMedium18"
              >
                Delve into the cutting-edge technology powering space
                exploration, from spacecraft and telescopes to propulsion
                systems and space habitats.
              </Text>
            </div>
            <div className="absolute bg-white-A700 flex flex-col h-[340px] md:h-[360px] items-start justify-center ml-auto mr-[110px] mt-[-146px] p-[52px] md:px-10 sm:px-5 right-[-100px] md:right-[-120px] rounded-[24px] shadow-bs3 md:top-[480px] top-[660px] md:w-[290px] w-[380px] z-[1]">
              <Text
                className="absolute mt-1.5 md:text-5xl text-[64px] text-blue_gray-200 text-center top-[-10px]"
                size="txtPlusJakartaSansExtraBold64Bluegray200"
              >
                03.
              </Text>
              <Text
                className="absolute mt-3 text-2xl md:text-[22px] text-black-900 sm:text-xl top-[55px] w-[85%] sm:w-full"
                size="txtPlusJakartaSansExtraBold24Black900"
              >
                Book recommendations and reviews
              </Text>
              <Text
                className="absolute leading-[33.00px] mb-2 mt-[29px] text-gray-900 text-lg top-[120px] md:w-[120%] sm:w-full"
                size="txtPlusJakartaSansRomanMedium18"
              >
                Dive into the basics of astronomy. Learn about stars, planets,
                galaxies, and the tools astronomers use to explore the universe.
              </Text>
            </div>
          </div>
          <div className="h-[533px] md:h-[653px] mt-[120px] relative w-full">
            <Img
              className="absolute h-[400px] m-auto object-cover rounded-[40px] md:top-[100px] top-[220px] w-full"
              src="images/img_rectangle504.png"
              alt="rectangle504"
            />
            <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[7%] my-auto w-[54%]">
              <Text
                className="absolute md:text-5xl text-[64px] text-white-A700 top-[0]"
                size="txtPlusJakartaSansExtraBold64"
              >
                Join our community
              </Text>
              <Text
                className="absolute leading-[34.00px] mt-0.5 text-lg text-white-A700 top-20 w-[82%] sm:w-full"
                size="txtPlusJakartaSansRomanRegular18"
              >
                of stargazers, explorers, and cosmic enthusiasts as we embark on
                a journey through the cosmos like never before.
              </Text>
              <div className="absolute flex md:flex-col flex-row gap-6 md:h-[120px] items-center justify-between mt-12 top-[140px] md:w-[1600px] w-full">
                <Input
                  name="frameFourteen"
                  placeholder="Enter your email"
                  className="font-medium leading-[normal] md:h-20 md:text-[22px] md:w-[440px] p-0 placeholder:text-gray-900_7f sm:text-xl text-2xl text-left w-full"
                  wrapClassName="sm:flex-1 md:h-20 h-[60px] md:w-[440px] w-[500px] sm:w-full"
                  type="email"
                ></Input>
                <Button
                  className="!text-white-A700 md:absolute cursor-pointer font-semibold md:h-20 leading-[normal] min-w-[226px] md:right-[-200px] rounded-[20px] shadow-bs text-2xl md:text-[22px] text-center sm:text-xl md:w-[100px]"
                  size="md"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[117px] w-full">
            <Text
              className="absolute md:right-[800px] md:text-2xl sm:text-[22px] text-[26px] text-black-900 top-[3260px] md:top-[3400px]"
              size="txtAMAZONICPERSONALUSEBold26"
            >
              Odyssey
            </Text>
            <Text
              className="absolute md:ml-[0] ml-[444px] md:mt-0 mt-1 md:right-[750px] right-[880px] text-black-900 text-lg top-[3260px] md:top-[3460px] w-40"
              size="txtPlusJakartaSansRomanSemiBold18"
            >
              Stay Connected
            </Text>
            <Text
              className="absolute ml-12 md:ml-[0] md:mt-0 mt-0.5 md:right-[630px] right-[780px] text-black-900 text-lg top-[3260px] md:top-[3460px]"
              size="txtPlusJakartaSansRomanSemiBold18"
            >
              Education
            </Text>
            <Text
              className="absolute ml-12 md:ml-[0] md:mt-0 mt-1 md:right-[490px] right-[630px] text-black-900 text-lg top-[3260px] md:top-[3460px]"
              size="txtPlusJakartaSansRomanSemiBold18"
            >
              Community
            </Text>
            <Text
              className="absolute ml-12 md:ml-[0] md:mt-0 mt-0.5 md:right-[370px] right-[510px] text-black-900 text-lg top-[3260px] md:top-[3460px]"
              size="txtPlusJakartaSansRomanSemiBold18"
            >
              About Us
            </Text>
            <a
              href="javascript:"
              className="absolute md:ml-[0] ml-[213px] md:mt-0 mt-1 right-[270px] md:right-[750px] text-gray-900 text-lg top-[3260px] md:top-[3520px] md:w-40"
            >
              <Text size="txtPlusJakartaSansRomanSemiBold18Gray900">
                Privacy policy
              </Text>
            </a>
            <Text
              className="absolute ml-12 md:ml-[0] md:mt-0 mt-1 right-20 md:right-[590px] text-gray-900 text-lg top-[3260px] md:top-[3520px]"
              size="txtPlusJakartaSansRomanSemiBold18Gray900"
            >
              Terms & Agreements
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[728px] mt-20 relative right-[280px] md:right-[] text-gray-700 text-lg top-20 md:top-[530px]"
            size="txtPlusJakartaSansRomanSemiBold18Gray700"
          >
            <span className="text-gray-700 font-plusjakartasans text-left font-semibold">
              [
            </span>
            <a
              href="javascript:"
              className="text-gray-700 font-plusjakartasans text-left font-semibold underline"
            >
              contact@odyssey.com
            </a>
            <span className="text-gray-700 font-plusjakartasans text-left font-semibold">
              ].
            </span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default HomePagePage;
