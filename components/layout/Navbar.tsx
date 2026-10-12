'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Cpu,
  TrendingUp,
  Palette,
  Building2,
  Users,
  Receipt,
  ShoppingBag,
  GraduationCap,
  Network,
  FileCheck,
  Activity,
  Shirt,
  Code2,
  Zap,
} from 'lucide-react'
import { servicesData, servicePillars } from '@/lib/data/services'
import { productsData } from '@/lib/data/products'
import { Button } from '@/components/ui/Button'

// Icon mapping helper
const pillarIcons: Record<string, React.ReactNode> = {
  DEVELOPMENT: <Code2 className="w-4 h-4 text-blue-500" />,
  INTELLIGENCE: <Cpu className="w-4 h-4 text-indigo-500" />,
  MARKETING: <TrendingUp className="w-4 h-4 text-emerald-500" />,
  DESIGN: <Palette className="w-4 h-4 text-violet-500" />,
}

const productIcons: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-4 h-4 text-blue-400" />,
  Users: <Users className="w-4 h-4 text-indigo-400" />,
  Receipt: <Receipt className="w-4 h-4 text-emerald-400" />,
  ShoppingBag: <ShoppingBag className="w-4 h-4 text-amber-400" />,
  GraduationCap: <GraduationCap className="w-4 h-4 text-cyan-400" />,
  Network: <Network className="w-4 h-4 text-purple-400" />,
  FileCheck: <FileCheck className="w-4 h-4 text-teal-400" />,
  Activity: <Activity className="w-4 h-4 text-rose-400" />,
  Shirt: <Shirt className="w-4 h-4 text-pink-400" />,
}

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'products' | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm shadow-slate-200/50 py-3.5'
          : 'bg-white/60 backdrop-blur-md border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all">
              <span className="text-lg tracking-wider">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                SUSHIV
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-500 -mt-1 font-semibold">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
            {/* Services Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
                <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname.startsWith('/services') || activeDropdown === 'services'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                aria-expanded={activeDropdown === 'services'}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180 text-blue-600' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Mega Menu Dropdown Panel */}
              {activeDropdown === 'services' && (
                <div className="absolute top-full -left-20 w-[720px] pt-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
                    <div className="grid grid-cols-2 gap-5">
                      {servicePillars.map((pillar) => {
                        const pillarServices = servicesData.filter((s) => s.pillar === pillar.id)
                        return (
                          <div key={pillar.id} className="space-y-2.5">
                            <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100">
                              {pillarIcons[pillar.id]}
                              <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">
                                {pillar.name}
                              </span>
                            </div>
                            <div className="space-y-1">
                              {pillarServices.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="group/item flex items-start p-2 rounded-lg hover:bg-slate-50 transition-colors"
                                >
                                  <div>
                                    <div className="text-xs font-medium text-slate-700 group-hover/item:text-blue-600 transition-colors">
                                      {service.title}
                                    </div>
                                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                      {service.tagline}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500">Looking for end-to-end digital engineering?</span>
                      <Link
                        href="/services"
                        className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1 group"
                      >
                        Explore all 10 services
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Products Glassmorphic Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
                <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeDropdown === 'products'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                aria-expanded={activeDropdown === 'products'}
              >
                <span>Products</span>
                <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-600 border border-blue-200">
                  Solutions
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'products' ? 'rotate-180 text-blue-600' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Glassmorphic Products Dropdown Panel */}
              {activeDropdown === 'products' && (
                <div className="absolute top-full -left-28 w-[780px] pt-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                      <div>
                        <h4 className="text-xs font-bold tracking-wider uppercase text-blue-600">
                          Pre-built Enterprise Software & Portals
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Production-tested software foundations ready to customize and deploy for your business.
                        </p>
                      </div>
                      <span className="text-[10px] bg-slate-50 px-2.5 py-1 rounded-md text-slate-500 border border-slate-200 font-mono">
                        9 Ready Systems
                      </span>
                    </div>

                    {/* 3-Column Grid of 9 Products */}
                    <div className="grid grid-cols-3 gap-2.5">
                      {productsData.map((product) => (
                        <Link
                          key={product.id}
                          href={product.targetServiceUrl}
                          className="group/prod p-3 rounded-xl bg-slate-50/50 hover:bg-slate-50 border border-slate-100 hover:border-blue-300 transition-all"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="p-1.5 rounded-lg bg-blue-100 group-hover/prod:bg-blue-200 transition-colors">
                              {productIcons[product.iconName] || <Zap className="w-4 h-4 text-blue-600" />}
                            </div>
                            <span className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-white text-slate-500 shadow-sm border border-slate-200">
                              {product.category}
                            </span>
                          </div>
                          <div className="text-xs font-semibold text-slate-800 group-hover/prod:text-blue-600 transition-colors">
                            {product.title}
                          </div>
                          <p className="text-[10px] text-slate-500 line-clamp-2 mt-1 leading-snug">
                            {product.description}
                          </p>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom CTA bar */}
                    <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs bg-slate-50 -mx-5 -mb-5 p-3.5 px-5 rounded-b-2xl">
                      <span className="text-slate-600 text-xs">
                        Need custom workflow integration or white-labeled deployment?
                      </span>
                      <Link
                        href="/contact?service=Custom+Software+Development"
                        className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1 group"
                      >
                        Request Product Demo & Scope
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Standard Nav Links */}
            <Link
              href="/industries"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/industries'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Industries
            </Link>

            <Link
              href="/how-we-work"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/how-we-work'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              How We Work
            </Link>

            <Link
              href="/case-studies"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/case-studies'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Case Studies
            </Link>

            <Link
              href="/about-us"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/about-us'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              About Us
            </Link>

            <Link
              href="/careers"
              className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/careers'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Careers
              <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-semibold uppercase rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse" />
                Hiring
              </span>
            </Link>
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex shadow-blue-500/20"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-4 py-6 overflow-y-auto shadow-xl">
          <div className="space-y-4">
            <div className="space-y-1">
              <Link
                href="/services"
                className="block px-3 py-2 text-base font-bold text-slate-900 rounded-lg hover:bg-slate-50"
              >
                Services (All 10)
              </Link>
              <div className="grid grid-cols-2 gap-1.5 pl-3 pt-1">
                {servicesData.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="text-xs font-medium text-slate-600 hover:text-blue-600 py-1"
                  >
                    • {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-1 pt-2 border-t border-slate-100">
              <div className="px-3 text-xs font-bold uppercase text-blue-600 tracking-wider">
                Products & Systems
              </div>
              <div className="grid grid-cols-2 gap-1.5 pl-3 pt-2">
                {productsData.map((prod) => (
                  <Link
                    key={prod.id}
                    href={prod.targetServiceUrl}
                    className="text-xs font-medium text-slate-500 hover:text-blue-600 py-1"
                  >
                    • {prod.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-1 pt-2 border-t border-slate-100">
              <Link
                href="/industries"
                className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                Industries We Serve
              </Link>
              <Link
                href="/how-we-work"
                className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                How We Work
              </Link>
              <Link
                href="/case-studies"
                className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                Case Studies
              </Link>
              <Link
                href="/about-us"
                className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                About Us
              </Link>
              <Link
                href="/careers"
                className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                <span>Careers</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200">
                  Hiring
                </span>
              </Link>
              <Link
                href="/faq"
                className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                FAQ
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Button href="/contact" variant="primary" size="md" className="w-full">
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
