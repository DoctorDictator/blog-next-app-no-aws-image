import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

export const metadata = {
  title: "Para Posts",
  description: "Unique Ideas, shared by a knowledge-lover community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
