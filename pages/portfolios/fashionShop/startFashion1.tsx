import Icon from "@/components/icons/Icon";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";

export default function StartFashion1() {
  return (
    <>
      <div className="h-full bg-[#4B0102]">
        <div className="h-screen">
          <Navbar
            // sticky="top"
            className="mb-9 flex !items-start h-3/4 w-screen bg-center bg-cover bg-no-repeat rounded-b-2xl drop-shadow-xl bg-[url('https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')]"
          >
            {" "}
            {/*bg="light" data-bs-theme="light"*/}
            <Container fluid className="flex !flex-col sm:!flex-row">
              <Navbar.Brand
                href="#"
                className="font-[Antonio] -tracking-[.5rem] !font-black !text-5xl !text-sky-600"
              >
                LND
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0 flex !flex-col sm:!flex-row"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Colecciones</Nav.Link>
                  <NavDropdown title="Nosotros" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">
                      Asociados
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Fornecedores
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Contacto
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
                <div className="flex mx-3">
                  {Icon("ri", "RiSearchLine", "24px")}
                  <span className="mx-1" />
                  {Icon("ri", "RiHandbagLine", "24px")}
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container className="font-[Antonio] flex flex-col sm:flex-row items-center justify-between rounded-3xl bg-center bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')] h-[10rem]">
            <h1>
              Promo JUST ON TIME
              <br /> <span className="font-[Splash]">Invierno</span>
              <b>.23</b>
            </h1>
            <h1 className="font-bold text-white">72hs clave</h1>
            <h3 className="text-right">
              <span className="hidden sm:flex">
                para que encuentres <br />
                todas las ropas con <br />
              </span>
              <b>60%</b>, <b>70%</b>, <b>80%</b> y <b>90%</b>
            </h3>
          </Container>
          <Container>
            <Row className="flex !flex-col sm:!flex-row h-screen">
              <Col className="h-screen !my-6 sm:!m-9 rounded-3xl bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')]"></Col>
              <Col className="font-[Antonio] text-white flex flex-col items-center justify-center">
                <h1 className="text-right mb-3">
                  Haga ese <br />
                  <span className="font-[Splash]">Invierno Marcante</span>
                  <br />
                  <span className="text-4xl">
                    con <b>Last Nite Dream</b>
                  </span>
                </h1>
                <h6 className="border-l-2 pl-3 mb-9">
                  Compra en esa estación y termina de pagar en la primavera
                </h6>
                <h5>
                  Colleciones únicas, variedad de formas de pago, diferentes
                  tamaños, estilos y design
                </h5>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="font-[Antonio]">
              <Col className="flex justify-center my-6">
                <Card
                  style={{ width: "18rem" }}
                  bg="secondary"
                  className="!rounded-t-none"
                >
                  <Card.Img
                    variant="top"
                    className="rounded-full"
                    src="https://images.unsplash.com/photo-1516763296043-f676c1105999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=843&q=80"
                  />
                  <Card.Body>
                    <Card.Title className="!font-extrabold">
                      Ropas de la última estación
                    </Card.Title>
                    <Card.Text className="font-extralight">
                      Extende verano 23 en 24
                    </Card.Text>
                    <Button variant="primary" className="!rounded-r-full -ml-6">
                      Mirate acá
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="flex justify-center my-6">
                <Card
                  style={{ width: "18rem" }}
                  bg="secondary"
                  className="!rounded-t-none"
                >
                  <Card.Img
                    variant="top"
                    className="rounded-full"
                    src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  />
                  <Card.Body>
                    <Card.Title className="!font-extrabold">
                      Collecion Invierno
                    </Card.Title>
                    <Card.Text className="font-extralight">
                      El inverno llego, ahora es solo mirar y encontrar lo que
                      combina con vos
                    </Card.Text>
                    <Button variant="primary" className="!rounded-r-full -ml-6">
                      Mirate acá
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="flex justify-center my-6">
                <Card
                  style={{ width: "18rem" }}
                  bg="secondary"
                  className="!rounded-t-none"
                >
                  <Card.Img
                    variant="top"
                    className="rounded-full"
                    src="https://images.unsplash.com/photo-1594750823491-e493d067ce3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
                  />
                  <Card.Body>
                    <Card.Title className="!font-extrabold">
                      Más por llegar
                    </Card.Title>
                    <Card.Text className="font-extralight">
                      Estamos laburando para que tenga uno verano más estiloso
                    </Card.Text>
                    <Button variant="primary" className="!rounded-r-full -ml-6">
                      Mirate acá
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container className="mt-12">
            <Row className="flex !flex-col sm:!flex-row mx-3 !h-screen font-[Antonio]">
              <Col className="!my-0 sm:!my-[1rem] bg-center rounded-3xl bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1516763449302-78450e5a507d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')] h-full">
                <h3 className="p-3 h-full flex items-start justify-start text-black">
                  Promo Compra 3 lleva 4
                </h3>
              </Col>
              <Col className="!my-[1rem] !mx-0 sm:!my-0 sm:!mx-[2rem] bg-center rounded-3xl bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1605905337157-caf31dfaa565?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80')] h-full">
                <h3 className="p-3 flex text-right text-white h-full items-end justify-end">
                  Marcas más buscadas
                </h3>
              </Col>
              <Col className="!my-0 sm:!my-[1rem] bg-center rounded-3xl bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=411&q=80')] h-full">
                <h3 className="p-3 h-full flex items-start justify-start text-black">
                  Bazar y estoques
                </h3>
              </Col>
              <Col className="!my-[1rem] !mx-0 px-0 sm:!my-0 sm:!mx-[0rem] flex !justify-center">
                <div className="w-3/4 bg-top flex flex-col justify-end p-3 items-start rounded-lg bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1527627964160-fc5665e5a374?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')] h-full">
                  <h2 className="text-black opacity-none">
                    <b>L</b>ast
                    <br />
                    <b>N</b>ite
                    <br />
                    <b>D</b>ream
                  </h2>
                  <mark className="bg-white p-3">
                    <h5 className="text-sky-500 text-right">
                      Estamos acá esperando por vos, pasa y recebi el
                      atendimiento que nunca tuviste
                    </h5>
                  </mark>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="mt-24 font-[Antonio]">
            <Container className="flex !flex-col justify-center md:!flex-row">
              <h6 className="text-white">Derechos reservados</h6>
              <span className="mx-3 md:mx-0"></span>
              <h6 className="text-white">Terminos y Condiciones</h6>
              <span className="mx-3 md:mx-0"></span>
              <h6 className="text-white">Política de Privacidad</h6>
            </Container>

            <div className="pb-3 bg-white">
              <div className="bg-[#4B0102] rounded-b-2xl w-screen h-[1rem] mb-3 border-4 border-[#4B0102]"></div>
              <Container className="flex">
                {Icon("ri", "RiInstagramLine", "24px")}
                <span className="mx-1" />
                {Icon("ri", "RiShareLine", "24px")}
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
