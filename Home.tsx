import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Printer, Image as ImageIcon, Sticker, FileText, Mail as MailIcon, Copy, Edit3, Type } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modern Professional
 * - Palet: Biru (#0066CC) + Oranye (#FF6B35) dengan netral
 * - Layout: Asimetris dengan hero diagonal, grid layanan, pricing table
 * - Typography: Poppins untuk heading, Inter untuk body
 * - Animasi: Fade-in on scroll, hover effects yang smooth
 */

const services = [
  {
    id: 1,
    name: "Print Document",
    description: "Cetak dokumen berkualitas tinggi dengan berbagai ukuran kertas",
    icon: FileText,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/qZ8eGHtjt6iTPVbXmwflw3/sandbox/1HZnmWh1qJ5Somsi3xWhrR-img-2_1771547358000_na1fn_c2VydmljZS1kb2N1bWVudC1wcmludA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcVo4ZUdIdGp0NmlUUFZiWG13Zmx3My9zYW5kYm94LzFIWm5tV2gxcUo1U29tc2kzeFdoclItaW1nLTJfMTc3MTU0NzM1ODAwMF9uYTFmbl9jMlZ5ZG1salpTMWtiMk4xYldWdWRDMXdjbWx1ZEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qjC4AU1OlCpfq23Stm-a5nciMdZvR3OHDXgtknwzHZCH6-V8i9Zi~p0Eqe9t594HvhU8quN7xWeCDrbQzvQqC-OhtP9i-DawfwLkB9KQ6l7BfyLxpnYYon0lBe-tL9eSOilykH6xX73bcyHdcVt9dBlQKIZLshst0MX1ERhLDTS1FB43hnWzMJHuQs~e5RsJDxwi-q-uKu6DhQheNDAjAfeNXjcbp5dNMiVVBV~vWg3wMyP6pvfFqS5sHX7Ibtg2X36DHzZ8if7U-PoEjil3Ro6hZF9XBBvycCqCh7Plv5Gcliqr7T8LznbA1hy4ylckw2G6Sq8cdgEiUVcp9EGuOw__",
    prices: [
      { size: "A4 (1-10 lembar)", price: "Rp 2.000" },
      { size: "A4 (11-50 lembar)", price: "Rp 1.500" },
      { size: "A4 (51+ lembar)", price: "Rp 1.000" },
    ]
  },
  {
    id: 2,
    name: "Photo Print",
    description: "Cetak foto dengan kualitas profesional dan warna akurat",
    icon: ImageIcon,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/qZ8eGHtjt6iTPVbXmwflw3/sandbox/1HZnmWh1qJ5Somsi3xWhrR-img-3_1771547363000_na1fn_c2VydmljZS1waG90by1wcmludA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcVo4ZUdIdGp0NmlUUFZiWG13Zmx3My9zYW5kYm94LzFIWm5tV2gxcUo1U29tc2kzeFdoclItaW1nLTNfMTc3MTU0NzM2MzAwMF9uYTFmbl9jMlZ5ZG1salpTMXdhRzkwYnkxd2NtbHVkQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=EAt7NZPSmVSrS6~LcKdE0D64EmwVXXMMP1JkEtEOkCelVJqA6bCqiTNz5MVPkWXyGh7jU~dGBMM4hYa27Zs1hyGlTvdBejqFgohram6RWfdo2S6ltJwKJ130wOo-WkSsL77C5a0G-j1b~YI-nN4rTM82N-x8V4F25WsvnrVu8iaQDCos3U0ddaMzEcJqDF4cVD6irY8kF0WRon3cZM80dctPgnijnyK8tWeoUO7VUptxvI1N~orjYntK2ql9eKb76WzFZFQwSyKPE88JBqziSwuYKA8MCc0IJYinS6W5KfkKrNjkMdZyUHNX1-fMq9kZfw84VPt1toQHQ-MKaaO3CA__",
    prices: [
      { size: "4R (10x15cm)", price: "Rp 3.000" },
      { size: "5R (13x18cm)", price: "Rp 4.000" },
      { size: "6R (15x20cm)", price: "Rp 5.000" },
    ]
  },
  {
    id: 3,
    name: "Sticker Print",
    description: "Cetak stiker dengan desain custom dan finishing glossy",
    icon: Sticker,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/qZ8eGHtjt6iTPVbXmwflw3/sandbox/1HZnmWh1qJ5Somsi3xWhrR-img-4_1771547362000_na1fn_c2VydmljZS1zdGlja2VyLXByaW50.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcVo4ZUdIdGp0NmlUUFZiWG13Zmx3My9zYW5kYm94LzFIWm5tV2gxcUo1U29tc2kzeFdoclItaW1nLTRfMTc3MTU0NzM2MjAwMF9uYTFmbl9jMlZ5ZG1salpTMXpkR2xqYTJWeUxYQnlhVzUwLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GEjcCpqUC4tahk13uV5NYbcB88EqJ1-wdgOfUgmWG9vGoS1r0MzxDULUUnasq6PJ8E-eiftdB-nPxxa5tPtu8ad2q2nrISxKeei4FQ~my9q8sgaiqwonZph1JZENgYoLDULWUHKIGivdxo4syd1h-39tKIPz4WeK402o106IrE6Gd74aR5h6aQ7-l82Gxq-dU4GcbB1Wr8RyFejoLSKJqS-GgMh9iFJdhij22M2-G7EsR4sdzTLpjDWrxrM9UgBNcFDdiAhAAJKGrfPSKhVyC~THIePP5VIuS7jiRlb6BFlyzdkJjLPoIQ1ff22h~rosPsDvwRBBxTSFSrOiqAuuwA__",
    prices: [
      { size: "Stiker Kecil (5x5cm)", price: "Rp 1.500/pcs" },
      { size: "Stiker Sedang (10x10cm)", price: "Rp 2.500/pcs" },
      { size: "Stiker Besar (15x15cm)", price: "Rp 4.000/pcs" },
    ]
  },
  {
    id: 4,
    name: "Edit Documents",
    description: "Layanan edit dokumen profesional dengan formatting sempurna",
    icon: Edit3,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/qZ8eGHtjt6iTPVbXmwflw3/sandbox/1HZnmWh1qJ5Somsi3xWhrR-img-2_1771547358000_na1fn_c2VydmljZS1kb2N1bWVudC1wcmludA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcVo4ZUdIdGp0NmlUUFZiWG13Zmx3My9zYW5kYm94LzFIWm5tV2gxcUo1U29tc2kzeFdoclItaW1nLTJfMTc3MTU0NzM1ODAwMF9uYTFmbl9jMlZ5ZG1salpTMWtiMk4xYldWdWRDMXdjbWx1ZEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qjC4AU1OlCpfq23Stm-a5nciMdZvR3OHDXgtknwzHZCH6-V8i9Zi~p0Eqe9t594HvhU8quN7xWeCDrbQzvQqC-OhtP9i-DawfwLkB9KQ6l7BfyLxpnYYon0lBe-tL9eSOilykH6xX73bcyHdcVt9dBlQKIZLshst0MX1ERhLDTS1FB43hnWzMJHuQs~e5RsJDxwi-q-uKu6DhQheNDAjAfeNXjcbp5dNMiVVBV~vWg3wMyP6pvfFqS5sHX7Ibtg2X36DHzZ8if7U-PoEjil3Ro6hZF9XBBvycCqCh7Plv5Gcliqr7T8LznbA1hy4ylckw2G6Sq8cdgEiUVcp9EGuOw__",
    prices: [
      { size: "Editing Dasar", price: "Rp 10.000" },
      { size: "Editing Lanjut", price: "Rp 25.000" },
      { size: "Formatting Lengkap", price: "Rp 50.000" },
    ]
  },
  {
    id: 5,
    name: "Amplop Custom",
    description: "Amplop bermerek dengan desain custom sesuai kebutuhan bisnis",
    icon: MailIcon,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/qZ8eGHtjt6iTPVbXmwflw3/sandbox/1HZnmWh1qJ5Somsi3xWhrR-img-5_1771547361000_na1fn_c2VydmljZS1jdXN0b20tZW52ZWxvcGU.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcVo4ZUdIdGp0NmlUUFZiWG13Zmx3My9zYW5kYm94LzFIWm5tV2gxcUo1U29tc2kzeFdoclItaW1nLTVfMTc3MTU0NzM2MTAwMF9uYTFmbl9jMlZ5ZG1salpTMWpkWE4wYjIwdFpXNTJaV3h2Y0dVLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OZk9B43-VDu7sRzARz9YRfBH~DsUDCl3A2J7yDQSMEzoXODbj4daYy8k3EGooaOKF6YABfrRHENkGe8WpEtqpvhRujayeGL8okhCdDB~SaKhSi0QCHzPeEdmWnHLKN9M4Gc1NYFTTUo38Gb2ur4N16xXP11PoQX789JM7gxZmT3j31WPejqFB1U6OEnaUakI6Kw9N6Ps0ClaILihZfBA3~qJ~yTlBVyqcDeuKsPyu0-yjxuFdI94E6RaSkDC2swg1YimdYwFcz7rldlW6IYt~UwZODIWW54Q~pAThsIKwcIOogDAIdlZMxSZJ-AxSEsgal3OXqsPsctiSzGP5vj4IA__",
    prices: [
      { size: "Amplop Standar (100 pcs)", price: "Rp 150.000" },
      { size: "Amplop Premium (100 pcs)", price: "Rp 250.000" },
      { size: "Amplop Jumbo (100 pcs)", price: "Rp 300.000" },
    ]
  },
  {
    id: 6,
    name: "Photocopy & Scan",
    description: "Layanan fotokopi dan scanning dokumen dengan kualitas tinggi",
    icon: Copy,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/qZ8eGHtjt6iTPVbXmwflw3/sandbox/1HZnmWh1qJ5Somsi3xWhrR-img-2_1771547358000_na1fn_c2VydmljZS1kb2N1bWVudC1wcmludA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcVo4ZUdIdGp0NmlUUFZiWG13Zmx3My9zYW5kYm94LzFIWm5tV2gxcUo1U29tc2kzeFdoclItaW1nLTJfMTc3MTU0NzM1ODAwMF9uYTFmbl9jMlZ5ZG1salpTMWtiMk4xYldWdWRDMXdjbWx1ZEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qjC4AU1OlCpfq23Stm-a5nciMdZvR3OHDXgtknwzHZCH6-V8i9Zi~p0Eqe9t594HvhU8quN7xWeCDrbQzvQqC-OhtP9i-DawfwLkB9KQ6l7BfyLxpnYYon0lBe-tL9eSOilykH6xX73bcyHdcVt9dBlQKIZLshst0MX1ERhLDTS1FB43hnWzMJHuQs~e5RsJDxwi-q-uKu6DhQheNDAjAfeNXjcbp5dNMiVVBV~vWg3wMyP6pvfFqS5sHX7Ibtg2X36DHzZ8if7U-PoEjil3Ro6hZF9XBBvycCqCh7Plv5Gcliqr7T8LznbA1hy4ylckw2G6Sq8cdgEiUVcp9EGuOw__",
    prices: [
      { size: "Fotokopi B&W (per lembar)", price: "Rp 500" },
      { size: "Fotokopi Warna (per lembar)", price: "Rp 1.500" },
      { size: "Scan ke PDF (per halaman)", price: "Rp 1.000" },
    ]
  },
  {
    id: 7,
    name: "Jasa Ketik",
    description: "Layanan mengetik dokumen dengan akurat dan cepat",
    icon: Type,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/qZ8eGHtjt6iTPVbXmwflw3/sandbox/1HZnmWh1qJ5Somsi3xWhrR-img-2_1771547358000_na1fn_c2VydmljZS1kb2N1bWVudC1wcmludA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcVo4ZUdIdGp0NmlUUFZiWG13Zmx3My9zYW5kYm94LzFIWm5tV2gxcUo1U29tc2kzeFdoclItaW1nLTJfMTc3MTU0NzM1ODAwMF9uYTFmbl9jMlZ5ZG1salpTMWtiMk4xYldWdWRDMXdjbWx1ZEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qjC4AU1OlCpfq23Stm-a5nciMdZvR3OHDXgtknwzHZCH6-V8i9Zi~p0Eqe9t594HvhU8quN7xWeCDrbQzvQqC-OhtP9i-DawfwLkB9KQ6l7BfyLxpnYYon0lBe-tL9eSOilykH6xX73bcyHdcVt9dBlQKIZLshst0MX1ERhLDTS1FB43hnWzMJHuQs~e5RsJDxwi-q-uKu6DhQheNDAjAfeNXjcbp5dNMiVVBV~vWg3wMyP6pvfFqS5sHX7Ibtg2X36DHzZ8if7U-PoEjil3Ro6hZF9XBBvycCqCh7Plv5Gcliqr7T8LznbA1hy4ylckw2G6Sq8cdgEiUVcp9EGuOw__",
    prices: [
      { size: "Ketik Standar (per halaman)", price: "Rp 15.000" },
      { size: "Ketik Skripsi (per halaman)", price: "Rp 25.000" },
      { size: "Ketik dengan Format (per halaman)", price: "Rp 30.000" },
    ]
  },
];

export default function Home() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Printer className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Time Line Print</h1>
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Layanan</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Kontak</a>
            <Button className="bg-secondary hover:bg-orange-600 text-white">Hubungi Kami</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Percetakan Berkualitas Tinggi
              </h1>
              <p className="text-lg text-muted-foreground">
                Time Line Print menyediakan layanan percetakan profesional dengan teknologi terkini dan harga terjangkau. Dari cetak dokumen hingga amplop custom, kami siap memenuhi kebutuhan bisnis Anda.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-blue-700 text-white">
                  Lihat Harga
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Hubungi Kami
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/qZ8eGHtjt6iTPVbXmwflw3/sandbox/1HZnmWh1qJ5Somsi3xWhrR-img-1_1771547368000_na1fn_aGVyby1wcmludC1zaG9w.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcVo4ZUdIdGp0NmlUUFZiWG13Zmx3My9zYW5kYm94LzFIWm5tV2gxcUo1U29tc2kzeFdoclItaW1nLTFfMTc3MTU0NzM2ODAwMF9uYTFmbl9hR1Z5Ynkxd2NtbHVkQzF6YUc5dy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BSvh42QU0UV1nhiwvr4bJ5TP4JxXEKZ2eLGmK6sFV~4YFhedPgaFoutj-cgrZxXCan3~98ZtWZF1AWh-eYZqTzeD9Xuh7JdL7lLce5sHs3p6IbAszXMZceLeall6sVXovx4IlvUfe~Lx1tNozC1d04JLbIqhgiULH2qN58oXJCxSigcHkybkWB-0RmhsH0-ebiIhsax4nGZQeA7FuOaZso~YdSBZugIappB4igI~f-cb25jr7T6WhuPMCav7j0nWvQQf4UKMkJfuEBsgfjig3f5EV5U9vC-iHRtzuqxHfi8J8A5omEpeQn7mWSg4BIh737IIIMzC3n4SmtMABdrPdg__"
                alt="Time Line Print Services"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Layanan Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan percetakan profesional untuk memenuhi semua kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              const isExpanded = expandedService === service.id;

              return (
                <Card
                  key={service.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-border"
                  onClick={() => setExpandedService(isExpanded ? null : service.id)}
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground flex items-center gap-2">
                          <Icon className="w-5 h-5 text-secondary" />
                          {service.name}
                        </CardTitle>
                        <CardDescription className="text-sm mt-2">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  {isExpanded && (
                    <CardContent className="space-y-4 border-t border-border pt-4">
                      <div className="space-y-3">
                        {service.prices.map((price, idx) => (
                          <div key={idx} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                            <span className="text-sm text-foreground">{price.size}</span>
                            <span className="font-semibold text-secondary">{price.price}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full bg-primary hover:bg-blue-700 text-white mt-4">
                        Pesan Sekarang
                      </Button>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Mengapa Memilih Kami?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Kualitas Terjamin",
                description: "Menggunakan mesin cetak modern dengan hasil yang presisi dan warna akurat"
              },
              {
                title: "Harga Kompetitif",
                description: "Harga terjangkau tanpa mengorbankan kualitas hasil percetakan"
              },
              {
                title: "Layanan Cepat",
                description: "Proses cetak yang efisien dengan waktu pengerjaan yang singkat"
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-border bg-white">
                <CardHeader>
                  <CardTitle className="text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Hubungi Kami</h2>
            <p className="text-lg text-muted-foreground">Siap membantu kebutuhan percetakan Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Phone,
                title: "Telepon",
                info: "+62 812-3456-7890"
              },
              {
                icon: Mail,
                title: "Email",
                info: "info@timelineprint.com"
              },
              {
                icon: MapPin,
                title: "Alamat",
                info: "Jl. Merdeka No. 123, Jakarta"
              }
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <Card key={idx} className="border-border text-center">
                  <CardHeader>
                    <Icon className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <CardTitle className="text-foreground">{contact.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{contact.info}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Siap Melayani Anda</h3>
            <p className="mb-6 text-blue-100">
              Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan konsultasi gratis
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Hubungi Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2026 Time Line Print. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
