export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="font-serif text-lg font-bold text-white">Goodwood Auto Care</span>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Your trusted local mechanics in Goodwood, Cape Town. Quality service with honest pricing since 2009.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>123 Main Road, Goodwood</li>
              <li>Cape Town, 7460</li>
              <li>+27 21 555 0123</li>
              <li>info@goodwoodautocare.co.za</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Hours</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>Mon - Fri: 7:30 AM - 5:30 PM</li>
              <li>Saturday: 8:00 AM - 1:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Goodwood Auto Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}