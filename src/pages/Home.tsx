import { useReadJsonPlaceholder } from "../hooks/queries/common";

const Home = () => {
  const { data } = useReadJsonPlaceholder();
  console.log("확인", data);

  return <div>{data?.title}</div>;
};

export default Home;
