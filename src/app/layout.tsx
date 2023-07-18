import "../css/globals.css";

export const metadata = {
  title: "Home",
  description: "Tv shows application",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
