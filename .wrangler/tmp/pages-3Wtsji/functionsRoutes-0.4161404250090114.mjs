import { onRequestPost as __api_book_js_onRequestPost } from "C:\\Users\\Elie\\Downloads\\Github Repos\\Colinas Del sol\\functions\\api\\book.js"

export const routes = [
    {
      routePath: "/api/book",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_book_js_onRequestPost],
    },
  ]