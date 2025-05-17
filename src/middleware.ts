import { defineMiddleware } from "astro:middleware";
import { redirectToDefaultLocale } from "astro:i18n"; // function available with `manual` routing

export const onRequest = defineMiddleware(async (ctx, next) => {
  if (ctx.url.pathname !== "/") {
    const redirectResponse = redirectToDefaultLocale(ctx, 302);
    if (!redirectResponse) {
      return new Response("Redirect failed", { status: 500 });
    }
    return redirectResponse;
  }
  return next();
});
