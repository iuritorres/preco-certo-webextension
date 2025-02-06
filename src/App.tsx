import { useEffect, useState } from "react";
import { Route, Routes, To, useNavigate } from "react-router-dom";
import { Footer, Header } from "./components/ui";
import { Home, NotFound, Notifications, Vouchers } from "./pages";

const App = () => {
  // const [color, setColor] = useState<string | null>(null);

  // const onClick = async () => {
  //   const [tab] = await chrome.tabs.query({ active: true });

  //   chrome.scripting.executeScript<string[], void>({
  //     target: { tabId: tab.id! },
  //     args: [color ?? ""],
  //     func: (color) => {
  //       document.body.style.backgroundColor = color;
  //       test();
  //     },
  //   });
  // };

  const navigate = useNavigate();
  const [activeRoute, setActiveRoute] = useState<To>("/");

  const handleRouteChange = (path: To) => {
    setActiveRoute(path);
  };

  useEffect(() => {
    navigate("/");
  });

console.log("teste")

  return (
    <main className="p-6 w-[380px] h-[600px] bg-[#202127] text-white">
      <Header />

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/vouchers" element={<Vouchers />} />
        <Route path="/notifications" element={<Notifications />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer activeRoute={activeRoute} onRouteChange={handleRouteChange} />
    </main>
  );
};

export default App;
