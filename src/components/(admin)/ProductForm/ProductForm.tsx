"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";

type ProductFormValues = {
  name: string;
  slug: string;
  category: string;
  price: number;
  currency: string;
  images: any;
  description: string;
  benefits: string[];
  ingredients: string[];
  stock: number;
  isFeatured: boolean;
  ratings: {
    average: number;
    count: number;
  };
  faq: { question: string; answer: string }[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string[];
  };
};

const ProductForm = () => {
  const { register, control, handleSubmit } = useForm<ProductFormValues>({
    defaultValues: {
      images: [""],
      benefits: [""],
      ingredients: [""],
      faq: [{ question: "", answer: "" }],
      seo: {
        metaTitle: "",
        metaDescription: "",
        metaKeywords: [""],
      },
    },
  });

  // Dynamic fields
  const { fields: imageFields, append: appendImage } = useFieldArray({
    control,
    name: "images",
  });
  const { fields: benefitFields, append: appendBenefit } = useFieldArray({
    control,
    name: "benefits",
  });
  const { fields: ingredientFields, append: appendIngredient } = useFieldArray({
    control,
    name: "ingredients",
  });
  const { fields: faqFields, append: appendFaq } = useFieldArray({
    control,
    name: "faq",
  });
  const { fields: keywordFields, append: appendKeyword } = useFieldArray({
    control,
    name: "seo.metaKeywords",
  });

  const [submittedData, setSubmittedData] = useState<ProductFormValues | null>(
    null
  );

  const onSubmit = (data: ProductFormValues) => {
    setSubmittedData(data);
    console.log("✅ Submitted Data:", data);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-6">Upload New Product</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Basic Info */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Basic Info</h2>
          <input
            {...register("name")}
            placeholder="Product Name"
            className="w-full border p-2 rounded mb-2"
          />
          <input
            {...register("slug")}
            placeholder="Slug"
            className="w-full border p-2 rounded mb-2"
          />
          <input
            {...register("category")}
            placeholder="Category"
            className="w-full border p-2 rounded mb-2"
          />
          <input
            type="number"
            {...register("price")}
            placeholder="Price"
            className="w-full border p-2 rounded mb-2"
          />
          <input
            {...register("currency")}
            placeholder="Currency (e.g., BDT)"
            className="w-full border p-2 rounded mb-2"
          />
          <textarea
            {...register("description")}
            placeholder="Description"
            className="w-full border p-2 rounded"
          />
        </section>

        {/* Images */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Images</h2>
          {imageFields.map((field, index) => (
            <input
              key={field.id}
              {...register(`images.${index}` as const)}
              placeholder="Image URL"
              className="w-full border p-2 rounded mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() => appendImage("")}
            className="text-blue-600"
          >
            + Add Image
          </button>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Benefits</h2>
          {benefitFields.map((field, index) => (
            <input
              key={field.id}
              {...register(`benefits.${index}` as const)}
              placeholder="Benefit"
              className="w-full border p-2 rounded mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() => appendBenefit("")}
            className="text-blue-600"
          >
            + Add Benefit
          </button>
        </section>

        {/* Ingredients */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          {ingredientFields.map((field, index) => (
            <input
              key={field.id}
              {...register(`ingredients.${index}` as const)}
              placeholder="Ingredient"
              className="w-full border p-2 rounded mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() => appendIngredient("")}
            className="text-blue-600"
          >
            + Add Ingredient
          </button>
        </section>

        {/* Stock & Featured */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Inventory</h2>
          <input
            type="number"
            {...register("stock")}
            placeholder="Stock"
            className="w-full border p-2 rounded mb-2"
          />
          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("isFeatured")} />
            Featured Product?
          </label>
        </section>

        {/* Ratings */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Ratings</h2>
          <input
            type="number"
            step="0.1"
            {...register("ratings.average")}
            placeholder="Average Rating"
            className="w-full border p-2 rounded mb-2"
          />
          <input
            type="number"
            {...register("ratings.count")}
            placeholder="Ratings Count"
            className="w-full border p-2 rounded"
          />
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-semibold mb-2">FAQ</h2>
          {faqFields.map((field, index) => (
            <div key={field.id} className="space-y-2 mb-3">
              <input
                {...register(`faq.${index}.question` as const)}
                placeholder="Question"
                className="w-full border p-2 rounded"
              />
              <textarea
                {...register(`faq.${index}.answer` as const)}
                placeholder="Answer"
                className="w-full border p-2 rounded"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendFaq({ question: "", answer: "" })}
            className="text-blue-600"
          >
            + Add FAQ
          </button>
        </section>

        {/* SEO */}
        <section>
          <h2 className="text-xl font-semibold mb-2">SEO Settings</h2>
          <input
            {...register("seo.metaTitle")}
            placeholder="Meta Title"
            className="w-full border p-2 rounded mb-2"
          />
          <textarea
            {...register("seo.metaDescription")}
            placeholder="Meta Description"
            className="w-full border p-2 rounded mb-2"
          />
          {keywordFields.map((field, index) => (
            <input
              key={field.id}
              {...register(`seo.metaKeywords.${index}` as const)}
              placeholder="Meta Keyword"
              className="w-full border p-2 rounded mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() => appendKeyword("")}
            className="text-blue-600"
          >
            + Add Keyword
          </button>
        </section>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Submit
        </button>
      </form>

      {/* Preview Submitted Data */}
      {submittedData && (
        <pre className="bg-gray-100 mt-6 p-4 rounded text-sm overflow-x-auto">
          {JSON.stringify(submittedData, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default ProductForm;
