import Error from "./error";

export default function Home() {
	return <Error error={new Error("Page introuvable")} reset={() => {}} />;
}
