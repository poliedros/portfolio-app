import { useState, useEffect } from "react";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import Icon from "./icons/Icon";
import { Item } from "../interfaces";
import Image from "next/image";

interface KeyValue {
  quantity: number;
  name: string;
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default function AdvancedMenu({ items }: { items: Item[] }) {
  const [draftList, setDraftList] = useState<string[]>([]);
  const [showDraft, setShowDraft] = useState<boolean>(false);

  const mousePosition = useMousePosition();

  function handleDraftList(kv: string) {
    let intDraftList: string[] = draftList;
    // let quantity: number = 1;
    // if (intDraftList.find((ikv) => ikv.name === kv.name)) {
    //   draftList
    //     .filter((ikv) => ikv.name === kv.name)
    //     .map((qkv) => {
    //       quantity = qkv.quantity;
    //       alert(quantity);
    //     });
    //   kv.quantity = quantity + 1;
    //   alert(JSON.stringify(kv));
    // } else intDraftList.push(kv);
    intDraftList.push(kv);
    setDraftList(intDraftList);
  }

  function handleRemove(di: string) {
    let find: boolean = false;
    let intDraftList: string[] = draftList.filter((i) => {
      if (!find) {
        if (i === di) find = true;
        return i !== di;
      } else return true;
    });
    setDraftList(intDraftList);
  }

  function uniq(a: any) {
    return a.sort().filter(function (item: any, pos: any, ary: any) {
      return !pos || item != ary[pos - 1];
    });
  }

  const counts: any = {};
  draftList.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  let types: string[] = [];
  types = items.map((item) => {
    return item.type;
  });

  return (
    <>
      <Container style={{ fontFamily: "Montserrat !important" }}>
        {/* <p>
          Your cursor position:
          <br />
          {JSON.stringify(mousePosition)}
        </p> */}
        <div className="flex justify-center items-center p-12">
          <div className="flex justify-center items-center bg-black rounded-full w-auto">
            <Image
              src={"./sazonDelPeru.svg"}
              width="400"
              height="400"
              alt={""}
              className="drop-shadow-md hover:drop-shadow-xl vibrate-1"
            />
          </div>
        </div>
        <div>
          {/* {JSON.stringify(types)} */}
          {types
            ? uniq(types).map((tp: string, k: number) => {
                return (
                  <div key={k}>
                    <div className="flex mt-6">
                      <h3 className="!text-[#2E0002] bg-[#F2AA00] rounded px-3 py-1 font-bold">
                        {tp.substring(1)}
                      </h3>
                    </div>
                    <Table bordered hover className="my-3 !text-white">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          {/* <th>Description</th>
                              <th>Price</th> */}
                        </tr>
                      </thead>
                      {items
                        ? items
                            .filter((itft) => {
                              return itft.type === tp;
                            })
                            .map((itemf: any, j: number) => {
                              return itemf ? (
                                <tbody
                                  key={j}
                                  className={j % 2 ? "" : "bg-[#2E0002]"}
                                >
                                  <tr>
                                    <td
                                      className="hover:!text-[#F2AA00]"
                                      onClick={() => {
                                        handleDraftList(itemf.name);
                                      }}
                                    >
                                      {j + 1}
                                    </td>
                                    <td
                                      className="hover:!text-[#F2AA00]"
                                      onClick={() => {
                                        handleDraftList(itemf.name);
                                      }}
                                    >
                                      {itemf.name}
                                    </td>
                                  </tr>
                                </tbody>
                              ) : null;
                            })
                        : null}
                    </Table>
                  </div>
                );
              })
            : null}
        </div>
        <div>
          <h5 className="pt-6 pb-2 !text-white text-center">
            DESAYUNOS AL ESTILO PERÚ TODOS LOS DOMINGOS DE 9:30hs a 12hs <br />{" "}
            MENU DE LUNES A SABADO // DELIVERY TODO CAP FED
          </h5>
          <div className="flex justify-center">
            <h3 className="px-16 py-2 rounded-full !text-[#2E0002] bg-[#F2AA00] font-semibold flex justify-center text-center">
              DIRECCION: SOLER 4456 - PALERMO <br /> TEL: 11 2859-9305
            </h3>
          </div>
          <h6 className="flex my-1 footer-content p-3 !text-white text-center items-center justify-center content-footer">
            <div className="flex items-center hover:!text-[#F2AA00]">
              <div className="mr-2">{Icon("ri", "RiFacebookBoxFill")}</div>{" "}
              SAZÓN DEL PERÚ{" "}
            </div>
            <div className="flex my-2 items-center hover:!text-[#F2AA00]">
              <div className="ml-4 mr-2">{Icon("ri", "RiInstagramLine")}</div>{" "}
              @sazondelperurest
            </div>{" "}
            &nbsp;
            {" //"} ACEPTAMOS MERCADO PAGO
          </h6>
        </div>
      </Container>
      <div className="fixed bottom-[2rem] right-[2rem]">
        <Button
          variant="outline-warning"
          className="!p-[16px] !bg-[#F2AA00]"
          onClick={() => setShowDraft(true)}
        >
          <div className="rotate-12">{Icon("tfi", "TfiNotepad", "32px")}</div>
        </Button>
      </div>
      <Modal size="lg" show={showDraft} onHide={() => setShowDraft(false)}>
        <Modal.Header
          className="!bg-[#F2AA00]"
          closeButton
          style={{ fontFamily: "Montserrat !important" }}
        >
          <Modal.Title className="font-[Solitreo] !text-[#2E0002] !font-bold !text-2xl">
            Lista Borrador
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ fontFamily: "Montserrat !important" }}
          className="!bg-[#4B0102]"
        >
          {uniq(draftList).map((udl: any, i: number) => {
            return (
              <Container key={i}>
                <div className="flex items-center justify-center mb-2 justify-between">
                  <div className="font-[Solitreo] !text-[#F2AA00] mr-2 text-xl">
                    {counts[udl]}x
                  </div>
                  <div className="font-[Solitreo] !text-white mx-2">{udl}</div>
                  <div className="flex items-center">
                    <div className="mr-3 font-[Solitreo]">
                      <Form>
                        <Form.Group className="" controlId="">
                          <Form.Control size="sm" placeholder="Notas" />
                        </Form.Group>
                      </Form>
                    </div>
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleRemove(udl);
                      }}
                      className="!p-[12px]"
                    >
                      {Icon("fa", "FaEraser")}
                    </Button>
                  </div>
                </div>
              </Container>
            );
          })}
        </Modal.Body>
        <Modal.Footer className="!bg-[#2E0002]">
          {/* <Button variant="secondary" onClick={() => setShowDraft(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowDraft(false)}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
