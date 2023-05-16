import { GetStaticProps } from "next";
import Link from "next/link";

import { Item } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import List from "../../components/List";
import AdvancedMenu from "@/components/AdvancedMenu";

type Props = {
  items: Item[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    {/* <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p> */}
    <AdvancedMenu items={items} />
    {/* <List items={items} />
    <p>
      <Link href="/">Go home</Link>
    </p> */}
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Item[] = sampleUserData;
  return { props: { items } };
};

export default WithStaticProps;
