import React from "react";
import { FaCopyright, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import "../../index.css";

const Footer = () => {
  return (
    <div className="w-full bg-[#414f4f] text-white">
      <div className="flex flex-col md:flex-row md:justify-around">
        <div className="flex flex-col  items-center my-5">
          <h2>Contact</h2>
          <p className="md:w-96 text-justify px-10">
            Call Us : +(91)-20-65267884 amitkaushik175@gmail.com Karyalaya //
            Pune, Maharashtra - 411 041, India
          </p>
        </div>
        <div className="flex flex-col justify-center items-center my-5">
          <h2>Series</h2>
          <div className="flex flex-col justify-center items-center">
            <a
              href="/"
              className="m-2 hover:text-gray-300 cursor-pointer text-white  no-underline hover:underline"
            >
              Rectangle
            </a>
            <a
              href="/"
              className="m-2 cursor-pointer text-white hover:text-gray-300 no-underline hover:underline"
            >
              Round
            </a>
            <a
              href="/"
              className="m-2 cursor-pointer text-white hover:text-gray-300 no-underline hover:underline"
            >
              Vertical
            </a>
            <a
              href="/"
              className="m-2 cursor-pointer text-white hover:text-gray-300 no-underline hover:underline"
            >
              Bowl
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center my-5">
          <h2>TERMS OF SERVICE & FAQ</h2>
          <p className="cursor-pointer  hover:text-gray-300 no-underline hover:underline">Policies</p>
        </div>
      </div>

      <div className="flex justify-between items-center mx-2 ">
        <div className="md:ml-20">
          <h2 className="border py-1 px-4 bg-white text-black">India</h2>
        </div>
        <div className="flex md:mt-10 md:mr-20">
          <p className="pr-4 cursor-pointer hover:underline hover:text-gray-300">Contact Us</p>
          <p className="cursor-pointer hover:underline hover:text-gray-300">Company Info</p>
        </div>
      </div>

      <div className="flex justify-between items-center border-t-2 border-white mt-4 px-4">
        <div className="flex mt-2">
          <FaCopyright style={{ marginTop: "4px", marginRight: "2px" }} />
          <p>2022 Purva Fiber, Pune</p>
        </div>
        <div className="flex">
          <span className="mr-5">
            <i className="fab fa-instagram">
              <span>
                <FaInstagramSquare size="1.2em" color="white" className="hover:text-gray-300 cursor-pointer" />{" "}
              </span>
            </i>
          </span>
          <span>
            <i className="fab fa-facebook-f">
              <span>
                <FaFacebook size="1.2em" color="white"  className="hover:text-gray-300 cursor-pointer"/>
              </span>
            </i>
          </span>
        </div>
      </div>
    </div>
    // <Box>
    //   <Container>
    //     <Row>
    //       <Column>
    //         <Heading>CONTACT</Heading>
    //         <p>
    //           Call Us : +(91)-20-65267884 amitkaushik175@gmail.com Karyalaya
    //           Pune, Maharashtra - 411 041, India
    //         </p>
    //         {/* <iframe className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=644&amp;height=448&amp;hl=en&amp;q=Dhayari Phata, Singhagad Road,, Pune, Maharashtra 411041&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}
    //       </Column>
    //       <Column className="series">
    //         <Heading>SERIES</Heading>
    //         <FooterMain>
    //         <FooterContainer>
    //         <FooterLink href="#">Rectangle </FooterLink>
    //         <FooterLink href="#">Round </FooterLink>
    //         </FooterContainer>
    //         <FooterContainer>
    //         <FooterLink href="#">Vertical </FooterLink>
    //         <FooterLink href="#">Bowl </FooterLink>
    //         </FooterContainer>
    //         </FooterMain>
    //       </Column>

    //       <Column>
    //         <Heading>TERMS OF SERVICE & FAQ</Heading>
    //         <p>TERMS AND RETURN POLICIES</p>
    //       </Column>
    //     </Row>
    //     <SecondRow>
    //       <ColumnTwo>
    //         <Button>India</Button>
    //       </ColumnTwo>
    //       <ColumnTwo>
    //         <p style={{ marginLeft: "17px" }}>Contact Us</p>
    //         <p style={{ marginLeft: "17px" }}>Company Info</p>
    //         <FooterLink href="https://www.facebook.com/">
    //           <i className="fab fa-facebook-f">
    //             <span style={{ marginLeft: "10px", fontSize: "20px", fontWeight: "300" }}>
    //               <FaFacebook size="1.2em" color="white" />
    //             </span>
    //           </i>
    //         </FooterLink>
    //         <FooterLink href="https://www.instagram.com/">
    // <i className="fab fa-instagram">
    //   <span style={{ marginLeft: "10px" }}>
    //     <FaInstagramSquare
    //       size="1.2em"
    //       color="white"
    //       marginbottom="20px"
    //     />{" "}

    //   </span>
    // </i>
    //         </FooterLink>
    //       </ColumnTwo>
    //     </SecondRow>
    //   </Container>
    //   <Hr />

    //   <Copyright>
    //         <FaCopyright style={{ marginTop: "4px", marginRight: "2px" }}/>
    //         <p>2022 Purva Fiber, Pune</p>
    //   </Copyright>
    // </Box>
  );
};
export default Footer;
