import Image from "next/image";
import Head from "next/head";

export default function Henry({ data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <h1>{data.content.heading}</h1>
      <p>{data.content.text}</p>
      <Image
        src={data.content.image.src}
        alt={data.content.image.alt}
        width={data.content.image.width}
        height={data.content.image.height}
        //disaples lazy load - do that if img is above the page fold
        priority
        sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      400px"
      />
    </>
  );
}
export async function getStaticProps() {
  const resp = await fetch("https://bucolic-bombolone-857476.netlify.app/api/dogs/henry");
  const data = await resp.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
