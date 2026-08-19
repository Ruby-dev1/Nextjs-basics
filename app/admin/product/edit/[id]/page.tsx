import ProductForm from "@/components/admin/form/product.form";

interface EditProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

const EditProductPage = async ({
  params,
}: EditProductPageProps) => {
  const { id } = await params;

  return (
    <main>
      <ProductForm productId={id} />
    </main>
  );
};

export default EditProductPage;