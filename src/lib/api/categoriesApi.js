import { api } from "./index";

export const categoriesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: (params) => ({
        url: "/categories",
        params,
      }),
      providesTags: ["categories"],
    }),
    getCategoriesById: build.query({
      query: (id) => ({
        url: `/categories/${id}`,
      }),
      providesTags: ["categories"],
    }),
    createCategories: build.mutation({
      query: (body) => ({
        url: "/categories",
        method: "POST",
        body,
      }),
      invalidatesTags: ["categories"],
    }),
    deleteCategories: build.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["categories"],
    }),
    updateCategories: build.mutation({
      query: ({ id, body }) => ({
        url: `/categories/${id}`,
        method: "PUT", // or "PATCH"
        body,
      }),
      invalidatesTags: ["categories"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoriesMutation,
  useDeleteCategoriesMutation,
  useUpdateCategoriesMutation,
} = categoriesApi;
