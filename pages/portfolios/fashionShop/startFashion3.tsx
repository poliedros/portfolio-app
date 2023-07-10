import Icon from "@/components/icons/Icon";
import { Button, Card, Container } from "react-bootstrap";

export default function StartFashion3() {
  return (
    <>
      {/* <div className="">
        <Container
          className="h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1667321093726-e0bad60d305e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=671&q=80')",
            // height: "100%",
            // width: "1000%",
            // backgroundAttachment: "fixed",
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            // display: "inline-block",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            width="100"
            height="100"
            className="bg-cover bg-center bg-no-repeat drop-shadow-2xl bg-[url('https://cdn3d.iconscout.com/3d/premium/thumb/yellow-apple-5161872-4333042.png?f=webp')]"
          >
            <defs>
              <path
                id="circle"
                d="M 50, 50  m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text font-family="'Bacasime Antique', serif" font-size="14">
              <textPath xlinkHref="#circle" className="text-2xl !text-white">
                La Manzana Amarilla •
              </textPath>
            </text>
          </svg>
          
        </Container>
      </div> */}
      <div className="absolute opacity-50 top-0 left-0 -z-10 w-full h-full bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1667321093726-e0bad60d305e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=671&q=80')]"></div>
      <div
        style={{
          overflowX: "scroll",
          whiteSpace: "nowrap",
          height: "100vh",
          // display: "flex",
          // alignItems: "center",
        }}
      >
        <div
          style={{
            width: "0rem",
            display: "inline-block",
            verticalAlign: "middle",
          }}
          className="h-[100vh]"
        ></div>

        <div className="inline-block">
          <div className="flex flex-col !items-center !justify-center text-white">
            <div className="font-['Yanone_Kaffeesatz'] flex items-end !font-thin">
              <h5 className="[writing-mode:vertical-lr] [text-orientation:upright]">
                Home
              </h5>
              <h5 className="[writing-mode:vertical-lr] [text-orientation:upright]">
                Tarjeta
              </h5>
              <h5 className="[writing-mode:vertical-lr] [text-orientation:upright]">
                Promos
              </h5>
              <h5 className="[writing-mode:vertical-lr] [text-orientation:upright]">
                Sobre
              </h5>
            </div>
            <svg
              viewBox="0 0 100 100"
              width="150"
              height="150"
              //ml-12 mr-48
              className="ml-12 mr-24 inline-block bg-cover bg-center bg-no-repeat drop-shadow-2xl bg-[url('https://cdn3d.iconscout.com/3d/premium/thumb/yellow-apple-5161872-4333042.png?f=webp')]"
            >
              <defs>
                <path
                  id="circle"
                  d="M 50, 50  m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text font-family="'Bacasime Antique', serif" font-size="14">
                <textPath xlinkHref="#circle" className="text-2xl !text-white">
                  La Manzana Amarilla •
                </textPath>
              </text>
            </svg>
            {/* <h5 className="[writing-mode:vertical-lr] [text-orientation:upright]">
              Anderson
            </h5> */}
          </div>
        </div>
        <div className="fixed top-[4.5rem] inline-block z-10 mx-1 py-1">
          <div className="font-['Yanone_Kaffeesatz'] flex flex-col justify-end !font-thin text-white">
            <h5 className="[writing-mode:vertical-lr] [text-orientation:upright]">
              Home<span className="text-amber-500">_</span>
            </h5>
            <h5 className="[writing-mode:vertical-lr] [text-orientation:upright]">
              Tarjeta<span className="text-amber-500">_</span>
            </h5>

            <h5 className="[writing-mode:vertical-lr] [text-orientation:upright]">
              Promos<span className="text-amber-500">_</span>
            </h5>
            <h5 className="[writing-mode:vertical-lr] [text-orientation:upright]">
              Sobre
            </h5>
          </div>
        </div>
        <div
          style={{
            width: "18rem",
            display: "inline-block",
            verticalAlign: "middle",
          }}
          className="mx-3 mt-3"
        >
          <Card

          // style={{
          //   width: "18rem",
          //   display: "inline-block",
          //   verticalAlign: "middle",
          // }}
          >
            <div className="flex justify-center mx-3">
              <Card.Img
                variant="top"
                className="max-h-[50vh] w-auto rounded-3xl mt-1"
                src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              />
            </div>
            <Card.Body>
              <Card.Title className="font-['Yanone_Kaffeesatz'] !text-bold !text-3xl">
                Coleccion Otoño/Invierno
              </Card.Title>
              <Card.Text
                style={{ whiteSpace: "normal" }}
                className="font-['Xanh_Mono']"
              >
                La mejores marcas para las estaciones más frias del año
              </Card.Text>
              <div className="flex justify-end">
                <Button
                  variant="outline-primary"
                  className="!rounded-full !p-2 !text-amber-500 mr-3"
                >
                  {Icon("gi", "GiLeafSwirl", "30px")}
                </Button>
                <Button
                  variant="outline-primary"
                  className="!rounded-full !p-2 !text-amber-500"
                >
                  {Icon("gi", "GiWindSlap", "30px")}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div
          style={{
            // width: "18rem",
            display: "inline-block",
            verticalAlign: "middle",
          }}
          className="mx-3"
        >
          <div className="flex items-center text-white">
            <h4 className="font-['Yanone_Kaffeesatz'] [writing-mode:vertical-lr] [text-orientation:upright] mb-0">
              disfruta
            </h4>
            <h2 className="font-['Yanone_Kaffeesatz'] [writing-mode:vertical-lr] [text-orientation:upright] mb-0">
              Descuentos
            </h2>
            <h4 className="font-['Yanone_Kaffeesatz'] [writing-mode:vertical-lr] [text-orientation:upright] mb-0">
              60<span className="text-amber-500">_</span> 70
              <span className="text-amber-500">_</span> 80
            </h4>
          </div>
        </div>
        <div
          style={{
            width: "18rem",
            display: "inline-block",
            verticalAlign: "middle",
          }}
          className="mx-3 mt-3"
        >
          <Card
          // style={{
          //   width: "18rem",
          //   display: "inline-block",
          //   verticalAlign: "middle",
          // }}
          >
            <div className="flex justify-center mx-3">
              <Card.Img
                variant="top"
                className="max-h-[50vh] w-auto rounded-3xl mt-1"
                src="https://images.unsplash.com/photo-1555529771-4f81423a1207?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80"
              />
            </div>
            <Card.Body>
              <Card.Title className="font-['Yanone_Kaffeesatz'] !text-bold !text-3xl">
                Vitrina
              </Card.Title>
              <Card.Text
                style={{ whiteSpace: "normal" }}
                className="font-['Xanh_Mono']"
              >
                Las prendas más buscadas y modelos exclusivos de La Manzana
                Amarilla
              </Card.Text>
              <div className="flex justify-end">
                <Button
                  variant="outline-primary"
                  className="!rounded-full !p-2 !text-amber-500"
                >
                  {Icon("tb", "TbApple", "30px")}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div
          style={{
            width: "18rem",
            display: "inline-block",
            verticalAlign: "top",
          }}
          className="mx-3 mt-3"
        >
          <Card className="!rounded-br-[7rem]">
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title className="font-['Yanone_Kaffeesatz'] !text-bold !text-3xl">
                Novidades
              </Card.Title>
              <Card.Text
                style={{ whiteSpace: "normal" }}
                className="font-['Xanh_Mono']"
              >
                Renovamos nuestras colleciones a cada estación y tenemos una
                amplia variedad de marcas
              </Card.Text>

              <div className="flex items-end justify-between -mr-12 -mb-12">
                <div className="flex justify-end">
                  <Button
                    variant="outline-primary"
                    className="!rounded-full !p-2 !text-amber-500 mb-12"
                  >
                    {Icon("tb", "TbApple", "30px")}
                  </Button>
                </div>
                <svg
                  viewBox="0 0 130 130"
                  width="50"
                  height="50"
                  className="inline-block bg-cover bg-center bg-no-repeat drop-shadow-2xl"
                >
                  <defs>
                    <path
                      id="circle"
                      d="M 50, 50 m -37, 0 a 37, 37 0 1, 1 74, 0 a 37, 37 0 1, 1 -74, 0"
                    />
                  </defs>
                  <text font-family="'Bacasime Antique', serif" font-size="14">
                    <textPath
                      xlinkHref="#circle"
                      className="text-xl !text-amber-500 !rotate-45"
                    >
                      --- • marcas y colleciones •
                    </textPath>
                  </text>
                </svg>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div
          style={{
            // width: "18rem",
            display: "inline-block",
            verticalAlign: "top",
          }}
          className="mx-3"
        >
          <div className="flex items-center">
            <h4 className="font-['Yanone_Kaffeesatz'] [writing-mode:vertical-lr] [text-orientation:upright] mb-0 text-white">
              lo que soñaste
            </h4>
          </div>
        </div>
        <div
          style={{
            width: "18rem",
            display: "inline-block",
            verticalAlign: "top",
          }}
          className="mx-3 h-[100vh] bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1583333001978-8c57d752ce5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80')]"
        >
          {/* <div className="h-[300px] w-[300px] bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1583333001978-8c57d752ce5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80')]"></div> */}
        </div>
        <div
          style={{
            width: "18rem",
            display: "inline-block",
            verticalAlign: "bottom",
          }}
          className="mx-3 mb-3"
        >
          <Card className="!rounded-tl-[7rem]">
            <Card.Body>
              <div className="flex items-start justify-between sm:justify-end -ml-16 -mt-1">
                <svg
                  viewBox="0 0 130 130"
                  width="50"
                  height="50"
                  className="inline-block bg-cover bg-center bg-no-repeat drop-shadow-2xl"
                >
                  <defs>
                    <path
                      id="circle"
                      d="M 50, 50  m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text font-family="'Bacasime Antique', serif" font-size="14">
                    <textPath
                      xlinkHref="#circle"
                      className="text-xl !text-amber-500"
                    >
                      • tarjeta cliente • -----
                    </textPath>
                  </text>
                </svg>
                <div className="">
                  <Button
                    variant="outline-primary"
                    className="!rounded-full !p-2 !text-amber-500 mb-12"
                  >
                    {Icon("tb", "TbInfoSquareRoundedFilled", "30px")}
                  </Button>
                </div>
              </div>
              <Card.Title className="font-['Yanone_Kaffeesatz'] !text-bold !text-3xl">
                Sea Cliente de la Amarilla
              </Card.Title>
              <Card.Text
                style={{ whiteSpace: "normal" }}
                className="font-['Xanh_Mono']"
              >
                Conozca las vantajas y nuestros parceros
              </Card.Text>
              <div className="flex items-center justify-center">
                <Button
                  variant="outline-primary"
                  className="!rounded-full !p-2 !text-amber-500"
                >
                  {Icon("bs", "BsCreditCard2FrontFill", "30px")}
                </Button>
              </div>
            </Card.Body>
            <Card.Img
              variant="bottom"
              src="https://images.unsplash.com/photo-1613243555978-636c48dc653c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
          </Card>
        </div>

        <div
          style={{
            // width: "18rem",
            display: "inline-block",
            verticalAlign: "bottom",
          }}
          className="mx-1.5"
        >
          <div className="flex items-center">
            <h5 className="font-['Yanone_Kaffeesatz'] [writing-mode:vertical-lr] [text-orientation:upright] mb-0 text-white">
              Exclusividad
            </h5>
          </div>
        </div>

        <div
          style={{
            width: "18rem",
            display: "inline-block",
            verticalAlign: "middle",
          }}
          className="mx-3 mt-3"
        >
          <Card
          // style={{
          //   width: "18rem",
          //   display: "inline-block",
          //   verticalAlign: "middle",
          // }}
          >
            <div className="flex justify-center mx-3">
              <Card.Img
                variant="top"
                className="max-h-[50vh] w-auto rounded-3xl mt-1"
                src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              />
            </div>
            <Card.Body>
              <Card.Title className="font-['Yanone_Kaffeesatz'] !text-bold !text-3xl">
                Promos
              </Card.Title>
              <Card.Text
                style={{ whiteSpace: "normal" }}
                className="font-['Xanh_Mono']"
              >
                Descuentos, promociones y combos todas las semanas
              </Card.Text>
              <div className="flex justify-end">
                <Button
                  variant="outline-primary"
                  className="!rounded-full !p-2 !text-amber-500"
                >
                  {Icon("tb", "TbApple", "30px")}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div
          style={{
            // width: "18rem",
            display: "inline-block",
            verticalAlign: "middle",
          }}
          className="mx-3"
        >
          <div className="flex items-center text-white">
            <h3 className="font-['Yanone_Kaffeesatz'] [writing-mode:vertical-lr] [text-orientation:upright] mb-0">
              sueña
            </h3>
            <h1 className="font-['Yanone_Kaffeesatz'] [writing-mode:vertical-lr] [text-orientation:upright] mb-0 text-amber-500">
              atrevete
            </h1>
            <h3 className="font-['Yanone_Kaffeesatz'] [writing-mode:vertical-lr] [text-orientation:upright] mb-0">
              se Feliz
            </h3>
          </div>
        </div>
        <div
          style={{
            width: "18rem",
            display: "inline-block",
            verticalAlign: "middle",
          }}
          className="mx-3 mt-3"
        >
          <Card
          // style={{
          //   width: "18rem",
          //   display: "inline-block",
          //   verticalAlign: "middle",
          // }}
          >
            <div className="flex justify-center mx-3">
              <Card.Img
                variant="top"
                className="max-h-[50vh] w-auto rounded-3xl mt-1"
                src="https://images.unsplash.com/photo-1555529771-7888783a18d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=430&q=80"
              />
            </div>
            <Card.Body>
              <Card.Title className="font-['Yanone_Kaffeesatz'] !text-bold !text-3xl">
                Compras en Grupo
              </Card.Title>
              <Card.Text
                style={{ whiteSpace: "normal" }}
                className="font-['Xanh_Mono']"
              >
                Nueva modalidad para que compres la Amarilla con amigos o
                família
              </Card.Text>
              <div className="flex justify-start">
                <Button
                  variant="outline-primary"
                  className="!rounded-full !p-2 !text-amber-500"
                >
                  {Icon("tb", "TbApple", "30px")}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div
          style={{
            width: "18rem",
            display: "inline-block",
            verticalAlign: "top",
          }}
          className="mx-3 mt-3"
        >
          <Card className="!rounded-br-[7rem]">
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title className="font-['Yanone_Kaffeesatz'] !text-bold !text-3xl">
                Nuestros Contactos
              </Card.Title>
              <Card.Text
                style={{ whiteSpace: "normal" }}
                className="font-['Xanh_Mono']"
              >
                Encontranos en la ciudad en una de nuestras 3 tiendas o por las
                redes sociales
              </Card.Text>
              <div className="flex items-end justify-between -mr-12 -mb-12 ">
                <div className="mb-12">
                  <Button
                    variant="outline-primary"
                    className="!rounded-full !p-2 !text-amber-500"
                  >
                    {Icon("md", "MdPlace", "30px")}
                  </Button>
                </div>
                <svg
                  viewBox="0 0 130 130"
                  width="50"
                  height="50"
                  className="inline-block bg-cover bg-center bg-no-repeat drop-shadow-2xl"
                >
                  <defs>
                    <path
                      id="circle"
                      d="M 50, 50  m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text font-family="'Bacasime Antique', serif" font-size="14">
                    <textPath
                      xlinkHref="#circle"
                      className="text-xl !text-amber-500"
                    >
                      --- • CABA - Balvanera •
                    </textPath>
                  </text>
                </svg>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
