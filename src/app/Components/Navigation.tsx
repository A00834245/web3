import Link from "next/link";

export default function Navigation() {
    return (
      <div>
        <header className="p-4">
      <nav>
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl bg-blue-300">
              <div className="flex items-center lg:order-2">
              <Link href="/">
                  <span className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                    Home
                  </span>
                </Link>
                <Link href="/rectangulo">
                  <span className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                    Rectangulo
                  </span>
                </Link>
                <Link href="/numero">
                  <span className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                    Numero
                  </span>
                </Link>
              </div>
          </div>
      </nav>
  </header>
  
      </div>
    );
  }