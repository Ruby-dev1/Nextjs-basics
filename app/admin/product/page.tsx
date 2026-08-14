import Link from "next/link";
import ProductList from "@/components/admin/list/product.list";
import { getAllProducts } from "@/api/product.api";

const ProductPage = async () => {
  const response = await getAllProducts();

  const products = response?.data?.products || [];

  return (
    <main>
      {/* Header */}
      <div className="mb-6 mt-18 m-10 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-text-primary">
            Products
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your skincare products.
          </p>
        </div>

        <Link
          href="/admin/product/new"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          + Add New Product
        </Link>
      </div>

      {/* Product Table */}
      <ProductList products={products} />
    </main>
  );
};

export default ProductPage;