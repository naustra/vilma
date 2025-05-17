import { redirectToDefaultLocale, pathHasLocale } from "astro:i18n";

// function available with `manual` routing
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (ctx, next) => {
  console.log("🚀 ~ onRequest ~ ctx:", ctx);
  console.log("🚀 ~ onRequest ~ ctx:", ctx.url);
  if (ctx.url.pathname !== "/") {
    if (!pathHasLocale(ctx.url.pathname)) {
      const redirectResponse = redirectToDefaultLocale(ctx, 302);
      if (!redirectResponse) {
        return new Response("Redirect failed", { status: 500 });
      }
      return redirectResponse;
    }
  }
  return next();
});
