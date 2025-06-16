
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, User, LogIn, Menu, X } from "lucide-react";

interface HeaderProps {
  cartItems: number;
}

const Header = ({ cartItems }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">StyleCo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900 transition-colors">
              Shop
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900 transition-colors">
              Men
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900 transition-colors">
              Women
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900 transition-colors">
              Accessories
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                <User className="h-4 w-4 mr-2" />
                Sign Up
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="relative text-gray-600 hover:text-gray-900">
              <ShoppingBag className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors py-2">
                Home
              </Link>
              <Link to="/products" className="text-gray-600 hover:text-gray-900 transition-colors py-2">
                Shop
              </Link>
              <Link to="/products" className="text-gray-600 hover:text-gray-900 transition-colors py-2">
                Men
              </Link>
              <Link to="/products" className="text-gray-600 hover:text-gray-900 transition-colors py-2">
                Women
              </Link>
              <Link to="/products" className="text-gray-600 hover:text-gray-900 transition-colors py-2">
                Accessories
              </Link>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    <User className="h-4 w-4 mr-2" />
                    Sign Up
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" className="relative text-gray-600">
                  <ShoppingBag className="h-5 w-5" />
                  {cartItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
