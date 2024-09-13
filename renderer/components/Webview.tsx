interface WebviewProps {
  url: string;
}

const Webview: React.FC<WebviewProps> = ({ url }) => {
  return (
    <webview
      className="h-[60%] w-[100%]"
      src={url}
      useragent="Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6478.234 Safari/537.36"
      id="whatsapp-webview"
    ></webview>
  );
};

export default Webview;