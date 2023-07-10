import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function StartFashion2() {
  return (
    <>
      <div style={{ height: "500px" }}>
        {/* <Container className="bg-[url('/marvin-maduro.jpg')] bg-cover bg-center h-screen"> */}
        <div
          className="bg-gradient-to-t from-indigo-500 bg-contain bg-center flex flex-col justify-center items-center" ///marvin-maduro-no-bg.png bg-[url('/marvin-maduro.jpg')]
          style={{
            height: "100%",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col justify-end -mt-48 items-center fixed">
            <h2 className="!font-[Mohave] text-white text-9xl flex tracking-wide">
              A<span className="text-8xl">NN</span>O
            </h2>
            <h1 className="!font-['Bacasime_Antique'] text-white text-7xl -mt-16">
              VI
            </h1>
          </div>
          {/* <div className="flex flex-col justify-center items-center">
            <h2 className="!font-[Mohave] mt-24 text-white text-6xl flex tracking-wide">
              A<span className="text-5xl">NN</span>O
            </h2>
            <h1 className="!font-['Bacasime_Antique'] text-white text-5xl -mt-9">
              VI
            </h1>
          </div> */}
          <div className="relative z-10 -mb-72 w-[100vw] md:!w-[60vw] sm:!w-[70vw] h-[80vh] md:!h-[65vh] sm:!h-[75vh] flex justify-center bg-center bg-cover bg-no-repeat bg-[url('/marvin-maduro-no-bg.png')]"></div>
          {/* <img
            src="/marvin-maduro-no-bg.png"
            // width={"100rem"}
            className="-mb-72 z-10" //block absolute right-1/2 !min-w-[100vw] w-[100vw]
          ></img> */}
          {/* </div> */}
        </div>
        <div style={{ height: "500vh" }} className="relative z-[3] bg-gray-800">
          <div>
            <h1 className="!font-[Mohave] pt-6 mr-[20vw] text-right">ANNO</h1>
            <h1 className="!font-[Mohave] ml-[20vw]">VI</h1>
          </div>
          <Navbar
            expand="lg"
            className="bg-body-tertiary mt-12"
            data-bs-theme="dark"
            sticky="top"
          >
            <Container>
              {" "}
              {/* className="flex !flex-col !items-start" */}
              <Navbar.Brand href="#home" className="text-white">
                React-Bootstrap
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home" className="text-white">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#link" className="text-white">
                    Link
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <div className="flex justify-center">
            <div
              className="!w-screen md:!w-3/4 h-[100vh] md:!h-[225vh] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255, 255, 255, 0) 15%, rgba(31, 41, 55, 1) 75%), url('https://images.unsplash.com/photo-1530893608544-cd10fda1ac14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=408&q=80')",
              }} //"https://images.unsplash.com/photo-1530893608544-cd10fda1ac14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=408&q=80"
            />
          </div>
        </div>
        <div style={{ height: "50vh" }} className=""></div>
        <div
          style={{ height: "50vh" }}
          className="relative z-[3] bg-gray-800"
        ></div>

        {/* </Container> */}
      </div>
    </>
  );
}
