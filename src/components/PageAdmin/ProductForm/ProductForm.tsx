"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
type ProductFormValues = {
  name: string;
  slug: string;
  category: string;
  price: number;
  recentPrice: number;
  oldPrice: number;
  offerPrice: number;
  currency: string;
  images: any[];
  description: string;
  benefits: any[];
  ingredients: any[];
  stock: number;
  isFeatured: boolean;
  ratings: { average: number; count: number };
  faq: { question: string; answer: string }[];
  seo: { metaTitle: string; metaDescription: string; metaKeywords: any[] };
};

const ProductForm = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProductFormValues>({
    defaultValues: {
      name: "",
      slug: "",
      price: 0,
      recentPrice: 0,
      oldPrice: 0,
      offerPrice: 0,
      stock: 0,
      images: [""],
      benefits: [""],
      ingredients: [""],
      faq: [{ question: "", answer: "" }],
      seo: { metaTitle: "", metaDescription: "", metaKeywords: [""] },
    },
    mode: "onSubmit",
  });

  const [products, setProducts] = useState<ProductFormValues[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Field arrays
  const { fields: imageFields, append: appendImage, remove: removeImage } = useFieldArray({ control, name: "images" });
  const { fields: benefitFields, append: appendBenefit, remove: removeBenefit } = useFieldArray({ control, name: "benefits" });
  const { fields: ingredientFields, append: appendIngredient, remove: removeIngredient } = useFieldArray({ control, name: "ingredients" });
  const { fields: faqFields, append: appendFaq, remove: removeFaq } = useFieldArray({ control, name: "faq" });
  const { fields: seoKeywordsFields, append: appendSeoKeyword, remove: removeSeoKeyword } = useFieldArray({ control, name: "seo.metaKeywords" });

  const watchName = watch("name");
  const watchImages = watch("images");

  // Auto-generate slug
  useEffect(() => {
    const slug = watchName
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    setValue("slug", slug);
  }, [watchName, setValue]);

  // Register custom validation for images
  useEffect(() => {
    register("images", { validate: (value) => value.some((img: any) => img) || "At least one image is required" });
  }, [register]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setValue(`images.${index}`, reader.result as string, { shouldValidate: true });
    reader.readAsDataURL(file);
  };

  const onSubmit = async (data: ProductFormValues) => {
    setIsSubmitting(true);
    try {
      if (editIndex !== null) {
        const updatedProducts = [...products];
        updatedProducts[editIndex] = data;
        setProducts(updatedProducts);
        setEditIndex(null);
      } else {
        const res = await axios.post("/pages/api/products", data)
        if (res?.data?.success) {
          alert("Producted added")
          setProducts([...products, data]);
        }

      }
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (index: number) => {
    reset(products[index]);
    setEditIndex(index);
  };

  const handleDelete = (index: number) => {
    setProducts(products.filter((_, i) => i !== index));
    if (editIndex === index) reset();
    setEditIndex(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-6">{editIndex !== null ? "Edit Product" : "Add New Product"}</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Basic Info */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Basic Info</h2>
          <input {...register("name", { required: "Product name is required" })} placeholder="Product Name" className="w-full border p-2 rounded mb-1" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          <input {...register("slug")} placeholder="Slug" className="w-full border p-2 rounded mb-2 bg-gray-100" readOnly />
          <input {...register("category", { required: "Category is required" })} placeholder="Category" className="w-full border p-2 rounded mb-1" />
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}

          <div className="flex gap-2 flex-wrap">
            <input type="number" {...register("price", { required: true, valueAsNumber: true })} placeholder="Price" className="w-1/4 border p-2 rounded mb-1" />
            <input type="number" {...register("recentPrice", { valueAsNumber: true })} placeholder="Recent Price" className="w-1/4 border p-2 rounded mb-1" />
            <input type="number" {...register("oldPrice", { valueAsNumber: true })} placeholder="Old Price" className="w-1/4 border p-2 rounded mb-1" />
            <input type="number" {...register("offerPrice", { valueAsNumber: true })} placeholder="Offer Price" className="w-1/4 border p-2 rounded mb-1" />
            <input type="number" {...register("stock", { valueAsNumber: true, min: 0 })} placeholder="Quantity" className="w-1/4 border p-2 rounded mb-1" />
          </div>

          <input {...register("currency", { required: true })} placeholder="Currency (e.g., BDT)" className="w-full border p-2 rounded mb-1" />
          {errors.currency && <p className="text-red-500 text-sm">{errors.currency.message}</p>}

          <textarea {...register("description", { required: true })} placeholder="Description" className="w-full border p-2 rounded mb-1" />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </section>

        {/* Images */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Images</h2>
          {imageFields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2 mb-2">
              <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, index)} className="border p-2 rounded" />
              {watchImages[index] && <div className="relative w-20 h-20"><Image src={watchImages[index]} alt={`preview-${index}`} fill className="object-cover rounded" /></div>}
              <button type="button" onClick={() => removeImage(index)} className="text-red-600">Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => appendImage("")} className="text-blue-600">+ Add Image</button>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Benefits</h2>
          {benefitFields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <input {...register(`benefits.${index}` as const)} placeholder={`Benefit ${index + 1}`} className="w-full border p-2 rounded" />
              <button type="button" onClick={() => removeBenefit(index)} className="text-red-600">Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => appendBenefit("")} className="text-blue-600">+ Add Benefit</button>
        </section>

        {/* Ingredients */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          {ingredientFields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <input {...register(`ingredients.${index}` as const)} placeholder={`Ingredient ${index + 1}`} className="w-full border p-2 rounded" />
              <button type="button" onClick={() => removeIngredient(index)} className="text-red-600">Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => appendIngredient("")} className="text-blue-600">+ Add Ingredient</button>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-semibold mb-2">FAQ</h2>
          {faqFields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <input {...register(`faq.${index}.question` as const)} placeholder="Question" className="w-1/2 border p-2 rounded" />
              <input {...register(`faq.${index}.answer` as const)} placeholder="Answer" className="w-1/2 border p-2 rounded" />
              <button type="button" onClick={() => removeFaq(index)} className="text-red-600">Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => appendFaq({ question: "", answer: "" })} className="text-blue-600">+ Add FAQ</button>
        </section>

        {/* SEO */}
        <section>
          <h2 className="text-xl font-semibold mb-2">SEO</h2>
          <input {...register("seo.metaTitle")} placeholder="Meta Title" className="w-full border p-2 rounded mb-1" />
          <textarea {...register("seo.metaDescription")} placeholder="Meta Description" className="w-full border p-2 rounded mb-1" />
          <h3 className="font-semibold">Meta Keywords</h3>
          {seoKeywordsFields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <input {...register(`seo.metaKeywords.${index}` as const)} placeholder={`Keyword ${index + 1}`} className="w-full border p-2 rounded" />
              <button type="button" onClick={() => removeSeoKeyword(index)} className="text-red-600">Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => appendSeoKeyword("")} className="text-blue-600">+ Add Keyword</button>
        </section>

        {/* Submit */}
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded disabled:opacity-70">
          {isSubmitting ? "Saving..." : editIndex !== null ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* Product List */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Product List</h2>
        {products.length === 0 && <p>No products added yet.</p>}
        <ul className="space-y-4">
          {products.map((product, index) => (
            <li key={index} className="border p-4 rounded flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex gap-4 items-center">
                {product.images[0] && (
                  <div className="relative w-16 h-16">
                    <Image src={product.images[0]} alt={product.name} fill className="object-cover rounded" />
                  </div>
                )}
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-gray-600">
                    {product.category} — {product.price} {product.currency} | Offer: {product.offerPrice} | Old: {product.oldPrice} | Recent: {product.recentPrice} | Qty: {product.stock}
                  </p>
                  <p className="text-sm text-gray-400">{product.slug}</p>
                  <p className="text-sm"><strong>Benefits:</strong> {product.benefits.join(", ")}</p>
                  <p className="text-sm"><strong>Ingredients:</strong> {product.ingredients.join(", ")}</p>
                  <p className="text-sm"><strong>FAQ:</strong> {product.faq.map(f => `${f.question}: ${f.answer}`).join(" | ")}</p>
                  <p className="text-sm"><strong>SEO:</strong> {product.seo.metaTitle} | {product.seo.metaDescription} | {product.seo.metaKeywords.join(", ")}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => handleEdit(index)} className="text-blue-600">Edit</button>
                <button onClick={() => handleDelete(index)} className="text-red-600">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductForm;
