import Home from "./pages/home";

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

  return (
    <>
      <Home />
    </>
  );
};

export default App;
