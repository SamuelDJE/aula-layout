import Layout from "./layout";
import Home from "./components/Home"
export default function App() {
  return (
    <>
      <Layout content={Home()}/>
    </>
  )
}