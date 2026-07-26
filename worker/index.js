const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: { Allow: "GET, HEAD" },
      });
    }

    if (url.pathname === "/" || url.pathname.endsWith("/")) {
      url.pathname = `${url.pathname}index.html`.replace("//", "/");
      return env.ASSETS.fetch(new Request(url, request));
    }

    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404 || /\.[a-z0-9]+$/i.test(url.pathname)) {
      return response;
    }

    return env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
  },
};

export default worker;
