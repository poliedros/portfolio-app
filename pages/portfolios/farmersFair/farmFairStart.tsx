import Icon from "@/components/icons/Icon";
import * as d3 from "d3";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import MyD3Component from "./chart";

export default function FarmFairStart() {
  // var dataset = [40, 20];

  // var width = 300,
  //   height = 200,
  //   radius = 150;

  // var color = ["#222", "#EEE"];
  // var svg: any = undefined;

  // useEffect(() => {
  //   svg = d3
  //     .select("body")
  //     .append("svg")
  //     .attr("width", width)
  //     .attr("height", height)
  //     .append("g")
  //     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  // }, []);

  // function render(data: (number | { valueOf(): number })[]): any {
  //   var pie = d3.pie().sort(null);
  //   var arc: any = d3
  //     .arc()
  //     .innerRadius(radius - 100)
  //     .outerRadius(radius - 50);
  //   if (svg) {
  //     var path = svg.selectAll("path").data(pie(data));
  //     var pathEnter = path
  //       .enter()
  //       .append("path")
  //       .attr("fill", function (d: any, i: any) {
  //         return color[i];
  //       })
  //       .attr("d", arc);
  //     var pathUpdate = path.attr("d", arc);
  //     return <>{svg}</>;
  //   }
  //   return <></>;
  // }

  // setInterval(function () {
  //   update();
  // }, 2000);

  // function update() {
  //   dataset = [Math.random() * 50, Math.random() * 50];
  //   render(dataset);
  // }

  return (
    <>
      <div className="h-[100vh] w-full relative overflow-hidden bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1532467227905-90e05784f072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80')]">
        <div className="h-[270px] w-full rotate-[70deg] block absolute top-[15%] -left-[52%]">
          <div className="h-[45px] w-full bg-green-400 opacity-50"></div>
          <div className="h-[45px] w-full bg-transparent"></div>
          <div className="h-[45px] w-full bg-green-400 opacity-50"></div>
          <div className="h-[45px] w-full bg-transparent"></div>
          <div className="h-[45px] w-full bg-green-400 opacity-50"></div>
          <div className="h-[45px] w-full bg-transparent"></div>
        </div>
        <div className="h-[135px] w-[200vw] -rotate-[10deg] block absolute -top-[30%] -left-[15%]">
          <div className="h-[45px] w-full bg-green-400 opacity-50"></div>
          <div className="h-[45px] w-full bg-"></div>
          <div className="h-[45px] w-full bg-green-400 opacity-50"></div>
        </div>
        <div className="h-[185px] w-full -rotate-45 block absolute top-[0%] -left-[50%]">
          <div className="h-[45px] w-full bg-white opacity-70"></div>
          <div className="h-[45px] w-full bg-green-400 opacity-50"></div>
          <div className="h-[45px] w-full bg-white opacity-70"></div>
          <div className="h-[45px] w-full bg-green-400 opacity-50"></div>
        </div>
        <div className="h-[90%] w-[90%] absolute bg-white flex right-0 bottom-0 m-3 opacity-80"></div>
        <div className="h-[90%] w-[90%] absolute flex right-0 bottom-0 m-3">
          <div className="w-[10%] bg-gray-600 text-white">
            <div className="h-full flex flex-col justify-center items-center">
              {Icon("gi", "GiWheat", "24px")}
              <span className="my-3 opacity-50">
                {Icon("gi", "GiCow", "24px")}
              </span>
              <span className="opacity-50">
                {Icon("gi", "GiFarmTractor", "24px")}
              </span>
            </div>
          </div>
          <div className="w-[90%] font-['Share_Tech']">
            <Row>
              <Col className="bg-lime-500 m-1 flex items-center rounded-tl-xl rounded-tr-sm rounded-bl-sm rounded-br-xl">
                <div className="border-2 border-white text-white rounded-full m-1">
                  {Icon("gi", "GiPlantWatering", "48px")}
                </div>
                <div className="w-full flex items-center justify-around">
                  <div className="flex flex-col items-center">
                    <h6 className="uppercase tracking-wider">Umid.</h6>
                    <h3 className="text-right mb-0">
                      {/* <sup className="tracking-wider font-light text-sm text-slate-600">
                      solo
                    </sup>{" "} */}
                      <b>65%</b>
                      <br />
                      {/* <sup className="tracking-wider font-light text-sm text-slate-600">
                      ar
                    </sup>{" "} */}
                      <b>61%</b>
                    </h3>
                  </div>
                  <div className="flex flex-col items-center">
                    <h6 className="uppercase tracking-wider">temp.</h6>{" "}
                    <h3 className="text-right mb-0">
                      {/* <sup className="tracking-wider font-light text-sm text-slate-600">
                      solo
                    </sup>{" "} */}
                      <b>17°C</b>
                      <br />
                      {/* <sup className="tracking-wider font-light text-sm text-slate-600">
                      ar
                    </sup>{" "} */}
                      <b>23°C</b>
                    </h3>
                  </div>
                </div>
              </Col>
              <Col className="bg-blue-500 m-1 flex items-center rounded-tr-xl rounded-tl-sm rounded-br-sm rounded-bl-xl">
                <div className="border-2 border-white text-white rounded-full m-1">
                  {Icon("gi", "GiSun", "48px")}
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                  {" "}
                  <h6 className="uppercase tracking-wider">Lumin.</h6>
                  {/* font-['Fira_Code'] */}
                  <div className="w-full flex justify-around">
                    <h3 className="mb-0">
                      {/* <sup className="tracking-wider font-light text-sm text-slate-600">
                      média
                    </sup>{" "} */}
                      <b>72%</b> <br />
                      {/* <sup className="tracking-wider font-light text-sm text-slate-600">
                      área
                    </sup>{" "} */}
                      <b>45%</b>
                    </h3>
                    <h3 className="mb-0">
                      {/* <sup className="tracking-wider font-light text-sm text-slate-600">
                      mín
                    </sup>{" "} */}
                      <b>69%</b> <br />
                      {/* <sup className="tracking-wider font-light text-sm text-slate-600">
                      máx
                    </sup>{" "} */}
                      <b>78%</b>
                    </h3>
                  </div>
                </div>{" "}
              </Col>
              <Col className="bg-amber-500 m-1 flex items-center rounded-tl-xl rounded-tr-sm rounded-bl-sm rounded-br-xl">
                <div className="border-2 border-white text-white rounded-full m-1">
                  {Icon("si", "SiMoleculer", "48px")}
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                  <h6 className="uppercase tracking-wider">Ph</h6>{" "}
                  <h3 className="text-right mb-0">
                    <div className="">
                      {/* <sup className="tracking-wider font-light text-sm text-slate-600">
                        água
                      </sup>{" "} */}
                      <b>5.5</b>
                    </div>
                    {/* <sup className="tracking-wider font-light text-sm text-slate-600">
                      solo
                    </sup>{" "} */}
                    <b>3.7</b>
                  </h3>{" "}
                  {/* 4.3 6.0{" "} */}
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="">
                <Row>
                  <Col className="m-1 px-.5 py-1 bg-lime-400 font-light rounded-tl-xl rounded-tr-sm rounded-bl-sm rounded-br-xl">
                    <h6>
                      {/* <sup>
                        <span className="font-light pb-2 tracking-wider">
                          Data
                        </span>
                      </sup>{" "} */}
                      <b className="uppercase tracking-wider">23/07/2023</b>
                    </h6>
                    <h6 className="!mb-0">
                      {/* <sup>
                        <span className="font-light pb-2 tracking-wider">
                          Hora
                        </span>
                      </sup>{" "} */}
                      <b className="uppercase tracking-wider">9:32</b>
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col className="m-1 px-.5 py-1 bg-lime-400 font-light rounded-tr-xl rounded-tl-sm rounded-br-sm rounded-bl-xl">
                    {/* 25°C 28°C 31°C */}
                    <h4 className="!mb-0">
                      {/* <sup>
                        <span className="pb-2 font-light">Temperatura</span>
                      </sup>{" "} */}
                      <b className="uppercase pb-2 tracking-wider">23°C</b>
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col className="m-1 px-.5 py-1 bg-lime-400 font-light rounded-tl-xl rounded-tr-sm rounded-bl-sm rounded-br-xl">
                    {/* Chuva Fraca Pouco Nublado Ensolarado */}
                    <div className="flex justify-end text-white">
                      {Icon("wi", "WiDayCloudy", "24px")}
                    </div>
                    <h4 className="!mb-0">
                      {/* <sup>
                        <span className="pb-2 font-light">Tempo</span>
                      </sup>{" "} */}
                      <b className="uppercase pb-2 tracking-wider">Nublado</b>
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col className="m-1 px-.5 py-1 bg-lime-400 font-thin rounded-tr-xl rounded-tl-sm rounded-br-sm rounded-bl-xl">
                    <h4 className="!mb-0">
                      {/* <sup>
                        <span className="pb-2 font-light">Estação</span>
                      </sup>{" "} */}
                      <b className="uppercase pb-2 tracking-wider">Inverno</b>
                    </h4>
                  </Col>
                </Row>
              </Col>
              <Col className="">
                <h4>Atividades</h4>
                {/* <h6 className="m-1 px-2 py-2 bg-lime-600 text-white font-light rounded-tr-xl rounded-tl-sm rounded-br-sm rounded-bl-xl">
                  Restaurar Irrigação no setor-B4
                </h6>
                <h6 className="m-1 px-2 py-2 bg-lime-600 text-white font-light rounded-tl-xl rounded-tr-sm rounded-bl-sm rounded-br-xl">
                  Revista de Fertilizantes
                </h6>
                <h6 className="m-1 px-2 py-2 bg-lime-600 text-white font-light rounded-tr-xl rounded-tl-sm rounded-br-sm rounded-bl-xl">
                  Visita de Inspenção - José Geraldo
                </h6>{" "}*/}
                <h4 className="mt-3">Culturas</h4>
                <div
                  className="w-full flex justify-center my-2" //border-2 border-white
                >
                  <MyD3Component />
                </div>
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-baseline">
                      <div className="w-[10px] h-[10px] bg-lime-100 mr-1 rounded-tr rounded-tl-sm rounded-br-sm rounded-bl"></div>
                      <h6 className="text-xs">Açúcar</h6>
                    </div>
                    <div className="flex items-baseline">
                      <div className="w-[10px] h-[10px] bg-lime-300 mr-1 rounded-tr rounded-tl-sm rounded-br-sm rounded-bl"></div>
                      <h6 className="text-xs">Feijão</h6>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline">
                      <div className="w-[10px] h-[10px] bg-lime-500 mr-1 rounded-tr rounded-tl-sm rounded-br-sm rounded-bl"></div>
                      <h6 className="text-xs">Abacate</h6>
                    </div>
                    <div className="flex items-baseline">
                      <div className="w-[10px] h-[10px] bg-lime-700 mr-1 rounded-tr rounded-tl-sm rounded-br-sm rounded-bl"></div>
                      <h6 className="text-xs">Mamão</h6>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                className="" //bg-yellow-500
              >
                <Row>
                  <Col className="m-1 px-.5 py-1 bg-lime-500 font-light rounded-tl-xl rounded-tr-sm rounded-bl-sm rounded-br-xl">
                    <h5>Produtividade</h5>
                    <h5>Consumo</h5>
                    Água Fertilizante
                  </Col>
                </Row>
              </Col>
              <Col
                className="" //bg-yellow-500
              >
                <h5>Estatísticas</h5>
                <div className="flex justify-center items-center">
                  <div className="px-1 py-1 bg-yellow-500 mr-1 rounded-tr rounded-tl-sm rounded-br-sm rounded-bl text-xs text-white">
                    4
                  </div>
                  <div className="px-1 py-1 bg-lime-600 mr-1 rounded-tl rounded-tr-sm rounded-bl-sm rounded-br text-xs text-white">
                    0
                  </div>
                  <div className="px-1 py-1 bg-yellow-300 mr-1 rounded-tr rounded-tl-sm rounded-br-sm rounded-bl text-xs text-white">
                    7
                  </div>
                  <div className="px-1 py-1 bg-lime-500 mr-1 rounded-tl rounded-tr-sm rounded-bl-sm rounded-br text-xs text-white">
                    2
                  </div>
                  <div className="px-1 py-1 bg-yellow-700 mr-1 rounded-tr rounded-tl-sm rounded-br-sm rounded-bl text-xs text-white">
                    4
                  </div>
                  <div className="px-1 py-1 bg-lime-500 mr-1 rounded-tl rounded-tr-sm rounded-bl-sm rounded-br text-xs text-white">
                    2
                  </div>
                  <div className="px-1 py-1 bg-lime-500 mr-1 rounded-tr rounded-tl-sm rounded-br-sm rounded-bl text-xs text-white">
                    1
                  </div>
                </div>
                <h6 className="my-1">Próxima Semana</h6>
                <div className="flex justify-center items-center mb-2">
                  <div className="px-1 py-1 bg-yellow-500 mr-1 rounded-tl rounded-tr-sm rounded-bl-sm rounded-br text-xs text-white">
                    4
                  </div>
                  <div className="px-1 py-1 bg-lime-600 mr-1 rounded-tr rounded-tl-sm rounded-br-sm rounded-bl text-xs text-white">
                    0
                  </div>
                  <div className="px-1 py-1 bg-yellow-300 mr-1 rounded-tl rounded-tr-sm rounded-bl-sm rounded-br text-xs text-white">
                    7
                  </div>
                  <div className="px-1 py-1 bg-lime-500 mr-1 rounded-tr rounded-tl-sm rounded-br-sm rounded-bl text-xs text-white">
                    2
                  </div>
                  <div className="px-1 py-1 bg-yellow-700 mr-1 rounded-tl rounded-tr-sm rounded-bl-sm rounded-br text-xs text-white">
                    4
                  </div>
                  <div className="px-1 py-1 bg-lime-500 mr-1 rounded-tr rounded-tl-sm rounded-br-sm rounded-bl text-xs text-white">
                    2
                  </div>
                  <div className="px-1 py-1 bg-lime-500 mr-1 rounded-tl rounded-tr-sm rounded-bl-sm rounded-br text-xs text-white">
                    1
                  </div>
                </div>
                <Row>
                  <Col className="m-1 px-.5 py-1 bg-lime-500 font-light rounded-tr-xl rounded-tl-sm rounded-br-sm rounded-bl-xl">
                    <h5>Projeção/Meta</h5>
                    <MyD3Component />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
