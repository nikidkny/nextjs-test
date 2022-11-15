export default function RandDog({ data }) {
  return <img src={data.message} alt="Random dog" />;
}
export async function getServerSideProps() {
  const resp = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await resp.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
