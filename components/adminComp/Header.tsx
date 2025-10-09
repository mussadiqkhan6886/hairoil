import Link from 'next/link'
import { FiHome, FiMessageSquare, FiPackage, FiPlusCircle, FiShoppingBag } from 'react-icons/fi'

const Header = () => {

     const menuItems = [
    { name: 'Testimonials', href: '/admin/testimonials', icon: <FiMessageSquare className="w-4 h-4" /> },
    { name: 'Products', href: '/admin/products-list', icon: <FiPackage className="w-4 h-4" /> },
    { name: 'Add Product', href: '/admin/add-product', icon: <FiPlusCircle className="w-4 h-4" /> },
    { name: 'Orders', href: '/admin/orders-list', icon: <FiShoppingBag className="w-4 h-4" /> },
  ]

  return (
    <>
        <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm border-b">
        <h1 className="text-2xl font-semibold text-gray-800">Admin Panel</h1>
        <Link
          href="/"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          <FiHome className="w-4 h-4" />
          Go Home
        </Link>
      </header>

      {/* Navigation Menu */}
      <nav className="bg-white border-b shadow-sm">
        <ul className="flex flex-wrap items-center gap-6 px-6 py-3 text-gray-600">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 px-2 py-1 transition `}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Header
