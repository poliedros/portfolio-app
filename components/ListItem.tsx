import React from "react";
import Link from "next/link";

import { Item } from "../interfaces";

type Props = {
  data: Item;
};

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    {data.id}:{data.name}
  </Link>
);

export default ListItem;
