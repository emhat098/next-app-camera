import dynamic from "next/dynamic";

const QrScanner = dynamic(() => import('./components/qr-scanner'),  {
  ssr: false
});

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>QR Scanner</h1>
      <QrScanner />
    </main>
  );
}
