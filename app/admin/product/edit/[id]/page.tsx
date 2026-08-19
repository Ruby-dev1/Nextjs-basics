import ProductForm from "@/components/admin/form/product.form";

interface EditProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

const EditProductPage = async ({ params }: EditProductPageProps) => {
  const { id } = await params;
  console.log(id);
  return (
    <main>
      <ProductForm productId={id} />
    </main>
  );
};

export default EditProductPage;
