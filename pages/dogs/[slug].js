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
// export async function getServerSideProps(context) {
//   console.log(context);
//   const resp = await fetch("https://bucolic-bombolone-857476.netlify.app/api/dogs/" + context.params.slug);
//   if (resp.status != 200) {
//     return {
//       notFound: true,
//     };
//   }
//   const data = await resp.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
export async function getStaticProps(context) {
  console.log(context);
  const resp = await fetch("https://bucolic-bombolone-857476.netlify.app/api/dogs/" + context.params.slug);
  if (resp.status != 200) {
    return {
      notFound: true,
    };
  }
  const data = await resp.json();

  return {
    props: {
      data,
    },
  };
}
export async function getStaticPaths() {
  const resp = await fetch("https://bucolic-bombolone-857476.netlify.app/api/dogs/");
  const data = await resp.json();
  const paths = data.map((entry) => {
    console.log(entry);
    return { params: { slug: entry.slug } };
  });
  console.log(data);
  return {
    paths,
    fallback: false,
  };
}
