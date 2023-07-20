import Icon from "@/components/icons/Icon";
import { Carousel, Col, FloatingLabel, Form } from "react-bootstrap";

export default function StartFashion4() {
  return (
    <>
      <div className="overflow-none">
        {/* <div className="flex items-center flex-col sm:flex-row">
          <div className="flex flex-col items-center text-white font-['Lexend_Deca']">
            <h1 className="uppercase text-8xl">
              B
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-yellow-300">
                y
              </span>
              e
            </h1>
            <h1 className="uppercase text-8xl -mt-[2rem] ml-[1px]">
              B
              <span
                className="!origin-center !rotate-180 bg-clip-text text-transparent bg-gradient-to-b from-white to-yellow-300" //text-yellow-300
                style={{
                  display: "inline-block",
                  transform: "scaleX(-1)",
                }}
              >
                y
              </span>
              e
            </h1>
          </div>
          <h1 className="text-7xl font-[Comforter] text-purple-600 -rotate-[15deg]">
            Porteños
          </h1>
        </div> */}
        {/* <div className="h-[500px] w-screen flex items-end justify-center">
          <div className="rounded-full w-[248px] h-[248px] bg-gradient-to-t from-purple-600 to-pink-600 flex items-end">
            <div className="rounded-full bg-center bg-cover bg-no-repeat bg-[url('/rafael-rodrigues.png')] h-[460px] w-[248px]"></div>
          </div>
        </div> */}
        <div
          style={{
            // background: "white",
            height: "400vh",
            width: "100%",
            position: "relative",
            margin: "auto",
            overflow: "hidden",
          }}
          className="bg-neutral-800"
        >
          {/* <div
            style={{
              display: "block",
              background: "green",
              height: "10px",
              width: "150%",
              position: "absolute",
              top: "50%",
              left: "-25%",
              transform: "rotate(20deg)",
            }}
          ></div>{" "} */}

          <div className="h-[50vh] flex justify-center items-center flex-col sm:flex-row relative z-[10]">
            <div className="flex flex-col items-center text-white font-['Lexend_Deca']">
              <h1 className="uppercase text-8xl">
                B
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-yellow-300">
                  y
                </span>
                e
              </h1>
              <h1 className="uppercase text-8xl -mt-[2rem] ml-[1px]">
                B
                <span
                  className="!origin-center !rotate-180 bg-clip-text text-transparent bg-gradient-to-b from-white to-yellow-300" //text-yellow-300
                  style={{
                    display: "inline-block",
                    transform: "scaleX(-1)",
                  }}
                >
                  y
                </span>
                e
              </h1>
            </div>
            <h1 className="text-7xl font-[Comforter] text-purple-600 -rotate-[15deg]">
              Porteños
            </h1>
          </div>
          <div className="h-[100vh] w-screen z-[50] relative flex flex-col sm:flex-row items-center sm:items-end justify-center !pb-3 !pl-3 sm:!pb-12 sm:!pl-12">
            <div className="rounded-full w-[248px] h-[248px] bg-gradient-to-t from-purple-600 to-pink-600 flex items-end">
              <div className="rounded-full bg-center bg-cover bg-no-repeat bg-[url('/rafael-rodrigues.png')] h-[460px] w-[248px]"></div>
            </div>
            <div className="ml-0 sm:ml-6">
              <h1 className="font-[Finlandica] text-white">
                Las mejores marcas de
                <br />
                los dos lados del Río de la Plata
              </h1>
              <div className="border-l-2 pl-2">
                <h3 className="font-['Wire_One'] text-white">
                  3 o 6 cuotas - aceptamos todos las tarjetas
                </h3>
              </div>
            </div>
          </div>
          <div className="h-[100vh] m-6 flex flex-col">
            <div className="flex flex-col sm:flex-row items-center justify-end relative bottom-0">
              <div className="font-[Finlandica] !font-bold relative z-[15] text-white mb-9 sm:mb-0 mr-9 text-right">
                <h2>Más Populares</h2>
                <div className="border-r-2 pr-2">
                  <h3 className="font-['Wire_One']">
                    <span className="font-[Comforter]">Marcas</span> - Rogue Boy
                    · Leviatán · Cuauhtémoc · Sonata
                  </h3>
                </div>
                <h2>Outlet</h2>
                <div className="border-r-2 pr-2">
                  <h3 className="font-['Wire_One']">
                    Ventas por 14h en lo primero fin de semana del més
                  </h3>
                </div>
                <h2>Líneas</h2>
                <div className="border-r-2 pr-2">
                  <h3 className="font-['Wire_One']">
                    Masculinas todas las edades y tamaños
                  </h3>
                </div>
                <h2>Colección</h2>
                <div className="border-r-2 pr-2">
                  <h3 className="font-['Wire_One']">
                    Invierno - guantes, chaquetas, gorras, zapatos y más
                  </h3>
                </div>
                <h2>Novidades</h2>
                <div className="border-r-2 pr-2">
                  <h3 className="font-['Wire_One']">
                    Julio y Agosto con nuevos modelos
                  </h3>
                </div>
              </div>
              <div className="w-full sm:w-[40vw] h-[80vh] grayscale sm:grayscale-0 brightness-50 sm:brightness-100 flex items-center justify-center bg-cover bg-no-repeat bg-center bg-[url('/rafael-rodrigues-01.jpg')] z-[3]">
                <div className="w-full sm:w-[calc(40vw-20px)] h-[calc(80vh-20px)] border-2 border-white opacity-70"></div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col rotate-[90deg]">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-white to-yellow-300">
                Y
              </h1>
              <h1 className="-mt-[1.75rem]">
                <span
                  className="!origin-center !rotate-180 bg-clip-text text-transparent -mt-12 bg-gradient-to-b from-white to-yellow-300"
                  style={{
                    display: "inline-block",
                    transform: "scaleX(-1)",
                  }}
                >
                  Y
                </span>
              </h1>
            </div>
          </div>
          <div className="hidden sm:flex h-[100vh] flex-col items-start justify-end relative text-white bottom-0 pl-6 pb-48 z-[3]">
            {/* <div className="w-[300px] h-[500px] bg-cover bg-no-repeat bg-center bg-[url('/rafael-rodrigues-02.jpg')]"></div> */}
            <div className="w-full flex items-center justify-center">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01-cat-names-nationalgeographic_1525054.jpg?w=400&h=400&q=75"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/jaguar-square-1-400x400.jpg.optimal.jpg"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/red-eyed-tree-frog-square-1-400x400.jpg.optimal.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <h1 className="font-['Wire_One'] font-medium">
              Suscríbete a nuestro Newsletter
            </h1>
            <FloatingLabel
              controlId="floatingInput"
              label="email"
              className="mb-3 opacity-50 !text-gray-500"
            >
              <Form.Control
                type="email"
                placeholder="tu@nombre.com.ar"
                className=""
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="contraseña"
              className="opacity-50 !text-gray-500"
            >
              <Form.Control type="password" placeholder="contraseña" />
            </FloatingLabel>
          </div>
          <div className="h-[50vh] flex flex-col sm:flex-row items-end justify-center sm:justify-end relative bottom-0 z-[4] pb-48">
            <div className="flex flex-col sm:flex-row items-center sm:!items-start justify-center w-full text-white mb-16">
              <Col className="mx-3">
                <h4 className="font-[Finlandica]">Síguenos</h4>
                <div className="flex">
                  {Icon("fa", "FaTwitterSquare", "28px")}
                  <div className="mx-2">
                    {Icon("fa", "FaInstagramSquare", "28px")}
                  </div>
                  {Icon("fa", "FaYoutubeSquare", "28px")}
                </div>
              </Col>
              <Col className="mx-3 my-3 sm:my-0">
                <h4 className="font-[Finlandica]">Ayuda</h4>
                <h6 className="font-thin">Envíos y entregas</h6>
                <h6 className="font-thin">Cambios y Devoluciones</h6>
                <h6 className="font-thin">Opciones de pago</h6>
                <h6 className="font-thin">Contactate</h6>
              </Col>
              <Col className="mx-3">
                <h4 className="font-[Finlandica]">Tiendas</h4>
                <h6 className="font-thin">Buenos Aires</h6>
                <h6 className="font-thin">Montevideo</h6>
                <h6 className="font-thin">Mar del Plata</h6>
                <h6 className="font-thin">Bahía Blanca</h6>
                <h6 className="font-thin">La Plata</h6>
              </Col>
            </div>
            <div className="hidden sm:flex bg-gradient-to-t from-neutral-800 to-neutral-800">
              <div
                className="w-[300px] h-[500px] opacity-50 bg-cover bg-no-repeat grayscale bg-center bg-[url('/rafael-rodrigues-02.jpg')] -z-1"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(38, 38, 38, 1) 0%, rgba(255, 255, 255, 0) 45%), linear-gradient(180deg, rgba(38, 38, 38, 1) 0%, rgba(255, 255, 255, 0) 55%), url('./rafael-rodrigues-02.jpg')",
                }}
              ></div>
            </div>
          </div>
          <div className="h-[125px] w-[150vw] z-[5] bg-gradient-to-r from-purple-600 to-blue-400 block absolute -left-7 rotate-[7deg] top-[15%]"></div>
          <div className="h-[125px] w-[150vw] z-[10] bg-gradient-to-r from-purple-600 to-blue-400 block absolute -left-1/4 -rotate-[25deg] top-[31%]"></div>
          <div className="h-[125px] w-[150vw] z-[10] bg-gradient-to-r from-purple-600 from-15% via-pink-600 via-30% to-blue-400 to-75% block absolute -left-1/4 rotate-[10deg] top-[49%]"></div>
          <div className="h-[125px] w-[150vw] bg-gradient-to-r from-purple-600 to-blue-400 block absolute -left-1/4 -rotate-[33deg] top-[72%] z-[2]"></div>
          <div className="h-[125px] w-[150vw] flex justify-center items-center text-gray-500 bg-gradient-to-r from-purple-600 from-10% via-blue-400 via-30% to-blue-400 to-90% block absolute -left-1/4 z-[5] rotate-[3deg] top-[92%]">
            <h4 className="font-['Bacasime_Antique'] uppercase tracking-widest text-center">
              Buenos Aires · Montevideo · Mar del Plata · Bahía Blanca · La
              Plata
            </h4>
          </div>
          <div className="font-['Wire_One'] absolute bottom-0 right-0 text-white mr-9 mb-1">
            <h4>Todos los derechos reservados · 2023</h4>
          </div>
          <div className="absolute bottom-[-200px] left-[calc(50%-200px)] invert flex items-center justify-center z-[7]">
            <div className="w-[400px] h-[400px] bg-cover bg-no-repeat bg-center bg-[url('/solDeMayoArg.svg')]"></div>
            {/* <h6 className="ml-9 mb-12 text-black">
              Todos los derechos reservados · 2023
            </h6> */}
          </div>
        </div>
      </div>
    </>
  );
}
