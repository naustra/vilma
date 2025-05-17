// import { redirectToDefaultLocale, getLocaleByPath } from "astro:i18n";

// // function available with `manual` routing
// import { defineMiddleware } from "astro:middleware";

// export const onRequest = defineMiddleware(async (ctx, next) => {
//   if (ctx.url.pathname !== "/") {
//     // if does not start with /langs, redirect to default locale
//     if (!ctx.url.pathname.startsWith("/en/")) {
//       const redirectResponse = redirectToDefaultLocale(ctx, 302);
//       if (!redirectResponse) {
//         return new Response("Redirect failed", { status: 500 });
//       }
//       return redirectResponse;
//     }
//   }
//   return next();
// });
