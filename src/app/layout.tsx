import Image from "next/image";
import "./globals.scss";

export const metadata = {
  title: "Spiderverse",
  description:
    "Criando um carrosel paralax do Aranhaverso com React, NextJS e Framer Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <header>
        <Image
          src="/icons/menu.svg"
          alt="Opcões do menu"
          width={36}
          height={25}
        />
        <Image src="/spider-logo.svg" alt="Spiderman" width={260} height={70} />
        <Image src="/icons/user.svg" alt="Login" width={36} height={36} />
      </header>
      <body>{children}</body>
    </html>
  );
}
