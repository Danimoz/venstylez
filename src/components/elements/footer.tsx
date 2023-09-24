import Link from "next/link";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="p-6 bg-orange-500 bg-opacity-20">
      <p className="text-center text-lg leading-7">© Copyright {currentYear}. All Rights Reserved by Venstylez</p>
      <p className="text-center text-lg">Designed by <Link target='_blank' className='font-semibold' href='mailto:azubuinedaniel05@gmail.com'>DFlat</Link></p>
    </footer>
  )
}