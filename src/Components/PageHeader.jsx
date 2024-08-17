import { Link, useLocation } from "react-router-dom";

function PageHeader({ heading, className }) {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <header className={`py-10 !bg-gray-100 max-sm:px-5 ${className}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h3 className="text-lg font-semibold opacity-70 text-gray-600 tracking-wider">
          {heading.toUpperCase()}
        </h3>

        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse ">
            <li className="inline-flex items-center">
              <h3 className="text-gray-600">
                <Link to="/" className="inline-flex items-center text-sm font-medium hover:text-blue-600">
                  <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home

                </Link>
              </h3>
            </li>
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;

              return isLast ? (
                <li key={name} aria-current="page">
                  <div className="flex items-center">
                    {/* > */}
                    <svg className="rtl:rotate-180 w-3 h-3 mx-1 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 9 4-4-4-4" />
                    </svg>
                    <h3 className="ms-1 text-sm font-bold md:ms-2 text-gray-600">
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </h3>
                  </div>
                </li>
              ) : (
                <li key={name}>
                  <div className="flex items-center">
                    <h3 className="text-gray-600">
                      <Link to={routeTo} className="ms-1 text-sm font-medium hover:text-blue-600 md:ms-2">
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                      </Link>
                    </h3>
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>

      </div>
    </header>

  );
}

export default PageHeader;
