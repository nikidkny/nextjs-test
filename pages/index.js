import Anchor from "../components/Anchor";

export default function Home() {
  return (
    <h1>
      <Anchor prefetch={false} href="/dogs/henry">
        Henry
      </Anchor>
    </h1>
  );
}
