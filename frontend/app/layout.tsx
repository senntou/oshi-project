import type { Metadata } from 'next';
import './styles/globals.css';
import Header from './components/layout/Header';
import { AuthProvider } from './context/AuthProvider';

export const metadata: Metadata = {
  title: '推しプロジェクト！',
  description: '声優のコンテンツを一覧できるサイト',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`antialiased`}>
        <AuthProvider>
          <div className="font-MPlusRounded1c min-h-screen sm:max-w-sm sm:mx-auto border border-gray-300">
            <Header />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
