import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "@base/i18n-config";

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
    // The negotiator wait for a simple object, then we need transform headers
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
    //console.log("Negotiator", negotiatorHeaders)
    //@ts-ignore locales is readonly
    const locales: string[] = i18n.locales
    console.log("Headers: ", negotiatorHeaders)
  
    // Use negotiator and intl-localematcher to get the best locale
    let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
      locales
    )
  
    const locale = matchLocale(languages, locales, i18n.defaultLocale)
  
    return locale
  }
  
  
export function middleware(request: NextRequest) {
    console.log("Mid working")
    const pathname = request.nextUrl.pathname

    // Verify if there is any locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
      )    

    // Redirect if there isn't locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)

        // Always add 'lang' to the request. For example, if the request is for '/', add '/pt'.
        return NextResponse.redirect(
            new URL(
              `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
              request.url
            )
          )
    }
}

export const config = {
    // Matcher ignorando `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  }